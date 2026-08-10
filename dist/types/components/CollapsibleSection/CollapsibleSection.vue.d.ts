export interface CollapsibleSectionProps {
    defaultOpened?: boolean;
    disabled?: boolean;
    modelValue?: boolean;
    title: string;
}
type __VLS_Slots = {
    default(): unknown;
    icon(): unknown;
};
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
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
