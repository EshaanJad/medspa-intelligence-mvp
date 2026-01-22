import 'dotenv/config';
import { importZenotiAppointments } from '../src/services/importers/importZenoti';
import path from 'path';

async function main() {
    const zenotiFile = 'VIO Export Sheets [MASKED] - Zenoti Appointments.csv';
    const zenotiPath = path.join(process.cwd(), zenotiFile);
    console.log(`Starting Zenoti import from: ${zenotiPath}`);

    try {
        const result = await importZenotiAppointments(zenotiPath);
        console.log('Zenoti Import Complete!');
        console.log(`Appointments Created: ${result.appointmentsCreated}, Updated: ${result.appointmentsUpdated}`);
    } catch (err) {
        console.error('Zenoti Import Failed:', err);
        process.exit(1);
    }
}

main();
