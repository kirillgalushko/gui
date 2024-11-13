export interface TextareaProps {
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    layout?: 'fixed' | 'fill-vertical' | 'fill-horizontal' | 'fill-both' | 'hug';
    placeholder?: string;
    value?: string;
}
declare const _default: import("vue").DefineComponent<TextareaProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<TextareaProps> & Readonly<{}>, {
    resize: "none" | "both" | "horizontal" | "vertical";
    layout: "fixed" | "fill-vertical" | "fill-horizontal" | "fill-both" | "hug";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
