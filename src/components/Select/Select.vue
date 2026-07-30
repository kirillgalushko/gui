<script setup lang="ts">
import Dropdown from "../Dropdown/Dropdown.vue";
import { IconChevronDownOutline } from "@gui/icons";
import { useSize } from "../../hooks/useSize";
import { computed, provide, ref, watch } from "vue";
import { useSelect } from "./useSelect";
import type { RegisteredOption } from "./useSelect";
import Picker from "../Picker/Picker.vue";
import type { ComponentSize } from "../../types";
import type { PickerMode } from "../Picker/types";

export interface SelectProps {
  stretched?: boolean;
  label?: string;
  size?: ComponentSize;
  mode?: PickerMode;
  value?: string;
  name?: string;
  onChange?: (option: RegisteredOption) => void;
}

const props = withDefaults(defineProps<SelectProps>(), {
  size: "large",
  mode: "default",
});
const select = useSelect(props.value, props.onChange);
provide("select", select);

const pickerRef = ref<InstanceType<typeof Picker>>();
const { elementRef, width } = useSize();
const wrapperStyles = computed(() => {
  const padding = 8;
  return { minWidth: `${Math.max((width.value ?? 0) - padding, 0)}px` };
});

watch(
  pickerRef,
  () => {
    elementRef.value = pickerRef.value?.elementRef ?? null;
  },
  { flush: "post" },
);

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
    :stretched="props.stretched"
  >
    <Picker
      ref="pickerRef"
      :size="props.size"
      :mode="props.mode"
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
