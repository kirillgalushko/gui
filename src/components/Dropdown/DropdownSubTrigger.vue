<script setup lang="ts">
import BaseMenuItem, {
  type BaseMenuItemProps,
} from "../BaseMenu/BaseMenuItem.vue";

defineOptions({
  inheritAttrs: false,
});

export type DropdownSubTriggerProps = Omit<BaseMenuItemProps, "showArrow">;

const props = defineProps<DropdownSubTriggerProps>();
</script>

<template>
  <BaseMenuItem v-bind="{ ...$attrs, ...props }" show-arrow>
    <slot></slot>
  </BaseMenuItem>
</template>
