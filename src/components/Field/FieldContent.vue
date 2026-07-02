<script setup lang="ts">
export interface FieldContentProps {
  align?: 'start' | 'center' | 'end';
}

const props = withDefaults(defineProps<FieldContentProps>(), {
  align: 'start',
});
</script>

<template>
  <div :class="['field-content', props.align]">
    <slot></slot>
  </div>
</template>

<style scoped>
.field-content {
  display: grid;
  gap: var(--gap-1);
  min-width: 0;
}

.field-content.start {
  align-self: start;
}

.field-content.center {
  align-self: center;
}

.field-content.end {
  align-self: end;
}
</style>
