import 'dotenv/config';
import { importEvolusRewards } from '../src/services/importers/importEvolus';
import { importAspireRewards } from '../src/services/importers/importAspire';
import path from 'path';

async function main() {
    // Evolus
    const evolusFile = 'VIO Export Sheets [MASKED] - Evolus Rewards.csv';
    const evolusPath = path.join(process.cwd(), evolusFile);
    console.log(`Starting Evolus import from: ${evolusPath}`);

    try {
        const resEvolus = await importEvolusRewards(evolusPath);
        console.log('Evolus Import Complete!');
        console.log(`Guests Created: ${resEvolus.guestsCreated}, Updated: ${resEvolus.guestsUpdated}, Rewards: ${resEvolus.rewardsCreated}`);
    } catch (err) {
        console.error('Evolus Import Failed:', err);
    }

    // Aspire
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
