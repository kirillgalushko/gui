type __VLS_PublicProps = {
    modelValue?: string;
};
declare function __VLS_template(): {
    slots: {
        leftAdornment?(_: {}): any;
        rightAdornment?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (event: Event) => any;
    beforeinput: (event: InputEvent) => any;
    paste: (event: ClipboardEvent) => any;
    "update:modelValue": (modelValue: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    onBeforeinput?: ((event: InputEvent) => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
