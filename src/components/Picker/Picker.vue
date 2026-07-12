<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from '../Button/Button.vue';

export interface PickerProps {
  size?: ButtonProps['size'];
  stretched?: boolean;
}

const props = withDefaults(defineProps<PickerProps>(), {
  size: 'large',
});
const elementRef = ref<HTMLButtonElement | null>(null);

defineExpose({
  elementRef,
});
</script>

<template>
  <button ref="elementRef" v-bind="$attrs" type="button" :class="['picker', props.size, { stretched: props.stretched }]">
    <span class="picker-text">
      <slot></slot>
    </span>
    <span class="picker-icon">
      <slot name="icon"></slot>
    </span>
  </button>
</template>

<style scoped>
.picker {
  --picker-height: 40px;
  --picker-padding: 8px 12px;
  --picker-font-size: 14px;
  --picker-line-height: 20px;
  --picker-radius: 10px;

  background-color: hsl(var(--input));
  border: 1px solid hsl(var(--border));
  color: hsl(var(--foreground));
  border-radius: var(--picker-radius);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--picker-height);
  cursor: pointer;
  padding: var(--picker-padding);
  text-align: start;
  font-family: var(--font-family);
  font-size: var(--picker-font-size);
  line-height: var(--picker-line-height);
  gap: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.extra-small {
  --picker-height: 24px;
  --picker-padding: 4px 8px;
  --picker-font-size: 12px;
  --picker-line-height: 16px;
  --picker-radius: 8px;
}

.small {
  --picker-height: 32px;
  --picker-padding: 6px 12px;
  --picker-font-size: 13px;
  --picker-line-height: 18px;
  --picker-radius: 8px;
}

.medium {
  --picker-height: 36px;
  --picker-padding: 8px 14px;
  --picker-font-size: 14px;
  --picker-line-height: 20px;
  --picker-radius: 10px;
}

.large {
  --picker-height: 40px;
  --picker-padding: 8px 16px;
  --picker-font-size: 14px;
  --picker-line-height: 20px;
  --picker-radius: 10px;
}

.picker:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.picker:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.stretched {
  width: 100%;
}

.picker-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.picker-icon {
  display: inline-flex;
  flex: none;
}
</style>
