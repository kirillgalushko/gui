<script setup lang="ts">
import Dropdown from '../Dropdown/Dropdown.vue';
import ArrowIcon from '@gui/icons/outline/chevron-down.js';
import { useSize } from '../../hooks/useSize';
import { computed, provide, watch } from 'vue';
import { RegisteredOption, useSelect } from './useSelect';

export interface SelectProps {
  stretched?: boolean
  label?: string
  value?: string
  name?: string
  onChange?: (option: RegisteredOption) => void
}

const props = defineProps<SelectProps>()
const select = useSelect(props.value, props.onChange);
provide('select', select)

const { elementRef, width } = useSize();
const wrapperStyles = computed(() => {
  const padding = 8
  return { minWidth: `${width.value - padding}px` }
})

watch(() => props.value, () => {
  if (props.value) {
    const newOption = select.options.value.get(props.value)
    select.selectedOption.value = { value: props.value, label: newOption }
  } else {
    select.selectedOption.value = undefined
  }
})
</script>

<template>
  <Dropdown :popperHideTriggers="['click']" placement="bottom-start" class="select">
    <button ref="elementRef" :class="['select-toggle', { 'stretched': props.stretched }]">
      {{ select?.selectedOption?.value?.label || props.label }}
      <ArrowIcon />
    </button>
    <input hidden :name="props.name" :value="props.value || select.selectedOption?.value?.value" />
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

.select-toggle {
  background-color: hsl(var(--background));
  border: 1px solid hsl(var(--border));
  color: hsl(var(--foreground));
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  cursor: pointer;
  padding: 8px 12px;
  text-align: start;
  font-family: var(--font-family);
  font-size: 14px;
  gap: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.select-toggle:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.stretched {
  width: 100%;
}

.hidden-options {
  display: none;
}
</style>