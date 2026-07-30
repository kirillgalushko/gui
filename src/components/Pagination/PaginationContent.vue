<template>
  <ul class="pagination-content">
    <slot></slot>
  </ul>
</template>

<style scoped>
.pagination-content {
  display: flex;
  align-items: center;
  gap: var(--gap-1);
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
