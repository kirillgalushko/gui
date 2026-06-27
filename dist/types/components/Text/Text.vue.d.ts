import { type CSSProperties } from 'vue';
export type Typography = 'inherit' | 'title-1' | 'title-2' | 'title-3' | 'title-4' | 'subtitle-1' | 'subtitle-2' | 'subtitle-3' | 'subtitle-4' | 'label-1' | 'label-2' | 'label-3' | 'paragraph-1' | 'paragraph-2';
export interface TextProps {
    Element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a' | 'button' | 'label';
    typography?: Typography;
    clamp?: 2 | 3 | 4;
    ellipsis?: boolean;
    color?: 'default' | 'inherit' | 'secondary';
    textAlign?: CSSProperties['textAlign'];
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<TextProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<TextProps> & Readonly<{}>, {
    color: "default" | "inherit" | "secondary";
    textAlign: import("csstype").Property.TextAlign;
    Element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "a" | "button" | "label";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
