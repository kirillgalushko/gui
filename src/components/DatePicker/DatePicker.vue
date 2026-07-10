<script setup lang="ts">
import { computed, ref } from 'vue';
import { IconCalendarOutline } from '@gui/icons';

import Calendar from '../Calendar/Calendar.vue';
import Dropdown from '../Dropdown/Dropdown.vue';
import Picker from '../Picker/Picker.vue';
import { formatRuDayMonth, isAfterDay, isBeforeDay, startOfDay } from '../../utils/date';
import type { DatePickerChangePayload, DatePickerValue } from './types';

export interface DatePickerProps {
  value?: DatePickerValue;
  onChange?: (payload: DatePickerChangePayload) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  stretched?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  value: null,
  placeholder: 'Выберите дату',
});

const isCalendarOpened = ref(false);

const selectedDate = computed(() => props.value ? startOfDay(props.value) : null);

const label = computed(() => {
  if (!selectedDate.value) {
    return props.placeholder;
  }

  return `${formatRuDayMonth(selectedDate.value)} ${selectedDate.value.getFullYear()}`;
});

const isSelectedDateDisabled = (date: Date): boolean => {
  if (props.minDate && isBeforeDay(date, props.minDate)) {
    return true;
  }

  if (props.maxDate && isAfterDay(date, props.maxDate)) {
    return true;
  }

  return false;
};

const toggleCalendar = (): void => {
  if (props.disabled) {
    return;
  }

  isCalendarOpened.value = !isCalendarOpened.value;
};

const selectDate = ({ date }: { date: Date }): void => {
  const nextDate = startOfDay(date);

  if (isSelectedDateDisabled(nextDate)) {
    return;
  }

  props.onChange?.({ value: nextDate });
  isCalendarOpened.value = false;
};
</script>

<template>
  <Dropdown v-model:shown="isCalendarOpened" :triggers="[]" placement="bottom" :distance="8">
    <Picker :stretched="props.stretched" :disabled="props.disabled" aria-haspopup="dialog"
      :aria-expanded="isCalendarOpened" @click="toggleCalendar">
      {{ label }}
      <template #icon>
        <IconCalendarOutline />
      </template>
    </Picker>

    <template #popper>
      <Calendar :model-value="selectedDate" :min-date="props.minDate" :max-date="props.maxDate"
        @select="selectDate" />
    </template>
  </Dropdown>
</template>
