<script setup lang="ts">
import { computed } from 'vue';
import type { Padding } from '../../types';

export type ItemMode = 'card' | 'outlined' | 'plain'
export type ItemSize = 'medium' | 'small' | 'extra-small'

export interface ItemProps {
  interactive?: boolean
  mode?: ItemMode
  padding?: Padding
  size?: ItemSize
  stretched?: boolean
}

const props = withDefaults(defineProps<ItemProps>(), {
  interactive: false,
  mode: 'card',
  size: 'medium',
  stretched: false,
})

const styles = computed(() => (
  props.padding === undefined
    ? undefined
    : { '--item-padding': `${props.padding}px` }
))
</script>

<template>
  <div :class="['item', props.mode, props.size, { interactive: props.interactive, stretched: props.stretched }]"
    :style="styles">
    <slot></slot>
  </div>
</template>

<style scoped>
.item {
  --item-gap: var(--gap-3);
  --item-padding: var(--gap-3);
  --item-border-color: hsl(var(--border));
  --item-background-color: hsl(var(--card));
  --item-text-color: hsl(var(--card-foreground));

  display: flex;
  align-items: center;
  gap: var(--item-gap);
  box-sizing: border-box;
  min-width: 0;
  padding: var(--item-padding);
  border: 1px solid var(--item-border-color);
  border-radius: 14px;
  background-color: var(--item-background-color);
  color: var(--item-text-color);
  font-family: var(--font-family);
  text-align: initial;
}

.small {
  --item-gap: var(--gap-2);
  --item-padding: var(--gap-2);

  border-radius: 10px;
}

.extra-small {
  --item-gap: var(--gap-2);
  --item-padding: var(--gap-1);

  border-radius: 8px;
}

.outlined {
  --item-background-color: transparent;
  --item-text-color: hsl(var(--foreground));
}

.plain {
  --item-border-color: transparent;
  --item-background-color: transparent;
  --item-text-color: hsl(var(--foreground));
}

.interactive {
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, scale 0.2s;
}

.interactive:hover {
  background-color: hsl(var(--secondary));
}

.interactive:active {
  scale: 0.99;
}

.interactive:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.stretched {
  width: 100%;
}
</style>
