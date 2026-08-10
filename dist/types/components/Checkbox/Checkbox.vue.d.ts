export interface CheckboxProps {
    disabled?: boolean;
    description?: string;
    errorMessage?: string;
    invalid?: boolean;
    indeterminate?: boolean;
    descriptionId?: string;
    maxWidth?: string;
}
type __VLS_Props = CheckboxProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: boolean | unknown[];
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | unknown[] | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | unknown[] | undefined) => any) | undefined;
}>, {
    maxWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
