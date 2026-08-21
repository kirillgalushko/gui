export type EmojiPickerCategoryId = "people" | "animals" | "food" | "activities" | "travel" | "objects" | "symbols" | "flags";
export type EmojiPickerSize = "small" | "medium" | "large";
export interface EmojiPickerEmoji {
    value: string;
    label: string;
    keywords: readonly string[];
}
export interface EmojiPickerCategory {
    id: EmojiPickerCategoryId | (string & {});
    label: string;
    emojis: readonly EmojiPickerEmoji[];
}
