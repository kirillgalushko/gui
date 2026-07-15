<script setup lang="ts">
import { ref } from "vue";
import { IconUploadOutline } from "@gui/icons";
import Button from "../Button/Button.vue";

export interface FileInputProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  capture?: "user" | "environment";
}

const props = withDefaults(defineProps<FileInputProps>(), {
  accept: undefined,
  multiple: false,
  disabled: false,
  label: "Выбрать файл",
  capture: undefined,
});
const emit = defineEmits<{
  change: [files: File[]];
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
</script>

<template>
  <span>
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
    <Button
      type="button"
      mode="default"
      :disabled="props.disabled"
      @click="openPicker"
    >
      <IconUploadOutline />
      {{ props.label }}
    </Button>
  </span>
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
