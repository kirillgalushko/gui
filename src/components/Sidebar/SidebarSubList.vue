<script setup lang="ts">
import { inject, ref, type Ref } from "vue";

const isCompact = inject<Ref<boolean>>("sidebar-is-compact", ref(false));
</script>

<template>
  <div
    :class="['sidebar-sub-list', { 'sidebar-sub-list--compact': isCompact }]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.sidebar-sub-list {
  display: flex;
  flex-direction: column;
  margin: var(--gap-1) 0 var(--gap-1) 17px;
  padding-left: var(--gap-2);
  border-left: 1px solid hsl(var(--border));
}

.sidebar-sub-list--compact {
  margin: var(--gap-1) 0 0;
  padding-left: 0;
  border-left: 0;
}
</style>
