import { type CSSProperties, type PropType } from "vue";
export type ScrollAreaOrientation = "vertical" | "horizontal" | "both";
export interface ScrollAreaProps {
    maxHeight?: CSSProperties["maxHeight"] | number;
    orientation?: ScrollAreaOrientation;
    keyboardFocusable?: boolean;
    stableScrollbar?: boolean;
    fade?: boolean;
    fadeSize?: CSSProperties["width"] | number;
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
    fade: {
        type: BooleanConstructor;
        default: boolean;
    };
    fadeSize: {
        type: PropType<ScrollAreaProps["fadeSize"]>;
        default: undefined;
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
    fade: {
        type: BooleanConstructor;
        default: boolean;
    };
    fadeSize: {
        type: PropType<ScrollAreaProps["fadeSize"]>;
        default: undefined;
    };
}>> & Readonly<{}>, {
    maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
    orientation: ScrollAreaOrientation;
    keyboardFocusable: boolean;
    stableScrollbar: boolean;
    fade: boolean;
    fadeSize: import("csstype").Property.Width<string | number> | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
