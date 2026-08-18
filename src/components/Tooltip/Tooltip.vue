<script setup lang="ts">
import "floating-vue/dist/style.css";
import { Tooltip } from "floating-vue";

type TooltipDelay =
  | string
  | number
  | {
      show: number;
      hide: number;
    };

export interface TooltipProps {
  mode?: "default" | "contrast";
  delay?: TooltipDelay;
  stretched?: boolean;
}

const props = withDefaults(defineProps<TooltipProps>(), {
  mode: "default",
  delay: () => ({ show: 0, hide: 0 }),
  stretched: false,
});
</script>

<template>
  <Tooltip
    v-bind="$attrs"
    :delay="props.delay"
    :arrowOverflow="false"
    :popperClass="
      props.mode === 'contrast'
        ? ['tooltip-contrast', 'v-popper__popper--skip-transition']
        : ['tooltip-default', 'v-popper__popper--skip-transition']
    "
    :class="['tooltip', props.mode, { 'tooltip--stretched': props.stretched }]"
  >
    <template #default>
      <slot></slot>
    </template>

    <template #popper>
      <slot name="popper"></slot>
    </template>
  </Tooltip>
</template>

<style scoped>
.tooltip {
  display: inline-block;
}

.tooltip--stretched {
  display: block;
  width: 100%;
}
</style>
<style>
.tooltip-default {
  --tooltip-text-color: hsl(var(--popover-foreground));
  --tooltip-background-color: hsl(var(--popover)/0.7);
  --tooltip-border-color: hsl(var(--border));
  max-width: 300px;
}

.tooltip-contrast {
  --tooltip-text-color: hsl(var(--primary-foreground));
  --tooltip-background-color: hsl(var(--primary));
  max-width: 300px;
}

.v-popper--theme-tooltip .v-popper__inner {
  font-size: 14px;
  border-radius: 10px;
  padding: 6px 12px;
  color: var(--tooltip-text-color);
  background-color: var(--tooltip-background-color);
  border: 1px solid var(--tooltip-border-color);
  word-break: normal;
  overflow-wrap: break-word;
  backdrop-filter: blur(20px);
}

.v-popper__arrow-container {
  display: none;
}

.v-popper--theme-tooltip.v-popper__popper--skip-transition,
.v-popper--theme-tooltip.v-popper__popper--skip-transition
  > .v-popper__wrapper {
  transition: none !important;
}
</style>
