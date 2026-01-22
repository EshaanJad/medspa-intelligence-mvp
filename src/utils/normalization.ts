export function normalizeEmail(email: string | null | undefined): string | null {
    if (!email) return null;
    const trimmed = email.trim().toLowerCase();
    return trimmed || null;
}

export function normalizeName(name: string | null | undefined): string | null {
    if (!name) return null;
    // Trim, lowercase, collapse multiple spaces
    const normalized = name.trim().toLowerCase().replace(/\s+/g, ' ');
    return normalized || null;
}

export function normalizePhone(phone: string | null | undefined): string | null {
    if (!phone) return null;
    // Remove all non-digit characters
    let digits = phone.replace(/\D/g, '');

    // If it starts with '1' and has 11 digits, remove the leading '1'
    if (digits.length === 11 && digits.startsWith('1')) {
        digits = digits.substring(1);
    }

    // Remove extensions (anything after 'x' or 'ext' - though we handle this by stripping non-digits first, 
    // sometimes logic requires splitting before stripping if extensions are complex. 
    // But prompt said "extensions (anything after 'x' or 'ext')"
    // If we strip non-digits first, 'x' is gone. 
    // Let's refine the phone logic to match the specific requirement about extensions more carefully if needed.
    // "Remove extensions (anything after 'x' or 'ext')" implies we should truncate the string at 'x' or 'ext' BEFORE stripping non-digits.

    const extIndex = phone.toLowerCase().search(/x|ext/);
    if (extIndex !== -1) {
        // Re-process from original string if extension found
        const preExtension = phone.substring(0, extIndex);
        digits = preExtension.replace(/\D/g, '');
        if (digits.length === 11 && digits.startsWith('1')) {
            digits = digits.substring(1);
        }
    }

    // Return 10-digit string or null
    return digits.length === 10 ? digits : null;
}
