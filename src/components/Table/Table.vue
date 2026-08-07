<script setup lang="ts">
import { computed, type CSSProperties, type PropType } from "vue";

export interface TableProps {
  border?: boolean;
  layout?: "auto" | "fixed";
  minWidth?: CSSProperties["minWidth"] | number;
  maxHeight?: CSSProperties["maxHeight"] | number;
  stickyHeader?: boolean;
}

const props = defineProps({
  border: {
    type: Boolean,
    default: false,
  },
  layout: {
    type: String as PropType<TableProps["layout"]>,
    default: "auto",
  },
  minWidth: {
    type: [String, Number] as PropType<TableProps["minWidth"]>,
    default: undefined,
  },
  maxHeight: {
    type: [String, Number] as PropType<TableProps["maxHeight"]>,
    default: undefined,
  },
  stickyHeader: {
    type: Boolean,
    default: false,
  },
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
    <table
      v-bind="$attrs"
      class="table"
      :style="{ minWidth, tableLayout: props.layout }"
    >
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
