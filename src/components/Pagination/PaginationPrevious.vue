<script setup lang="ts">
import { IconChevronLeftOutline } from "@gui/icons";
import type { ComponentSize } from "../../types";
import PaginationLink from "./PaginationLink.vue";

defineOptions({
  inheritAttrs: false,
});

export interface PaginationPreviousProps {
  Element?: "a" | "button";
  disabled?: boolean;
  size?: ComponentSize;
  label?: string;
  text?: string;
}

const props = withDefaults(defineProps<PaginationPreviousProps>(), {
  Element: "a",
  label: "Перейти на предыдущую страницу",
  text: "Назад",
});
</script>

<template>
  <PaginationLink
    v-bind="$attrs"
    :Element="props.Element"
    :disabled="props.disabled"
    :size="props.size"
    :aria-label="props.label"
    :class="[
      'pagination-previous',
      { 'pagination-previous-icon-only': !props.text },
    ]"
  >
    <slot>
      <IconChevronLeftOutline />
      <span>{{ props.text }}</span>
    </slot>
  </PaginationLink>
</template>

<style scoped>
.pagination-previous {
  width: auto;
  padding-inline: var(--gap-2);
}

.pagination-previous-icon-only {
  width: var(--button-height);
  padding-inline: 0;
}
</style>
