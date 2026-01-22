import fs from 'fs';
import { parse } from 'csv-parse';
import { prisma } from '../../lib/prisma';
import { IdentityService } from '../IdentityService';

export async function importZenotiAppointments(filePath: string) {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    const parser = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    });

    const startTime = new Date();
    let appointmentsCreated = 0;
    let appointmentsUpdated = 0;
    let rowCount = 0;

    for await (const row of parser) {
        rowCount++;
        if (rowCount === 1 || rowCount % 50 === 0) console.log(`Processing row ${rowCount}...`);

        // Map columns from CSV
        const guestName = row['Guest Name'];
        const email = row['Email'];
        const serviceName = row['Service Name'];
        const appointmentDateStr = row['Appointment Date'];
        const startTimeStr = row['Start Time'];

        if (!guestName || !serviceName) continue; // Skip rows without essential data

        try {
            // Step A: Find/Create Guest
            const guest = await IdentityService.findOrCreateGuest({
                name: guestName,
                email: email || undefined,
                source: 'ZENOTI'
            });

            // Step B: Parse Dates
            // Primary: Use Start Time (format: "1/19/2026 6:15 PM")
            // Fallback: Use Appointment Date if Start Time is invalid
            let parsedStartTime: Date | undefined;
            let parsedAppointmentDate: Date;

            if (startTimeStr) {
                parsedStartTime = new Date(startTimeStr);
                if (isNaN(parsedStartTime.getTime())) {
                    parsedStartTime = undefined;
                }
            }

            parsedAppointmentDate = new Date(appointmentDateStr);
            if (isNaN(parsedAppointmentDate.getTime())) {
                console.warn(`Invalid date for row ${rowCount}, skipping`);
                continue;
            }

            // Use startTime for rawId if available, otherwise appointmentDate
            const timeForRawId = parsedStartTime || parsedAppointmentDate;

            // Parse other dates
            const bookedDate = row['Booked Date'] ? new Date(row['Booked Date']) : undefined;
            const endTime = row['End Time'] ? new Date(row['End Time']) : undefined;

            // Parse booleans
            const addOn = row['Add-on'] === 'Yes' ? true : (row['Add-on'] === 'No' ? false : undefined);
            const rebooked = row['Rebooked'] === 'Yes' ? true : (row['Rebooked'] === 'No' ? false : undefined);

            // Step C: Create rawId
            // Format: guestId_startTime_serviceName
            const rawId = `${guest.id}_${timeForRawId.toISOString()}_${serviceName}`;

            // Step D: Upsert Appointment
            const existingAppointment = await prisma.appointment.findUnique({
                where: { rawId }
            });

            if (existingAppointment) {
                await prisma.appointment.update({
                    where: { rawId },
                    data: {
                        // Core
                        serviceName,
                        appointmentDate: parsedAppointmentDate,
                        status: row['Status'] || undefined,
                        invoiceNo: row['Invoice No'] || undefined,
                        centerName: row['Center Name'] || undefined,

                        // Timing
                        bookedDate: bookedDate && !isNaN(bookedDate.getTime()) ? bookedDate : undefined,
                        startTime: parsedStartTime,
                        endTime: endTime && !isNaN(endTime.getTime()) ? endTime : undefined,
                        duration: row['Scheduled Service Duration'] || undefined,
                        recoveryTime: row['Recovery Time'] || undefined,

                        // Staff & Location
                        provider: row['Provider'] || undefined,
                        room: row['Room'] || undefined,
                        bookedBy: row['Booked By'] || undefined,

                        // Categorization
                        serviceCategory: row['Service Category'] || undefined,
                        appointmentCategory: row['Appointment Category'] || undefined,
                        bookingSource: row['Booking Source'] || undefined,
                        rebookingSource: row['Rebooking Source'] || undefined,

                        // Flags & Metadata
                        addOn,
                        rebooked,
                        genderSnapshot: row['Gender'] || undefined,
                        notes: row['Appointment Notes'] || undefined,
                    }
                });
                appointmentsUpdated++;
            } else {
                await prisma.appointment.create({
                    data: {
                        guestId: guest.id,
                        rawId,

                        // Core
                        serviceName,
                        appointmentDate: parsedAppointmentDate,
                        status: row['Status'] || undefined,
                        invoiceNo: row['Invoice No'] || undefined,
                        centerName: row['Center Name'] || undefined,

                        // Timing
                        bookedDate: bookedDate && !isNaN(bookedDate.getTime()) ? bookedDate : undefined,
                        startTime: parsedStartTime,
                        endTime: endTime && !isNaN(endTime.getTime()) ? endTime : undefined,
                        duration: row['Scheduled Service Duration'] || undefined,
                        recoveryTime: row['Recovery Time'] || undefined,

                        // Staff & Location
                        provider: row['Provider'] || undefined,
                        room: row['Room'] || undefined,
                        bookedBy: row['Booked By'] || undefined,

                        // Categorization
                        serviceCategory: row['Service Category'] || undefined,
                        appointmentCategory: row['Appointment Category'] || undefined,
                        bookingSource: row['Booking Source'] || undefined,
                        rebookingSource: row['Rebooking Source'] || undefined,

                        // Flags & Metadata
                        addOn,
                        rebooked,
                        genderSnapshot: row['Gender'] || undefined,
                        notes: row['Appointment Notes'] || undefined,
                    }
                });
                appointmentsCreated++;
            }

        } catch (err) {
            console.error(`Error processing Zenoti row ${rowCount} for ${guestName}:`, err);
        }
    }

    return { appointmentsCreated, appointmentsUpdated };
}
