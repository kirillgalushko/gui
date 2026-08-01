<script setup lang="ts">
import Text from "../Text/Text.vue";

export interface FieldLegendProps {
  description?: string;
}

const props = defineProps<FieldLegendProps>();
</script>

<template>
  <legend class="field-legend">
    <span class="field-legend-content">
      <Text Element="span" typography="label-3" color="default">
        <slot></slot>
      </Text>
      <Text v-if="props.description" Element="span" color="secondary">
        {{ props.description }}
      </Text>
    </span>
  </legend>
</template>

<style scoped>
.field-legend {
  padding: 0;
  margin: 0 0 var(--gap-3);
}

.field-legend-content {
  display: inline-flex;
  flex-direction: column;
  gap: var(--gap-1);
}
</style>
