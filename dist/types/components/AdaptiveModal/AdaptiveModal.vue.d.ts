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
declare var __VLS_5: {}, __VLS_7: {}, __VLS_13: {}, __VLS_15: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
} & {
    footer?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_13) => any;
} & {
    footer?: (props: typeof __VLS_15) => any;
};
declare const __VLS_component: import("vue").DefineComponent<AdaptiveModalProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AdaptiveModalProps> & Readonly<{}>, {
    showCloseButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
