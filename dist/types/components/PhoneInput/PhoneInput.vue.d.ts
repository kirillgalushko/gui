type __VLS_PublicProps = {
    modelValue?: string;
};
declare var __VLS_11: {}, __VLS_17: {};
type __VLS_Slots = {} & {
    leftAdornment?: (props: typeof __VLS_11) => any;
} & {
    rightAdornment?: (props: typeof __VLS_17) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (event: Event) => any;
    beforeinput: (event: InputEvent) => any;
    paste: (event: ClipboardEvent) => any;
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    onBeforeinput?: ((event: InputEvent) => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
