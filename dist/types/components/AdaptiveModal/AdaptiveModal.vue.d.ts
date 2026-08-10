import type { ModalProps } from "../Modal/Modal.vue";
import type { SheetProps } from "../Sheet/Sheet.vue";
type CommonOverlayProp = "isOpened" | "onClose" | "showCloseButton" | "title" | "description";
type AdaptiveSheetProp = CommonOverlayProp | "side";
export interface AdaptiveModalProps {
    isOpened?: boolean;
    onClose?: () => void;
    showCloseButton?: boolean;
    title?: string;
    description?: string;
    modalProps?: Partial<Omit<ModalProps, CommonOverlayProp>>;
    sheetProps?: Partial<Omit<SheetProps, AdaptiveSheetProp>>;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<AdaptiveModalProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AdaptiveModalProps> & Readonly<{}>, {
    showCloseButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
