import type { Gap, Align } from "../../types";
type JustifyContent = "start" | "center" | "end" | "space-between";
export interface StackProps {
    direction: "row" | "column";
    gap?: Gap;
    fullHeight?: boolean;
    alignItems?: Align;
    justifyContent?: JustifyContent;
    stretched?: boolean;
    wrap?: boolean;
    grow?: boolean;
    shrink?: boolean;
    minWidth?: string;
    maxWidth?: string;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<StackProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<StackProps> & Readonly<{}>, {
    shrink: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
