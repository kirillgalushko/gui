<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useAttrs, useId, watch } from 'vue';
import FormHelper from '../FormHelper/FormHelper.vue';

defineOptions({
  inheritAttrs: false,
});

export interface PincodeInputProps {
  modelValue?: string;
  autoFocus?: boolean;
  stretched?: boolean;
  disabled?: boolean;
  loading?: boolean;
  length?: number;
  succeed?: boolean;
  invalid?: boolean;
  description?: string;
  errorMessage?: string;
  descriptionId?: string;
}

const props = withDefaults(defineProps<PincodeInputProps>(), {
  stretched: false,
  length: 6,
});
const emit = defineEmits<{
  'update:modelValue': [value: string];
  complete: [value: string];
}>();
const attrs = useAttrs();
const generatedDescriptionId = useId();
const inputRef = ref<HTMLInputElement | null>(null);
const cursorIndex = ref(0);

const codeLength = computed(() => Math.max(1, Math.floor(Number(props.length) || 1)));
const sanitizeValue = (value: unknown) => String(value ?? '').replace(/\D/g, '').slice(0, codeLength.value);
const getSanitizedCursorIndex = (rawValue: string, selectionStart: number | null) => {
  if (selectionStart === null) {
    return sanitizeValue(rawValue).length;
  }

  return sanitizeValue(rawValue.slice(0, selectionStart)).length;
};
const isReadonlyAttr = (readonly: unknown) => readonly === '' || readonly === true || readonly === 'true';

const value = computed(() => sanitizeValue(props.modelValue));
const isDisabled = computed(() => props.disabled || props.loading);
const isReadonly = computed(() => props.succeed || isReadonlyAttr(attrs.readonly));
const codeCells = computed(() => Array.from({ length: codeLength.value }, (_, index) => value.value[index] ?? ''));
const activeCellIndex = computed(() => Math.min(cursorIndex.value, codeLength.value - 1));
const shouldShowCaret = computed(() => cursorIndex.value < codeLength.value);

const shouldRenderHelper = computed(() => {
  if (props.invalid) {
    return !!props.errorMessage;
  }

  return !!props.description;
});

const helperDescriptionId = computed(() => {
  if (!shouldRenderHelper.value) {
    return undefined;
  }

  return props.descriptionId ?? `${generatedDescriptionId}-helper`;
});

const ariaDescribedBy = computed(() => {
  const describedBy = attrs['aria-describedby'];
  const describedByValue = typeof describedBy === 'string' ? describedBy : undefined;

  if (!helperDescriptionId.value) {
    return describedByValue;
  }

  return [describedByValue, helperDescriptionId.value].filter(Boolean).join(' ');
});

const inputAttrs = computed(() => {
  const rest = { ...attrs };

  delete rest.class;
  delete rest.style;
  delete rest.readonly;
  delete rest.disabled;
  delete rest.maxlength;
  return rest;
});

const getCursorLimit = (nextValue = value.value) => (
  nextValue.length === codeLength.value ? codeLength.value : nextValue.length
);

const clampCursorIndex = (index: number, nextValue = value.value) => (
  Math.min(Math.max(index, 0), getCursorLimit(nextValue))
);

const syncNativeInput = async (nextValue = value.value) => {
  await nextTick();

  if (!inputRef.value) {
    return;
  }

  inputRef.value.value = nextValue;
  inputRef.value.setSelectionRange(cursorIndex.value, cursorIndex.value);
};

const setCursorIndex = (index: number, nextValue = value.value) => {
  cursorIndex.value = clampCursorIndex(index, nextValue);
  void syncNativeInput(nextValue);
};

const emitCompleteIfNeeded = (nextValue: string, nextCursorIndex: number) => {
  if (nextValue.length === codeLength.value && nextCursorIndex >= codeLength.value) {
    emit('complete', nextValue);
  }
};

const commitValue = (nextValue: string, nextCursorIndex: number) => {
  const nextSanitizedValue = sanitizeValue(nextValue);

  cursorIndex.value = clampCursorIndex(nextCursorIndex, nextSanitizedValue);

  if (inputRef.value && inputRef.value.value !== nextSanitizedValue) {
    inputRef.value.value = nextSanitizedValue;
  }

  emit('update:modelValue', nextSanitizedValue);
  emitCompleteIfNeeded(nextSanitizedValue, nextCursorIndex);
  void syncNativeInput(nextSanitizedValue);
};

const insertDigits = (digits: string) => {
  if (isReadonly.value) {
    return;
  }

  const sanitizedDigits = digits.replace(/\D/g, '');

  if (!sanitizedDigits || cursorIndex.value >= codeLength.value) {
    return;
  }

  const startIndex = cursorIndex.value;
  const endIndex = startIndex + sanitizedDigits.length;
  const nextValue = `${value.value.slice(0, startIndex)}${sanitizedDigits}${value.value.slice(endIndex)}`;

  commitValue(nextValue, startIndex + sanitizedDigits.length);
};

const deleteBackward = () => {
  if (isReadonly.value || !value.value) {
    return;
  }

  const deleteIndex = cursorIndex.value < value.value.length
    ? cursorIndex.value
    : cursorIndex.value - 1;

  if (deleteIndex < 0) {
    return;
  }

  const nextValue = `${value.value.slice(0, deleteIndex)}${value.value.slice(deleteIndex + 1)}`;

  commitValue(nextValue, deleteIndex);
};

const deleteForward = () => {
  if (isReadonly.value || cursorIndex.value >= value.value.length) {
    return;
  }

  const nextValue = `${value.value.slice(0, cursorIndex.value)}${value.value.slice(cursorIndex.value + 1)}`;

  commitValue(nextValue, cursorIndex.value);
};

const updateValue = (nextValue: unknown, nextCursorIndex?: number) => {
  if (isReadonly.value) {
    if (inputRef.value) {
      inputRef.value.value = value.value;
    }
    return;
  }

  const nextSanitizedValue = sanitizeValue(nextValue);

  if (inputRef.value && inputRef.value.value !== nextSanitizedValue) {
    inputRef.value.value = nextSanitizedValue;
  }

  const cursorIndexCandidate = nextCursorIndex ?? nextSanitizedValue.length;

  cursorIndex.value = clampCursorIndex(cursorIndexCandidate, nextSanitizedValue);
  emit('update:modelValue', nextSanitizedValue);
  emitCompleteIfNeeded(nextSanitizedValue, cursorIndexCandidate);
};

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;

  updateValue(input.value, getSanitizedCursorIndex(input.value, input.selectionStart));
};

const clearInvalidValue = () => {
  if (!props.invalid || isReadonly.value) {
    return false;
  }

  commitValue('', 0);
  return true;
};

const handleFocus = () => {
  clearInvalidValue();
};

const handleShellClick = () => {
  if (isDisabled.value) {
    return;
  }

  inputRef.value?.focus();
  clearInvalidValue();
};

const handleBeforeInput = (event: Event) => {
  const inputEvent = event as InputEvent;

  if (isReadonly.value) {
    event.preventDefault();
    return;
  }

  if (inputEvent.inputType === 'insertText') {
    event.preventDefault();
    insertDigits(inputEvent.data ?? '');
    return;
  }

  if (inputEvent.inputType === 'insertFromPaste') {
    event.preventDefault();
    insertDigits(inputEvent.data ?? '');
    return;
  }

  if (inputEvent.inputType === 'deleteContentBackward') {
    event.preventDefault();
    deleteBackward();
    return;
  }

  if (inputEvent.inputType === 'deleteContentForward') {
    event.preventDefault();
    deleteForward();
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    setCursorIndex(cursorIndex.value - 1);
    return;
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    setCursorIndex(cursorIndex.value + 1);
    return;
  }

  if (event.key === 'Home') {
    event.preventDefault();
    setCursorIndex(0);
    return;
  }

  if (event.key === 'End') {
    event.preventDefault();
    setCursorIndex(value.value.length);
    return;
  }

  if (event.key === 'Backspace') {
    event.preventDefault();
    deleteBackward();
    return;
  }

  if (event.key === 'Delete') {
    event.preventDefault();
    deleteForward();
  }
};

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault();
  insertDigits(event.clipboardData?.getData('text') ?? '');
};

const focusInput = () => {
  if (isDisabled.value) {
    return;
  }

  inputRef.value?.focus();
};

const selectCell = (index: number) => {
  if (isDisabled.value) {
    return;
  }

  focusInput();

  if (clearInvalidValue()) {
    return;
  }

  setCursorIndex(index);
};

watch(value, (nextValue) => {
  cursorIndex.value = clampCursorIndex(cursorIndex.value, nextValue);

  if (inputRef.value && inputRef.value.value !== nextValue) {
    inputRef.value.value = nextValue;
  }

  void syncNativeInput(nextValue);
});

watch(codeLength, () => {
  cursorIndex.value = clampCursorIndex(cursorIndex.value);
  void syncNativeInput();
});

onMounted(async () => {
  if (!props.autoFocus || isDisabled.value) {
    return;
  }

  await nextTick();
  focusInput();
});
</script>

<template>
  <div :class="['pincode-field', { stretched: props.stretched }]">
    <div :class="[
      'pincode-shell',
      {
        disabled: isDisabled,
        loading: props.loading,
        succeed: props.succeed,
        invalid: props.invalid,
      },
    ]" :style="{ '--pincode-length': codeLength }" @click="handleShellClick">
      <input ref="inputRef" v-bind="inputAttrs" class="pincode-input" :value="value" :disabled="isDisabled"
        :readonly="isReadonly" :maxlength="codeLength" :aria-invalid="props.invalid || undefined"
        :aria-describedby="ariaDescribedBy" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code"
        @focus="handleFocus" @beforeinput="handleBeforeInput" @keydown="handleKeydown" @paste="handlePaste"
        @input="handleInput" />
      <div class="pincode-grid" aria-hidden="true">
        <div v-for="(digit, index) in codeCells" :key="index"
          :class="['pincode-cell', { filled: digit, active: index === activeCellIndex, 'with-caret': index === activeCellIndex && shouldShowCaret }]"
          @mousedown.prevent="selectCell(index)">
          <span :class="['pincode-dot', { hidden: digit }]"></span>
          <span :class="['pincode-digit', { visible: digit }]">{{ digit }}</span>
        </div>
      </div>
    </div>
    <FormHelper :description="props.description" :error-message="props.errorMessage" :invalid="props.invalid"
      :disabled="isDisabled" :description-id="helperDescriptionId" />
  </div>
</template>

<style scoped>
.pincode-field {
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
  max-width: 100%;
}

.pincode-field.stretched {
  width: 100%;
}

.pincode-shell {
  position: relative;
  width: 100%;
  min-width: 220px;
  height: 60px;
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  box-sizing: border-box;
  overflow: hidden;
  cursor: text;
  transition:
    border-color 0.16s ease,
    background-color 0.16s ease,
    box-shadow 0.16s ease,
    opacity 0.16s ease;
}

.pincode-shell:focus-within {
  border-color: hsl(var(--ring));
  box-shadow: inset 0 0 0 1px hsl(var(--ring));
}

.pincode-shell.invalid {
  border-color: hsl(var(--negative));
  animation: pincode-shake 0.34s ease;
}

.pincode-shell.invalid:focus-within {
  box-shadow: inset 0 0 0 1px hsl(var(--negative));
}

.pincode-shell.succeed {
  border-color: hsl(var(--positive));
  background: hsl(var(--positive) / 0.1);
  box-shadow: inset 0 0 0 1px hsl(var(--positive) / 0.35);
}

.pincode-shell.disabled,
.disabled .pincode-cell {
  cursor: not-allowed;
}

.pincode-shell.loading,
.loading .pincode-cell {
  cursor: default;
}

.pincode-shell.loading {
  animation: pincode-loading 1.1s ease-in-out infinite;
}

.pincode-input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: transparent;
  caret-color: transparent;
  font: inherit;
  opacity: 0.01;
  box-sizing: border-box;
}

.pincode-input:focus {
  outline: none;
}

.pincode-input:disabled {
  cursor: not-allowed;
}

.pincode-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(var(--pincode-length), minmax(0, 1fr));
  pointer-events: auto;
}

.pincode-cell {
  position: relative;
  display: grid;
  place-items: center;
  min-width: 0;
  color: hsl(var(--muted-foreground));
  cursor: text;
  transition:
    color 0.16s ease,
    background-color 0.16s ease;
}

.pincode-cell.filled {
  color: hsl(var(--foreground));
}

.pincode-shell:focus-within:not(.disabled):not(.succeed) .pincode-cell.with-caret::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 24px;
  border-radius: 2px;
  background: hsl(var(--foreground));
  animation: pincode-caret 1s steps(2, start) infinite;
}

.pincode-shell:focus-within:not(.disabled):not(.succeed) .pincode-cell.with-caret .pincode-digit.visible,
.pincode-shell:focus-within:not(.disabled):not(.succeed) .pincode-cell.with-caret .pincode-dot:not(.hidden) {
  opacity: 0;
  transform: scale(0.72);
}

.pincode-shell.succeed .pincode-cell {
  border-color: hsl(var(--positive) / 0.28);
}

.pincode-shell.succeed .pincode-cell.filled {
  color: hsl(var(--positive));
  background: hsl(var(--positive) / 0.08);
}

.pincode-shell.invalid .pincode-cell {
  border-color: hsl(var(--negative) / 0.28);
}

.pincode-digit {
  position: absolute;
  font-size: 22px;
  line-height: 1;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  opacity: 0;
  transform: translateY(7px) scale(0.72);
  transition:
    opacity 0.16s ease,
    transform 0.18s cubic-bezier(0.22, 1, 0.36, 1);
}

.pincode-digit.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.pincode-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.42;
  transform: translateY(0) scale(1);
  transition:
    opacity 0.16s ease,
    transform 0.18s cubic-bezier(0.22, 1, 0.36, 1);
}

.pincode-dot.hidden {
  opacity: 0;
  transform: translateY(-5px) scale(0.84);
}

@keyframes pincode-shake {

  0%,
  100% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-5px);
  }

  40% {
    transform: translateX(5px);
  }

  60% {
    transform: translateX(-3px);
  }

  80% {
    transform: translateX(3px);
  }
}

@keyframes pincode-loading {

  0%,
  100% {
    background-color: hsl(var(--background));
  }

  50% {
    background-color: hsl(var(--muted) / 0.5);
  }
}

@keyframes pincode-caret {

  0%,
  45% {
    opacity: 1;
  }

  46%,
  100% {
    opacity: 0;
  }
}
</style>
