<script setup lang="ts">
import { provide } from "vue";
import { buttonGroupContextKey, type ButtonGroupOrientation } from "./context";

export interface ButtonGroupProps {
  orientation?: ButtonGroupOrientation;
}

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  orientation: "horizontal",
});

provide(buttonGroupContextKey, props);
</script>

<template>
  <div
    v-bind="$attrs"
    :class="['button-group', props.orientation]"
    role="group"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.button-group {
  --button-group-radius: 10px;
  --button-group-separator-color: hsl(var(--border));

  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  isolation: isolate;
}

.horizontal {
  flex-direction: row;
  align-items: center;
}

.vertical {
  flex-direction: column;
  align-items: stretch;
}

.button-group:deep(.button),
.button-group:deep(.button-group-text) {
  flex-shrink: 0;
  border-radius: 0;
}

.horizontal:deep(.button + .button) {
  margin-left: -1px;
}

.vertical:deep(.button + .button) {
  margin-top: -1px;
}

.button-group:deep(.button:hover),
.button-group:deep(.button:focus-visible) {
  z-index: 1;
}

.horizontal:deep(.button:first-child),
.horizontal:deep(.button-group-text:first-child) {
  border-top-left-radius: var(--button-group-radius);
  border-bottom-left-radius: var(--button-group-radius);
}

.horizontal:deep(.button:last-child),
.horizontal:deep(.button-group-text:last-child) {
  border-top-right-radius: var(--button-group-radius);
  border-bottom-right-radius: var(--button-group-radius);
}

.vertical:deep(.button:first-child),
.vertical:deep(.button-group-text:first-child) {
  border-top-left-radius: var(--button-group-radius);
  border-top-right-radius: var(--button-group-radius);
}

.vertical:deep(.button:last-child),
.vertical:deep(.button-group-text:last-child) {
  border-bottom-right-radius: var(--button-group-radius);
  border-bottom-left-radius: var(--button-group-radius);
}

.horizontal:deep(.button:only-child),
.horizontal:deep(.button-group-text:only-child),
.vertical:deep(.button:only-child),
.vertical:deep(.button-group-text:only-child) {
  border-radius: var(--button-group-radius);
}
</style>
