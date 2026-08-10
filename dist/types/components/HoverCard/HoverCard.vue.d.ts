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
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        targetRef: HTMLDivElement;
        floatingRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
