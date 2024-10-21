export type Typography = 'label-1-regular' | 'label-2-regular' | 'label-3-regular' | 'label-4-regular' | 'label-5-regular' | 'paragraph-1-regular' | 'paragraph-2-regular' | 'paragraph-3-regular' | 'paragraph-4-regular' | 'title-1-semibold' | 'title-2-semibold' | 'title-3-semibold' | 'title-4-semibold' | 'title-5-semibold' | 'subtitle-1-semibold' | 'subtitle-2-semibold' | 'subtitle-3-semibold' | 'subtitle-4-semibold';
export interface TextProps {
    typography: Typography;
    clamp?: 2 | 3 | 4;
    ellipsis?: boolean;
    mode?: 'default' | 'secondary';
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
    mode: "default" | "secondary";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
