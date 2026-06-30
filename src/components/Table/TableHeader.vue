<template>
  <thead class="table-header">
    <slot></slot>
  </thead>
</template>

<style scoped>
.table-header {
  border-bottom: 1px solid hsl(var(--border));
}
</style>
