<template>
  <tbody class="table-body">
    <slot></slot>
  </tbody>
</template>

<style scoped>
.table-body :deep(tr:last-child) {
  border-bottom: 0;
}
</style>
