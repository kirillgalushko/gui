<script setup lang="ts">
import { computed, inject, type ComputedRef } from "vue";
import Text from "../Text/Text.vue";

defineOptions({
  inheritAttrs: false,
});

export interface FieldDescriptionProps {
  disabled?: boolean;
}

interface FieldState {
  invalid: boolean;
  disabled: boolean;
}

const props = defineProps<FieldDescriptionProps>();
const fieldState = inject<ComputedRef<FieldState> | undefined>(
  "field-state",
  undefined,
);

const isDisabled = computed(
  () => props.disabled ?? fieldState?.value.disabled ?? false,
);
</script>

<template>
  <Text
    v-bind="$attrs"
    Element="p"
    typography="label-1"
    color="secondary"
    :class="['field-description', { disabled: isDisabled }]"
  >
    <slot></slot>
  </Text>
</template>

<style scoped>
.field-description {
  margin: 0;
}

.field-description.disabled {
  cursor: not-allowed;
}
</style>
