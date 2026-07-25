<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  ref,
  useAttrs,
  useId,
  watch,
} from "vue";
import FieldHelper from "../FieldHelper/FieldHelper.vue";

defineOptions({
  inheritAttrs: false,
});

export interface TextareaProps {
  resize?: "none" | "both" | "horizontal" | "vertical";
  layout?: "fixed" | "fill-vertical" | "fill-horizontal" | "fill-both" | "hug";
  placeholder?: string;
  invalid?: boolean;
  errorMessage?: string;
  descriptionId?: string;
  minHeight?: string;
  maxHeight?: string;
}

const props = withDefaults(defineProps<TextareaProps>(), {
  resize: "none",
  layout: "fixed",
});

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const model = defineModel<string>();
const attrs = useAttrs();
const generatedDescriptionId = useId();
const styles = computed(() => ({
  resize: props.resize,
  minHeight: props.minHeight,
  maxHeight: props.maxHeight,
}));
const shouldRenderError = computed(() => props.invalid && !!props.errorMessage);
const helperDescriptionId = computed(() => {
  if (!shouldRenderError.value) {
    return undefined;
  }

  return props.descriptionId ?? `${generatedDescriptionId}-helper`;
});
const ariaDescribedBy = computed(() => {
  const describedBy = attrs["aria-describedby"];
  const describedByValue =
    typeof describedBy === "string" ? describedBy : undefined;

  if (!helperDescriptionId.value) {
    return describedByValue;
  }

  return [describedByValue, helperDescriptionId.value]
    .filter(Boolean)
    .join(" ");
});

const autoResize = () => {
  const textarea = textareaRef.value;

  if (!textarea) {
    return;
  }

  if (props.layout !== "hug") {
    textarea.style.removeProperty("height");
    textarea.style.removeProperty("overflow-y");
    return;
  }

  textarea.style.height = "auto";
  textarea.style.overflowY = "hidden";
  textarea.style.height = `${textarea.scrollHeight + 2}px`;
  textarea.style.overflowY =
    textarea.scrollHeight > textarea.clientHeight ? "auto" : "hidden";
};

onMounted(async () => {
  await nextTick();
  autoResize();
});

watch(
  [model, () => props.layout, () => props.minHeight, () => props.maxHeight],
  async () => {
    await nextTick();
    autoResize();
  },
  { flush: "post" },
);
</script>

<template>
  <textarea
    ref="textareaRef"
    v-bind="$attrs"
    v-model="model"
    :placeholder="props.placeholder"
    :style="styles"
    :class="['textarea', props.layout, { invalid: props.invalid }]"
    :aria-invalid="props.invalid || undefined"
    :aria-describedby="ariaDescribedBy"
    @input="autoResize"
  ></textarea>
  <FieldHelper
    :error-message="props.errorMessage"
    :invalid="props.invalid"
    :description-id="helperDescriptionId"
  />
</template>

<style scoped>
.textarea {
  padding: 8px 12px;
  border: 1px solid hsl(var(--border));
  outline: 2px solid transparent;
  outline-offset: -2px;
  background: hsl(var(--input));
  color: hsl(var(--foreground));
  border-radius: 10px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
  min-height: 120px;
  min-width: 220px;
  transition:
    border-color 0.1s ease,
    outline-color 0.1s ease;
}

.textarea:disabled {
  cursor: not-allowed;
}

.textarea:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.textarea.invalid {
  border-color: hsl(var(--negative));
}

.fixed {
  min-height: 120px;
  min-width: 220px;
}

.fill-vertical {
  flex: 1;
  height: 100%;
}

.fill-horizontal {
  width: 100%;
}

.fill-both {
  flex: 1;
  height: 100%;
  width: 100%;
}

.hug {
  width: 100%;
  min-height: 40px;
}
</style>
