<script setup lang="ts">
import { nextTick } from "vue";
import { IconPhoneOutline } from "@gui/icons";
import Input from "../Input/Input.vue";
import {
  canApplyPhoneInput,
  formatPhoneInputWithCaret,
  isAllowedPhoneInput,
  sanitizePhoneInput,
} from "./phone";

defineOptions({ inheritAttrs: false });

const model = defineModel<string>({ default: "" });
const emit = defineEmits<{
  beforeinput: [event: InputEvent];
  input: [event: Event];
  paste: [event: ClipboardEvent];
}>();

const getInput = (target: EventTarget | null) =>
  target instanceof HTMLInputElement ? target : null;

const restoreCaret = async (input: HTMLInputElement | null, caret: number) => {
  if (input === null) return;
  await nextTick();
  input.setSelectionRange(caret, caret);
};

const handleBeforeInput = (event: InputEvent) => {
  emit("beforeinput", event);
  if (event.defaultPrevented || event.data === null) return;

  const input = getInput(event.target);
  const selectionStart = input?.selectionStart ?? model.value.length;
  const selectionEnd = input?.selectionEnd ?? model.value.length;

  if (
    !canApplyPhoneInput({
      currentValue: model.value,
      insertedValue: event.data,
      selectionStart,
      selectionEnd,
    })
  ) {
    event.preventDefault();
  }
};

const handlePaste = (event: ClipboardEvent) => {
  emit("paste", event);
  if (event.defaultPrevented) return;

  const pastedText = event.clipboardData?.getData("text") ?? "";
  if (isAllowedPhoneInput(pastedText)) return;

  event.preventDefault();
  const input = getInput(event.target);
  const selectionStart = input?.selectionStart ?? model.value.length;
  const selectionEnd = input?.selectionEnd ?? model.value.length;
  const sanitizedText = sanitizePhoneInput(pastedText);

  if (
    !canApplyPhoneInput({
      currentValue: model.value,
      insertedValue: sanitizedText,
      selectionStart,
      selectionEnd,
    })
  )
    return;

  const formatted = formatPhoneInputWithCaret({
    value: `${model.value.slice(0, selectionStart)}${sanitizedText}${model.value.slice(selectionEnd)}`,
    caret: selectionStart + sanitizedText.length,
  });
  model.value = formatted.value;
  void restoreCaret(input, formatted.caret);
};

const handleInput = (event: Event) => {
  const input = getInput(event.target);
  const value = input?.value ?? model.value;
  const caret = input?.selectionStart ?? value.length;
  const formatted = formatPhoneInputWithCaret({ value, caret });
  model.value = formatted.value;
  void restoreCaret(input, formatted.caret);
  emit("input", event);
};
</script>

<template>
  <Input
    v-bind="$attrs"
    v-model="model"
    type="tel"
    inputmode="tel"
    autocomplete="tel"
    placeholder="+7 (999) 123-45-67"
    @beforeinput="handleBeforeInput"
    @paste="handlePaste"
    @input="handleInput"
  >
    <template #leftAdornment>
      <slot name="leftAdornment"><IconPhoneOutline /></slot>
    </template>
    <template #rightAdornment><slot name="rightAdornment" /></template>
  </Input>
</template>
