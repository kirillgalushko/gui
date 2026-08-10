export interface AccordionProps {
    defaultValue?: string[];
    disabled?: boolean;
    modelValue?: string[];
    multiple?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<AccordionProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string[]) => any;
    "update:modelValue": (value: string[]) => any;
}, string, import("vue").PublicProps, Readonly<AccordionProps> & Readonly<{
    onChange?: ((value: string[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
}>, {
    disabled: boolean;
    multiple: boolean;
    defaultValue: string[];
    modelValue: string[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
