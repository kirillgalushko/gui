<template>
  <td class="table-cell">
    <slot></slot>
  </td>
</template>

<style scoped>
.table-cell {
  padding: var(--gap-3);
  vertical-align: middle;
}

.table-cell:has([role="checkbox"]) {
  padding-right: 0;
}
</style>
