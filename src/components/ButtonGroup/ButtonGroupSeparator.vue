<script setup lang="ts">
import { computed, inject } from "vue";
import { buttonGroupContextKey, type ButtonGroupOrientation } from "./context";

export interface ButtonGroupSeparatorProps {
  orientation?: ButtonGroupOrientation;
}

const props = defineProps<ButtonGroupSeparatorProps>();
const context = inject(buttonGroupContextKey, {
  orientation: "horizontal" as ButtonGroupOrientation,
});

const separatorOrientation = computed(() => {
  if (props.orientation) {
    return props.orientation;
  }

  return context.orientation === "horizontal" ? "vertical" : "horizontal";
});
</script>

<template>
  <div
    :class="['button-group-separator', separatorOrientation]"
    role="separator"
    :aria-orientation="separatorOrientation"
  />
</template>

<style scoped>
.button-group-separator {
  align-self: stretch;
  flex-shrink: 0;
  background: hsl(var(--border));
}

.vertical {
  width: 1px;
  min-height: 1rem;
}

.horizontal {
  width: 100%;
  height: 1px;
  min-width: 1rem;
}
</style>
