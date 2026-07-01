<script setup lang="ts">
export interface EmptyMediaProps {
  variant?: 'default' | 'icon';
}

const props = withDefaults(defineProps<EmptyMediaProps>(), {
  variant: 'default',
});
</script>

<template>
  <div :class="['empty-media', props.variant]">
    <slot></slot>
  </div>
</template>

<style scoped>
.empty-media {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
}

.icon {
  width: 40px;
  height: 40px;
  border: 1px solid hsl(var(--border));
  border-radius: 999px;
  background: hsl(var(--muted) / 0.5);
  font-size: 20px;
}

.icon :deep(svg) {
  width: 20px;
  height: 20px;
}
</style>
