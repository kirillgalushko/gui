import type { ComponentSize } from "../../types";
export interface SuggestInputProps {
    id?: string;
    placeholder?: string;
    size?: ComponentSize;
    disabled?: boolean;
    invalid?: boolean;
    errorMessage?: string;
    description?: string;
    shown?: boolean;
}
type __VLS_Props = SuggestInputProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: string;
};
declare var __VLS_15: {
    close: () => void;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_15) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (event: Event) => any;
    blur: (event: FocusEvent) => any;
    focus: (event: FocusEvent) => any;
    keydown: (event: KeyboardEvent) => any;
    "update:shown": (shown: boolean) => any;
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    "onUpdate:shown"?: ((shown: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
