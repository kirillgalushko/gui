<template>
  <div class="attachment-actions">
    <slot></slot>
  </div>
</template>

<style scoped>
.attachment-actions {
  position: relative;
  z-index: 2;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: var(--gap-1);
  margin-left: auto;
}

:global(.attachment.vertical) .attachment-actions {
  position: absolute;
  top: var(--gap-2);
  right: var(--gap-2);
  margin-left: 0;
}
</style>
