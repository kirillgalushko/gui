<script setup lang="ts">
import Text from '../Text/Text.vue';
</script>

<template>
  <legend class="field-legend">
    <Text Element="span" typography="label-3" color="default">
      <slot></slot>
    </Text>
  </legend>
</template>

<style scoped>
.field-legend {
  padding: 0;
  margin: 0 0 var(--gap-3);
}
</style>
