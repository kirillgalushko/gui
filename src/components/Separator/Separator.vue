<script setup lang="ts">
export interface SeparatorProps {
  direction: "vertical" | "horizontal";
  stretched?: boolean;
}

const props = withDefaults(defineProps<SeparatorProps>(), {
  stretched: false,
});
</script>

<template>
  <div
    :class="['separator', props.direction, { stretched: props.stretched }]"
  ></div>
</template>

<style scoped>
.separator {
  background: hsl(var(--border));
  display: flex;
  justify-content: center;
  align-items: center;
}

.horizontal {
  width: 16px;
  height: 1px;
}

.vertical {
  width: 1px;
  height: 16px;
}

.horizontal.stretched {
  width: 100%;
}

.vertical.stretched {
  height: 100%;
}
</style>
