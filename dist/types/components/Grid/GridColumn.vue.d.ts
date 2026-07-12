export type GridColumnExtraSmallSize = 0 | 1 | 2 | 3 | 4;
export type GridColumnSmallSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type GridColumnLargeSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface GridColumnProps {
    xs?: GridColumnExtraSmallSize;
    s?: GridColumnSmallSize;
    m?: GridColumnLargeSize;
    l?: GridColumnLargeSize;
    xl?: GridColumnLargeSize;
    xxl?: GridColumnLargeSize;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<GridColumnProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<GridColumnProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
