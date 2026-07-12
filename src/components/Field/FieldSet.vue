<script setup lang="ts">
export interface FieldSetProps {
  disabled?: boolean;
}

const props = defineProps<FieldSetProps>();
</script>

<template>
  <fieldset
    :disabled="props.disabled"
    :class="['field-set', { disabled: props.disabled }]"
  >
    <slot></slot>
  </fieldset>
</template>

<style scoped>
.field-set {
  display: grid;
  gap: var(--gap-4);
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

.field-set.disabled {
  opacity: 0.5;
}
</style>
