<script setup lang="ts">

export interface RowProps {
  fullHeight?: boolean;
  alignItems?: 'start' | 'center' | 'end'
}

const props = defineProps<RowProps>()
</script>

<template>
  <div :class="['row', props.alignItems, { 'fullHeight': props.fullHeight }]">
    <slot></slot>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}

.fullHeight {
  height: 100%;
  overflow: hidden;
}

.start {
  align-items: start;
}

.center {
  align-items: center;
}

.end {
  align-items: end;
}
</style>