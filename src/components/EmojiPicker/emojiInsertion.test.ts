import { describe, expect, it } from "vitest";
import { insertEmojiAtSelection } from "./emojiInsertion";

describe("insertEmojiAtSelection", () => {
  it("вставляет emoji в позицию caret и возвращает новую позицию", () => {
    expect(
      insertEmojiAtSelection({
        value: "Привет мир",
        emoji: "🙂",
        selectionStart: 7,
        selectionEnd: 7,
      }),
    ).toEqual({
      value: "Привет 🙂мир",
      selectionStart: 9,
      selectionEnd: 9,
      inserted: true,
    });
  });

  it("заменяет выделенный текст", () => {
    expect(
      insertEmojiAtSelection({
        value: "Привет, мир",
        emoji: "👋",
        selectionStart: 0,
        selectionEnd: 6,
      }),
    ).toEqual({
      value: "👋, мир",
      selectionStart: 2,
      selectionEnd: 2,
      inserted: true,
    });
  });

  it("добавляет emoji в конец, когда input не поддерживает selection", () => {
    expect(
      insertEmojiAtSelection({
        value: "Привет",
        emoji: "✨",
        selectionStart: null,
        selectionEnd: null,
      }),
    ).toEqual({
      value: "Привет✨",
      selectionStart: 7,
      selectionEnd: 7,
      inserted: true,
    });
  });

  it("не меняет value, когда результат превышает maxlength", () => {
    expect(
      insertEmojiAtSelection({
        value: "Текст",
        emoji: "🔥",
        selectionStart: 5,
        selectionEnd: 5,
        maxLength: 5,
      }),
    ).toEqual({
      value: "Текст",
      selectionStart: 5,
      selectionEnd: 5,
      inserted: false,
    });
  });

  it("нормализует некорректные границы selection", () => {
    expect(
      insertEmojiAtSelection({
        value: "abc",
        emoji: "✅",
        selectionStart: -10,
        selectionEnd: 99,
      }),
    ).toEqual({
      value: "✅",
      selectionStart: 1,
      selectionEnd: 1,
      inserted: true,
    });
  });
});
