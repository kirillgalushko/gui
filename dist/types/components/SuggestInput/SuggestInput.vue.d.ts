export interface SuggestInputProps {
    id?: string;
    placeholder?: string;
    disabled?: boolean;
    invalid?: boolean;
    errorMessage?: string;
    description?: string;
    shown?: boolean;
}
declare let __VLS_typeProps: SuggestInputProps;
type __VLS_PublicProps = {
    modelValue?: string;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        default?(_: {
            close: () => void;
        }): any;
    };
    refs: {
        triggerRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    blur: (event: FocusEvent) => any;
    focus: (event: FocusEvent) => any;
    input: (event: Event) => any;
    keydown: (event: KeyboardEvent) => any;
    "update:modelValue": (modelValue: string) => any;
    "update:shown": (shown: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: Event) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
    "onUpdate:shown"?: ((shown: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
