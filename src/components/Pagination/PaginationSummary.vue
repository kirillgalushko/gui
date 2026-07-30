<script setup lang="ts">
import { computed } from "vue";
import Text from "../Text/Text.vue";

export interface PaginationSummaryProps {
  from: number;
  to: number;
  total: number;
}

const props = defineProps<PaginationSummaryProps>();
const summary = computed(() =>
  props.total > 0 ? `${props.from}–${props.to} из ${props.total}` : "0 из 0",
);
const accessibleLabel = computed(() =>
  props.total > 0
    ? `Показаны строки с ${props.from} по ${props.to} из ${props.total}`
    : "Нет строк",
);
</script>

<template>
  <Text
    Element="span"
    typography="subtitle-1"
    color="secondary"
    aria-live="polite"
    :aria-label="accessibleLabel"
  >
    {{ summary }}
  </Text>
</template>
