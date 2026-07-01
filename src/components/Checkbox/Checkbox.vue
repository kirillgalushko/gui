<script setup lang="ts">
import { computed, onMounted, ref, useAttrs, useId, watch } from 'vue';
import FormHelper from '../FormHelper/FormHelper.vue';

defineOptions({
  inheritAttrs: false,
});

export interface CheckboxProps {
  disabled?: boolean;
  description?: string;
  errorMessage?: string;
  invalid?: boolean;
  indeterminate?: boolean;
  descriptionId?: string;
  maxWidth?: string;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  maxWidth: '100%',
});

const model = defineModel<boolean | unknown[]>();
const attrs = useAttrs();
const generatedDescriptionId = useId();
const inputRef = ref<HTMLInputElement>();

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

const syncIndeterminate = () => {
  if (inputRef.value) {
    inputRef.value.indeterminate = !!props.indeterminate;
  }
};

onMounted(syncIndeterminate);
watch(() => props.indeterminate, syncIndeterminate);
</script>

<template>
  <div :style="{ maxWidth: props.maxWidth }" class="checkbox-field">
    <label :class="['checkbox', { disabled: props.disabled, invalid: props.invalid }]">
      <span class="checkbox-box">
        <input v-bind="$attrs" ref="inputRef" v-model="model" class="checkbox-input" type="checkbox"
          :disabled="props.disabled" :aria-invalid="props.invalid || undefined" :aria-describedby="ariaDescribedBy"
          :aria-checked="props.indeterminate ? 'mixed' : undefined" />
        <span class="checkbox-control" aria-hidden="true">
          <svg class="checkbox-check" viewBox="0 0 14 14" fill="none">
            <path d="M3 7.2L5.7 9.8L11 4.2" />
          </svg>
          <span class="checkbox-minus"></span>
        </span>
      </span>
      <span v-if="$slots.default" class="checkbox-label">
        <slot></slot>
      </span>
    </label>
    <FormHelper :description="props.description" :error-message="props.errorMessage" :invalid="props.invalid"
      :disabled="props.disabled" :description-id="helperDescriptionId" />
  </div>
</template>

<style scoped>
.checkbox-field {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
}

.checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  width: fit-content;
  max-width: 100%;
  color: hsl(var(--foreground));
  cursor: pointer;
  user-select: none;
}

.checkbox.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.checkbox-box {
  position: relative;
  display: inline-flex;
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  margin-top: 1px;
}

.checkbox-input {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 18px;
  height: 18px;
  margin: 0;
  cursor: inherit;
  opacity: 0;
}

.checkbox-control {
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid hsl(var(--border));
  border-radius: 6px;
  background: hsl(var(--background));
  color: hsl(var(--primary-foreground));
  box-sizing: border-box;
  box-shadow: 0 1px 2px hsl(var(--foreground) / 0.05);
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

.checkbox:hover:not(.disabled) .checkbox-control {
  border-color: hsl(var(--ring));
  box-shadow: 0 2px 8px hsl(var(--foreground) / 0.08);
}

.checkbox.invalid .checkbox-control {
  border-color: hsl(var(--negative));
}

.checkbox-input:focus-visible+.checkbox-control {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.checkbox.invalid .checkbox-input:focus-visible+.checkbox-control {
  outline-color: hsl(var(--negative));
}

.checkbox-input:checked+.checkbox-control,
.checkbox-input:indeterminate+.checkbox-control {
  border-color: hsl(var(--primary));
  background: hsl(var(--primary));
  animation: checkbox-pop 0.2s ease;
}

.checkbox.invalid .checkbox-input:checked+.checkbox-control,
.checkbox.invalid .checkbox-input:indeterminate+.checkbox-control {
  border-color: hsl(var(--negative));
  background: hsl(var(--negative));
}

.checkbox-check {
  width: 14px;
  height: 14px;
  opacity: 0;
  transform: scale(0.72) rotate(-8deg);
  transition:
    opacity 0.12s ease,
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.checkbox-check path {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 14;
  stroke-dashoffset: 14;
  transition: stroke-dashoffset 0.22s ease 0.04s;
}

.checkbox-minus {
  position: absolute;
  width: 9px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  opacity: 0;
  transform: scaleX(0.4);
  transition:
    opacity 0.12s ease,
    transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

.checkbox-input:checked+.checkbox-control .checkbox-check {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.checkbox-input:checked+.checkbox-control .checkbox-check path {
  stroke-dashoffset: 0;
}

.checkbox-input:indeterminate+.checkbox-control .checkbox-minus {
  opacity: 1;
  transform: scaleX(1);
}

.checkbox-input:indeterminate+.checkbox-control .checkbox-check {
  opacity: 0;
}

.checkbox-label {
  min-width: 0;
  color: inherit;
  font-size: 14px;
  line-height: 20px;
}

.checkbox.disabled .checkbox-label {
  color: hsl(var(--muted-foreground));
}

@keyframes checkbox-pop {
  0% {
    transform: scale(0.92);
  }

  60% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
}
</style>
