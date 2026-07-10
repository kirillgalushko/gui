<script setup lang="ts">
import { computed, provide } from 'vue';

export interface FieldProps {
  invalid?: boolean;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal' | 'responsive';
  stretched?: boolean;
}

const props = withDefaults(defineProps<FieldProps>(), {
  orientation: 'vertical',
  stretched: false,
});

const state = computed(() => ({
  invalid: !!props.invalid,
  disabled: !!props.disabled,
}));

provide('field-state', state);
</script>

<template>
  <div
    :class="['field', props.orientation, { invalid: props.invalid, disabled: props.disabled, stretched: props.stretched }]"
    :data-invalid="props.invalid || undefined" :data-disabled="props.disabled || undefined">
    <slot></slot>
  </div>
</template>

<style scoped>
.field {
  display: grid;
  gap: var(--gap-2);
  min-width: 0;
}

.stretched {
  width: 100%;
}

.field.vertical {
  grid-template-columns: minmax(0, 1fr);
}

.field.horizontal {
  grid-template-columns: minmax(120px, 1fr) minmax(0, 2fr);
  align-items: start;
  column-gap: var(--gap-3);
}

.field.responsive {
  grid-template-columns: minmax(0, 1fr);
}

.field.disabled {
  opacity: 0.5;
}

@media (min-width: 640px) {
  .field.responsive {
    grid-template-columns: minmax(120px, 1fr) minmax(0, 2fr);
    align-items: start;
    column-gap: var(--gap-3);
  }
}
</style>
