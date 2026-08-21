<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <kbd v-bind="$attrs" class="kbd-group" data-slot="kbd-group">
    <slot></slot>
  </kbd>
</template>

<style scoped>
.kbd-group {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-1);
  font-family: var(--font-family);
}
</style>
