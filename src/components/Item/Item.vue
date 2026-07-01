<script setup lang="ts">
export interface ItemProps {
  interactive?: boolean
  stretched?: boolean
}

const props = withDefaults(defineProps<ItemProps>(), {
  interactive: false,
  stretched: false,
})
</script>

<template>
  <component :is="props.interactive ? 'button' : 'div'"
    :class="['item', { interactive: props.interactive, stretched: props.stretched }]">
    <slot></slot>
  </component>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  gap: var(--gap-3);
  box-sizing: border-box;
  min-width: 0;
  padding: var(--gap-3);
  border: 1px solid hsl(var(--border));
  border-radius: 14px;
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  font-family: var(--font-family);
  text-align: initial;
}

.interactive {
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, scale 0.2s;
}

.interactive:hover {
  background-color: hsl(var(--secondary));
}

.interactive:active {
  scale: 0.99;
}

.interactive:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.stretched {
  width: 100%;
}
</style>
