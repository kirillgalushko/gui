<script setup lang="ts">
export type ItemGroupMode = "outlined" | "plain";

export interface ItemGroupProps {
  mode?: ItemGroupMode;
  separated?: boolean;
  stretched?: boolean;
}

const props = withDefaults(defineProps<ItemGroupProps>(), {
  mode: "outlined",
  separated: true,
  stretched: false,
});
</script>

<template>
  <div
    :class="[
      'item-group',
      props.mode,
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

.plain {
  border: 0;
}

.plain > :deep(.item) {
  padding-left: 0;
  padding-right: 0;
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
