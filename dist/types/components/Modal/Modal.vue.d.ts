type ModalSize = "small" | "medium" | "large" | "full";
export interface ModalProps {
    isOpened?: boolean;
    onClose?: () => void;
    showCloseButton?: boolean;
    title?: string;
    description?: string;
    size?: ModalSize;
}
declare var __VLS_35: {}, __VLS_40: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_35) => any;
} & {
    footer?: (props: typeof __VLS_40) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ModalProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ModalProps> & Readonly<{}>, {
    size: ModalSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
