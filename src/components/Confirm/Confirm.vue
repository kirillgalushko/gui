<script setup lang="ts">
import Modal from '../Modal/Modal.vue';
import Button from '../Button/Button.vue';
import Text from '../Text/Text.vue'
import { useConfirm } from './useConfirm';

type UseConfirmResult = Omit<ReturnType<typeof useConfirm>, 'confirm'>
// Storybook throws an error if you using the hook result as props type
export interface ConfirmProps {
  title: UseConfirmResult['title'],
  description: UseConfirmResult['description'],
  isOpened: UseConfirmResult['isOpened'],
  resolve: UseConfirmResult['resolve'],
  reject: UseConfirmResult['reject']
  confirmButtonText: UseConfirmResult['confirmButtonText'] | string,
  cancelButtonText: UseConfirmResult['cancelButtonText'] | string,
}

const props = defineProps<ConfirmProps>()
</script>

<template>
  <Modal :isOpened="props.isOpened.value" :title="props.title.value">
    <Text typography="paragraph-1" mode="secondary">
      {{ props.description }}
    </Text>
    <template #footer>
      <Button mode="ghost" @click="props.reject.value">{{ props.cancelButtonText }}</Button>
      <Button mode="accent" @click="props.resolve.value">{{ props.confirmButtonText }}</Button>
    </template>
  </Modal>
</template>

<style scoped></style>