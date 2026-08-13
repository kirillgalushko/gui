import { type CSSProperties, type PropType } from "vue";
export interface TableProps {
    border?: boolean;
    layout?: "auto" | "fixed";
    minWidth?: CSSProperties["minWidth"] | number;
    maxHeight?: CSSProperties["maxHeight"] | number;
    stickyHeader?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    layout: {
        type: PropType<TableProps["layout"]>;
        default: string;
    };
    minWidth: {
        type: PropType<TableProps["minWidth"]>;
        default: undefined;
    };
    maxHeight: {
        type: PropType<TableProps["maxHeight"]>;
        default: undefined;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    layout: {
        type: PropType<TableProps["layout"]>;
        default: string;
    };
    minWidth: {
        type: PropType<TableProps["minWidth"]>;
        default: undefined;
    };
    maxHeight: {
        type: PropType<TableProps["maxHeight"]>;
        default: undefined;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    minWidth: import("csstype").Property.MinWidth<string | number> | undefined;
    maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
    border: boolean;
    layout: "fixed" | "auto" | undefined;
    stickyHeader: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
