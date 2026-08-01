<template>
  <tbody class="table-body">
    <slot></slot>
  </tbody>
</template>

<style scoped>
.table-body :deep(tr:last-of-type) {
  border-bottom: 0;
}
</style>
