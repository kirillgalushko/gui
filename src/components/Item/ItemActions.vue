<template>
  <div class="item-actions">
    <slot></slot>
  </div>
</template>

<style scoped>
.item-actions {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-2);
  flex-shrink: 0;
  margin-left: auto;
}
</style>
