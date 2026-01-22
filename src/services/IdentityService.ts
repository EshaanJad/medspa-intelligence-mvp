import { prisma } from '../lib/prisma';
import { normalizeEmail, normalizeName, normalizePhone } from '../utils/normalization';

interface GuestData {
    name: string;
    email?: string;
    phone?: string;
    source?: string;
}

export class IdentityService {
    /**
     * Finds or creates a guest based on strict email/phone matching or fuzzy name matching.
     * Updates existing guest with new contact info if found.
     */
    static async findOrCreateGuest(data: GuestData) {
        const email = normalizeEmail(data.email);
        const phone = normalizePhone(data.phone);
        const name = normalizeName(data.name);

        if (!name) {
            throw new Error("Name is required to find or create a guest.");
        }

        // 1. Strict Match (Email)
        if (email) {
            const existing = await prisma.guest.findUnique({ where: { email } });
            if (existing) {
                const updateData: any = {};
                if (!existing.phone && phone) updateData.phone = phone;
                if (!existing.fullName && data.name) updateData.fullName = data.name;
                if (!existing.normalizedName && name) updateData.normalizedName = name; // Ensure normalized name is set

                if (Object.keys(updateData).length > 0) {
                    const updated = await prisma.guest.update({ where: { id: existing.id }, data: updateData });
                    return updated;
                }
                return existing;
            }
        }

        // 2. Strict Match (Phone)
        if (phone) {
            const existing = await prisma.guest.findUnique({ where: { phone } });
            if (existing) {
                const updateData: any = {};
                if (!existing.email && email) updateData.email = email;
                if (!existing.fullName && data.name) updateData.fullName = data.name;
                // If we found by phone, and normalizedName was missing, update it
                if (!existing.normalizedName && name) updateData.normalizedName = name;

                if (Object.keys(updateData).length > 0) {
                    const updated = await prisma.guest.update({ where: { id: existing.id }, data: updateData });
                    return updated;
                }
                return existing;
            }
        }

        // 3. Fuzzy Match (Name)
        // Only if we haven't found them yet.
        if (name) {
            const candidates = await prisma.guest.findMany({ where: { normalizedName: name } });

            for (const guest of candidates) {
                // Constraint: Only match if the DB record has either a matching email OR matching phone (to be safe), 
                // OR if the DB record has no contact info yet.

                // Check if DB record has conflict
                const hasEmailConflict = guest.email && guest.email !== email; // Conflict if DB has email and it differs (input email could be null, then guest.email !== null is true? No. !== check. If input email null, we treat as mismatch? No, if input is null, we can't verify match, so we rely on "no contact info" check or "matching phone" check).

                // Actually, let's implement the positive condition from the prompt:
                // "Only match if the DB record has either a matching email OR matching phone... OR if the DB record has no contact info yet."

                const dbHasMatchingEmail = guest.email && email && guest.email === email;
                const dbHasMatchingPhone = guest.phone && phone && guest.phone === phone;
                const dbHasNoContact = !guest.email && !guest.phone;

                if (dbHasMatchingEmail || dbHasMatchingPhone || dbHasNoContact) {
                    // Safe to merge
                    const updateData: any = {};
                    if (!guest.email && email) updateData.email = email;
                    if (!guest.phone && phone) updateData.phone = phone;

                    if (Object.keys(updateData).length > 0) {
                        return prisma.guest.update({ where: { id: guest.id }, data: updateData });
                    }
                    return guest;
                }
            }
        }

        // 4. No Match - Create
        return prisma.guest.create({
            data: {
                fullName: data.name,
                normalizedName: name,
                email: email, // Normalized
                phone: phone, // Normalized
            }
        });
    }
}
