import "floating-vue/dist/style.css";
type TooltipDelay = string | number | {
    show: number;
    hide: number;
};
export interface TooltipProps {
    mode?: "default" | "contrast";
    delay?: TooltipDelay;
    stretched?: boolean;
}
declare var __VLS_6: {}, __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
} & {
    popper?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<TooltipProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<TooltipProps> & Readonly<{}>, {
    mode: "default" | "contrast";
    stretched: boolean;
    delay: TooltipDelay;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
