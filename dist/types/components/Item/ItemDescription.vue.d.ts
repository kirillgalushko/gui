import type { TextProps } from "../Text/types";
export interface ItemDescriptionProps {
    Element?: TextProps["Element"];
    ellipsis?: boolean;
}
declare var __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ItemDescriptionProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ItemDescriptionProps> & Readonly<{}>, {
    Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
    ellipsis: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
