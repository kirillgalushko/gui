import type { Color } from "../../types/colors";
import { type TimelineIndicatorSize, type TimelineIndicatorVariant, type TimelineTone } from "./types";
export interface TimelineIndicatorProps {
    variant?: TimelineIndicatorVariant;
    size?: TimelineIndicatorSize;
    mode?: TimelineTone;
    color?: Color;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<TimelineIndicatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<TimelineIndicatorProps> & Readonly<{}>, {
    mode: TimelineTone;
    size: TimelineIndicatorSize;
    variant: TimelineIndicatorVariant;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
