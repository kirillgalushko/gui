<script setup lang="ts">
import Dropdown from "../Dropdown/Dropdown.vue";
import { IconChevronDownOutline } from "@gui/icons";
import { useSize } from "../../hooks/useSize";
import { computed, provide, watch } from "vue";
import { RegisteredOption, useSelect } from "./useSelect";
import Picker from "../Picker/Picker.vue";

export interface SelectProps {
  stretched?: boolean;
  label?: string;
  value?: string;
  name?: string;
  onChange?: (option: RegisteredOption) => void;
}

const props = defineProps<SelectProps>();
const select = useSelect(props.value, props.onChange);
provide("select", select);

const { elementRef, width } = useSize();
const wrapperStyles = computed(() => {
  const padding = 8;
  return { minWidth: `${width.value - padding}px` };
});

watch(
  () => props.value,
  () => {
    if (props.value !== undefined) {
      const newOption = select.options.value.get(props.value);
      select.selectedOption.value = { value: props.value, label: newOption };
    } else {
      select.selectedOption.value = undefined;
    }
  },
);
</script>

<template>
  <Dropdown
    :popperHideTriggers="['click']"
    placement="bottom-start"
    class="select"
  >
    <Picker
      ref="elementRef"
      :stretched="props.stretched"
    >
      {{ select?.selectedOption?.value?.label || props.label }}
      <template #icon>
        <IconChevronDownOutline />
      </template>
    </Picker>
    <input
      hidden
      :name="props.name"
      :value="props.value || select.selectedOption?.value?.value"
    />
    <div class="hidden-options">
      <slot></slot>
    </div>
    <template #popper>
      <div :style="wrapperStyles">
        <slot></slot>
      </div>
    </template>
  </Dropdown>
</template>

<style scoped>
.select {
  display: flex;
}

.hidden-options {
  display: none;
}
</style>
