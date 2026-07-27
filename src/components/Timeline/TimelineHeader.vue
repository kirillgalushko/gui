<template>
  <div class="timeline-header">
    <slot></slot>
  </div>
</template>

<style scoped>
.timeline-header {
  grid-area: header;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: var(--gap-2);
}
</style>
