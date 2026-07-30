<script setup lang="ts">
import { computed } from "vue";
import type { ComponentSize } from "../../types";
import type { PickerMode } from "../Picker/types";
import Select from "../Select/Select.vue";
import SelectOption from "../Select/SelectOption.vue";
import Text from "../Text/Text.vue";

export interface PaginationPageSizeProps {
  value: number;
  options?: readonly number[];
  label?: string;
  size?: ComponentSize;
  mode?: PickerMode;
}

const props = withDefaults(defineProps<PaginationPageSizeProps>(), {
  options: () => [5, 10],
  label: "Строк на странице",
  size: "small",
  mode: "default",
});
const emit = defineEmits<{
  change: [value: number];
}>();

const options = computed(() =>
  [...new Set([...props.options, props.value])]
    .filter((option) => Number.isInteger(option) && option > 0)
    .sort((left, right) => left - right),
);

const handleChange = (option: { value: string }) => {
  const value = Number(option.value);

  if (Number.isInteger(value) && value > 0 && value !== props.value) {
    emit("change", value);
  }
};
</script>

<template>
  <div class="pagination-page-size" role="group" :aria-label="props.label">
    <Text Element="span" typography="subtitle-1" color="secondary">
      {{ props.label }}
    </Text>
    <Select
      :value="String(props.value)"
      :label="String(props.value)"
      :size="props.size"
      :mode="props.mode"
      :onChange="handleChange"
    >
      <SelectOption
        v-for="option in options"
        :key="option"
        :value="String(option)"
        :label="String(option)"
      />
    </Select>
  </div>
</template>

<style scoped>
.pagination-page-size {
  display: flex;
  align-items: center;
  gap: var(--gap-2);
  white-space: nowrap;
}
</style>
