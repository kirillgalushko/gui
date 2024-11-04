<script lang="ts" setup>
import { inject, onMounted } from 'vue';
import BaseMenuItem, { type BaseMenuItemProps } from '../BaseMenu/BaseMenuItem.vue';
import useSelect from './useSelect';

export type SelectOptionProps = BaseMenuItemProps & {
  label: string;
  value: string;
};

const selectData = inject<ReturnType<typeof useSelect>>('select')
const props = defineProps<SelectOptionProps>();
const option = { label: props.label, value: props.value }

const handleClick = () => {
  selectData?.selectOption(option)
}

onMounted(() => {
  selectData?.registerOption(option)
})

</script>

<template>
  <BaseMenuItem v-bind="$attrs" @click="handleClick">
    <slot>{{ props.label }}</slot>
  </BaseMenuItem>
</template>