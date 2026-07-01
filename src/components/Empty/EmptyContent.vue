<template>
  <div class="empty-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.empty-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-2);
}
</style>
