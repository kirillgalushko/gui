<template>
  <div v-bind="$attrs" class="bubble-group">
    <slot></slot>
  </div>
</template>

<style scoped>
.bubble-group {
  display: flex;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  flex-direction: column;
  gap: var(--gap-1);
}
</style>
