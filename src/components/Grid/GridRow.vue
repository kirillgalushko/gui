<template>
  <div class="grid-row">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-row {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, 12), minmax(0, 1fr));
  gap: var(--grid-gutter, var(--gap-4, 16px));
  width: 100%;
  min-width: 0;
}
</style>
