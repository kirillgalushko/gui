<script setup lang="ts">
export interface TimelineDateProps {
  datetime?: string;
  Element?: "time" | "div" | "span";
}

const props = withDefaults(defineProps<TimelineDateProps>(), {
  Element: "time",
});
</script>

<template>
  <component
    :is="props.Element"
    class="timeline-date"
    :datetime="props.Element === 'time' ? props.datetime : undefined"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.timeline-date {
  grid-area: date;
  min-width: 0;
  margin-bottom: var(--gap-1);
  color: hsl(var(--muted-foreground));
  font-family: var(--font-family);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}
</style>
