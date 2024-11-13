export interface InputProps {
    maxWidth?: string;
    disabled?: boolean;
}
declare function __VLS_template(): {
    slots: {
        leftAdornment?(_: {}): any;
        rightAdornment?(_: {}): any;
    };
    refs: {
        leftAdornment: HTMLDivElement;
        rightAdornment: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<InputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<InputProps> & Readonly<{}>, {
    maxWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
