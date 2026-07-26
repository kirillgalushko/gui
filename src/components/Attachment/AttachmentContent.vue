<template>
  <div class="attachment-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.attachment-content {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
}
</style>
