<script setup lang="ts">
import { IconChevronRightOutline } from "@gui/icons";
import type { ComponentSize } from "../../types";
import PaginationLink from "./PaginationLink.vue";

defineOptions({
  inheritAttrs: false,
});

export interface PaginationNextProps {
  Element?: "a" | "button";
  disabled?: boolean;
  size?: ComponentSize;
  label?: string;
  text?: string;
}

const props = withDefaults(defineProps<PaginationNextProps>(), {
  Element: "a",
  label: "Перейти на следующую страницу",
  text: "Вперёд",
});
</script>

<template>
  <PaginationLink
    v-bind="$attrs"
    :Element="props.Element"
    :disabled="props.disabled"
    :size="props.size"
    :aria-label="props.label"
    :class="['pagination-next', { 'pagination-next-icon-only': !props.text }]"
  >
    <slot>
      <span>{{ props.text }}</span>
      <IconChevronRightOutline />
    </slot>
  </PaginationLink>
</template>

<style scoped>
.pagination-next {
  width: auto;
  padding-inline: var(--gap-2);
}

.pagination-next-icon-only {
  width: var(--button-height);
  padding-inline: 0;
}
</style>
