<script setup lang="ts">
import { computed, inject } from "vue";
import { chipGroupContextKey } from "./useChipGroup";
import type { ChipSize, ChipValue } from "./types";

export interface ChipProps {
  value?: ChipValue;
  size?: ChipSize;
  selected?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<ChipProps>(), {
  size: "medium",
});

const emit = defineEmits<{
  select: [value: ChipValue | undefined];
}>();

const group = inject(chipGroupContextKey, null);

const isDisabled = computed(() => props.disabled || group?.disabled || false);
const size = computed(() => group?.size ?? props.size);
const isInGroup = computed(() => !!group && props.value !== undefined);
const isSelected = computed(() => {
  if (isInGroup.value) {
    return group?.isSelected(props.value as ChipValue) ?? false;
  }

  return !!props.selected;
});

const chipRole = computed(() => {
  if (!isInGroup.value) {
    return undefined;
  }

  return group?.mode === "single" ? "radio" : undefined;
});

const handleClick = (): void => {
  if (isDisabled.value) {
    return;
  }

  if (isInGroup.value) {
    group?.select(props.value as ChipValue);
  }

  emit("select", props.value);
};
</script>

<template>
  <button
    type="button"
    :class="['chip', size, { selected: isSelected, disabled: isDisabled }]"
    :disabled="isDisabled"
    :role="chipRole"
    :aria-checked="chipRole === 'radio' ? isSelected : undefined"
    :aria-pressed="chipRole ? undefined : isSelected"
    @click="handleClick"
  >
    <span class="chip-label">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.chip {
  --chip-background: hsl(var(--background));
  --chip-border: hsl(var(--border));
  --chip-text: hsl(var(--muted-foreground));
  --chip-outline: hsl(var(--ring));
  --chip-height: 32px;
  --chip-padding: 6px 14px;
  --chip-gap: var(--gap-2);
  --chip-font-size: 14px;
  --chip-line-height: 20px;
  --chip-radius: 999px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: var(--chip-height);
  padding: var(--chip-padding);
  border: 1px solid var(--chip-border);
  border-radius: var(--chip-radius);
  background-color: var(--chip-background);
  color: var(--chip-text);
  box-sizing: border-box;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--chip-font-size);
  font-weight: 500;
  line-height: var(--chip-line-height);
  text-align: center;
  text-wrap: nowrap;
  gap: var(--chip-gap);
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease,
    outline-color 0.1s ease,
    scale 0.16s ease;
}

.chip.small {
  --chip-height: 28px;
  --chip-padding: 4px 12px;
  --chip-font-size: 13px;
  --chip-line-height: 18px;
}

.chip.medium {
  --chip-height: 32px;
  --chip-padding: 6px 14px;
  --chip-font-size: 14px;
  --chip-line-height: 20px;
}

.chip.large {
  --chip-height: 40px;
  --chip-padding: 8px 16px;
  --chip-font-size: 15px;
  --chip-line-height: 22px;
}

.chip:hover:not(.disabled) {
  --chip-border: hsl(var(--ring));
  --chip-text: hsl(var(--foreground));
  --chip-background: hsl(var(--input));
}

.chip:active:not(.disabled) {
  scale: 0.97;
}

.chip:focus-visible {
  outline-color: var(--chip-outline);
}

.chip.selected {
  --chip-background: color-mix(in oklab, hsl(var(--accent)) 12%, transparent);
  --chip-border: color-mix(
    in oklab,
    hsl(var(--accent)) 70%,
    hsl(var(--border))
  );
  --chip-text: hsl(var(--foreground));
  --chip-outline: hsl(var(--accent));
}

.chip.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.chip-label {
  display: inline-flex;
  align-items: center;
  gap: var(--chip-gap);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
