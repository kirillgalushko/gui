<script setup lang="ts">
import { computed, ref } from 'vue';
import { IconChevronLeftOutline, IconChevronRightOutline } from '@gui/icons';

import Button from '../Button/Button.vue';
import ButtonGroup from '../ButtonGroup/ButtonGroup.vue';
import Dropdown from '../Dropdown/Dropdown.vue';
import Calendar from '../Calendar/Calendar.vue';
import {
  addDays,
  addMonths,
  addYears,
  formatRuDayMonth,
  formatRuMonthYear,
  formatRuShortWeekdayMonthDay,
  isAfterDay,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from '../../utils/date';
import type { DateNavigatorChangePayload, DateNavigatorMode, DateNavigatorRange } from './types';

export interface DateNavigatorProps {
  value: Date;
  mode?: DateNavigatorMode;
  onChange: (payload: DateNavigatorChangePayload) => void;
  minDate?: Date;
  maxDate?: Date;
}

const props = withDefaults(defineProps<DateNavigatorProps>(), {
  mode: 'day',
});
const isCalendarOpened = ref(false);

const getPeriodStart = (date: Date, mode: DateNavigatorMode): Date => {
  if (mode === 'week') {
    return startOfWeek(date);
  }

  if (mode === 'month') {
    return startOfMonth(date);
  }

  if (mode === 'year') {
    return startOfYear(date);
  }

  return startOfDay(date);
};

const shiftPeriod = (date: Date, mode: DateNavigatorMode, amount: number): Date => {
  if (mode === 'week') {
    return addDays(date, amount * 7);
  }

  if (mode === 'month') {
    return addMonths(date, amount);
  }

  if (mode === 'year') {
    return addYears(date, amount);
  }

  return addDays(date, amount);
};

const getPeriodRange = (date: Date, mode: DateNavigatorMode): DateNavigatorRange => {
  const start = getPeriodStart(date, mode);

  return {
    start,
    end: shiftPeriod(start, mode, 1),
  };
};

const normalizedValue = computed(() => getPeriodStart(props.value, props.mode));
const currentRange = computed(() => getPeriodRange(normalizedValue.value, props.mode));

const previousDate = computed(() => shiftPeriod(normalizedValue.value, props.mode, -1));
const nextDate = computed(() => shiftPeriod(normalizedValue.value, props.mode, 1));
const previousRange = computed(() => getPeriodRange(previousDate.value, props.mode));
const nextRange = computed(() => getPeriodRange(nextDate.value, props.mode));

const isRangeBeforeMinDate = (range: DateNavigatorRange): boolean =>
  props.minDate ? !isAfterDay(range.end, props.minDate) : false;

const isRangeAfterMaxDate = (range: DateNavigatorRange): boolean =>
  props.maxDate ? isAfterDay(range.start, props.maxDate) : false;

const isPreviousDisabled = computed(() => isRangeBeforeMinDate(previousRange.value));
const isNextDisabled = computed(() => isRangeAfterMaxDate(nextRange.value));

const label = computed(() => {
  if (props.mode === 'week') {
    return `${formatRuDayMonth(currentRange.value.start)} - ${formatRuDayMonth(addDays(currentRange.value.end, -1))}`;
  }

  if (props.mode === 'month') {
    return formatRuMonthYear(normalizedValue.value);
  }

  if (props.mode === 'year') {
    return String(normalizedValue.value.getFullYear());
  }

  return formatRuShortWeekdayMonthDay(normalizedValue.value);
});

const changeDate = (date: Date): void => {
  const value = getPeriodStart(date, props.mode);

  props.onChange({
    value,
    mode: props.mode,
    range: getPeriodRange(value, props.mode),
  });
};

const toggleCalendar = (): void => {
  isCalendarOpened.value = !isCalendarOpened.value;
};

const showPreviousDate = (): void => {
  if (isPreviousDisabled.value) {
    return;
  }

  changeDate(previousRange.value.start);
};

const showNextDate = (): void => {
  if (isNextDisabled.value) {
    return;
  }

  changeDate(nextRange.value.start);
};

const selectDate = ({ date }: { date: Date }): void => {
  changeDate(date);
  isCalendarOpened.value = false;
};
</script>

<template>
  <Dropdown v-model:shown="isCalendarOpened" :triggers="[]" placement="bottom" :distance="8">
    <ButtonGroup aria-label="Выбор даты">
      <Button mode="outline" size="large" squared type="button" aria-label="Предыдущий день"
        :disabled="isPreviousDisabled" @click="showPreviousDate">
        <IconChevronLeftOutline />
      </Button>

      <Button mode="outline" size="large" type="button" aria-haspopup="dialog" :aria-expanded="isCalendarOpened"
        @click="toggleCalendar">
        {{ label }}
      </Button>

      <Button mode="outline" size="large" squared type="button" aria-label="Следующий день" :disabled="isNextDisabled"
        @click="showNextDate">
        <IconChevronRightOutline />
      </Button>
    </ButtonGroup>

    <template #popper>
      <Calendar :model-value="normalizedValue" :min-date="props.minDate" :max-date="props.maxDate"
        @select="selectDate" />
    </template>
  </Dropdown>
</template>
