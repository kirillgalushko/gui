<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>

<template>
  <button v-bind="$attrs" class="attachment-media-trigger" type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.attachment-media-trigger {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: zoom-in;
}
.attachment-media-trigger:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}
.attachment-media-trigger :deep(img) {
  transition: transform 180ms ease;
}
.attachment-media-trigger:hover :deep(img) {
  transform: scale(1.04);
}
@media (prefers-reduced-motion: reduce) {
  .attachment-media-trigger :deep(img) {
    transition: none;
  }
}
</style>
