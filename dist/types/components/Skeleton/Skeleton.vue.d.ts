export interface SkeletonProps {
    Element?: "div" | "span";
    loading?: boolean;
    animated?: boolean;
    width?: string;
    height?: string;
    radius?: string;
    circle?: boolean;
}
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SkeletonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SkeletonProps> & Readonly<{}>, {
    width: string;
    height: string;
    Element: "div" | "span";
    animated: boolean;
    radius: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
