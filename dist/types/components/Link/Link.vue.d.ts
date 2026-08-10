import type { Typography } from "../Text/types";
export interface LinkProps {
    typography?: Typography;
    asChild?: boolean;
    inline?: boolean;
    wrap?: boolean;
    underlined?: boolean;
    underlineOnHover?: boolean;
    disabled?: boolean;
    enableVisited?: boolean;
    mode?: "inherit" | "accent";
    Element?: "a" | "button" | "span";
}
declare var __VLS_6: {}, __VLS_12: {}, __VLS_14: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
} & {
    iconLeft?: (props: typeof __VLS_12) => any;
} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    iconRight?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<LinkProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<LinkProps> & Readonly<{}>, {
    mode: "inherit" | "accent";
    Element: "a" | "button" | "span";
    typography: Typography;
    inline: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
