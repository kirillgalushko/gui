<script setup lang="ts">
import Icon from '../Icon/Icon.vue'

interface DropdownItemProps {
  showArrow?: boolean
}

const props = defineProps<DropdownItemProps>()
</script>

<template>
  <button :class="['dropdown-item']">
    <div class="dropdown-item-content">
      <slot></slot>
    </div>
    <Icon v-if="props.showArrow" name="chevron-right" />
  </button>
</template>

<style scoped>
.dropdown-item {
  font-family: 'Inter', Helvetica, system-ui, Avenir, Arial, sans-serif;
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

.dropdown-item-content {
  display: flex;
  gap: 8px;
  width: 100%;
}

.dropdown-item:hover {
  background-color: hsl(var(--accent));
}

.dropdown-item:focus-visible {
  border: 2px solid hsl(var(--ring))
}

.dropdown-item:active {
  scale: 0.98;
}
</style>