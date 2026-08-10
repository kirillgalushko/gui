export interface GridLayoutProps {
    mode?: "container" | "viewport";
    gutter?: string;
    highlight?: boolean;
    stretched?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<GridLayoutProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<GridLayoutProps> & Readonly<{}>, {
    mode: "container" | "viewport";
    stretched: boolean;
    gutter: string;
    highlight: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
