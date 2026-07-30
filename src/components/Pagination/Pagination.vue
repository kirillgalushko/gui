<script setup lang="ts">
import { computed, provide } from "vue";
import type { ComponentSize } from "../../types";
import { paginationContextKey } from "./context";

defineOptions({
  inheritAttrs: false,
});

export interface PaginationProps {
  label?: string;
  size?: ComponentSize;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  label: "Пагинация",
  size: "medium",
});

provide(paginationContextKey, {
  size: computed(() => props.size),
});
</script>

<template>
  <nav v-bind="$attrs" :aria-label="props.label" :data-size="props.size">
    <slot></slot>
  </nav>
</template>
