<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

export interface TableProps {
  border?: boolean;
  minWidth?: CSSProperties["minWidth"] | number;
  maxHeight?: CSSProperties["maxHeight"] | number;
  stickyHeader?: boolean;
}

const props = withDefaults(defineProps<TableProps>(), {
  minWidth: undefined,
  maxHeight: undefined,
  stickyHeader: false,
});

const toCssSize = (
  value: CSSProperties["width"] | number | undefined,
): CSSProperties["width"] | undefined => {
  if (typeof value === "number") return `${value}px`;
  if (typeof value === "string" && /^\d+(\.\d+)?$/.test(value))
    return `${value}px`;
  return value;
};

const minWidth = computed(() => toCssSize(props.minWidth));
const maxHeight = computed(() => toCssSize(props.maxHeight));
</script>

<template>
  <div
    class="table-container"
    :class="{ border: props.border, 'sticky-header': props.stickyHeader }"
    :style="{ maxHeight }"
  >
    <table v-bind="$attrs" class="table" :style="{ minWidth }">
      <slot></slot>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  position: relative;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  font-family: var(--font-family);
  overscroll-behavior-x: contain;
  overscroll-behavior-y: auto;
  scrollbar-color: hsl(var(--border)) transparent;
  scrollbar-width: thin;
}

.border {
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
}

.table {
  width: 100%;
  caption-side: bottom;
  border-collapse: collapse;
  color: hsl(var(--foreground));
  font-size: 14px;
  line-height: 20px;
}

.sticky-header :deep(.table-head) {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: hsl(var(--card));
}
</style>
