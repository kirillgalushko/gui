<script setup lang="ts">
import Text from '../Text/Text.vue';
import type { TextProps } from '../Text/types';

export interface ItemDescriptionProps {
  Element?: TextProps['Element']
}

const props = withDefaults(defineProps<ItemDescriptionProps>(), {
  Element: 'div',
})
</script>

<template>
  <Text :Element="props.Element" typography="label-3" color="secondary" ellipsis class="item-description">
    <slot></slot>
  </Text>
</template>

<style scoped>
.item-description {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}
</style>
