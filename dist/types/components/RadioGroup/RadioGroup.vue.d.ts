import { type RadioGroupMode, type RadioGroupOrientation, type RadioGroupValue } from "./radioGroup";
export interface RadioGroupProps {
    name?: string;
    disabled?: boolean;
    invalid?: boolean;
    required?: boolean;
    orientation?: RadioGroupOrientation;
    mode?: RadioGroupMode;
    stretched?: boolean;
}
type __VLS_Props = RadioGroupProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: RadioGroupValue | null;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: RadioGroupValue | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: RadioGroupValue | null) => any) | undefined;
}>, {
    mode: RadioGroupMode;
    stretched: boolean;
    orientation: RadioGroupOrientation;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
