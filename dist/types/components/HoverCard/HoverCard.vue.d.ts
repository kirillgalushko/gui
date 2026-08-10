export type HoverCardPlacement = "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
export interface HoverCardProps {
    open?: boolean;
    disabled?: boolean;
    placement?: HoverCardPlacement;
    openDelay?: number;
    closeDelay?: number;
    sideOffset?: number;
    updateKey?: string | number | boolean;
}
declare var __VLS_1: {}, __VLS_11: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    content?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<HoverCardProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<HoverCardProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    placement: HoverCardPlacement;
    open: boolean;
    openDelay: number;
    closeDelay: number;
    sideOffset: number;
    updateKey: string | number | boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
