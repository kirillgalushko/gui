<script setup lang="ts">
import Text from '../Text/Text.vue';
import type { TextProps } from '../Text/types';

export interface ItemTitleProps {
  Element?: TextProps['Element']
}

const props = withDefaults(defineProps<ItemTitleProps>(), {
  Element: 'div',
})
</script>

<template>
  <Text :Element="props.Element" typography="label-2" color="default" ellipsis class="item-title">
    <slot></slot>
  </Text>
</template>

<style scoped>
.item-title {
  font-weight: 600;
  line-height: 20px;
}
</style>
