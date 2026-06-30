<template>
  <tr class="table-row">
    <slot></slot>
  </tr>
</template>

<style scoped>
.table-row {
  border-bottom: 1px solid hsl(var(--border));
  transition: background-color 0.2s;
}

.table-row:hover {
  background-color: hsl(var(--muted) / 0.5);
}

.table-row[data-state="selected"] {
  background-color: hsl(var(--muted));
}
</style>
