interface ModalProps {
    isOpened?: boolean;
    onClose?: () => void;
    showCloseButton?: boolean;
    title?: string;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<ModalProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ModalProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
