<script setup lang="ts">
import { computed, inject, type ComputedRef } from "vue";
import Text from "../Text/Text.vue";

defineOptions({
  inheritAttrs: false,
});

export interface FieldLabelProps {
  htmlFor?: string;
  invalid?: boolean;
  disabled?: boolean;
}

interface FieldState {
  invalid: boolean;
  disabled: boolean;
}

const props = defineProps<FieldLabelProps>();
const fieldState = inject<ComputedRef<FieldState> | undefined>(
  "field-state",
  undefined,
);

const isInvalid = computed(
  () => props.invalid ?? fieldState?.value.invalid ?? false,
);
const isDisabled = computed(
  () => props.disabled ?? fieldState?.value.disabled ?? false,
);
</script>

<template>
  <Text
    v-bind="$attrs"
    :for="props.htmlFor"
    Element="label"
    typography="label-2"
    color="inherit"
    :class="['field-label', { invalid: isInvalid, disabled: isDisabled }]"
  >
    <slot></slot>
  </Text>
</template>

<style scoped>
.field-label {
  display: block;
  color: hsl(var(--foreground));
}

.field-label.invalid {
  /* color: hsl(var(--negative)); */
}

.field-label.disabled {
  cursor: not-allowed;
}
</style>
