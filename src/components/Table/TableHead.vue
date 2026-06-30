<template>
  <th class="table-head">
    <slot></slot>
  </th>
</template>

<style scoped>
.table-head {
  height: 48px;
  padding: 0 var(--gap-3);
  color: hsl(var(--muted-foreground));
  font-weight: 500;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
}

.table-head:has([role="checkbox"]) {
  padding-right: 0;
}
</style>
