<script setup lang="ts">
import { computed, inject, provide, ref, useId } from "vue";
import {
  navigationMenuContextKey,
  navigationMenuItemContextKey,
} from "./context";

export interface NavigationMenuItemProps {
  disabled?: boolean;
  value: string;
}

const props = withDefaults(defineProps<NavigationMenuItemProps>(), {
  disabled: false,
});
const navigationMenu = inject(navigationMenuContextKey);

if (!navigationMenu) {
  throw new Error("NavigationMenuItem must be used inside NavigationMenu");
}

const id = useId();
const isOpen = computed(() => navigationMenu.value.value === props.value);
const disabled = computed(() => props.disabled);
const triggerRef = ref<HTMLElement | null>(null);

provide(navigationMenuItemContextKey, {
  contentId: `${id}-content`,
  disabled,
  isOpen,
  triggerId: `${id}-trigger`,
  triggerRef,
  value: props.value,
});
</script>

<template>
  <li
    class="navigation-menu-item"
    :data-disabled="disabled || undefined"
    :data-state="isOpen ? 'open' : 'closed'"
    @pointerenter="
      navigationMenu.openOnHover.value && !disabled
        ? navigationMenu.scheduleOpen(props.value)
        : undefined
    "
  >
    <slot></slot>
  </li>
</template>

<style scoped>
.navigation-menu-item {
  position: relative;
  display: flex;
  align-items: center;
}

.navigation-menu-item[data-disabled] {
  opacity: 0.5;
}

:global(.navigation-menu[data-mobile]) .navigation-menu-item,
:global(.navigation-menu[data-orientation="vertical"]) .navigation-menu-item {
  width: 100%;
  flex-direction: column;
  align-items: stretch;
}
</style>
