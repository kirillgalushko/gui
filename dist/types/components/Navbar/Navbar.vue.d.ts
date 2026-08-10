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
declare function __VLS_template(): {
    slots: {
        left?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        actions?(_: {}): any;
        actions?(_: {}): any;
        actions?(_: {}): any;
        compactActions?(_: {}): any;
        mobile?(_: {}): any;
        mobile?(_: {}): any;
    };
    refs: {
        navbarRef: HTMLElement;
        layoutRef: HTMLDivElement;
        leftRef: HTMLDivElement;
        navigationRef: HTMLDivElement;
        actionsRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
