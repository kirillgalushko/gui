type SheetSide = "top" | "right" | "bottom" | "left";
type SheetSize = "auto" | "extra-small" | "small" | "medium" | "large" | "full";
type SheetMode = "default" | "floating";
export interface SheetProps {
    isOpened?: boolean;
    onClose?: () => void;
    contentStretched?: boolean;
    showCloseButton?: boolean;
    title?: string;
    description?: string;
    side?: SheetSide;
    size?: SheetSize;
    mode?: SheetMode;
    rounded?: boolean;
    showOverlay?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
}
declare var __VLS_19: {}, __VLS_30: {}, __VLS_46: {}, __VLS_51: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_19) => any;
} & {
    actions?: (props: typeof __VLS_30) => any;
} & {
    default?: (props: typeof __VLS_46) => any;
} & {
    footer?: (props: typeof __VLS_51) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SheetProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SheetProps> & Readonly<{}>, {
    mode: SheetMode;
    rounded: boolean;
    showCloseButton: boolean;
    side: SheetSide;
    showOverlay: boolean;
    closeOnOverlayClick: boolean;
    closeOnEscape: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
