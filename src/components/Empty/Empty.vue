<script setup lang="ts">
export type EmptySize = "small" | "medium";

export interface EmptyProps {
  size?: EmptySize;
}

const props = withDefaults(defineProps<EmptyProps>(), {
  size: "medium",
});
</script>

<template>
  <div :class="['empty', props.size]">
    <slot></slot>
  </div>
</template>

<style scoped>
.empty {
  --empty-min-height: 160px;
  --empty-padding: var(--gap-6);

  display: flex;
  min-height: var(--empty-min-height);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-4);
  padding: var(--empty-padding);
  text-align: center;
}

.small {
  --empty-min-height: 96px;
  --empty-padding: var(--gap-4);
}
</style>
