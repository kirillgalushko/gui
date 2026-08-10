import type { ComponentSize } from "../../types";
export interface InputProps {
    autoFocus?: boolean;
    maxWidth?: string;
    disabled?: boolean;
    postfix?: string;
    description?: string;
    errorMessage?: string;
    invalid?: boolean;
    descriptionId?: string;
    size?: ComponentSize;
}
type __VLS_Props = InputProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: any;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    leftAdornment?: (props: typeof __VLS_1) => any;
} & {
    rightAdornment?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}>, {
    size: ComponentSize;
    maxWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
