<script setup lang="ts">
import { IconFilterXOutline } from "@gui/icons";
import Button from "../Button/Button.vue";
import type { FilterControlAppearance } from "./types";

export interface FilterClearProps extends FilterControlAppearance {
  label?: string;
  iconOnly?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<FilterClearProps>(), {
  label: "Сбросить",
  iconOnly: false,
  size: "medium",
  mode: "outline",
});

const emit = defineEmits<{
  clear: [];
}>();
</script>

<template>
  <Button
    :squared="props.iconOnly"
    :size="props.size"
    :mode="props.mode"
    :disabled="props.disabled"
    :aria-label="props.iconOnly ? props.label : undefined"
    @click="emit('clear')"
  >
    <slot name="icon">
      <IconFilterXOutline />
    </slot>
    <slot v-if="!props.iconOnly">{{ props.label }}</slot>
  </Button>
</template>
