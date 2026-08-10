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
export declare function parsePhone(value: string | null | undefined): PhoneValue;
export declare function formatPhoneInput(value: string | null | undefined): string;
export declare function formatPhoneInputWithCaret(params: {
    value: string;
    caret: number;
}): PhoneInputFormatResult;
export declare function sanitizePhoneInput(value: string): string;
export declare function isAllowedPhoneInput(value: string): boolean;
export declare function canApplyPhoneInput(change: PhoneInputChange): boolean;
export declare function isValidPhone(value: string): boolean;
