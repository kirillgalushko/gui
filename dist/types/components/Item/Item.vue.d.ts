import type { Padding } from "../../types";
export type ItemMode = "card" | "outlined" | "plain";
export type ItemSize = "medium" | "small" | "extra-small";
export interface ItemProps {
    interactive?: boolean;
    mode?: ItemMode;
    padding?: Padding;
    selected?: boolean;
    size?: ItemSize;
    stretched?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ItemProps> & Readonly<{}>, {
    mode: ItemMode;
    size: ItemSize;
    stretched: boolean;
    interactive: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
