<script setup lang="ts">
export interface BaseMenuGroupProps {
  role?: "group" | "menu";
}

const props = withDefaults(defineProps<BaseMenuGroupProps>(), {
  role: "group",
});
</script>

<template>
  <div class="base-menu-group" :role="props.role">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-menu-group {
  display: flex;
  flex-direction: column;
}
</style>
