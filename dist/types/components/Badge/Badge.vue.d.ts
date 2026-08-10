import type { Color } from "../../types/colors";
export type BadgeColor = Color;
export type BadgeSize = "extra-small" | "small" | "medium" | "large";
export type BadgeMode = "default" | "accent" | "secondary" | "ghost" | "negative" | "positive" | "danger" | "warning";
export interface BadgeProps {
    mode?: BadgeMode;
    size?: BadgeSize;
    color?: BadgeColor;
    Element?: "div" | "button" | "span";
}
declare var __VLS_6: {}, __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
} & {
    right?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<BadgeProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<BadgeProps> & Readonly<{}>, {
    mode: BadgeMode;
    size: BadgeSize;
    Element: "div" | "button" | "span";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
