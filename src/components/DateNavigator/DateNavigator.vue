<script setup lang="ts">
import { computed, ref } from 'vue';
import { IconChevronLeftOutline, IconChevronRightOutline } from '@gui/icons';

import Button from '../Button/Button.vue';
import ButtonGroup from '../ButtonGroup/ButtonGroup.vue';
import Dropdown from '../Dropdown/Dropdown.vue';
import Calendar from '../Calendar/Calendar.vue';
import { addDays, formatRuShortWeekdayMonthDay, isAfterDay, isBeforeDay, startOfDay } from '../../utils/date';

export interface DateNavigatorProps {
  value: Date;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const props = defineProps<DateNavigatorProps>();
const isCalendarOpened = ref(false);

const normalizedValue = computed(() => startOfDay(props.value));

const previousDate = computed(() => addDays(normalizedValue.value, -1));
const nextDate = computed(() => addDays(normalizedValue.value, 1));

const isPreviousDisabled = computed(() =>
  props.minDate ? isBeforeDay(previousDate.value, props.minDate) : false,
);

const isNextDisabled = computed(() =>
  props.maxDate ? isAfterDay(nextDate.value, props.maxDate) : false,
);

const label = computed(() => formatRuShortWeekdayMonthDay(normalizedValue.value));

const changeDate = (date: Date): void => {
  props.onChange(startOfDay(date));
};

const toggleCalendar = (): void => {
  isCalendarOpened.value = !isCalendarOpened.value;
};

const showPreviousDate = (): void => {
  if (isPreviousDisabled.value) {
    return;
  }

  changeDate(previousDate.value);
};

const showNextDate = (): void => {
  if (isNextDisabled.value) {
    return;
  }

  changeDate(nextDate.value);
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
