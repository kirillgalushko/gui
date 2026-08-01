<script setup lang="ts">
import { computed, unref } from "vue";
import { useViewportBreakpoint } from "../../hooks/useViewportBreakpoint";
import AdaptiveModal from "../AdaptiveModal/AdaptiveModal.vue";
import Button from "../Button/Button.vue";
import Stack from "../Stack/Stack.vue";
import Text from "../Text/Text.vue";
import { useConfirm } from "./useConfirm";

type UseConfirmResult = Omit<ReturnType<typeof useConfirm>, "confirm">;
// Storybook throws an error if you using the hook result as props type
export interface ConfirmProps {
  title: UseConfirmResult["title"];
  description: UseConfirmResult["description"];
  isOpened: UseConfirmResult["isOpened"];
  resolve: UseConfirmResult["resolve"];
  secondary?: UseConfirmResult["secondary"];
  reject: UseConfirmResult["reject"];
  confirmButtonText: UseConfirmResult["confirmButtonText"] | string;
  secondaryButtonText?: UseConfirmResult["secondaryButtonText"] | string;
  cancelButtonText: UseConfirmResult["cancelButtonText"] | string;
}

const props = defineProps<ConfirmProps>();
const viewport = useViewportBreakpoint();
const isFooterStretched = computed(() => viewport.isMobile);
const hasSecondaryButton = computed(
  () => Boolean(unref(props.secondaryButtonText)) && Boolean(props.secondary),
);
const runSecondary = () => props.secondary?.value();
</script>

<template>
  <AdaptiveModal
    :isOpened="props.isOpened.value"
    :onClose="props.reject.value"
    :title="props.title.value"
  >
    <Text typography="paragraph-1" color="secondary">
      {{ props.description }}
    </Text>
    <template #footer>
      <Stack
        stretched
        :direction="isFooterStretched ? 'column' : 'row'"
        justifyContent="end"
        :gap="2"
      >
        <Button
          :stretched="isFooterStretched"
          mode="ghost"
          @click="props.reject.value"
        >
          {{ props.cancelButtonText }}
        </Button>
        <Button
          v-if="hasSecondaryButton"
          :stretched="isFooterStretched"
          mode="outline"
          @click="runSecondary"
        >
          {{ props.secondaryButtonText }}
        </Button>
        <Button
          :stretched="isFooterStretched"
          mode="contrast"
          @click="props.resolve.value"
        >
          {{ props.confirmButtonText }}
        </Button>
      </Stack>
    </template>
  </AdaptiveModal>
</template>

<style scoped></style>
