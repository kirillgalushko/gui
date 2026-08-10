import type { Color } from "../../types/colors";
export type IconContainerMode = "circle" | "plain" | "square";
export type IconContainerColor = Color;
export interface IconContainerProps {
    size?: string;
    mode?: IconContainerMode;
    color?: IconContainerColor;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<IconContainerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<IconContainerProps> & Readonly<{}>, {
    mode: IconContainerMode;
    size: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
