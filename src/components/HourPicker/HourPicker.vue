<script setup lang="ts">
import Select from '../Select/Select.vue';
import SelectOption from '../Select/SelectOption.vue';
import type { RegisteredOption } from '../Select/useSelect';
import type { HourPickerChangePayload, HourPickerValue } from './types';

export interface HourPickerProps {
  value?: string;
  onChange?: (payload: HourPickerChangePayload) => void;
  label?: string;
  name?: string;
  stretched?: boolean;
}

const props = withDefaults(defineProps<HourPickerProps>(), {
  label: 'Время',
});

const hours = Array.from({ length: 24 }, (_, hour) => `${String(hour).padStart(2, '0')}:00` as HourPickerValue);

const handleChange = (option: RegisteredOption): void => {
  props.onChange?.({
    value: option.value as HourPickerValue,
  });
};
</script>

<template>
  <Select :value="props.value" :label="props.label" :name="props.name" :stretched="props.stretched"
    :on-change="handleChange">
    <SelectOption v-for="hour in hours" :key="hour" :value="hour" :label="hour" />
  </Select>
</template>
