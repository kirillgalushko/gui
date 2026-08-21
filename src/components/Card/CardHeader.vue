<script setup lang="ts">
export interface CardHeaderProps {
  /** Добавляет нижний разделитель секции. */
  border?: boolean;
}

const props = withDefaults(defineProps<CardHeaderProps>(), {
  border: false,
});
</script>

<template>
  <div
    :class="['card-header', { bordered: props.border }]"
    :data-border="props.border || undefined"
    data-slot="card-header"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.card-header {
  box-sizing: border-box;
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: var(--gap-1);
  margin: 0 calc(var(--gui-card-padding, var(--gap-3)) * -1);
  padding: 0 var(--gui-card-padding, var(--gap-3));
}

.card-header.bordered {
  padding-bottom: var(--gui-card-padding, var(--gap-3));
  border-bottom: 1px solid hsl(var(--border));
}
</style>
