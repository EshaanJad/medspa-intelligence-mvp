import 'dotenv/config';
import { importAspireRewards } from '../src/services/importers/importAspire';
import path from 'path';

async function main() {
    const aspireFile = 'VIO Export Sheets [MASKED] - ASPIRE.csv';
    const aspirePath = path.join(process.cwd(), aspireFile);
    console.log(`Starting Aspire import from: ${aspirePath}`);

    try {
        const resAspire = await importAspireRewards(aspirePath);
        console.log('Aspire Import Complete!');
        console.log(`Guests Created: ${resAspire.guestsCreated}, Updated: ${resAspire.guestsUpdated}, Rewards: ${resAspire.rewardsCreated}`);
    } catch (err) {
        console.error('Aspire Import Failed:', err);
    }
}

main();
