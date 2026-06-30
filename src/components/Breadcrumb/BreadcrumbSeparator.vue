<script setup lang="ts">
import { IconChevronRightOutline } from '@gui/icons';
</script>

<template>
  <li class="breadcrumb-separator" role="presentation" aria-hidden="true">
    <slot>
      <IconChevronRightOutline />
    </slot>
  </li>
</template>

<style scoped>
.breadcrumb-separator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 20px;
  user-select: none;
}
</style>
