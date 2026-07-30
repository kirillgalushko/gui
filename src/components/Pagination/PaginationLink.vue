<script setup lang="ts">
import { computed, inject } from "vue";
import Button from "../Button/Button.vue";
import type { ComponentSize } from "../../types";
import { paginationContextKey } from "./context";

defineOptions({
  inheritAttrs: false,
});

export interface PaginationLinkProps {
  Element?: "a" | "button";
  asChild?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  size?: ComponentSize;
}

const props = withDefaults(defineProps<PaginationLinkProps>(), {
  Element: "a",
});

const paginationContext = inject(paginationContextKey, undefined);
const size = computed(
  () => props.size ?? paginationContext?.size.value ?? "medium",
);
</script>

<template>
  <Button
    v-if="props.asChild"
    v-bind="$attrs"
    as-child
    :mode="props.isActive ? 'outline' : 'ghost'"
    :size="size"
    squared
    :disabled="props.disabled"
    :aria-current="props.isActive ? 'page' : undefined"
  >
    <slot></slot>
  </Button>

  <Button
    v-else-if="props.Element === 'a'"
    v-bind="$attrs"
    as-child
    :mode="props.isActive ? 'outline' : 'ghost'"
    :size="size"
    squared
    :disabled="props.disabled"
    :aria-current="props.isActive ? 'page' : undefined"
  >
    <a>
      <slot></slot>
    </a>
  </Button>

  <Button
    v-else
    v-bind="$attrs"
    type="button"
    :mode="props.isActive ? 'outline' : 'ghost'"
    :size="size"
    squared
    :disabled="props.disabled"
    :aria-current="props.isActive ? 'page' : undefined"
  >
    <slot></slot>
  </Button>
</template>
