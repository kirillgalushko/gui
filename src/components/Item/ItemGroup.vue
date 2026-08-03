<script setup lang="ts">
export interface ItemGroupProps {
  separated?: boolean;
  stretched?: boolean;
}

const props = withDefaults(defineProps<ItemGroupProps>(), {
  separated: true,
  stretched: false,
});
</script>

<template>
  <div
    :class="[
      'item-group',
      { separated: props.separated, stretched: props.stretched },
    ]"
    role="list"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.item-group {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid hsl(var(--border));
  border-radius: 14px;
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
}

.stretched {
  width: 100%;
}

.item-group > :deep(.item) {
  border: 0;
  border-radius: 0;
  background-color: transparent;
}

.separated > :deep(.item + .item) {
  border-top: 1px solid hsl(var(--border));
}
</style>
