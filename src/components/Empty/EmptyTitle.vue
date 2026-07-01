<script setup lang="ts">
import Text from '../Text/Text.vue';
</script>

<template>
  <Text typography="title-2" color="default" Element="div" class="empty-title">
    <slot></slot>
  </Text>
</template>

<style scoped>
.empty-title {
  line-height: 24px;
}
</style>
