import type { Color } from "../../types/colors";
import { type TimelineIndicatorSize, type TimelineIndicatorVariant, type TimelineTone } from "./types";
export interface TimelineIndicatorProps {
    variant?: TimelineIndicatorVariant;
    size?: TimelineIndicatorSize;
    mode?: TimelineTone;
    color?: Color;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<TimelineIndicatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<TimelineIndicatorProps> & Readonly<{}>, {
    mode: TimelineTone;
    size: TimelineIndicatorSize;
    variant: TimelineIndicatorVariant;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
