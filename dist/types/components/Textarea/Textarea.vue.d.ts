export interface TextareaProps {
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    layout?: 'fixed' | 'fill-vertical' | 'fill-horizontal' | 'fill-both' | 'hug';
    placeholder?: string;
}
declare let __VLS_typeProps: TextareaProps;
type __VLS_PublicProps = {
    modelValue?: string;
} & typeof __VLS_typeProps;
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
}>, {
    resize: "none" | "both" | "horizontal" | "vertical";
    layout: "fixed" | "fill-vertical" | "fill-horizontal" | "fill-both" | "hug";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
