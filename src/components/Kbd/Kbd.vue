<script setup lang="ts">
import type { ComponentSize } from "../../types";

defineOptions({
  inheritAttrs: false,
});

export type KbdMode = "default" | "contrast" | "secondary" | "outline";
export type KbdSize = ComponentSize;

export interface KbdProps {
  mode?: KbdMode;
  size?: KbdSize;
}

const props = withDefaults(defineProps<KbdProps>(), {
  mode: "default",
  size: "small",
});
</script>

<template>
  <kbd v-bind="$attrs" :class="['kbd', props.mode, props.size]" data-slot="kbd">
    <slot></slot>
  </kbd>
</template>

<style scoped>
.kbd {
  --kbd-background: hsl(var(--input));
  --kbd-color: hsl(var(--primary));
  --kbd-border-color: hsl(var(--border));
  --kbd-height: 20px;
  --kbd-min-width: 20px;
  --kbd-padding: 0 var(--gap-1);
  --kbd-radius: 4px;
  --kbd-font-size: 12px;
  --kbd-line-height: 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-1);
  width: fit-content;
  min-width: var(--kbd-min-width);
  height: var(--kbd-height);
  padding: var(--kbd-padding);
  border: 1px solid var(--kbd-border-color);
  border-radius: var(--kbd-radius);
  box-sizing: border-box;
  background-color: var(--kbd-background);
  color: var(--kbd-color);
  font-family: var(--font-family);
  font-size: var(--kbd-font-size);
  font-weight: 500;
  line-height: var(--kbd-line-height);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

.kbd.contrast {
  --kbd-background: hsl(var(--primary));
  --kbd-color: hsl(var(--primary-foreground));
  --kbd-border-color: transparent;
}

.kbd.secondary {
  --kbd-background: hsl(var(--secondary));
  --kbd-color: hsl(var(--secondary-foreground));
  --kbd-border-color: transparent;
}

.kbd.outline {
  --kbd-background: transparent;
  --kbd-color: hsl(var(--contrast-foreground));
  --kbd-border-color: hsl(var(--contrast));
}

.kbd.extra-small {
  --kbd-height: 16px;
  --kbd-min-width: 16px;
  --kbd-padding: 0 2px;
  --kbd-font-size: 10px;
  --kbd-line-height: 12px;
}

.kbd.medium {
  --kbd-height: 24px;
  --kbd-min-width: 24px;
  --kbd-padding: 0 6px;
  --kbd-radius: 6px;
}

.kbd.large {
  --kbd-height: 32px;
  --kbd-min-width: 32px;
  --kbd-padding: 0 var(--gap-2);
  --kbd-radius: 8px;
  --kbd-font-size: 14px;
  --kbd-line-height: 20px;
}

.kbd :deep(svg:not([class*="size-"])) {
  width: 12px;
  height: 12px;
}
</style>
