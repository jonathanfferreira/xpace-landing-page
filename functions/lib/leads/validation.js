"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLead = exports.normalizePhone = exports.LeadError = void 0;
class LeadError extends Error {
    constructor(code, httpStatus = 400) {
        super(code);
        this.code = code;
        this.httpStatus = httpStatus;
    }
}
exports.LeadError = LeadError;
const ddds = new Set('11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99'.split(' '));
function normalizePhone(value) {
    if (typeof value !== 'string' || value.length > 24 || !/^[+\d\s().-]+$/.test(value))
        throw new LeadError('INVALID_PHONE');
    let digits = value.replace(/\D/g, '');
    if (digits.length === 12 || digits.length === 13) {
        if (!digits.startsWith('55'))
            throw new LeadError('INVALID_PHONE');
        digits = digits.slice(2);
    }
    if (!ddds.has(digits.slice(0, 2)))
        throw new LeadError('INVALID_PHONE');
    const local = digits.slice(2);
    if (!(/^[2-5]\d{7}$/.test(local) || /^9\d{8}$/.test(local)) || /^(\d)\1+$/.test(local))
        throw new LeadError('INVALID_PHONE');
    return `55${digits}`;
}
exports.normalizePhone = normalizePhone;
function text(data, key, max, required = false) {
    const value = data[key];
    if (value === undefined && !required)
        return '';
    if (typeof value !== 'string' || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value))
        throw new LeadError('INVALID_PAYLOAD');
    const clean = value.trim();
    if (required && !clean)
        throw new LeadError('INVALID_PAYLOAD');
    return clean;
}
function referrer(value) {
    if (!value)
        return '';
    try {
        const url = new URL(value);
        if (!['https:', 'http:'].includes(url.protocol))
            throw new Error();
        return url.origin + url.pathname;
    }
    catch (_a) {
        throw new LeadError('INVALID_REFERRER');
    }
}
function validateLead(input, expectedType) {
    if (!input || typeof input !== 'object' || Array.isArray(input))
        throw new LeadError('INVALID_PAYLOAD');
    const data = input;
    if (text(data, 'website', 200))
        throw new LeadError('SUBMISSION_REJECTED'); // Honeypot, never persisted.
    const requestId = text(data, 'requestId', 36, true);
    if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(requestId))
        throw new LeadError('INVALID_REQUEST_ID');
    const leadType = data.leadType;
    if ((leadType !== 'QUIZ' && leadType !== 'CONTACT') || (expectedType && expectedType !== leadType))
        throw new LeadError('INVALID_LEAD_TYPE');
    const name = text(data, 'name', 100, true).replace(/\s+/g, ' ');
    if (name.length < 2 || !/\p{L}/u.test(name))
        throw new LeadError('INVALID_NAME');
    const email = text(data, 'email', 254);
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        throw new LeadError('INVALID_EMAIL');
    const page = text(data, 'page', 300);
    if (page && (!page.startsWith('/') || /[?#]/.test(page)))
        throw new LeadError('INVALID_PAGE');
    const quizResult = text(data, 'quizResult', 100, leadType === 'QUIZ');
    const quizAnswers = {};
    let age;
    if (typeof data.age === 'number' && Number.isInteger(data.age) && data.age >= 1 && data.age <= 120) {
        age = data.age;
    }
    const preferredModalities = Array.isArray(data.preferredModalities)
        ? data.preferredModalities.filter((item) => typeof item === 'string').map(s => s.slice(0, 50)).slice(0, 15)
        : undefined;
    const experience = text(data, 'experience', 50) || undefined;
    const availability = Array.isArray(data.availability)
        ? data.availability.filter((item) => typeof item === 'string').map(s => s.slice(0, 50)).slice(0, 10)
        : undefined;
    const objective = text(data, 'objective', 100) || undefined;
    const recommendedClassIds = Array.isArray(data.recommendedClassIds)
        ? data.recommendedClassIds.filter((item) => typeof item === 'string').map(s => s.slice(0, 80)).slice(0, 10)
        : undefined;
    const selectedClassId = text(data, 'selectedClassId', 80) || undefined;
    if (leadType === 'QUIZ') {
        const answers = data.quizAnswers;
        if (answers && typeof answers === 'object' && !Array.isArray(answers)) {
            const entries = Object.entries(answers);
            if (!entries.length && !recommendedClassIds && age === undefined)
                throw new LeadError('INVALID_QUIZ');
            if (entries.length > 20)
                throw new LeadError('INVALID_QUIZ');
            for (const [key, value] of entries.sort(([a], [b]) => a.localeCompare(b))) {
                if (!/^[a-zA-Z][a-zA-Z0-9_-]{0,39}$/.test(key) || ['__proto__', 'constructor', 'prototype'].includes(key) || typeof value !== 'number' || !Number.isInteger(value) || value < 0 || value > 100)
                    throw new LeadError('INVALID_QUIZ');
                quizAnswers[key] = value;
            }
        }
        else if (!recommendedClassIds && age === undefined) {
            throw new LeadError('INVALID_QUIZ');
        }
    }
    const utmSource = text(data, 'utmSource', 200);
    const safeReferrer = referrer(text(data, 'referrer', 1000));
    let source = leadType === 'QUIZ' ? 'QUIZ' : 'DIRECT';
    if (utmSource)
        source = utmSource;
    else if (safeReferrer) {
        const host = new URL(safeReferrer).hostname;
        source = /(^|\.)instagram\.com$/.test(host) ? 'INSTAGRAM' : /(^|\.)google\.[a-z.]+$/.test(host) ? 'GOOGLE' : 'SITE';
    }
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ requestId, name, phone: normalizePhone(data.phone), leadType, email, message: text(data, 'message', 2000, leadType === 'CONTACT'), intent: text(data, 'intent', 120) || (leadType === 'QUIZ' ? 'quiz_result' : 'contact'), page, referrer: safeReferrer, source, utmSource, utmMedium: text(data, 'utmMedium', 200), utmCampaign: text(data, 'utmCampaign', 200), utmContent: text(data, 'utmContent', 200), utmTerm: text(data, 'utmTerm', 200), quizResult: leadType === 'QUIZ' ? quizResult : '', quizAnswers }, (age !== undefined ? { age } : {})), (preferredModalities ? { preferredModalities } : {})), (experience ? { experience } : {})), (availability ? { availability } : {})), (objective ? { objective } : {})), (recommendedClassIds ? { recommendedClassIds } : {})), (selectedClassId ? { selectedClassId } : {}));
}
exports.validateLead = validateLead;
//# sourceMappingURL=validation.js.map