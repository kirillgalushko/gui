<script setup lang="ts">
import { IconChevronRightOutline } from "@gui/icons";

export interface BaseMenuItemProps {
  showArrow?: boolean;
  selected?: boolean;
  role?: "menuitem" | "menuitemcheckbox" | "menuitemradio";
}

const props = defineProps<BaseMenuItemProps>();
</script>

<template>
  <button
    type="button"
    :class="['base-menu-item', { selected: props.selected }]"
    :role="props.role ?? 'menuitem'"
  >
    <div class="base-menu-item-content">
      <slot></slot>
    </div>
    <div
      v-if="$slots.trailing || props.showArrow"
      class="base-menu-item-trailing"
      aria-hidden="true"
    >
      <slot name="trailing">
        <IconChevronRightOutline v-if="props.showArrow" />
      </slot>
    </div>
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
  gap: 16px;
  font-size: 14px;
  transition: all 0.2s;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  text-align: start;
}

.base-menu-item-content {
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;
}

.base-menu-item-trailing {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.base-menu-item:hover {
  background-color: hsl(var(--contrast));
}

.base-menu-item:disabled {
  color: hsl(var(--muted-foreground));
  cursor: not-allowed;
  opacity: 0.65;
}

.base-menu-item:disabled:hover {
  background-color: transparent;
}

.base-menu-item:focus-visible {
  outline: 2px solid hsl(var(--ring));
  transition: none;
}

.base-menu-item:active {
  scale: 0.98;
}
</style>
