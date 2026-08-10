export interface CollapsibleSectionProps {
    defaultOpened?: boolean;
    disabled?: boolean;
    modelValue?: boolean;
    title: string;
}
declare function __VLS_template(): {
    slots: Readonly<{
        default(): unknown;
        icon(): unknown;
    }> & {
        default(): unknown;
        icon(): unknown;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<CollapsibleSectionProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (opened: boolean) => any;
    "update:modelValue": (opened: boolean) => any;
}, string, import("vue").PublicProps, Readonly<CollapsibleSectionProps> & Readonly<{
    onChange?: ((opened: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: boolean;
    defaultOpened: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
