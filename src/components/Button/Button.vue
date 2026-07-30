<script setup lang="ts">
import { computed } from "vue";
import Loader from "../Loader/Loader.vue";
import type { ComponentSize } from "../../types";
import AsChild from "../../internal/AsChild";

defineOptions({
  inheritAttrs: false,
});

export interface ButtonProps {
  asChild?: boolean;
  mode?: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
  size?: ComponentSize;
  stretched?: boolean;
  squared?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  mode: "default",
  size: "medium",
});

const buttonClass = computed(() => [
  "button",
  props.mode,
  props.size,
  {
    stretched: props.stretched,
    squared: props.squared,
    rounded: props.rounded,
    "with-loader": props.isLoading,
    "as-child": props.asChild,
    disabled: props.disabled,
  },
]);
</script>

<template>
  <AsChild
    v-if="props.asChild"
    v-bind="$attrs"
    :class="buttonClass"
    :disabled="props.disabled || undefined"
    :aria-disabled="props.disabled || undefined"
    :aria-busy="props.isLoading || undefined"
  >
    <slot></slot>
  </AsChild>

  <button
    v-else
    v-bind="$attrs"
    :disabled="props.disabled"
    :aria-busy="props.isLoading || undefined"
    :class="buttonClass"
  >
    <slot></slot>
    <div v-if="isLoading" class="button-loader">
      <Loader size="var(--button-loader-size)" />
    </div>
  </button>
</template>

<style scoped>
.button {
  --button-bg: hsl(var(--input));
  --button-text: hsl(var(--primary));
  --button-outline: hsl(var(--ring));
  --button-height: 40px;
  --button-padding: 8px 16px;
  --button-font-size: 14px;
  --button-line-height: 20px;
  --button-squared-icon-size: 16px;
  --button-loader-size: 18px;
  --button-radius: 10px;

  background-color: var(--button-bg);
  color: var(--button-text);
  padding: var(--button-padding);
  font-size: var(--button-font-size);
  cursor: pointer;
  border: none;
  border-radius: var(--button-radius);
  box-sizing: border-box;
  font-weight: 500;
  line-height: var(--button-line-height);
  transition:
    background-color 0.2s,
    color 0.2s,
    scale 0.2s,
    width 0.2s,
    outline-color 0.1s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  text-wrap: nowrap;
  font-family: inherit;
  gap: var(--gap-1);
  height: var(--button-height);
  position: relative;
  outline: 2px solid transparent;
  outline-offset: -2px;
  text-decoration-line: none;
}

.extra-small {
  --button-height: 24px;
  --button-padding: 4px 8px;
  --button-font-size: 12px;
  --button-line-height: 16px;
  --button-squared-icon-size: 14px;
  --button-loader-size: 12px;
  --button-radius: 8px;
}

.small {
  --button-height: 32px;
  --button-padding: 6px 12px;
  --button-font-size: 13px;
  --button-line-height: 18px;
  --button-squared-icon-size: 16px;
  --button-loader-size: 14px;
  --button-radius: 10px;
}

.medium {
  --button-height: 36px;
  --button-padding: 8px 14px;
  --button-font-size: 14px;
  --button-line-height: 20px;
  --button-squared-icon-size: 20px;
  --button-loader-size: 16px;
  --button-radius: 12px;
}

.large {
  --button-height: 40px;
  --button-padding: 8px 16px;
  --button-font-size: 14px;
  --button-line-height: 20px;
  --button-squared-icon-size: 20px;
  --button-loader-size: 18px;
  --button-radius: 12px;
}

.squared {
  padding: 0;
  min-width: var(--button-height);
  width: var(--button-height);
}

.squared :deep(svg) {
  font-size: var(--button-squared-icon-size);
}

.rounded {
  border-radius: 999px;
}

.disabled {
  background-color: color-mix(in oklab, var(--button-bg) 80%, transparent);
  color: hsl(var(--muted-foreground));
  cursor: not-allowed;
}

.button:hover:not(.disabled) {
  background-color: color-mix(in oklab, var(--button-bg) 80%, transparent);
}

.button:active:not(.disabled) {
  scale: 0.96;
}

.button:focus-visible {
  outline: 2px solid var(--button-outline);
  outline-offset: -2px;
}

.button.contrast {
  --button-bg: hsl(var(--primary));
  --button-text: hsl(var(--primary-foreground));
  --button-outline: hsl(var(--muted-foreground));
}

.button.negative {
  --button-text: hsl(var(--negative));
  --button-bg: color-mix(in oklab, hsl(var(--negative)) 20%, transparent);
  --button-outline: hsl(var(--negative));
}

.button.accent {
  --button-bg: hsl(var(--accent));
  --button-text: hsl(0 0% 98%);
  --button-outline: hsl(var(--accent));
}

.button.ghost {
  background-color: transparent;
}

.button.ghost:hover:not(.disabled) {
  background-color: color-mix(in oklab, var(--button-bg) 80%, transparent);
}

.button.outline {
  --button-text: hsl(var(--contrast-foreground));
  --button-outline: hsl(var(--contrast));
  background-color: transparent;
  border: 1px solid var(--button-outline);
}

.button.outline:hover:not(.disabled) {
  background-color: var(--button-outline);
}

.button.outline.disabled {
  border-color: color-mix(in oklab, var(--button-outline) 80%, transparent);
}

.button.stretched {
  width: 100%;
}

.button.as-child.disabled {
  pointer-events: none;
}

.with-loader {
  color: transparent;
  cursor: progress;
}

.button.as-child.with-loader::after {
  position: absolute;
  width: var(--button-loader-size);
  height: var(--button-loader-size);
  border: 2px solid var(--button-text);
  border-right-color: transparent;
  border-radius: 50%;
  animation: button-loader-spin 0.8s linear infinite;
  content: "";
}

.button-loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--button-text);
  font-size: var(--button-loader-size);
}

@keyframes button-loader-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
