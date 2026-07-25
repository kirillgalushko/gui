<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { IconChevronLeftOutline, IconChevronRightOutline } from "@gui/icons";
import Button from "../Button/Button.vue";
import {
  addDays,
  endOfDay,
  isAfterDay,
  isBeforeDay,
  isSameDay,
  startOfDay,
  toDate,
} from "../../utils/date";
import type {
  CalendarDay,
  CalendarMode,
  CalendarMonthChangePayload,
  CalendarRangePayload,
  CalendarRangeValue,
  CalendarSelectPayload,
  CalendarSize,
  CalendarValue,
} from "./types";

const props = withDefaults(
  defineProps<{
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
    size?: CalendarSize;
  }>(),
  {
    mode: "single",
    modelValue: null,
    rangeValue: () => ({ start: null, end: null }),
    month: undefined,
    minDate: null,
    maxDate: null,
    disabledDates: undefined,
    showOutsideDays: true,
    fixedWeeks: false,
    readonly: false,
    size: "medium",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: Date | null];
  "update:rangeValue": [value: CalendarRangePayload];
  "update:month": [value: Date];
  select: [payload: CalendarSelectPayload];
  "range-select": [payload: CalendarRangePayload];
  "range-drag-start": [payload: CalendarRangePayload];
  "range-drag": [payload: CalendarRangePayload];
  "range-drag-end": [payload: CalendarRangePayload];
  "month-change": [payload: CalendarMonthChangePayload];
  "day-hover": [payload: CalendarSelectPayload];
}>();

const weekdayLabels = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const normalizeNullableDate = (
  value: CalendarValue | undefined,
): Date | null => {
  if (!value) {
    return null;
  }

  return startOfDay(toDate(value));
};

const getMonthStart = (date: Date): Date =>
  startOfDay(new Date(date.getFullYear(), date.getMonth(), 1));

const addMonths = (date: Date, amount: number): Date => {
  const nextDate = new Date(date);
  nextDate.setMonth(nextDate.getMonth() + amount, 1);

  return getMonthStart(nextDate);
};

const selectedSingleDate = computed(() =>
  normalizeNullableDate(props.modelValue),
);
const selectedRange = computed(() => ({
  start: normalizeNullableDate(props.rangeValue.start),
  end: normalizeNullableDate(props.rangeValue.end),
}));

const getInitialMonth = (): Date => {
  if (props.month) {
    return getMonthStart(toDate(props.month));
  }

  if (props.mode === "range" && selectedRange.value.start) {
    return getMonthStart(selectedRange.value.start);
  }

  if (selectedSingleDate.value) {
    return getMonthStart(selectedSingleDate.value);
  }

  return getMonthStart(new Date());
};

const visibleMonth = ref(getInitialMonth());
const pendingRangeStart = ref<Date | null>(
  selectedRange.value.start && !selectedRange.value.end
    ? selectedRange.value.start
    : null,
);
const hoveredRangeDate = ref<Date | null>(null);
const activeRangeDragPoint = ref<"start" | "end" | null>(null);
const dragRangePreview = ref<CalendarRangePayload | null>(null);
const suppressNextClick = ref(false);

watch(
  () => props.month,
  (nextMonth) => {
    if (nextMonth) {
      visibleMonth.value = getMonthStart(toDate(nextMonth));
    }
  },
);

watch(
  () => props.mode,
  () => {
    pendingRangeStart.value = null;
    hoveredRangeDate.value = null;
    activeRangeDragPoint.value = null;
    dragRangePreview.value = null;
  },
);

const monthTitle = computed(() =>
  new Intl.DateTimeFormat("ru-RU", { month: "long", year: "numeric" })
    .format(visibleMonth.value)
    .replace(" г.", ""),
);

const gridStart = computed(() => {
  const monthStart = getMonthStart(visibleMonth.value);
  const day = monthStart.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  return addDays(monthStart, diff);
});

const gridEnd = computed(() => {
  if (props.fixedWeeks) {
    return endOfDay(addDays(gridStart.value, 41));
  }

  const monthEnd = endOfDay(
    new Date(
      visibleMonth.value.getFullYear(),
      visibleMonth.value.getMonth() + 1,
      0,
    ),
  );
  const day = monthEnd.getDay();
  const diff = day === 0 ? 0 : 7 - day;

  return endOfDay(addDays(monthEnd, diff));
});

const isDisabledDate = (date: Date): boolean => {
  const minDate = normalizeNullableDate(props.minDate ?? null);
  const maxDate = normalizeNullableDate(props.maxDate ?? null);

  if (minDate && isBeforeDay(date, minDate)) {
    return true;
  }

  if (maxDate && isAfterDay(date, maxDate)) {
    return true;
  }

  return props.disabledDates?.(date) ?? false;
};

const getRangeBoundaries = () => {
  if (props.mode !== "range") {
    return { start: null, end: null };
  }

  if (activeRangeDragPoint.value) {
    return dragRangePreview.value ?? selectedRange.value;
  }

  if (pendingRangeStart.value && hoveredRangeDate.value) {
    return isAfterDay(pendingRangeStart.value, hoveredRangeDate.value)
      ? {
          start: hoveredRangeDate.value,
          end: pendingRangeStart.value,
        }
      : {
          start: pendingRangeStart.value,
          end: hoveredRangeDate.value,
        };
  }

  if (pendingRangeStart.value) {
    return {
      start: pendingRangeStart.value,
      end: pendingRangeStart.value,
    };
  }

  return selectedRange.value;
};

const calendarDays = computed<CalendarDay[]>(() => {
  const days: CalendarDay[] = [];
  const today = new Date();
  const range = getRangeBoundaries();
  let cursor = startOfDay(gridStart.value);

  while (cursor <= gridEnd.value) {
    const date = new Date(cursor);
    const isCurrentMonth = date.getMonth() === visibleMonth.value.getMonth();
    const day = date.getDay();
    const rangeStart = range.start;
    const rangeEnd = range.end;
    const hasRangeBackground = Boolean(
      rangeStart && rangeEnd && !isSameDay(rangeStart, rangeEnd),
    );
    const isRangeStart = Boolean(rangeStart && isSameDay(date, rangeStart));
    const isRangeEnd = Boolean(rangeEnd && isSameDay(date, rangeEnd));
    const isInRange = Boolean(
      rangeStart && rangeEnd && date > rangeStart && date < rangeEnd,
    );
    const isSelected =
      props.mode === "single"
        ? Boolean(
            selectedSingleDate.value &&
            isSameDay(date, selectedSingleDate.value),
          )
        : isRangeStart || isRangeEnd;

    days.push({
      date,
      id: date.toISOString(),
      isCurrentMonth,
      isToday: isSameDay(date, today),
      isWeekend: day === 0 || day === 6,
      isSelected,
      isRangeStart,
      isRangeEnd,
      isInRange,
      hasRangeBackground,
      isDisabled: isDisabledDate(date),
    });

    cursor = addDays(cursor, 1);
  }

  return days;
});

const displayedDays = computed(() =>
  props.showOutsideDays
    ? calendarDays.value
    : calendarDays.value.filter((day) => day.isCurrentMonth),
);

const setVisibleMonth = (
  month: Date,
  direction: CalendarMonthChangePayload["direction"],
): void => {
  visibleMonth.value = getMonthStart(month);
  emit("update:month", visibleMonth.value);
  emit("month-change", {
    month: visibleMonth.value,
    direction,
  });
};

const showPreviousMonth = (): void => {
  setVisibleMonth(addMonths(visibleMonth.value, -1), "previous");
};

const showNextMonth = (): void => {
  setVisibleMonth(addMonths(visibleMonth.value, 1), "next");
};

const selectSingleDay = (day: CalendarDay): void => {
  emit("update:modelValue", day.date);
  emit("select", {
    date: day.date,
    day,
  });
};

const selectRangeDay = (day: CalendarDay): void => {
  if (
    !pendingRangeStart.value ||
    (selectedRange.value.start && selectedRange.value.end)
  ) {
    pendingRangeStart.value = day.date;
    hoveredRangeDate.value = day.date;
    const payload = { start: day.date, end: null };

    emit("update:rangeValue", payload);
    emit("range-select", payload);
    return;
  }

  const start = isAfterDay(pendingRangeStart.value, day.date)
    ? day.date
    : pendingRangeStart.value;
  const end = isAfterDay(pendingRangeStart.value, day.date)
    ? pendingRangeStart.value
    : day.date;
  const payload = { start, end };

  pendingRangeStart.value = null;
  hoveredRangeDate.value = null;
  emit("update:rangeValue", payload);
  emit("range-select", payload);
};

const selectDay = (day: CalendarDay): void => {
  if (suppressNextClick.value) {
    suppressNextClick.value = false;
    return;
  }

  if (props.readonly || day.isDisabled) {
    return;
  }

  if (props.mode === "single") {
    selectSingleDay(day);
    return;
  }

  selectRangeDay(day);
};

const handleDayHover = (day: CalendarDay): void => {
  if (
    props.mode === "range" &&
    pendingRangeStart.value &&
    !activeRangeDragPoint.value &&
    !day.isDisabled
  ) {
    hoveredRangeDate.value = day.date;
  }

  if (activeRangeDragPoint.value && !day.isDisabled) {
    updateRangeDrag(day.date);
  }

  emit("day-hover", {
    date: day.date,
    day,
  });
};

const buildRangePayload = (
  firstDate: Date,
  secondDate: Date,
): CalendarRangePayload =>
  isAfterDay(firstDate, secondDate)
    ? {
        start: secondDate,
        end: firstDate,
      }
    : {
        start: firstDate,
        end: secondDate,
      };

const updateRangeDrag = (date: Date, shouldEmit = true): void => {
  if (
    !activeRangeDragPoint.value ||
    !selectedRange.value.start ||
    !selectedRange.value.end
  ) {
    return;
  }

  const payload =
    activeRangeDragPoint.value === "start"
      ? buildRangePayload(date, selectedRange.value.end)
      : buildRangePayload(selectedRange.value.start, date);

  dragRangePreview.value = payload;
  emit("update:rangeValue", payload);

  if (shouldEmit) {
    emit("range-drag", payload);
  }
};

const stopRangeDrag = (): void => {
  const payload = dragRangePreview.value ?? selectedRange.value;

  if (payload.start && payload.end) {
    emit("range-drag-end", payload);
  }

  activeRangeDragPoint.value = null;
  dragRangePreview.value = null;
  suppressNextClick.value = true;
  window.removeEventListener("pointerup", stopRangeDrag);
  window.removeEventListener("pointercancel", stopRangeDrag);
};

const startRangeDrag = (
  day: CalendarDay,
  point: "start" | "end",
  event: PointerEvent,
): void => {
  if (
    props.readonly ||
    props.mode !== "range" ||
    day.isDisabled ||
    !selectedRange.value.start ||
    !selectedRange.value.end
  ) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  activeRangeDragPoint.value = point;
  updateRangeDrag(day.date, false);
  emit("range-drag-start", {
    start: selectedRange.value.start,
    end: selectedRange.value.end,
  });
  window.addEventListener("pointerup", stopRangeDrag);
  window.addEventListener("pointercancel", stopRangeDrag);
};

onBeforeUnmount(() => {
  window.removeEventListener("pointerup", stopRangeDrag);
  window.removeEventListener("pointercancel", stopRangeDrag);
});
</script>

<template>
  <section :class="['calendar', props.size]">
    <header class="calendar__header">
      <Button
        mode="ghost"
        :size="props.size"
        squared
        type="button"
        aria-label="Предыдущий месяц"
        @click="showPreviousMonth"
      >
        <IconChevronLeftOutline />
      </Button>

      <slot name="title" :month="visibleMonth">
        <span class="calendar__title">{{ monthTitle }}</span>
      </slot>

      <Button
        mode="ghost"
        :size="props.size"
        squared
        type="button"
        aria-label="Следующий месяц"
        @click="showNextMonth"
      >
        <IconChevronRightOutline />
      </Button>
    </header>

    <div class="calendar__weekdays">
      <div
        v-for="(label, index) in weekdayLabels"
        :key="label"
        class="calendar__weekday"
        :class="{ calendar__weekday_weekend: index >= 5 }"
      >
        {{ label }}
      </div>
    </div>

    <div class="calendar__days">
      <button
        v-for="day in displayedDays"
        :key="day.id"
        class="calendar__day"
        :class="{
          calendar__day_outside: !day.isCurrentMonth,
          calendar__day_today: day.isToday,
          calendar__day_weekend: day.isWeekend,
          calendar__day_selected: day.isSelected,
          'calendar__day_range-start': day.isRangeStart,
          'calendar__day_range-end': day.isRangeEnd,
          'calendar__day_in-range': day.isInRange,
          'calendar__day_range-background':
            day.hasRangeBackground &&
            (day.isInRange || day.isRangeStart || day.isRangeEnd),
          calendar__day_disabled: day.isDisabled,
          calendar__day_draggable:
            mode === 'range' &&
            (day.isRangeStart || day.isRangeEnd) &&
            !day.isDisabled,
          calendar__day_dragging:
            activeRangeDragPoint && (day.isRangeStart || day.isRangeEnd),
        }"
        type="button"
        :disabled="day.isDisabled"
        @click="selectDay(day)"
        @pointerenter="handleDayHover(day)"
        @pointerdown="
          day.isRangeStart
            ? startRangeDrag(day, 'start', $event)
            : day.isRangeEnd
              ? startRangeDrag(day, 'end', $event)
              : undefined
        "
      >
        <slot name="day" :day="day">
          <span class="calendar__day-number">{{ day.date.getDate() }}</span>
        </slot>
      </button>
    </div>

    <slot name="footer" :mode="mode" :month="visibleMonth" />
  </section>
</template>

<style scoped>
.calendar {
  --calendar-selected-color: hsl(var(--secondary-foreground));
  --calendar-selected-foreground-color: hsl(var(--secondary));
  --calendar-range-background-color: hsl(var(--muted));
  --calendar-hover-background-color: hsl(var(--contrast));
  --calendar-today-background-color: hsl(var(--muted));

  width: min(
    100%,
    calc(var(--calendar-cell-size) * 7 + var(--calendar-horizontal-space) * 2)
  );
  color: hsl(var(--foreground));
  font-family: var(--font-family);
}

.calendar.large {
  --calendar-cell-size: clamp(36px, 9vw, 48px);
  --calendar-horizontal-space: var(--gap-6);
  --calendar-navigation-size: 40px;
  --calendar-header-margin: var(--gap-4);
  --calendar-title-font-size: 16px;
  --calendar-weekday-height: 28px;
  --calendar-weekday-font-size: 13px;
  --calendar-day-font-size: 16px;
  --calendar-day-number-size: 36px;
  --calendar-day-radius: 16px;
  --calendar-range-inset: 6px;
}

.calendar.medium {
  --calendar-cell-size: clamp(32px, 8vw, 40px);
  --calendar-horizontal-space: var(--gap-4);
  --calendar-navigation-size: 36px;
  --calendar-header-margin: var(--gap-3);
  --calendar-title-font-size: 14px;
  --calendar-weekday-height: 24px;
  --calendar-weekday-font-size: 12px;
  --calendar-day-font-size: 14px;
  --calendar-day-number-size: 32px;
  --calendar-day-radius: 14px;
  --calendar-range-inset: 4px;
}

.calendar.small {
  --calendar-cell-size: clamp(28px, 7vw, 32px);
  --calendar-horizontal-space: var(--gap-3);
  --calendar-navigation-size: 32px;
  --calendar-header-margin: var(--gap-2);
  --calendar-title-font-size: 13px;
  --calendar-weekday-height: 20px;
  --calendar-weekday-font-size: 11px;
  --calendar-day-font-size: 13px;
  --calendar-day-number-size: 28px;
  --calendar-day-radius: 12px;
  --calendar-range-inset: 2px;
}

.calendar,
.calendar * {
  box-sizing: border-box;
}

.calendar__header {
  display: grid;
  grid-template-columns:
    var(--calendar-navigation-size) minmax(0, 1fr)
    var(--calendar-navigation-size);
  align-items: center;
  gap: var(--gap-2);
  margin-bottom: var(--calendar-header-margin);
}

.calendar__title {
  overflow: hidden;
  font-size: var(--calendar-title-font-size);
  font-weight: 600;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
}

.calendar__weekdays,
.calendar__days {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.calendar__weekdays {
  padding-bottom: var(--gap-2);
  border-bottom: 1px solid hsl(var(--border));
  margin-bottom: var(--gap-2);
}

.calendar__weekday {
  display: flex;
  min-height: var(--calendar-weekday-height);
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
  font-size: var(--calendar-weekday-font-size);
  font-weight: 600;
  text-transform: uppercase;
}

.calendar__weekday_weekend {
  color: var(--calendar-selected-color);
}

.calendar__day {
  position: relative;
  display: flex;
  min-width: 0;
  height: var(--calendar-cell-size);
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: hsl(var(--foreground));
  cursor: pointer;
  font: inherit;
  font-size: var(--calendar-day-font-size);
  padding: 0;
}

.calendar__day_draggable {
  cursor: grab;
}

.calendar__day_dragging,
.calendar__day_dragging:active {
  cursor: grabbing;
}

.calendar__day::before {
  position: absolute;
  inset: var(--calendar-range-inset) 0;
  background: transparent;
  content: "";
}

.calendar__day:not(.calendar__day_selected):hover .calendar__day-number,
.calendar__day:not(.calendar__day_selected):focus-visible
  .calendar__day-number {
  background: var(--calendar-hover-background-color);
}

.calendar__day:focus-visible {
  outline: 0;
}

.calendar__day-number {
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: var(--calendar-day-number-size);
  height: var(--calendar-day-number-size);
  align-items: center;
  justify-content: center;
  border-radius: var(--calendar-day-radius);
  line-height: 1;
}

.calendar__day_outside {
  color: hsl(var(--muted-foreground) / 60%);
}

.calendar__day_weekend:not(.calendar__day_outside):not(
    .calendar__day_selected
  ):not(.calendar__day_disabled) {
  color: var(--calendar-selected-color);
}

.calendar__day_today .calendar__day-number {
  background-color: var(--calendar-today-background-color);
}

.calendar__day_range-background::before {
  background: color-mix(
    in oklab,
    var(--calendar-range-background-color) 18%,
    transparent
  );
}

.calendar__day_range-background.calendar__day_range-start::before {
  left: 50%;
}

.calendar__day_range-background.calendar__day_range-end::before {
  right: 50%;
}

.calendar__day_range-background:nth-child(7n + 1)::before {
  border-top-left-radius: var(--calendar-day-radius);
  border-bottom-left-radius: var(--calendar-day-radius);
}

.calendar__day_range-background:nth-child(7n)::before {
  border-top-right-radius: var(--calendar-day-radius);
  border-bottom-right-radius: var(--calendar-day-radius);
}

.calendar__day_range-background.calendar__day_range-start.calendar__day_range-end::before {
  inset: var(--calendar-range-inset);
  border-radius: var(--calendar-day-radius);
}

.calendar__day_selected .calendar__day-number,
.calendar__day_range-start .calendar__day-number,
.calendar__day_range-end .calendar__day-number {
  background: var(--calendar-selected-color);
  color: var(--calendar-selected-foreground-color);
}

.calendar__day_disabled {
  color: hsl(var(--muted-foreground) / 35%);
  cursor: not-allowed;
}

.calendar__day_disabled .calendar__day-number {
  background: transparent;
}
</style>
