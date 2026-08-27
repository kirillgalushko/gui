<script setup lang="ts">
import { ref } from "vue";
import { IconUploadOutline } from "@gui/icons";
import type { ComponentSize } from "../../types";
import Button from "../Button/Button.vue";

export interface FileInputProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  capture?: "user" | "environment";
  size?: ComponentSize;
}

const props = withDefaults(defineProps<FileInputProps>(), {
  accept: undefined,
  multiple: false,
  disabled: false,
  label: "Выбрать файл",
  capture: undefined,
  size: "large",
});
const emit = defineEmits<{
  change: [files: File[]];
}>();
defineSlots<{
  trigger?: (props: { open: () => void; disabled: boolean }) => unknown;
}>();
const input = ref<HTMLInputElement>();

const openPicker = () => {
  if (!props.disabled) {
    input.value?.click();
  }
};

const handleChange = (event: Event) => {
  const element = event.target as HTMLInputElement;
  emit("change", Array.from(element.files ?? []));
  element.value = "";
};

defineExpose({ open: openPicker });
</script>

<template>
  <component :is="$slots.trigger ? 'div' : 'span'">
    <input
      ref="input"
      class="file-input-native"
      type="file"
      :accept="props.accept"
      :multiple="props.multiple"
      :disabled="props.disabled"
      :capture="props.capture"
      tabindex="-1"
      @change="handleChange"
    />
    <slot name="trigger" :open="openPicker" :disabled="props.disabled">
      <Button
        type="button"
        mode="default"
        :size="props.size"
        :disabled="props.disabled"
        @click="openPicker"
      >
        <IconUploadOutline />
        {{ props.label }}
      </Button>
    </slot>
  </component>
</template>

<style scoped>
.file-input-native {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
