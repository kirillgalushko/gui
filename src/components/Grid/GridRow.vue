<template>
  <div class="grid-row">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-row {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, 12), minmax(0, 1fr));
  column-gap: var(--grid-gutter, var(--gap-4, 16px));
  row-gap: 0;
  width: 100%;
  min-width: 0;
}
</style>
