import { describe, expect, it } from "vitest";
import { DEFAULT_EMOJI_CATEGORIES } from "./emojiData";
import {
  filterEmojiCategories,
  matchesEmojiQuery,
  normalizeEmojiQuery,
} from "./emojiSearch";

describe("emojiSearch", () => {
  it("сохраняет системный порядок категорий", () => {
    expect(DEFAULT_EMOJI_CATEGORIES.map((category) => category.id)).toEqual([
      "people",
      "animals",
      "food",
      "activities",
      "travel",
      "objects",
      "symbols",
      "flags",
    ]);
  });

  it("нормализует пробелы и регистр в поисковом запросе", () => {
    expect(normalizeEmojiQuery("  СЕрдЦЕ   ")).toBe("сердце");
  });

  it("находит эмодзи по русскому и английскому ключевому слову", () => {
    const heart = DEFAULT_EMOJI_CATEGORIES[0]?.emojis.find(
      (emoji) => emoji.value === "❤️",
    );

    expect(heart).toBeDefined();
    expect(matchesEmojiQuery(heart!, "сердце")).toBe(true);
    expect(matchesEmojiQuery(heart!, "red heart")).toBe(true);
  });

  it("оставляет только подходящие категории и эмодзи", () => {
    const result = filterEmojiCategories(DEFAULT_EMOJI_CATEGORIES, "канада");

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("flags");
    expect(result[0]?.emojis).toEqual([
      expect.objectContaining({ value: "🇨🇦" }),
    ]);
  });

  it("не копирует категории при пустом поиске", () => {
    expect(filterEmojiCategories(DEFAULT_EMOJI_CATEGORIES, " ")).toBe(
      DEFAULT_EMOJI_CATEGORIES,
    );
  });
});
