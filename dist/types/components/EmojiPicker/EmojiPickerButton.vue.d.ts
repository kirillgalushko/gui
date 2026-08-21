import type { EmojiPickerEmoji } from "./types";
export interface EmojiPickerButtonProps {
    emoji: EmojiPickerEmoji;
}
declare const _default: import("vue").DefineComponent<EmojiPickerButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (emoji: EmojiPickerEmoji) => any;
}, string, import("vue").PublicProps, Readonly<EmojiPickerButtonProps> & Readonly<{
    onSelect?: ((emoji: EmojiPickerEmoji) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
