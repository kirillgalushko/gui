<script setup lang="ts">
import 'floating-vue/dist/style.css';
import { Tooltip } from 'floating-vue';

export interface TooltipProps {
  mode?: 'default' | 'accent'
}

const props = withDefaults(defineProps<TooltipProps>(), { mode: 'default' })
</script>


<template>
  <Tooltip v-bind="$attrs" :arrowOverflow="false"
    :popperClass="props.mode === 'accent' ? 'tooltip-accent' : 'tooltip-default'" :class="['tooltip', props.mode]">
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
</style>
<style>
.tooltip-default {
  --tooltip-text-color: hsl(var(--popover-foreground));
  --tooltip-background-color: hsl(var(--popover));
  --tooltip-border-color: hsl(var(--border));
  max-width: 300px;
}

.tooltip-accent {
  --tooltip-text-color: hsl(var(--primary-foreground));
  --tooltip-background-color: hsl(var(--primary));
  max-width: 300px;
}

.v-popper--theme-tooltip .v-popper__inner {
  font-size: 14px;
  border-radius: 6px;
  padding: 6px 12px;
  color: var(--tooltip-text-color);
  background-color: var(--tooltip-background-color);
  border: 1px solid var(--tooltip-border-color);
}

.v-popper__arrow-container {
  display: none;
}
</style>
