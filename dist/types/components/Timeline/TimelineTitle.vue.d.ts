export interface TimelineTitleProps {
    Element?: "h2" | "h3" | "h4" | "div" | "span";
}
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<TimelineTitleProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<TimelineTitleProps> & Readonly<{}>, {
    Element: "h2" | "h3" | "h4" | "div" | "span";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
