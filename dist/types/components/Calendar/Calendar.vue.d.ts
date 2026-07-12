import type { CalendarDay, CalendarMode, CalendarMonthChangePayload, CalendarRangePayload, CalendarRangeValue, CalendarSelectPayload, CalendarValue } from './types';
declare function __VLS_template(): {
    slots: {
        title?(_: {
            month: Date;
        }): any;
        day?(_: {
            day: CalendarDay;
        }): any;
        footer?(_: {
            mode: CalendarMode;
            month: Date;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<{
    mode?: CalendarMode;
    modelValue?: CalendarValue;
    rangeValue?: CalendarRangeValue;
    month?: Date | string;
    minDate?: Date | string | null;
    maxDate?: Date | string | null;
    disabledDates?: (date: Date) => boolean;
    showOutsideDays?: boolean;
    fixedWeeks?: boolean;
    readonly?: boolean;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (payload: CalendarSelectPayload) => any;
    "update:modelValue": (value: Date | null) => any;
    "update:rangeValue": (value: CalendarRangePayload) => any;
    "update:month": (value: Date) => any;
    "range-select": (payload: CalendarRangePayload) => any;
    "range-drag-start": (payload: CalendarRangePayload) => any;
    "range-drag": (payload: CalendarRangePayload) => any;
    "range-drag-end": (payload: CalendarRangePayload) => any;
    "month-change": (payload: CalendarMonthChangePayload) => any;
    "day-hover": (payload: CalendarSelectPayload) => any;
}, string, import("vue").PublicProps, Readonly<{
    mode?: CalendarMode;
    modelValue?: CalendarValue;
    rangeValue?: CalendarRangeValue;
    month?: Date | string;
    minDate?: Date | string | null;
    maxDate?: Date | string | null;
    disabledDates?: (date: Date) => boolean;
    showOutsideDays?: boolean;
    fixedWeeks?: boolean;
    readonly?: boolean;
}> & Readonly<{
    onSelect?: ((payload: CalendarSelectPayload) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Date | null) => any) | undefined;
    "onUpdate:rangeValue"?: ((value: CalendarRangePayload) => any) | undefined;
    "onUpdate:month"?: ((value: Date) => any) | undefined;
    "onRange-select"?: ((payload: CalendarRangePayload) => any) | undefined;
    "onRange-drag-start"?: ((payload: CalendarRangePayload) => any) | undefined;
    "onRange-drag"?: ((payload: CalendarRangePayload) => any) | undefined;
    "onRange-drag-end"?: ((payload: CalendarRangePayload) => any) | undefined;
    "onMonth-change"?: ((payload: CalendarMonthChangePayload) => any) | undefined;
    "onDay-hover"?: ((payload: CalendarSelectPayload) => any) | undefined;
}>, {
    month: Date | string;
    mode: CalendarMode;
    modelValue: CalendarValue;
    readonly: boolean;
    rangeValue: CalendarRangeValue;
    minDate: Date | string | null;
    maxDate: Date | string | null;
    disabledDates: (date: Date) => boolean;
    showOutsideDays: boolean;
    fixedWeeks: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
