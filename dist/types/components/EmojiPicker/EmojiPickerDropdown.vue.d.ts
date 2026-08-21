import type { EmojiPickerCategory, EmojiPickerEmoji, EmojiPickerSize } from "./types";
export interface EmojiPickerDropdownProps {
    shown?: boolean;
    disabled?: boolean;
    closeOnSelect?: boolean;
    size?: EmojiPickerSize;
    categories?: readonly EmojiPickerCategory[];
    placeholder?: string;
    emptyLabel?: string;
    ariaLabel?: string;
    maxHeight?: string | number;
}
declare var __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<EmojiPickerDropdownProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: string) => any;
    "update:shown": (shown: boolean) => any;
    "select-emoji": (emoji: EmojiPickerEmoji) => any;
}, string, import("vue").PublicProps, Readonly<EmojiPickerDropdownProps> & Readonly<{
    onSelect?: ((value: string) => any) | undefined;
    "onUpdate:shown"?: ((shown: boolean) => any) | undefined;
    "onSelect-emoji"?: ((emoji: EmojiPickerEmoji) => any) | undefined;
}>, {
    size: EmojiPickerSize;
    closeOnSelect: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
