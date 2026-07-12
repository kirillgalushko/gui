export interface CheckboxProps {
    disabled?: boolean;
    description?: string;
    errorMessage?: string;
    invalid?: boolean;
    indeterminate?: boolean;
    descriptionId?: string;
    maxWidth?: string;
}
declare let __VLS_typeProps: CheckboxProps;
type __VLS_PublicProps = {
    modelValue?: boolean | unknown[];
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: boolean | unknown[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: boolean | unknown[]) => any) | undefined;
}>, {
    maxWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
