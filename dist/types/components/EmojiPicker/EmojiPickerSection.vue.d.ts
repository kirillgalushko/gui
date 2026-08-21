import type { EmojiPickerCategory, EmojiPickerEmoji } from "./types";
export interface EmojiPickerSectionProps {
    category: EmojiPickerCategory;
}
declare const _default: import("vue").DefineComponent<EmojiPickerSectionProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (emoji: EmojiPickerEmoji) => any;
}, string, import("vue").PublicProps, Readonly<EmojiPickerSectionProps> & Readonly<{
    onSelect?: ((emoji: EmojiPickerEmoji) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
