import type { ComponentSize } from "../../types";
export type BubbleMode = "default" | "contrast" | "accent" | "secondary" | "ghost" | "outlined" | "negative" | "positive" | "danger" | "warning";
export type BubbleAlign = "start" | "end";
export type BubbleSize = ComponentSize;
export interface BubbleProps {
    /** Визуальный тон поверхности сообщения. */
    mode?: BubbleMode;
    /** Расположение сообщения в строке диалога. */
    align?: BubbleAlign;
    /** Плотность и типографика сообщения. */
    size?: BubbleSize;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<BubbleProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<BubbleProps> & Readonly<{}>, {
    mode: BubbleMode;
    size: BubbleSize;
    align: BubbleAlign;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
