import type { EmojiPickerCategory, EmojiPickerEmoji } from "./types";
export declare const normalizeEmojiQuery: (query: string) => string;
export declare const matchesEmojiQuery: (emoji: EmojiPickerEmoji, query: string) => boolean;
export declare const filterEmojiCategories: (categories: readonly EmojiPickerCategory[], query: string) => readonly EmojiPickerCategory[];
