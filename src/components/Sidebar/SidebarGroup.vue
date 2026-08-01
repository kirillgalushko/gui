<script setup lang="ts">
import { inject, ref, type Ref } from "vue";

export interface SidebarGroupProps {
  label?: string;
}

const props = defineProps<SidebarGroupProps>();
const isCompact = inject<Ref<boolean>>("sidebar-is-compact", ref(false));
</script>

<template>
  <section :class="['sidebar-group', { 'sidebar-group--compact': isCompact }]">
    <div v-if="props.label && !isCompact" class="sidebar-group__label">
      {{ props.label }}
    </div>
    <div class="sidebar-group__content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.sidebar-group {
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
}

.sidebar-group + .sidebar-group {
  margin-top: var(--gap-6);
}

.sidebar-group--compact + .sidebar-group--compact {
  margin-top: var(--gap-2);
}

.sidebar-group__label {
  padding: 0 var(--gap-2);
  color: hsl(var(--muted-foreground));
  font-family: var(--font-family);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
}

.sidebar-group__content {
  display: flex;
  flex-direction: column;
}
</style>
