<script setup lang="ts">
import { computed } from 'vue';
import { useViewportBreakpoint } from '../../hooks/useViewportBreakpoint';
import AdaptiveModal from '../AdaptiveModal/AdaptiveModal.vue';
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
const viewport = useViewportBreakpoint();
const isFooterStretched = computed(() => viewport.isMobile);
</script>

<template>
  <AdaptiveModal :isOpened="props.isOpened.value" :onClose="props.reject.value" :title="props.title.value">
    <Text typography="paragraph-1" color="secondary">
      {{ props.description }}
    </Text>
    <template #footer>
      <Button :stretched="isFooterStretched" mode="ghost" @click="props.reject.value">
        {{ props.cancelButtonText }}
      </Button>
      <Button :stretched="isFooterStretched" mode="contrast" @click="props.resolve.value">
        {{ props.confirmButtonText }}
      </Button>
    </template>
  </AdaptiveModal>
</template>

<style scoped></style>
