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
declare let __VLS_typeProps: RadioGroupProps;
type __VLS_PublicProps = {
    modelValue?: RadioGroupValue | null;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: RadioGroupValue | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: RadioGroupValue | null) => any) | undefined;
}>, {
    mode: RadioGroupMode;
    stretched: boolean;
    orientation: RadioGroupOrientation;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
