export interface SidebarCollapsibleProps {
    defaultOpened?: boolean;
    disabled?: boolean;
    label: string;
    modelValue?: boolean;
    selected?: boolean;
}
declare function __VLS_template(): {
    slots: {
        icon?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<SidebarCollapsibleProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (opened: boolean) => any;
    "update:modelValue": (opened: boolean) => any;
}, string, import("vue").PublicProps, Readonly<SidebarCollapsibleProps> & Readonly<{
    onChange?: ((opened: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: boolean;
    defaultOpened: boolean;
    selected: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
