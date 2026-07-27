<script setup lang="ts">
export interface TimelineTitleProps {
  Element?: "h2" | "h3" | "h4" | "div" | "span";
}

const props = withDefaults(defineProps<TimelineTitleProps>(), {
  Element: "h3",
});
</script>

<template>
  <component :is="props.Element" class="timeline-title">
    <slot></slot>
  </component>
</template>

<style scoped>
.timeline-title {
  min-width: 0;
  margin: 0;
  color: hsl(var(--foreground));
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
</style>
