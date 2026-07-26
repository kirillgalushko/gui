<script setup lang="ts">
import { computed, inject, provide, type ComputedRef, useId } from "vue";
import {
  radioGroupContextKey,
  type RadioGroupMode,
  type RadioGroupOrientation,
  type RadioGroupValue,
} from "./radioGroup";

defineOptions({
  inheritAttrs: false,
});

interface FieldState {
  invalid: boolean;
  disabled: boolean;
}

export interface RadioGroupProps {
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  orientation?: RadioGroupOrientation;
  mode?: RadioGroupMode;
  stretched?: boolean;
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
  orientation: "vertical",
  mode: "default",
  stretched: false,
});

const model = defineModel<RadioGroupValue | null>({ default: null });
const fieldState = inject<ComputedRef<FieldState> | undefined>(
  "field-state",
  undefined,
);
const generatedName = useId();

const name = computed(() => props.name ?? `radio-group-${generatedName}`);
const disabled = computed(
  () => !!props.disabled || !!fieldState?.value.disabled,
);
const invalid = computed(() => !!props.invalid || !!fieldState?.value.invalid);
const required = computed(() => !!props.required);
const mode = computed(() => props.mode);

const select = (value: RadioGroupValue): void => {
  if (!disabled.value) {
    model.value = value;
  }
};

provide(radioGroupContextKey, {
  model,
  name,
  disabled,
  invalid,
  required,
  mode,
  select,
});
</script>

<template>
  <div
    v-bind="$attrs"
    :class="[
      'radio-group',
      props.orientation,
      props.mode,
      {
        disabled,
        invalid,
        stretched: props.stretched,
      },
    ]"
    role="radiogroup"
    :aria-orientation="props.orientation"
    :aria-invalid="invalid || undefined"
    :aria-required="required || undefined"
    :data-disabled="disabled || undefined"
    :data-invalid="invalid || undefined"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.radio-group {
  display: grid;
  gap: var(--gap-3);
  min-width: 0;
  width: fit-content;
  max-width: 100%;
}

.radio-group.stretched,
.radio-group.card {
  width: 100%;
}

.radio-group.vertical {
  grid-template-columns: minmax(0, 1fr);
}

.radio-group.horizontal {
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
}

.radio-group.disabled {
  cursor: not-allowed;
}
</style>
