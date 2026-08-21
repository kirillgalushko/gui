import type { TextProps } from "./types";
export type { TextProps, Typography } from "./types";
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<TextProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<TextProps> & Readonly<{}>, {
    Element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "a" | "button" | "label";
    textAlign: import("csstype").Property.TextAlign;
    color: "default" | "inherit" | "secondary" | "negative";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
