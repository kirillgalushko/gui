<script lang="ts" setup>
import { ref } from 'vue';

const menuRef = ref<HTMLDivElement>()

defineExpose({ menuRef })
</script>

<template>
  <div v-bind="$attrs" ref="menuRef" class="base-menu">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-menu {
  --menu-text-color: hsl(var(--popover-foreground));
  --menu-background-color: hsl(var(--popover));
  --menu-border-color: hsl(var(--border));
  --menu-padding: 4px;

  font-size: 14px;
  border-radius: 6px;
  padding: var(--menu-padding);
  color: var(--menu-text-color);
  background-color: var(--menu-background-color);
  border: 1px solid var(--menu-border-color);
  width: max-content;
  z-index: 99;
}
</style>