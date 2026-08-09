<script lang="ts" setup>
import { computed, ref, type CSSProperties } from "vue";
import { DEFAULT_MENU_MAX_WIDTH, resolveMenuWidth } from "./menuSizing";

export interface BaseMenuProps {
  width?: string;
  maxWidth?: string;
}

const props = withDefaults(defineProps<BaseMenuProps>(), {
  width: "auto",
  maxWidth: DEFAULT_MENU_MAX_WIDTH,
});

const menuRef = ref<HTMLDivElement>();
const menuStyles = computed<CSSProperties>(() => ({
  width: resolveMenuWidth(props.width),
  maxWidth: props.maxWidth,
}));

defineExpose({ menuRef });
</script>

<template>
  <div
    v-bind="$attrs"
    ref="menuRef"
    class="base-menu"
    role="menu"
    :style="menuStyles"
  >
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
  border-radius: 10px;
  padding: var(--menu-padding);
  color: var(--menu-text-color);
  background-color: var(--menu-background-color);
  border: 1px solid var(--menu-border-color);
  z-index: 99;
}
</style>
