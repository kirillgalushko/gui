<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>

<template>
  <button v-bind="$attrs" class="attachment-trigger" type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.attachment-trigger {
  position: absolute;
  inset: 0;
  z-index: 1;
  border: 0;
  border-radius: inherit;
  background: transparent;
  cursor: pointer;
}

.attachment-trigger:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}
</style>
