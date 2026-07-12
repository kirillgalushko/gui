<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useAttrs,
  useId,
} from "vue";
import FieldHelper from "../FieldHelper/FieldHelper.vue";

defineOptions({
  inheritAttrs: false,
});

export interface InputProps {
  autoFocus?: boolean;
  maxWidth?: string;
  disabled?: boolean;
  postfix?: string;
  description?: string;
  errorMessage?: string;
  invalid?: boolean;
  descriptionId?: string;
}

const leftAdornment = ref<HTMLDivElement>();
const rightAdornment = ref<HTMLDivElement>();
const leftAdornmentWidth = ref(0);
const rightAdornmentWidth = ref(0);
const inputRef = ref<HTMLInputElement>();
const model = defineModel();
const props = withDefaults(defineProps<InputProps>(), { maxWidth: "100%" });
const attrs = useAttrs();
const generatedDescriptionId = useId();
let resizeObserver: ResizeObserver | undefined;

const getPadding = (adornmentWidth: number) => {
  if (adornmentWidth > 0) {
    return adornmentWidth + 20;
  }
  return 12;
};

const inputPaddingLeft = computed(() => getPadding(leftAdornmentWidth.value));
const inputPaddingRight = computed(() => getPadding(rightAdornmentWidth.value));
const inputValue = computed(() => String(model.value ?? ""));

const inputStyles = computed(() => {
  return {
    paddingLeft: `${inputPaddingLeft.value}px`,
    paddingRight: `${inputPaddingRight.value}px`,
  };
});

const postfixOverlayStyles = computed(() => ({
  left: `${inputPaddingLeft.value}px`,
}));

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

const isNumberInput = computed(() => attrs.type === "number");
const shouldRenderPostfix = computed(() => {
  return (
    props.postfix !== undefined &&
    props.postfix.length > 0 &&
    inputValue.value.length > 0
  );
});

const isForbiddenNumberInputValue = (value: string | null): boolean => {
  return value === "e" || value === "E";
};

const updateAdornmentWidths = () => {
  leftAdornmentWidth.value = leftAdornment.value?.clientWidth ?? 0;
  rightAdornmentWidth.value = rightAdornment.value?.clientWidth ?? 0;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (isNumberInput.value && isForbiddenNumberInputValue(event.key)) {
    event.preventDefault();
  }
};

const handleBeforeInput = (event: Event) => {
  const inputEvent = event as InputEvent;

  if (isNumberInput.value && isForbiddenNumberInputValue(inputEvent.data)) {
    event.preventDefault();
  }
};

onMounted(async () => {
  await nextTick();
  updateAdornmentWidths();

  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(updateAdornmentWidths);

    if (leftAdornment.value) {
      resizeObserver.observe(leftAdornment.value);
    }

    if (rightAdornment.value) {
      resizeObserver.observe(rightAdornment.value);
    }
  }

  if (!props.autoFocus || props.disabled) {
    return;
  }

  inputRef.value?.focus();
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});
</script>

<template>
  <div :style="{ maxWidth: props.maxWidth }" class="input-field">
    <div :class="['input-container', { disabled: props.disabled }]">
      <div ref="leftAdornment" class="adornment left-adornment">
        <slot name="leftAdornment"></slot>
      </div>
      <input
        ref="inputRef"
        v-bind="$attrs"
        v-model="model"
        :disabled="props.disabled"
        :style="inputStyles"
        :class="['input', { invalid: props.invalid }]"
        :aria-invalid="props.invalid || undefined"
        :aria-describedby="ariaDescribedBy"
        @keydown="handleKeydown"
        @beforeinput="handleBeforeInput"
      />
      <span
        v-if="shouldRenderPostfix"
        class="input-postfix-overlay"
        :style="postfixOverlayStyles"
        aria-hidden="true"
      >
        <span class="input-postfix-value">{{ inputValue }}</span>
        <span class="input-postfix">{{ props.postfix }}</span>
      </span>
      <div ref="rightAdornment" class="adornment right-adornment">
        <slot name="rightAdornment"></slot>
      </div>
    </div>
    <FieldHelper
      :description="props.description"
      :error-message="props.errorMessage"
      :invalid="props.invalid"
      :disabled="props.disabled"
      :description-id="helperDescriptionId"
    />
  </div>
</template>

<style scoped>
.input-field {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
}

.input-container {
  position: relative;
  display: inline-flex;
  width: 100%;
}

.input-container.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input {
  padding: 8px 12px;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--input));
  outline: 2px solid transparent;
  outline-offset: -2px;
  color: hsl(var(--foreground));
  border-radius: 10px;
  font-size: 14px;
  height: 40px;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  transition: border-color 0.1s ease;
}

.input.invalid {
  border-color: hsl(var(--negative));
}

.input[type="tel"] {
  font-feature-settings: "case" 1;
}

.input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}

.input[type="number"]::-webkit-outer-spin-button,
.input[type="number"]::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.input:disabled {
  cursor: not-allowed;
  outline-color: transparent;
}

.input:-webkit-autofill,
.input:-webkit-autofill:hover,
.input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px hsl(var(--background)) inset;
  -webkit-text-fill-color: hsl(var(--foreground));
  caret-color: hsl(var(--foreground));
}

.input:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.input:disabled:focus-visible {
  outline-color: transparent;
}

.input:read-only {
  transition: none;
  outline: none;
}

.input:read-only:focus-visible {
  outline: none;
}

.input.invalid:focus-visible {
  outline-color: hsl(var(--negative));
}

.adornment {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--gap-2);
}

.left-adornment {
  left: 12px;
}

.right-adornment {
  right: 12px;
}

.input-postfix {
  color: hsl(var(--muted-foreground));
  font-size: 14px;
  line-height: 1;
  margin-left: var(--gap-1);
  pointer-events: none;
  user-select: none;
}

.input-postfix-overlay {
  position: absolute;
  top: 0;
  height: 40px;
  display: inline-flex;
  align-items: center;
  color: hsl(var(--foreground));
  font-family: inherit;
  font-size: 14px;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  white-space: pre;
}

.input-postfix-value {
  visibility: hidden;
}
</style>
