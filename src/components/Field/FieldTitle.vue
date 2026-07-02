<script setup lang="ts">
import Text from '../Text/Text.vue';
</script>

<template>
  <Text Element="div" typography="label-2" color="default" class="field-title">
    <slot></slot>
  </Text>
</template>

<style scoped>
.field-title {
  margin: 0;
}
</style>
