<script setup lang="ts">
import { IconDotsOutline } from "@gui/icons";
import { computed, inject } from "vue";
import type { ComponentSize } from "../../types";
import { paginationContextKey } from "./context";

export interface PaginationEllipsisProps {
  label?: string;
  size?: ComponentSize;
}

const props = withDefaults(defineProps<PaginationEllipsisProps>(), {
  label: "Больше страниц",
});

const paginationContext = inject(paginationContextKey, undefined);
const size = computed(
  () => props.size ?? paginationContext?.size.value ?? "large",
);
</script>

<template>
  <span :class="['pagination-ellipsis', size]">
    <slot>
      <IconDotsOutline aria-hidden="true" />
    </slot>
    <span class="pagination-ellipsis-label">{{ props.label }}</span>
  </span>
</template>

<style scoped>
.pagination-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
}

.pagination-ellipsis.extra-small {
  width: 24px;
  height: 24px;
  font-size: 14px;
}

.pagination-ellipsis.small {
  width: 32px;
  height: 32px;
  font-size: 16px;
}

.pagination-ellipsis.medium {
  width: 36px;
  height: 36px;
  font-size: 20px;
}

.pagination-ellipsis.large {
  width: 40px;
  height: 40px;
  font-size: 20px;
}

.pagination-ellipsis-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
