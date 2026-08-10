import { type PropType } from "vue";
export type TableColumnSize = string | number;
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<TableColumnSize>;
        required: false;
    };
    minWidth: {
        type: PropType<TableColumnSize>;
        required: false;
    };
    maxWidth: {
        type: PropType<TableColumnSize>;
        required: false;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<TableColumnSize>;
        required: false;
    };
    minWidth: {
        type: PropType<TableColumnSize>;
        required: false;
    };
    maxWidth: {
        type: PropType<TableColumnSize>;
        required: false;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
