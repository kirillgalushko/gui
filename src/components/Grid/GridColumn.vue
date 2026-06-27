<script setup lang="ts">
import { computed, inject } from 'vue';
import {
  breakpointColumns,
  breakpointNames,
} from '../../hooks/breakpoints/breakpoints';
import { gridContextKey } from './context';

export interface GridColumnProps {
  xs?: number;
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
  xxl?: number;
}

const props = defineProps<GridColumnProps>();
const gridContext = inject(gridContextKey);

const fallbackBreakpoint = 'xxl';
const breakpoint = computed(() => gridContext?.breakpoint.value ?? fallbackBreakpoint);
const columns = computed(() => gridContext?.columns.value ?? breakpointColumns[breakpoint.value]);

const span = computed(() => {
  const currentIndex = breakpointNames.indexOf(breakpoint.value);

  for (let index = currentIndex; index >= 0; index -= 1) {
    const value = props[breakpointNames[index]];

    if (typeof value === 'number') {
      return Math.min(Math.max(value, 1), columns.value);
    }
  }

  return columns.value;
});

const style = computed(() => ({
  '--grid-column-span': String(span.value),
}));
</script>

<template>
  <div
    class="grid-column"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-column {
  box-sizing: border-box;
  grid-column: span var(--grid-column-span);
  min-width: 0;
}
</style>
