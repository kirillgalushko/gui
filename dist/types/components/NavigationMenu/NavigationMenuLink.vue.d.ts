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
declare var __VLS_10: {}, __VLS_21: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
} & {
    default?: (props: typeof __VLS_21) => any;
};
declare const __VLS_component: import("vue").DefineComponent<NavigationMenuLinkProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<NavigationMenuLinkProps> & Readonly<{}>, {
    size: ComponentSize;
    asChild: boolean;
    rounded: boolean;
    disabled: boolean;
    Element: "a" | "button";
    active: boolean;
    closeOnSelect: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
