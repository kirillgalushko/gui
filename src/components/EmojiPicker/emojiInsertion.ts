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

const normalizeIndex = (
  index: number | null | undefined,
  fallback: number,
  maximum: number,
): number => {
  if (typeof index !== "number" || !Number.isFinite(index)) {
    return fallback;
  }

  return Math.min(Math.max(Math.trunc(index), 0), maximum);
};

const normalizeMaxLength = (
  maxLength: number | undefined,
): number | undefined => {
  if (typeof maxLength !== "number" || !Number.isFinite(maxLength)) {
    return undefined;
  }

  return Math.max(Math.trunc(maxLength), 0);
};

/**
 * Вставляет Unicode-эмодзи в caret или заменяет текущий selection.
 * Длина считается в UTF-16 code units — так же, как нативный maxlength.
 */
export const insertEmojiAtSelection = ({
  value,
  emoji,
  selectionStart,
  selectionEnd,
  maxLength,
}: EmojiInsertionParams): EmojiInsertionResult => {
  const start = normalizeIndex(selectionStart, value.length, value.length);
  const end = normalizeIndex(selectionEnd, start, value.length);
  const selectionEndIndex = Math.max(start, end);

  if (!emoji) {
    return {
      value,
      selectionStart: start,
      selectionEnd: selectionEndIndex,
      inserted: false,
    };
  }

  const nextValue = `${value.slice(0, start)}${emoji}${value.slice(selectionEndIndex)}`;
  const normalizedMaxLength = normalizeMaxLength(maxLength);

  if (
    normalizedMaxLength !== undefined &&
    nextValue.length > normalizedMaxLength
  ) {
    return {
      value,
      selectionStart: start,
      selectionEnd: selectionEndIndex,
      inserted: false,
    };
  }

  const caretPosition = start + emoji.length;

  return {
    value: nextValue,
    selectionStart: caretPosition,
    selectionEnd: caretPosition,
    inserted: true,
  };
};
