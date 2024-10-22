<script setup lang="ts">

export interface SeparatorProps {
  direction: 'vertical' | 'horizontal'
}

const props = defineProps<SeparatorProps>()

</script>

<template>
  <div :class="['separator', props.direction]"></div>
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
</style>