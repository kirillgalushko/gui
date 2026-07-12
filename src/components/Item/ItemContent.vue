<template>
  <div class="item-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.item-content {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  flex-direction: column;
  gap: var(--item-content-gap, 2px);
}
</style>
