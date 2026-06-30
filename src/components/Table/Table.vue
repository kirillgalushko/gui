<script setup lang="ts">

export interface TableProps {
  border?: boolean;
}

const props = defineProps<TableProps>()
</script>

<template>
  <div class="table-container" :class="{ border: props.border }">
    <table v-bind="$attrs" class="table">
      <slot></slot>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  position: relative;
  width: 100%;
  overflow-x: auto;
  font-family: var(--font-family);
}

.border {
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
}

.table {
  width: 100%;
  min-width: 640px;
  caption-side: bottom;
  border-collapse: collapse;
  color: hsl(var(--foreground));
  font-size: 14px;
  line-height: 20px;
}
</style>
