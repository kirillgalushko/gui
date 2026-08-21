import type { EmojiPickerCategory } from "./types";
/**
 * Порядок категорий совпадает с системными emoji-пикерами. Набор намеренно
 * хранится как компактные Unicode-строки: без SVG, изображений и runtime-зависимостей.
 */
export declare const DEFAULT_EMOJI_CATEGORIES: readonly EmojiPickerCategory[];
