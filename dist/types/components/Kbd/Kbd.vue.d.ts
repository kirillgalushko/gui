import type { ComponentSize } from "../../types";
export type KbdMode = "default" | "contrast" | "secondary" | "outline";
export type KbdSize = ComponentSize;
export interface KbdProps {
    mode?: KbdMode;
    size?: KbdSize;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<KbdProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<KbdProps> & Readonly<{}>, {
    mode: KbdMode;
    size: KbdSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
