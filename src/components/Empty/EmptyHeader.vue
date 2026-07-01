<template>
  <div class="empty-header">
    <slot></slot>
  </div>
</template>

<style scoped>
.empty-header {
  display: flex;
  max-width: 420px;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-2);
}
</style>
