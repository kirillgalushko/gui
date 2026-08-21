import type { EmojiPickerCategory, EmojiPickerEmoji, EmojiPickerSize } from "./types";
export interface EmojiPickerProps {
    size?: EmojiPickerSize;
    categories?: readonly EmojiPickerCategory[];
    placeholder?: string;
    emptyLabel?: string;
    ariaLabel?: string;
    maxHeight?: string | number;
}
type __VLS_Props = EmojiPickerProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: string) => any;
    "update:modelValue": (value: string | undefined) => any;
    "select-emoji": (emoji: EmojiPickerEmoji) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSelect?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
    "onSelect-emoji"?: ((emoji: EmojiPickerEmoji) => any) | undefined;
}>, {
    size: EmojiPickerSize;
    placeholder: string;
    ariaLabel: string;
    categories: readonly EmojiPickerCategory[];
    emptyLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
