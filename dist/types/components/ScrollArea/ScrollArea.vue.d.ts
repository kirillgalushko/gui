import { type CSSProperties, type PropType } from "vue";
export type ScrollAreaOrientation = "vertical" | "horizontal" | "both";
export interface ScrollAreaProps {
    maxHeight?: CSSProperties["maxHeight"] | number;
    orientation?: ScrollAreaOrientation;
    keyboardFocusable?: boolean;
    stableScrollbar?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    maxHeight: {
        type: PropType<ScrollAreaProps["maxHeight"]>;
        default: undefined;
    };
    orientation: {
        type: PropType<ScrollAreaOrientation>;
        default: string;
    };
    keyboardFocusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    stableScrollbar: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    maxHeight: {
        type: PropType<ScrollAreaProps["maxHeight"]>;
        default: undefined;
    };
    orientation: {
        type: PropType<ScrollAreaOrientation>;
        default: string;
    };
    keyboardFocusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    stableScrollbar: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
    orientation: ScrollAreaOrientation;
    keyboardFocusable: boolean;
    stableScrollbar: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
