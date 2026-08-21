<script setup lang="ts">
export interface CardContentProps {
  /** Добавляет нижний разделитель секции. */
  border?: boolean;
}

const props = withDefaults(defineProps<CardContentProps>(), {
  border: false,
});
</script>

<template>
  <div
    :class="['card-content', { bordered: props.border }]"
    :data-border="props.border || undefined"
    data-slot="card-content"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.card-content {
  box-sizing: border-box;
  min-width: 0;
  margin: 0 calc(var(--gui-card-padding, var(--gap-3)) * -1);
  padding: var(--gui-card-padding, var(--gap-3));
  font-size: 14px;
}

.card-content.bordered {
  border-bottom: 1px solid hsl(var(--border));
}
</style>
