<script setup lang="ts">
import { computed, ref, type Ref, useAttrs, useId } from 'vue';
import FormHelper from '../FormHelper/FormHelper.vue';

defineOptions({
  inheritAttrs: false,
});

export interface InputProps {
  maxWidth?: string;
  disabled?: boolean;
  description?: string;
  errorMessage?: string;
  invalid?: boolean;
  descriptionId?: string;
}

const leftAdornment = ref<HTMLDivElement>()
const rightAdornment = ref<HTMLDivElement>()
const model = defineModel()
const props = withDefaults(defineProps<InputProps>(), { maxWidth: '100%' })
const attrs = useAttrs()
const generatedDescriptionId = useId()

const inputStyles = computed(() => {
  const getPadding = ((element: Ref<HTMLDivElement | undefined>) => {
    if (element.value?.clientWidth) {
      return element.value?.clientWidth + 20
    }
    return 12
  })
  const paddingLeft = getPadding(leftAdornment)
  const paddingRight = getPadding(rightAdornment)
  return `padding-left: ${paddingLeft}px; padding-right: ${paddingRight}px;`
});

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
</script>

<template>
  <div :style="{ maxWidth: props.maxWidth }" class="input-field">
    <div :class="['input-container', { disabled: props.disabled }]">
      <div ref="leftAdornment" class="adornment left-adornment">
        <slot name="leftAdornment"></slot>
      </div>
      <input v-bind="$attrs" v-model="model" :disabled="props.disabled" :style="inputStyles"
        :class="['input', { invalid: props.invalid }]" :aria-invalid="props.invalid || undefined"
        :aria-describedby="ariaDescribedBy" />
      <div ref="rightAdornment" class="adornment right-adornment">
        <slot name="rightAdornment"></slot>
      </div>
    </div>
    <FormHelper :description="props.description" :error-message="props.errorMessage" :invalid="props.invalid"
      :disabled="props.disabled" :description-id="helperDescriptionId" />
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
  background: transparent;
  color: hsl(var(--foreground));
  border-radius: 6px;
  font-size: 14px;
  height: 40px;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  transition: outline-width 0.2s;
}

.input.invalid {
  border-color: hsl(var(--form-error));
}

.input:disabled {
  cursor: not-allowed;
}

.input:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.input.invalid:focus-visible {
  outline-color: hsl(var(--form-error));
}

.adornment {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
}

.left-adornment {
  left: 12px;
}

.right-adornment {
  right: 12px;
}
</style>
