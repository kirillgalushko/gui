<template>
  <tfoot class="table-footer">
    <slot></slot>
  </tfoot>
</template>

<style scoped>
.table-footer {
  border-top: 1px solid hsl(var(--border));
  background-color: hsl(var(--muted) / 0.5);
  font-weight: 500;
}

.table-footer :deep(tr:last-child) {
  border-bottom: 0;
}
</style>
