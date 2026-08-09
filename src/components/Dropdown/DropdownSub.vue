<script setup lang="ts">
import Dropdown, { type DropdownProps } from "./Dropdown.vue";

defineOptions({
  inheritAttrs: false,
});

export type DropdownSubProps = Omit<DropdownProps, "stretched">;

const props = defineProps<DropdownSubProps>();
</script>

<template>
  <Dropdown
    v-bind="{ ...$attrs, ...props }"
    stretched
    instant-move
    placement="right-start"
    :triggers="['hover', 'focus', 'click']"
    :popper-triggers="['hover']"
    :delay="{ show: 0, hide: 200 }"
  >
    <slot></slot>
    <template #popper>
      <slot name="popper"></slot>
    </template>
  </Dropdown>
</template>
