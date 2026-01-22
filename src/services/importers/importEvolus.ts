import fs from 'fs';
import { parse } from 'csv-parse';
import { prisma } from '../../lib/prisma';
import { IdentityService } from '../IdentityService';

export async function importEvolusRewards(filePath: string) {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    const parser = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    });

    const startTime = new Date();
    let guestsCreated = 0;
    let guestsUpdated = 0;
    let rewardsCreated = 0;

    let rowCount = 0;
    for await (const row of parser) {
        rowCount++;
        if (rowCount === 1 || rowCount % 10 === 0) console.log(`Processing row ${rowCount}...`);

        // Map columns
        const name = row['Patient Name'];
        const email = row['Patient Email'];
        const phone = row['Patient Phone Number'];
        const rewardAmountStr = row['Reward Amount'];
        const expStr = row['Reward Expiration Date'];

        if (!name && !email && !phone) continue;

        let rewardAmount = 0.0;
        if (rewardAmountStr) {
            rewardAmount = parseFloat(rewardAmountStr.replace(/[^0-9.]/g, ''));
        }

        const expirationDate = expStr ? new Date(expStr) : undefined;

        try {
            const guest = await IdentityService.findOrCreateGuest({
                name,
                email,
                phone,
                source: 'EVOLUS'
            });

            if (guest.createdAt > startTime) {
                guestsCreated++;
            } else {
                guestsUpdated++;
            }

            // Find/Create LoyaltyAccount
            let account = await prisma.loyaltyAccount.findFirst({
                where: {
                    guestId: guest.id,
                    programName: 'EVOLUS'
                }
            });

            if (!account) {
                account = await prisma.loyaltyAccount.create({
                    data: {
                        guestId: guest.id,
                        programName: 'EVOLUS',
                        totalBalance: 0
                    }
                });
            }

            // Upsert LoyaltyReward
            if (rewardAmount > 0) {
                const rawId = `${guest.id}_EVOLUS_${rewardAmount}_${expirationDate ? expirationDate.toISOString() : 'NOEXP'}`;

                await prisma.loyaltyReward.upsert({
                    where: { rawId },
                    create: {
                        loyaltyAccountId: account.id,
                        name: "Evolus Reward",
                        amount: rewardAmount,
                        expirationDate,
                        rawId,
                        status: 'ACTIVE'
                    },
                    update: {
                        amount: rewardAmount,
                        expirationDate
                    }
                });
                rewardsCreated++;
            }

            // Update Total Balance
            const aggregations = await prisma.loyaltyReward.aggregate({
                where: { loyaltyAccountId: account.id, status: 'ACTIVE' },
                _sum: { amount: true }
            });

            await prisma.loyaltyAccount.update({
                where: { id: account.id },
                data: { totalBalance: aggregations._sum.amount || 0 }
            });

        } catch (err) {
            console.error(`Error processing row for ${name}:`, err);
        }
    }

    return { guestsCreated, guestsUpdated, rewardsCreated };
}
