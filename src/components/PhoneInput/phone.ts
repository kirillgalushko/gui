export type PhoneValue = {
  formatted: string;
  raw: string;
};

export type PhoneInputChange = {
  currentValue: string;
  insertedValue: string;
  selectionStart: number;
  selectionEnd: number;
};

export type PhoneInputFormatResult = {
  value: string;
  caret: number;
};

const phoneInputPattern = /^[0-9+\-()\s]*$/;
const phoneRawPattern = /^\+7[0-9]{10}$/;
const maxPhoneDigits = 11;

export function parsePhone(value: string | null | undefined): PhoneValue {
  const sanitized = sanitizePhoneInput(value ?? "");
  const digits = sanitized.replace(/\D/g, "");

  if (digits.length === 0) return { formatted: "", raw: "" };

  const normalizedDigits = normalizePhoneDigits(digits, sanitized);

  return {
    formatted: formatRussianPhoneDigits(normalizedDigits),
    raw: `+${normalizedDigits}`,
  };
}

export function formatPhoneInput(value: string | null | undefined): string {
  const sanitized = sanitizePhoneInput(value ?? "");
  const digits = sanitized.replace(/\D/g, "").slice(0, maxPhoneDigits);

  return digits.length === 0 ? sanitized : formatEditingPhoneDigits(digits);
}

export function formatPhoneInputWithCaret(params: {
  value: string;
  caret: number;
}): PhoneInputFormatResult {
  const digitsBeforeCaret = params.value
    .slice(0, params.caret)
    .replace(/\D/g, "").length;
  const value = formatPhoneInput(params.value);
  const sanitizedPrefixLength = sanitizePhoneInput(
    params.value.slice(0, params.caret),
  ).length;

  return {
    value,
    caret:
      digitsBeforeCaret === 0
        ? Math.min(sanitizedPrefixLength, value.length)
        : findCaretByDigitCount(value, digitsBeforeCaret),
  };
}

export function sanitizePhoneInput(value: string): string {
  let result = "";
  let hasPlus = false;

  for (const char of value) {
    if (/[0-9\-()\s]/.test(char)) {
      result += char;
    } else if (char === "+" && !hasPlus && result.trim().length === 0) {
      result += char;
      hasPlus = true;
    }
  }

  return result;
}

export function isAllowedPhoneInput(value: string): boolean {
  return phoneInputPattern.test(value);
}

export function canApplyPhoneInput(change: PhoneInputChange): boolean {
  if (!isAllowedPhoneInput(change.insertedValue)) return false;

  const selectedDigits = change.currentValue
    .slice(change.selectionStart, change.selectionEnd)
    .replace(/\D/g, "").length;
  const currentDigits = change.currentValue.replace(/\D/g, "").length;
  const insertedDigits = change.insertedValue.replace(/\D/g, "").length;

  return currentDigits - selectedDigits + insertedDigits <= maxPhoneDigits;
}

export function isValidPhone(value: string): boolean {
  const phone = parsePhone(value);
  return phone.formatted.length === 0 || phoneRawPattern.test(phone.raw);
}

function normalizePhoneDigits(digits: string, sanitized: string): string {
  if (
    digits.length === 10 &&
    shouldTreatAsLocalRussianNumber(digits, sanitized)
  )
    return `7${digits}`;
  if (digits.length === 11 && digits.startsWith("8"))
    return `7${digits.slice(1)}`;
  return digits.slice(0, maxPhoneDigits);
}

function shouldTreatAsLocalRussianNumber(
  digits: string,
  sanitized: string,
): boolean {
  const compact = sanitized.replace(/[\s\-()]/g, "");
  return (
    !compact.startsWith("+7") &&
    !compact.startsWith("7") &&
    !compact.startsWith("8") &&
    digits.length === 10
  );
}

function formatRussianPhoneDigits(digits: string): string {
  if (digits.length === 11 && digits.startsWith("7")) {
    const [, country, code, first, second, third] =
      digits.match(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/) ?? [];

    if (country && code && first && second && third)
      return `+${country} (${code}) ${first}-${second}-${third}`;
  }

  return `+${digits}`;
}

function formatEditingPhoneDigits(digits: string): string {
  if (!digits.startsWith("7")) return `+${digits}`;

  const country = digits.slice(0, 1);
  const code = digits.slice(1, 4);
  const first = digits.slice(4, 7);
  const second = digits.slice(7, 9);
  const third = digits.slice(9, 11);
  let formatted = `+${country}`;

  if (code.length > 0) formatted += ` (${code}`;
  if (code.length === 3 && first.length > 0) formatted += ")";
  if (first.length > 0) formatted += ` ${first}`;
  if (second.length > 0) formatted += `-${second}`;
  if (third.length > 0) formatted += `-${third}`;

  return formatted;
}

function findCaretByDigitCount(value: string, digitCount: number): number {
  let seenDigits = 0;

  for (let index = 0; index < value.length; index += 1) {
    if (!/\d/.test(value[index] ?? "")) continue;
    seenDigits += 1;
    if (seenDigits === digitCount) return index + 1;
  }

  return value.length;
}
