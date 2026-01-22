import { prisma } from '../src/lib/prisma';

async function main() {
    const guestCount = await prisma.guest.count();
    const loyaltyCount = await prisma.loyaltyAccount.count();

    console.log('--- Database Verification ---');
    console.log(`Total Guests: ${guestCount}`);
    console.log(`Total Loyalty Accounts: ${loyaltyCount}`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
