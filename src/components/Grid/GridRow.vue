<script setup lang="ts">
export interface GridRowProps {
  rowGap?: string;
}

const props = withDefaults(defineProps<GridRowProps>(), {
  rowGap: '0',
});
</script>

<template>
  <div class="grid-row" :style="{ '--grid-row-gap': props.rowGap }">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-row {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, 12), minmax(0, 1fr));
  column-gap: var(--grid-gutter, var(--gap-4, 16px));
  row-gap: var(--grid-row-gap, 0);
  width: 100%;
  min-width: 0;
}
</style>
