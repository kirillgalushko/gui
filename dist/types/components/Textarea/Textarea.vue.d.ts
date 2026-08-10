export interface TextareaProps {
    resize?: "none" | "both" | "horizontal" | "vertical";
    layout?: "fixed" | "fill-vertical" | "fill-horizontal" | "fill-both" | "hug";
    placeholder?: string;
    invalid?: boolean;
    errorMessage?: string;
    descriptionId?: string;
    minHeight?: string;
    maxHeight?: string;
}
type __VLS_Props = TextareaProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
}>, {
    resize: "none" | "both" | "horizontal" | "vertical";
    layout: "fixed" | "fill-vertical" | "fill-horizontal" | "fill-both" | "hug";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
