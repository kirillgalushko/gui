<script setup lang="ts">
export interface PickerProps {
  stretched?: boolean;
}

const props = defineProps<PickerProps>();
</script>

<template>
  <button v-bind="$attrs" type="button" :class="['picker', { stretched: props.stretched }]">
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
  background-color: hsl(var(--input));
  border: 1px solid hsl(var(--border));
  color: hsl(var(--foreground));
  border-radius: 10px;
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
