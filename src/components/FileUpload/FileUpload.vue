<script setup lang="ts">
import { computed, provide, ref, useId } from "vue";
import { fileUploadContextKey } from "./context";
import { isSameFile, validateFileUpload } from "./fileUpload";
import type {
  FileUploadRejection,
  FileUploadSize,
  FileUploadValidator,
} from "./types";

export interface FileUploadProps {
  accept?: string;
  capture?: "user" | "environment";
  defaultValue?: File[];
  disabled?: boolean;
  invalid?: boolean;
  maxFiles?: number;
  maxSize?: number;
  modelValue?: File[];
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: FileUploadSize;
  stretched?: boolean;
  validate?: FileUploadValidator;
}

const props = withDefaults(defineProps<FileUploadProps>(), {
  accept: undefined,
  capture: undefined,
  defaultValue: () => [],
  disabled: false,
  invalid: false,
  maxFiles: 1,
  maxSize: undefined,
  modelValue: undefined,
  multiple: false,
  name: undefined,
  required: false,
  size: "medium",
  stretched: true,
  validate: undefined,
});
const emit = defineEmits<{
  accept: [files: File[]];
  change: [files: File[]];
  reject: [rejections: FileUploadRejection[]];
  "update:modelValue": [files: File[]];
}>();
const input = ref<HTMLInputElement | null>(null);
const uncontrolledValue = ref([...props.defaultValue]);
const hasRejections = ref(false);
const isDragging = ref(false);
const inputId = useId();
const files = computed(() => props.modelValue ?? uncontrolledValue.value);
const invalid = computed(() => props.invalid || hasRejections.value);

const updateFiles = (nextFiles: File[]) => {
  if (props.modelValue === undefined) {
    uncontrolledValue.value = nextFiles;
  }

  emit("update:modelValue", nextFiles);
  emit("change", nextFiles);
};

const addFiles = (selectedFiles: File[]) => {
  if (props.disabled || selectedFiles.length === 0) {
    return;
  }

  const baseFiles = props.multiple ? [...files.value] : [];
  const candidates = props.multiple ? selectedFiles : selectedFiles.slice(0, 1);
  const acceptedFiles: File[] = [];
  const rejections = candidates.flatMap((file) => {
    const validation = validateFileUpload(file, {
      accept: props.accept,
      maxSize: props.maxSize,
      validate: props.validate,
    });

    if (validation !== null) {
      return [validation];
    }

    if (
      [...baseFiles, ...acceptedFiles].some((value) => isSameFile(value, file))
    ) {
      return [{ file, errors: ["Файл уже добавлен"] }];
    }

    if (baseFiles.length + acceptedFiles.length >= props.maxFiles) {
      return [
        { file, errors: [`Можно добавить не больше ${props.maxFiles} файлов`] },
      ];
    }

    acceptedFiles.push(file);
    return [];
  });

  hasRejections.value = rejections.length > 0;

  if (rejections.length > 0) {
    emit("reject", rejections);
  }

  if (acceptedFiles.length > 0) {
    const nextFiles = [...baseFiles, ...acceptedFiles];
    emit("accept", acceptedFiles);
    updateFiles(nextFiles);
  }
};

const remove = (file: File) => {
  if (!props.disabled) {
    updateFiles(files.value.filter((value) => !isSameFile(value, file)));
  }
};

const clear = () => {
  if (!props.disabled && files.value.length > 0) {
    updateFiles([]);
  }
};

const open = () => {
  if (!props.disabled) {
    input.value?.click();
  }
};

const handleInputChange = (event: Event) => {
  const element = event.target as HTMLInputElement;
  addFiles(Array.from(element.files ?? []));
  element.value = "";
};

provide(fileUploadContextKey, {
  addFiles,
  clear,
  disabled: computed(() => props.disabled),
  files,
  inputId,
  invalid,
  isDragging,
  open,
  remove,
  size: computed(() => props.size),
});

defineExpose({ clear, open });
</script>

<template>
  <div
    :class="['file-upload', { stretched: props.stretched }]"
    :data-disabled="props.disabled || undefined"
    :data-invalid="invalid || undefined"
  >
    <input
      :id="inputId"
      ref="input"
      class="file-upload-input"
      type="file"
      :accept="props.accept"
      :capture="props.capture"
      :disabled="props.disabled"
      :multiple="props.multiple"
      :name="props.name"
      :required="props.required"
      tabindex="-1"
      @change="handleInputChange"
    />
    <slot></slot>
  </div>
</template>

<style scoped>
.file-upload {
  display: flex;
  width: auto;
  min-width: 0;
  flex-direction: column;
  gap: var(--gap-3);
  box-sizing: border-box;
  font-family: var(--font-family);
}

.file-upload.stretched {
  width: 100%;
}

.file-upload-input {
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
