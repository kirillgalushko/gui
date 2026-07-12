<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { IconCalendarOutline } from "@gui/icons";

import Action from "../Action/Action.vue";
import Calendar from "../Calendar/Calendar.vue";
import Dropdown from "../Dropdown/Dropdown.vue";
import Input from "../Input/Input.vue";
import {
  isAfterDay,
  isBeforeDay,
  isSameDay,
  startOfDay,
} from "../../utils/date";
import type { DateInputChangePayload, DateInputValue } from "./types";

defineOptions({
  inheritAttrs: false,
});

export interface DateInputProps {
  value?: DateInputValue;
  onChange?: (payload: DateInputChangePayload) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  invalid?: boolean;
  description?: string;
  errorMessage?: string;
  maxWidth?: string;
  placeholder?: string;
  stretched?: boolean;
}

const props = withDefaults(defineProps<DateInputProps>(), {
  value: null,
  maxWidth: "100%",
  placeholder: "дд.мм.гггг",
});

const dateInputRef = ref<HTMLDivElement | null>(null);
const isCalendarOpened = ref(false);
const inputValue = ref("");
const isInputInvalid = ref(false);
const minYear = 1900;
const maxYear = 2099;

const formatDateInput = (date: DateInputValue): string => {
  if (!date) {
    return "";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).padStart(4, "0");

  return `${day}.${month}.${year}`;
};

const getDateInputParts = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  const firstDayDigit = digits[0];
  const secondDayDigit = digits[1];

  if (!firstDayDigit) {
    return {
      day: "",
      month: "",
      year: "",
    };
  }

  let day = firstDayDigit;
  let tail = digits.slice(1);

  if (secondDayDigit) {
    const isValidTwoDigitDay =
      firstDayDigit === "0"
        ? Number(secondDayDigit) > 0
        : firstDayDigit === "1" || firstDayDigit === "2"
          ? true
          : firstDayDigit === "3"
            ? Number(secondDayDigit) <= 1
            : false;

    if (isValidTwoDigitDay) {
      day = `${firstDayDigit}${secondDayDigit}`;
      tail = digits.slice(2);
    } else {
      day = `0${firstDayDigit}`;
      tail = digits.slice(1);
    }
  } else if (Number(firstDayDigit) > 3) {
    day = `0${firstDayDigit}`;
    tail = "";
  }

  if (!tail) {
    return {
      day,
      month: "",
      year: "",
    };
  }

  const firstMonthDigit = tail[0];
  const secondMonthDigit = tail[1];

  if (!secondMonthDigit) {
    const shouldPadMonth = Number(firstMonthDigit) > 1;

    return {
      day,
      month: shouldPadMonth ? `0${firstMonthDigit}` : firstMonthDigit,
      year: "",
    };
  }

  if (firstMonthDigit === "0") {
    return {
      day,
      month:
        Number(secondMonthDigit) > 0 ? `0${secondMonthDigit}` : firstMonthDigit,
      year: Number(secondMonthDigit) > 0 ? tail.slice(2, 6) : tail.slice(1, 5),
    };
  }

  if (firstMonthDigit === "1") {
    const isValidTwoDigitMonth = Number(secondMonthDigit) <= 2;

    return {
      day,
      month: isValidTwoDigitMonth
        ? `${firstMonthDigit}${secondMonthDigit}`
        : `0${firstMonthDigit}`,
      year: isValidTwoDigitMonth ? tail.slice(2, 6) : tail.slice(1, 5),
    };
  }

  return {
    day,
    month: `0${firstMonthDigit}`,
    year: tail.slice(1, 5),
  };
};

const applyDateMask = (value: string): string => {
  const { day, month, year } = getDateInputParts(value);
  const parts = [day, month, year].filter(Boolean);

  return parts.join(".");
};

const parseInputDate = (value: string): Date | null => {
  const {
    day: dayPart,
    month: monthPart,
    year: yearPart,
  } = getDateInputParts(value);
  const currentDate = new Date();

  if (!dayPart) {
    return null;
  }

  const day = Number(dayPart);
  const month = monthPart ? Number(monthPart) : currentDate.getMonth() + 1;

  if (yearPart.length === 3 || yearPart.length > 4) {
    return null;
  }

  const year =
    yearPart.length === 0
      ? currentDate.getFullYear()
      : yearPart.length <= 2
        ? 2000 + Number(yearPart)
        : Number(yearPart);

  if (year < minYear || year > maxYear || month < 1 || month > 12 || day < 1) {
    return null;
  }

  const date = startOfDay(new Date(year, month - 1, day));

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
};

const isDateAllowed = (date: Date): boolean => {
  if (props.minDate && isBeforeDay(date, props.minDate)) {
    return false;
  }

  if (props.maxDate && isAfterDay(date, props.maxDate)) {
    return false;
  }

  return true;
};

const isSameInputDate = (
  firstDate: DateInputValue,
  secondDate: DateInputValue,
): boolean => {
  if (!firstDate || !secondDate) {
    return firstDate === secondDate;
  }

  return isSameDay(firstDate, secondDate);
};

const selectedDate = computed(() =>
  props.value ? startOfDay(props.value) : null,
);
const calendarMinDate = computed(() => {
  const defaultMinDate = new Date(minYear, 0, 1);

  if (!props.minDate || isAfterDay(defaultMinDate, props.minDate)) {
    return defaultMinDate;
  }

  return props.minDate;
});
const calendarMaxDate = computed(() => {
  const defaultMaxDate = new Date(maxYear, 11, 31);

  if (!props.maxDate || isBeforeDay(defaultMaxDate, props.maxDate)) {
    return defaultMaxDate;
  }

  return props.maxDate;
});

const emitChange = (
  value: DateInputValue,
  nextInputValue: string,
  isValid: boolean,
): void => {
  props.onChange?.({
    value,
    inputValue: nextInputValue,
    isValid,
  });
};

const commitInputValue = (): void => {
  if (!inputValue.value) {
    isInputInvalid.value = false;
    emitChange(null, "", true);
    return;
  }

  const parsedDate = parseInputDate(inputValue.value);
  const isValid = Boolean(parsedDate && isDateAllowed(parsedDate));

  isInputInvalid.value = !isValid;

  if (!parsedDate || !isValid) {
    emitChange(null, inputValue.value, false);
    return;
  }

  const nextInputValue = formatDateInput(parsedDate);

  inputValue.value = nextInputValue;
  emitChange(parsedDate, nextInputValue, true);
};

const updateInputValue = (value: unknown): void => {
  inputValue.value = applyDateMask(String(value ?? ""));
  isInputInvalid.value = false;
};

const handleInput = (event: Event): void => {
  const target = event.target;

  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const maskedValue = applyDateMask(target.value);

  target.value = maskedValue;
  inputValue.value = maskedValue;
  isInputInvalid.value = false;
};

const openCalendar = (): void => {
  if (props.disabled) {
    return;
  }

  isCalendarOpened.value = true;
};

const toggleCalendar = (): void => {
  if (props.disabled) {
    return;
  }

  isCalendarOpened.value = !isCalendarOpened.value;
};

const shouldAutoHideCalendar = (event: Event): boolean => {
  const target = event.target;

  if (target instanceof Node && dateInputRef.value?.contains(target)) {
    return false;
  }

  return true;
};

const selectDate = ({ date }: { date: Date }): void => {
  const nextDate = startOfDay(date);
  const nextInputValue = formatDateInput(nextDate);

  inputValue.value = nextInputValue;
  isInputInvalid.value = false;
  emitChange(nextDate, nextInputValue, true);
  isCalendarOpened.value = false;
};

watch(
  () => props.value,
  (nextValue) => {
    if (isSameInputDate(nextValue ?? null, parseInputDate(inputValue.value))) {
      return;
    }

    inputValue.value = formatDateInput(nextValue ?? null);
    isInputInvalid.value = false;
  },
  { immediate: true },
);
</script>

<template>
  <div
    ref="dateInputRef"
    :class="['date-input', { stretched: props.stretched }]"
  >
    <Dropdown
      v-model:shown="isCalendarOpened"
      :triggers="[]"
      placement="bottom-end"
      :distance="8"
      :stretched="props.stretched"
      :auto-hide="shouldAutoHideCalendar"
      popper-class="calendar-dropdown"
      no-auto-focus
    >
      <Input
        v-bind="$attrs"
        :model-value="inputValue"
        type="text"
        inputmode="numeric"
        autocomplete="off"
        :placeholder="props.placeholder"
        :max-width="props.maxWidth"
        :disabled="props.disabled"
        :description="props.description"
        :error-message="props.errorMessage"
        :invalid="props.invalid || isInputInvalid"
        @update:model-value="updateInputValue"
        @focus="openCalendar"
        @blur="commitInputValue"
        @input="handleInput"
        @keydown.enter.prevent="commitInputValue"
      >
        <template #rightAdornment>
          <Action
            type="button"
            aria-label="Открыть календарь"
            :aria-expanded="isCalendarOpened"
            :disabled="props.disabled"
            @click.prevent="toggleCalendar"
          >
            <IconCalendarOutline />
          </Action>
        </template>
      </Input>

      <template #popper>
        <Calendar
          :model-value="selectedDate"
          :min-date="calendarMinDate"
          :max-date="calendarMaxDate"
          @select="selectDate"
        />
      </template>
    </Dropdown>
  </div>
</template>

<style scoped>
.date-input {
  display: inline-flex;
  min-width: 0;
}

.date-input.stretched {
  width: 100%;
}
</style>
