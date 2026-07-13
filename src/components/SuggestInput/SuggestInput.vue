<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import Dropdown from "../Dropdown/Dropdown.vue";
import Input from "../Input/Input.vue";
import type { ComponentSize } from "../../types";

export interface SuggestInputProps {
  id?: string;
  placeholder?: string;
  size?: ComponentSize;
  disabled?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  description?: string;
  shown?: boolean;
}

const props = defineProps<SuggestInputProps>();
const emit = defineEmits<{
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
  input: [event: Event];
  keydown: [event: KeyboardEvent];
  "update:shown": [shown: boolean];
}>();

const model = defineModel<string>({ default: "" });
const triggerRef = ref<HTMLDivElement>();
let focusOpenTimer: ReturnType<typeof setTimeout> | undefined;
let blurCloseTimer: ReturnType<typeof setTimeout> | undefined;

const isShown = computed({
  get: () => props.shown ?? false,
  set: (value: boolean) => emit("update:shown", value),
});

const popperStyles = computed(() => ({
  width: `${triggerRef.value?.offsetWidth ?? 0}px`,
}));

const open = () => {
  if (!props.disabled) {
    isShown.value = true;
  }
};

const close = () => {
  isShown.value = false;
};

const openAfterCurrentEvent = () => {
  if (focusOpenTimer !== undefined) {
    clearTimeout(focusOpenTimer);
  }

  focusOpenTimer = setTimeout(open, 0);
};

const closeAfterBlur = () => {
  if (blurCloseTimer !== undefined) {
    clearTimeout(blurCloseTimer);
  }

  blurCloseTimer = setTimeout(close, 120);
};

const handleFocus = (event: FocusEvent) => {
  if (blurCloseTimer !== undefined) {
    clearTimeout(blurCloseTimer);
  }

  openAfterCurrentEvent();
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  closeAfterBlur();
  emit("blur", event);
};

onBeforeUnmount(() => {
  if (focusOpenTimer !== undefined) {
    clearTimeout(focusOpenTimer);
  }

  if (blurCloseTimer !== undefined) {
    clearTimeout(blurCloseTimer);
  }
});
</script>

<template>
  <Dropdown
    v-model:shown="isShown"
    :triggers="[]"
    :popper-hide-triggers="[]"
    placement="bottom-start"
    :distance="6"
    stretched
    :auto-hide="false"
    no-auto-focus
  >
    <div ref="triggerRef" class="suggest-input__trigger">
      <Input
        :id="id"
        v-model="model"
        :placeholder="placeholder"
        :size="size"
        :disabled="disabled"
        :invalid="invalid"
        :error-message="errorMessage"
        :description="description"
        autocomplete="off"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="emit('input', $event)"
        @keydown="emit('keydown', $event)"
      />
    </div>

    <template #popper>
      <div class="suggest-input__popper" :style="popperStyles">
        <slot :close="close"></slot>
      </div>
    </template>
  </Dropdown>
</template>

<style scoped>
.suggest-input__trigger {
  width: 100%;
}

.suggest-input__popper {
  min-width: 220px;
  max-width: min(420px, calc(100vw - 32px));
}
</style>
