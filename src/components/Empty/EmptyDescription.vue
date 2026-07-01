<script setup lang="ts">
import Text from '../Text/Text.vue';
</script>

<template>
  <Text typography="paragraph-2" color="secondary" Element="div" class="empty-description">
    <slot></slot>
  </Text>
</template>

<style scoped>
.empty-description {
  max-width: 360px;
}
</style>
