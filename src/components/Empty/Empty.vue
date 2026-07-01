<template>
  <div class="empty">
    <slot></slot>
  </div>
</template>

<style scoped>
.empty {
  display: flex;
  min-height: 160px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-4);
  padding: var(--gap-6);
  text-align: center;
}
</style>
