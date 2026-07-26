<script setup lang="ts">
import { computed, inject, useAttrs, useId } from "vue";
import { radioGroupContextKey, type RadioGroupValue } from "./radioGroup";

defineOptions({
  inheritAttrs: false,
});

export interface RadioGroupItemProps {
  value: RadioGroupValue;
  id?: string;
  disabled?: boolean;
  invalid?: boolean;
}

const props = defineProps<RadioGroupItemProps>();
const group = inject(radioGroupContextKey);

if (!group) {
  throw new Error("RadioGroupItem must be used inside RadioGroup");
}

const attrs = useAttrs();
const generatedId = useId();
const id = computed(() => props.id ?? `radio-group-item-${generatedId}`);
const disabled = computed(() => !!props.disabled || group.disabled.value);
const invalid = computed(() => !!props.invalid || group.invalid.value);
const checked = computed(() => group.model.value === props.value);
const ariaDescribedBy = computed(() => {
  const value = attrs["aria-describedby"];
  return typeof value === "string" ? value : undefined;
});

const select = (event: Event): void => {
  if (
    !disabled.value &&
    event.target instanceof HTMLInputElement &&
    event.target.checked
  ) {
    group.select(props.value);
  }
};
</script>

<template>
  <label
    :class="[
      'radio-group-item',
      group.mode.value,
      {
        checked,
        disabled,
        invalid,
      },
    ]"
    :for="id"
    :data-state="checked ? 'checked' : 'unchecked'"
    :data-disabled="disabled || undefined"
    :data-invalid="invalid || undefined"
  >
    <input
      v-bind="$attrs"
      :id="id"
      class="radio-group-input"
      type="radio"
      :name="group.name.value"
      :value="props.value"
      :checked="checked"
      :disabled="disabled"
      :required="group.required.value"
      :aria-invalid="invalid || undefined"
      :aria-describedby="ariaDescribedBy"
      @change="select"
    />
    <span class="radio-group-indicator" aria-hidden="true">
      <span class="radio-group-dot"></span>
    </span>
    <span class="radio-group-content">
      <span class="radio-group-label">
        <slot></slot>
      </span>
      <span v-if="$slots.description" class="radio-group-description">
        <slot name="description"></slot>
      </span>
    </span>
  </label>
</template>

<style scoped>
.radio-group-item {
  position: relative;
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  align-items: start;
  gap: var(--gap-3);
  min-width: 0;
  color: hsl(var(--foreground));
  cursor: pointer;
  font-family: var(--font-family);
  user-select: none;
}

.radio-group-item.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.radio-group-input {
  position: absolute;
  width: 18px;
  height: 18px;
  margin: 0;
  opacity: 0;
  pointer-events: none;
}

.radio-group-indicator {
  grid-column: 1;
  grid-row: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-top: 1px;
  border: 1px solid hsl(var(--border));
  border-radius: 999px;
  background: hsl(var(--background));
  box-sizing: border-box;
  box-shadow: 0 1px 2px hsl(var(--foreground) / 0.05);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    box-shadow 0.18s ease,
    outline-color 0.1s ease,
    transform 0.18s ease;
}

.radio-group-dot {
  width: 8px;
  height: 8px;
  border-radius: inherit;
  background: hsl(var(--primary-foreground));
  opacity: 0;
  transform: scale(0.25);
  transition:
    opacity 0.12s ease,
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.radio-group-content {
  grid-column: 2;
  grid-row: 1;
  display: grid;
  gap: var(--gap-1);
  min-width: 0;
}

.radio-group-label {
  min-width: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.radio-group-description {
  min-width: 0;
  color: hsl(var(--muted-foreground));
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}

.radio-group-item:hover:not(.disabled) .radio-group-indicator {
  border-color: hsl(var(--ring));
  box-shadow: 0 2px 8px hsl(var(--foreground) / 0.08);
}

.radio-group-input:focus-visible + .radio-group-indicator {
  outline-color: hsl(var(--ring));
}

.radio-group-item.checked .radio-group-indicator {
  border-color: hsl(var(--primary));
  background: hsl(var(--primary));
  transform: scale(1.04);
}

.radio-group-item.checked .radio-group-dot {
  opacity: 1;
  transform: scale(1);
}

.radio-group-item.invalid .radio-group-indicator {
  border-color: hsl(var(--negative));
}

.radio-group-item.invalid.checked .radio-group-indicator {
  background: hsl(var(--negative));
}

.radio-group-item.invalid
  .radio-group-input:focus-visible
  + .radio-group-indicator {
  outline-color: hsl(var(--negative));
}

.radio-group-item.card {
  grid-template-columns: minmax(0, 1fr) 18px;
  align-items: center;
  gap: var(--gap-4);
  width: 100%;
  padding: var(--gap-4);
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  background: hsl(var(--background));
  box-sizing: border-box;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    box-shadow 0.18s ease,
    outline-color 0.1s ease,
    transform 0.16s ease;
}

.radio-group-item.card .radio-group-content {
  grid-column: 1;
}

.radio-group-item.card .radio-group-indicator {
  grid-column: 2;
}

.radio-group-item.card:hover:not(.disabled) {
  border-color: color-mix(in oklab, hsl(var(--ring)) 50%, hsl(var(--border)));
  background: color-mix(
    in oklab,
    hsl(var(--input)) 55%,
    hsl(var(--background))
  );
}

.radio-group-item.card:active:not(.disabled) {
  transform: scale(0.99);
}

.radio-group-item.card:focus-within {
  outline-color: hsl(var(--ring));
}

.radio-group-item.card.checked {
  border-color: hsl(var(--ring));
  background: hsl(var(--input));
  box-shadow: 0 6px 18px hsl(var(--foreground) / 0.06);
}

.radio-group-item.card.invalid {
  border-color: hsl(var(--negative));
}

.radio-group-item.card.invalid:focus-within {
  outline-color: hsl(var(--negative));
}

@media (prefers-reduced-motion: reduce) {
  .radio-group-item,
  .radio-group-indicator,
  .radio-group-dot {
    transition: none;
  }
}
</style>
