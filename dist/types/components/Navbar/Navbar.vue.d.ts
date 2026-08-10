export type NavbarMode = "default" | "floating";
export type NavbarMobileVariant = "sheet" | "dropdown";
export interface NavbarProps {
    ariaLabel?: string;
    blur?: boolean;
    defaultMobileOpen?: boolean;
    mobileMenuLabel?: string;
    mobileMenuTitle?: string;
    mobileMenuVariant?: NavbarMobileVariant;
    mobileOpen?: boolean;
    mode?: NavbarMode;
    sticky?: boolean;
    stretched?: boolean;
}
declare var __VLS_1: {}, __VLS_3: {}, __VLS_8: {}, __VLS_13: {}, __VLS_29: {}, __VLS_31: {}, __VLS_36: {}, __VLS_56: {}, __VLS_58: {}, __VLS_63: {};
type __VLS_Slots = {} & {
    left?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    actions?: (props: typeof __VLS_8) => any;
} & {
    compactActions?: (props: typeof __VLS_13) => any;
} & {
    mobile?: (props: typeof __VLS_29) => any;
} & {
    default?: (props: typeof __VLS_31) => any;
} & {
    actions?: (props: typeof __VLS_36) => any;
} & {
    mobile?: (props: typeof __VLS_56) => any;
} & {
    default?: (props: typeof __VLS_58) => any;
} & {
    actions?: (props: typeof __VLS_63) => any;
};
declare const __VLS_component: import("vue").DefineComponent<NavbarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:mobileOpen": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<NavbarProps> & Readonly<{
    "onUpdate:mobileOpen"?: ((value: boolean) => any) | undefined;
}>, {
    mode: NavbarMode;
    blur: boolean;
    ariaLabel: string;
    defaultMobileOpen: boolean;
    mobileMenuLabel: string;
    mobileMenuTitle: string;
    mobileMenuVariant: NavbarMobileVariant;
    mobileOpen: boolean;
    sticky: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
