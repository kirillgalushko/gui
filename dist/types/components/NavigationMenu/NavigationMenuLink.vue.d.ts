import type { ComponentSize } from "../../types";
export interface NavigationMenuLinkProps {
    active?: boolean;
    asChild?: boolean;
    closeOnSelect?: boolean;
    disabled?: boolean;
    Element?: "a" | "button";
    rounded?: boolean;
    size?: ComponentSize;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<NavigationMenuLinkProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<NavigationMenuLinkProps> & Readonly<{}>, {
    size: ComponentSize;
    asChild: boolean;
    rounded: boolean;
    disabled: boolean;
    Element: "a" | "button";
    active: boolean;
    closeOnSelect: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
