<script setup lang="ts">
import Icon from '../Icon/Icon.vue'

interface BaseMenuItemProps {
  showArrow?: boolean
}

const props = defineProps<BaseMenuItemProps>()
</script>

<template>
  <button :class="['base-menu-item']">
    <div class="base-menu-item-content">
      <slot></slot>
    </div>
    <Icon v-if="props.showArrow" name="chevron-right" />
  </button>
</template>

<style scoped>
.base-menu-item {
  font-family: var(--font-family);
  background-color: transparent;
  border: 0;
  padding: 6px 8px;
  color: hsl(var(--popover-foreground));
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  transition: all 0.2s;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.base-menu-item-content {
  display: flex;
  gap: 8px;
  width: 100%;
}

.base-menu-item:hover {
  background-color: hsl(var(--accent));
}

.base-menu-item:focus-visible {
  border: 2px solid hsl(var(--ring))
}

.base-menu-item:active {
  scale: 0.98;
}
</style>