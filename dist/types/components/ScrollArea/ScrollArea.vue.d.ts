import { type CSSProperties, type PropType } from "vue";
export type ScrollAreaOrientation = "vertical" | "horizontal" | "both";
export interface ScrollAreaProps {
    maxHeight?: CSSProperties["maxHeight"] | number;
    orientation?: ScrollAreaOrientation;
    keyboardFocusable?: boolean;
    stableScrollbar?: boolean;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
