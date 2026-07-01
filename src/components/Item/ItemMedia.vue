<template>
  <div class="item-media">
    <slot></slot>
  </div>
</template>

<style scoped>
.item-media {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: hsl(var(--muted-foreground));
}
</style>
