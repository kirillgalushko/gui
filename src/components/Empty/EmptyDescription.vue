<script setup lang="ts">
import Text from "../Text/Text.vue";
</script>

<template>
  <Text color="secondary" Element="div" class="empty-description">
    <slot></slot>
  </Text>
</template>

<style scoped>
.empty-description {
  max-width: 360px;
}
</style>
