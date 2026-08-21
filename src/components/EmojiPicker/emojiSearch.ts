import type { EmojiPickerCategory, EmojiPickerEmoji } from "./types";

export const normalizeEmojiQuery = (query: string): string =>
  query
    .normalize("NFKD")
    .toLocaleLowerCase("ru-RU")
    .trim()
    .replace(/\s+/g, " ");

export const matchesEmojiQuery = (
  emoji: EmojiPickerEmoji,
  query: string,
): boolean => {
  const normalizedQuery = normalizeEmojiQuery(query);

  if (!normalizedQuery) {
    return true;
  }

  return [emoji.label, ...emoji.keywords]
    .map(normalizeEmojiQuery)
    .some((value) => value.includes(normalizedQuery));
};

export const filterEmojiCategories = (
  categories: readonly EmojiPickerCategory[],
  query: string,
): readonly EmojiPickerCategory[] => {
  if (!normalizeEmojiQuery(query)) {
    return categories;
  }

  return categories
    .map((category) => ({
      ...category,
      emojis: category.emojis.filter((emoji) =>
        matchesEmojiQuery(emoji, query),
      ),
    }))
    .filter((category) => category.emojis.length > 0);
};
