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
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        right?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<BadgeProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<BadgeProps> & Readonly<{}>, {
    mode: BadgeMode;
    size: BadgeSize;
    Element: "div" | "button" | "span";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
