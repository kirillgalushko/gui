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

.button-group > :deep(.button),
.button-group > :deep(.button-group-text),
.button-group > :deep(.dropdown > .button) {
  flex-shrink: 0;
  border-radius: 0;
}

.horizontal > :deep(.button + .button),
.horizontal > :deep(.dropdown:not(:first-child)),
.horizontal > :deep(.dropdown + .button),
.horizontal > :deep(.dropdown + .button-group-text) {
  margin-left: -1px;
}

.vertical > :deep(.button + .button),
.vertical > :deep(.dropdown:not(:first-child)),
.vertical > :deep(.dropdown + .button),
.vertical > :deep(.dropdown + .button-group-text) {
  margin-top: -1px;
}

.button-group > :deep(.button:hover),
.button-group > :deep(.button:focus-visible),
.button-group > :deep(.dropdown:has(.button:hover)),
.button-group > :deep(.dropdown:has(.button:focus-visible)) {
  z-index: 1;
}

.horizontal > :deep(.button:first-child),
.horizontal > :deep(.button-group-text:first-child),
.horizontal > :deep(.dropdown:first-child > .button) {
  border-top-left-radius: var(--button-group-radius);
  border-bottom-left-radius: var(--button-group-radius);
}

.horizontal > :deep(.button:last-child),
.horizontal > :deep(.button-group-text:last-child),
.horizontal > :deep(.dropdown:last-child > .button) {
  border-top-right-radius: var(--button-group-radius);
  border-bottom-right-radius: var(--button-group-radius);
}

.vertical > :deep(.button:first-child),
.vertical > :deep(.button-group-text:first-child),
.vertical > :deep(.dropdown:first-child > .button) {
  border-top-left-radius: var(--button-group-radius);
  border-top-right-radius: var(--button-group-radius);
}

.vertical > :deep(.button:last-child),
.vertical > :deep(.button-group-text:last-child),
.vertical > :deep(.dropdown:last-child > .button) {
  border-bottom-right-radius: var(--button-group-radius);
  border-bottom-left-radius: var(--button-group-radius);
}

.horizontal > :deep(.button:only-child),
.horizontal > :deep(.button-group-text:only-child),
.horizontal > :deep(.dropdown:only-child > .button),
.vertical > :deep(.button:only-child),
.vertical > :deep(.button-group-text:only-child),
.vertical > :deep(.dropdown:only-child > .button) {
  border-radius: var(--button-group-radius);
}
</style>
