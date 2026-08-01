<script setup lang="ts">
export interface SidebarListProps {
  scrollable?: boolean;
}

const props = withDefaults(defineProps<SidebarListProps>(), {
  scrollable: false,
});
</script>

<template>
  <div
    :class="['SidebarList', { 'SidebarList--scrollable': props.scrollable }]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.SidebarList {
  display: flex;
  flex-direction: column;
}

.SidebarList--scrollable {
  box-sizing: border-box;
  width: calc(100% + var(--sidebar-padding, 0px));
  min-height: 0;
  padding-right: var(--sidebar-padding, 0px);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scrollbar-color: hsl(var(--border)) transparent;
  scrollbar-width: thin;
}
</style>
