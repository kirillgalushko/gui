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
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<GridColumnProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<GridColumnProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
