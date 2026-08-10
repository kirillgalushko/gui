import { type TimelineDatePosition, type TimelineDirection, type TimelineOrientation, type TimelineStep } from "./types";
export interface TimelineProps {
    orientation?: TimelineOrientation;
    direction?: TimelineDirection;
    datePosition?: TimelineDatePosition;
    activeStep?: TimelineStep;
    railSize?: string;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<TimelineProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<TimelineProps> & Readonly<{}>, {
    direction: TimelineDirection;
    orientation: TimelineOrientation;
    datePosition: TimelineDatePosition;
    railSize: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
