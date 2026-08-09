<script setup lang="ts">
import Text from "../Text/Text.vue";
</script>

<template>
  <Text class="base-menu-label" typography="label-1" color="secondary">
    <slot></slot>
  </Text>
</template>

<style scoped>
.base-menu-label {
  padding: 6px 8px;
}
</style>
