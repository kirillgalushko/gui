<script setup lang="ts">
import Text from '../Text/Text.vue';

defineOptions({
  inheritAttrs: false,
});

export interface FormLabelProps {
  htmlFor?: string;
  invalid?: boolean;
  disabled?: boolean;
}

const props = defineProps<FormLabelProps>();
</script>

<template>
  <Text v-bind="$attrs" :for="props.htmlFor" Element="label" typography="label-2" color="inherit"
    :class="['form-label', { invalid: props.invalid, disabled: props.disabled }]">
    <slot></slot>
  </Text>
</template>

<style scoped>
.form-label {
  display: block;
  color: hsl(var(--foreground));
  margin-bottom: var(--gap-2);
}

.form-label.invalid {}

.form-label.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
