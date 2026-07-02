<script setup lang="ts">
import Text from '../Text/Text.vue';

export interface FieldSeparatorProps {
  label?: string;
}

const props = defineProps<FieldSeparatorProps>();
</script>

<template>
  <div class="field-separator">
    <span class="field-separator-line"></span>
    <Text v-if="props.label" Element="span" typography="label-3" color="secondary" class="field-separator-label">
      {{ props.label }}
    </Text>
    <span class="field-separator-line"></span>
  </div>
</template>

<style scoped>
.field-separator {
  display: flex;
  align-items: center;
  gap: var(--gap-2);
  min-width: 0;
}

.field-separator-line {
  height: 1px;
  flex: 1 1 auto;
  background: hsl(var(--border));
}

.field-separator-label {
  flex: 0 0 auto;
}
</style>
