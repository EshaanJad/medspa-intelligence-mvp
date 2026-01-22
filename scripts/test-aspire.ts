import fs from 'fs';
import { parse } from 'csv-parse';

async function test() {
    const fileContent = fs.readFileSync('VIO Export Sheets [MASKED] - ASPIRE.csv', { encoding: 'utf-8' });

    const parser = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    });

    let count = 0;
    for await (const row of parser) {
        count++;
        if (count <= 3) {
            console.log('Row', count, ':', JSON.stringify(row, null, 2));

            const name = row['Name'] || row['Patient Name'];
            const email = row['Email Address'] || row['Patient Email'] || row['Email'];
            const phone = row['Phone Number'] || row['Patient Phone Number'] || row['Phone'];
            const rewardName = row['Certificate Short Description'];
            const amountStr = row['Certificate Amount'];

            console.log('  -> Parsed: name=', name, ', email=', email, ', phone=', phone, ', rewardName=', rewardName, ', amount=', amountStr);
            console.log('  -> Skip?', (!name && !email && !phone));
        }
    }

    console.log('Total rows:', count);
}

test();
