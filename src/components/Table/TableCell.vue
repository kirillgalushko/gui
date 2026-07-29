<script setup lang="ts">
import { computed, type PropType } from "vue";

export type TableColumnSize = string | number;

const props = defineProps({
  width: {
    type: [String, Number] as PropType<TableColumnSize>,
    required: false,
  },
  minWidth: {
    type: [String, Number] as PropType<TableColumnSize>,
    required: false,
  },
  maxWidth: {
    type: [String, Number] as PropType<TableColumnSize>,
    required: false,
  },
});

const toCssSize = (value: TableColumnSize | undefined): string | undefined => {
  if (typeof value === "number") return `${value}px`;
  if (typeof value === "string" && /^\d+(\.\d+)?$/.test(value))
    return `${value}px`;
  return value;
};

const columnStyle = computed(() => ({
  width: toCssSize(props.width),
  minWidth: toCssSize(props.minWidth),
  maxWidth: toCssSize(props.maxWidth),
}));
</script>

<template>
  <td class="table-cell" :style="columnStyle">
    <slot></slot>
  </td>
</template>

<style scoped>
.table-cell {
  padding: var(--gap-2);
  vertical-align: middle;
}

.table-cell:has([role="checkbox"]) {
  padding-right: 0;
}
</style>
