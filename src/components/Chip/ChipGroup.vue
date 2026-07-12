<script setup lang="ts">
import { computed, provide } from "vue";
import { chipGroupContextKey } from "./useChipGroup";
import type { ChipMode, ChipSize, ChipValue } from "./types";

export interface ChipGroupProps {
  mode?: ChipMode;
  size?: ChipSize;
  disabled?: boolean;
  name?: string;
  stretched?: boolean;
}

const props = withDefaults(defineProps<ChipGroupProps>(), {
  mode: "single",
  size: "medium",
});

const model = defineModel<ChipValue | ChipValue[] | null>({
  default: null,
});

const selectedValues = computed<ChipValue[]>(() => {
  if (props.mode === "multiple") {
    return Array.isArray(model.value) ? model.value : [];
  }

  return model.value === null || Array.isArray(model.value)
    ? []
    : [model.value];
});

const isSelected = (value: ChipValue): boolean => {
  return selectedValues.value.includes(value);
};

const select = (value: ChipValue): void => {
  if (props.disabled) {
    return;
  }

  if (props.mode === "multiple") {
    const nextValue = isSelected(value)
      ? selectedValues.value.filter((selectedValue) => selectedValue !== value)
      : [...selectedValues.value, value];

    model.value = nextValue;
    return;
  }

  model.value = isSelected(value) ? null : value;
};

provide(chipGroupContextKey, {
  mode: props.mode,
  size: props.size,
  disabled: props.disabled,
  isSelected,
  select,
});
</script>

<template>
  <div
    :class="['chip-group', { stretched: props.stretched }]"
    :role="props.mode === 'single' ? 'radiogroup' : 'group'"
  >
    <slot></slot>
    <template v-if="props.name">
      <input
        v-for="selectedValue in selectedValues"
        :key="selectedValue"
        type="hidden"
        :name="props.name"
        :value="selectedValue"
      />
    </template>
  </div>
</template>

<style scoped>
.chip-group {
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--gap-2);
  max-width: 100%;
}

.chip-group.stretched {
  width: 100%;
}
</style>
