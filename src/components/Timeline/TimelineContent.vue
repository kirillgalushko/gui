<template>
  <div class="timeline-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.timeline-content {
  grid-area: content;
  min-width: 0;
  margin-top: var(--gap-1);
  color: hsl(var(--muted-foreground));
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
</style>
