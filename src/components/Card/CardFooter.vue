<script setup lang="ts">
export type CardFooterProps = Record<string, never>;
</script>

<template>
  <div class="card-footer" data-slot="card-footer">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-footer {
  box-sizing: border-box;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: var(--gap-2);
  margin: 0 calc(var(--gui-card-padding, var(--gap-3)) * -1)
    calc(var(--gui-card-padding, var(--gap-3)) * -1);
  padding: var(--gui-card-padding, var(--gap-3));
  border-top: 1px solid hsl(var(--border));
  border-end-start-radius: calc(var(--gui-card-border-radius, 16px) - 1px);
  border-end-end-radius: calc(var(--gui-card-border-radius, 16px) - 1px);
  background-color: hsl(var(--secondary) / 0.25);
}
</style>
