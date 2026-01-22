import fs from 'fs';
import { parse } from 'csv-parse';
import { prisma } from '../../lib/prisma';
import { IdentityService } from '../IdentityService';

export async function importAspireRewards(filePath: string) {
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

  for await (const row of parser) {
    // Support both column name formats
    const name = row['Name'] || row['Patient Name'];
    const email = row['Email Address'] || row['Patient Email'] || row['Email'];
    const phone = row['Phone Number'] || row['Patient Phone Number'] || row['Phone'];

    // Reward Data
    const rewardName = row['Certificate Short Description'];
    const amountStr = row['Certificate Amount'];
    const expStr = row['Certificate Expiration Date'];

    if (!name && !email && !phone) continue;

    try {
      // Step A: Find/Create Guest
      const guest = await IdentityService.findOrCreateGuest({
        name,
        email,
        phone,
        source: 'ASPIRE'
      });

      if (guest.createdAt > startTime) guestsCreated++;
      else guestsUpdated++;

      // Step B: Find/Create LoyaltyAccount
      let account = await prisma.loyaltyAccount.findFirst({
        where: { guestId: guest.id, programName: 'ASPIRE' }
      });

      if (!account) {
        account = await prisma.loyaltyAccount.create({
          data: {
            guestId: guest.id,
            programName: 'ASPIRE',
            totalBalance: 0
          }
        });
      }

      // Step C: Process Reward
      if (rewardName && amountStr) {
        const amount = parseFloat(amountStr.replace(/[^0-9.]/g, ''));
        const expirationDate = expStr ? new Date(expStr) : undefined;

        const rawId = `${guest.id}_ASPIRE_${amount}_${expirationDate ? expirationDate.toISOString() : 'NOEXP'}`;

        await prisma.loyaltyReward.upsert({
          where: { rawId },
          create: {
            loyaltyAccountId: account.id,
            name: rewardName,
            amount,
            expirationDate,
            rawId,
            status: 'ACTIVE'
          },
          update: {
            name: rewardName,
            amount,
            expirationDate
          }
        });
        rewardsCreated++;
      }

      // Step D: Update Total Balance
      const aggregations = await prisma.loyaltyReward.aggregate({
        where: { loyaltyAccountId: account.id, status: 'ACTIVE' },
        _sum: { amount: true }
      });

      await prisma.loyaltyAccount.update({
        where: { id: account.id },
        data: { totalBalance: aggregations._sum.amount || 0 }
      });

    } catch (err) {
      console.error(`Error processing Aspire row for ${name}:`, err);
    }
  }

  return { guestsCreated, guestsUpdated, rewardsCreated };
}
