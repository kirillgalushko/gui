<script setup lang="ts">
import { computed, inject } from "vue";
import BaseMenuItem, {
  type BaseMenuItemProps,
} from "../BaseMenu/BaseMenuItem.vue";
import { dropdownSubmenuContextKey } from "./useDropdownSubmenu";

defineOptions({
  inheritAttrs: false,
});

export type DropdownSubTriggerProps = Omit<BaseMenuItemProps, "showArrow">;

const props = defineProps<DropdownSubTriggerProps>();
const submenu = inject(dropdownSubmenuContextKey, null);
const expanded = computed(() => (submenu ? submenu.shown.value : undefined));

const setHovered = (hovered: boolean) => {
  submenu?.setHovered("trigger", hovered);
};

const setFocused = (focused: boolean) => {
  submenu?.setFocused("trigger", focused);
};
</script>

<template>
  <BaseMenuItem
    v-bind="{ ...$attrs, ...props }"
    show-arrow
    aria-haspopup="menu"
    :aria-expanded="expanded"
    @mouseenter="setHovered(true)"
    @mouseleave="setHovered(false)"
    @focusin="setFocused(true)"
    @focusout="setFocused(false)"
    @click="submenu?.show()"
  >
    <slot></slot>
  </BaseMenuItem>
</template>
