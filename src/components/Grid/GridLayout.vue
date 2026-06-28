<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import { breakpointColumns } from '../../hooks/breakpoints/breakpoints';
import { useContainerBreakpoint } from '../../hooks/useContainerBreakpoint';
import { useViewportBreakpoint } from '../../hooks/useViewportBreakpoint';
import { gridContextKey } from './context';

export interface GridLayoutProps {
  mode?: 'container' | 'viewport';
  gutter?: string;
  highlight?: boolean;
}

const props = withDefaults(defineProps<GridLayoutProps>(), {
  mode: 'container',
  gutter: 'var(--gap-4, 16px)',
  highlight: false,
});

const rootRef = ref<HTMLElement | null>(null);
const containerBreakpoint = useContainerBreakpoint(rootRef);
const viewportBreakpoint = useViewportBreakpoint();
const breakpoint = computed(() =>
  props.mode === 'viewport' ? viewportBreakpoint.breakpoint : containerBreakpoint.breakpoint,
);
const columns = computed(() => breakpointColumns[breakpoint.value]);
const layoutPadding = computed(() => (breakpoint.value === 'xs' || breakpoint.value === 's' ? '12px' : '24px'));
const style = computed(() => ({
  '--grid-columns': String(columns.value),
  '--grid-gutter': props.gutter,
  '--grid-layout-padding': layoutPadding.value,
}));

provide(gridContextKey, {
  breakpoint,
  columns,
});
</script>

<template>
  <div ref="rootRef" class="grid-layout" :style="style">
    <div v-if="props.highlight">{{ breakpoint }}</div>
    <div v-if="props.highlight" class="grid-layout__highlight" aria-hidden="true">
      <div v-for="column in columns" :key="column" class="grid-layout__highlight-column"></div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-layout {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-left: var(--grid-layout-padding, 24px);
  padding-right: var(--grid-layout-padding, 24px);
  min-width: 0;
}

.grid-layout__highlight {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, 12), minmax(0, 1fr));
  gap: var(--grid-gutter, var(--gap-4, 16px));
  pointer-events: none;
  padding-left: var(--grid-layout-padding, 24px);
  padding-right: var(--grid-layout-padding, 24px);
}

.grid-layout__highlight-column {
  min-width: 0;
  background: rgba(116, 0, 255, 0.12);
}
</style>
