<script setup lang="ts">
export interface SidebarSubItemProps {
  selected?: boolean;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<SidebarSubItemProps>();
</script>

<template>
  <button
    v-bind="$attrs"
    :class="[
      'sidebar-sub-item',
      { 'sidebar-sub-item--selected': props.selected },
    ]"
    :aria-current="props.selected ? 'page' : undefined"
    type="button"
  >
    <span v-if="$slots.icon" class="sidebar-sub-item__icon" aria-hidden="true">
      <slot name="icon"></slot>
    </span>
    <span class="sidebar-sub-item__label"><slot></slot></span>
  </button>
</template>

<style scoped>
.sidebar-sub-item {
  display: flex;
  width: 100%;
  height: 34px;
  align-items: center;
  gap: var(--gap-2);
  box-sizing: border-box;
  padding: 0 var(--gap-2);
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: hsl(var(--muted-foreground));
  cursor: pointer;
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  transition:
    color 0.15s,
    background-color 0.15s,
    scale 0.15s;
}

.sidebar-sub-item:hover {
  color: hsl(var(--contrast-foreground));
}

.sidebar-sub-item:active {
  scale: 0.98;
}

.sidebar-sub-item:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.sidebar-sub-item--selected {
  background-color: color-mix(in oklab, hsl(var(--input)) 80%, transparent);
  color: hsl(var(--contrast-foreground));
}

.sidebar-sub-item__icon {
  display: inline-flex;
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
}

.sidebar-sub-item__label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
