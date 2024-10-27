<script setup lang="ts">

export interface BadgeProps {
  mode?: 'default' | 'secondary' | 'ghost'
}

const props = withDefaults(defineProps<BadgeProps>(), { mode: 'default' })
</script>

<template>
  <div :class="['Badge', props.mode]">
    <slot></slot>
  </div>
</template>

<style scoped>
.Badge {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  box-sizing: border-box;
  min-width: 20px;
}

.default {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.secondary {
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}

.ghost {
  background-color: transparent;
}
</style>