export interface EmojiInsertionParams {
    value: string;
    emoji: string;
    selectionStart?: number | null;
    selectionEnd?: number | null;
    maxLength?: number;
}
export interface EmojiInsertionResult {
    value: string;
    selectionStart: number;
    selectionEnd: number;
    inserted: boolean;
}
/**
 * Вставляет Unicode-эмодзи в caret или заменяет текущий selection.
 * Длина считается в UTF-16 code units — так же, как нативный maxlength.
 */
export declare const insertEmojiAtSelection: ({ value, emoji, selectionStart, selectionEnd, maxLength, }: EmojiInsertionParams) => EmojiInsertionResult;
