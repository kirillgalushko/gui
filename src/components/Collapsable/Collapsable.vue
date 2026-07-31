<script setup lang="ts">
import { computed, ref, useId } from "vue";
import { IconChevronDownOutline } from "@gui/icons";

export interface CollapsableProps {
  defaultOpened?: boolean;
  disabled?: boolean;
  modelValue?: boolean;
  title: string;
}

const props = withDefaults(defineProps<CollapsableProps>(), {
  defaultOpened: true,
  disabled: false,
  modelValue: undefined,
});
const emit = defineEmits<{
  change: [opened: boolean];
  "update:modelValue": [opened: boolean];
}>();

defineSlots<{
  default(): unknown;
  icon(): unknown;
}>();

const id = useId();
const internalOpened = ref(props.defaultOpened);
const opened = computed(() => props.modelValue ?? internalOpened.value);

const toggle = () => {
  if (props.disabled) {
    return;
  }

  const nextOpened = !opened.value;
  if (props.modelValue === undefined) {
    internalOpened.value = nextOpened;
  }
  emit("update:modelValue", nextOpened);
  emit("change", nextOpened);
};
</script>

<template>
  <div
    class="collapsable"
    :data-disabled="props.disabled || undefined"
    :data-state="opened ? 'open' : 'closed'"
  >
    <button
      :id="`${id}-trigger`"
      class="collapsable-trigger"
      type="button"
      :aria-controls="`${id}-content`"
      :aria-expanded="opened"
      :disabled="props.disabled"
      @click="toggle"
    >
      <span class="collapsable-heading">
        <span class="collapsable-icon" aria-hidden="true">
          <slot name="icon"></slot>
        </span>
        <span>{{ props.title }}</span>
      </span>
      <IconChevronDownOutline class="collapsable-chevron" aria-hidden="true" />
    </button>

    <div
      :id="`${id}-content`"
      class="collapsable-content"
      role="region"
      :aria-hidden="!opened"
      :aria-labelledby="`${id}-trigger`"
    >
      <div class="collapsable-content-clip">
        <div class="collapsable-content-inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapsable-trigger {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-3);
  box-sizing: border-box;
  padding: var(--gap-4) 0;
  border: 0;
  background: transparent;
  color: hsl(var(--foreground));
  font: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: initial;
  cursor: pointer;
  transition: color 0.2s ease;
}

.collapsable-trigger:hover {
  color: hsl(var(--muted-foreground));
}

.collapsable-trigger:focus-visible {
  border-radius: 8px;
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.collapsable-trigger:disabled {
  cursor: not-allowed;
}

.collapsable-heading {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  gap: var(--gap-2);
}

.collapsable-icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
}

.collapsable-icon :deep(svg) {
  width: 20px;
  height: 20px;
}

.collapsable-chevron {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  transition: transform 0.2s ease;
}

.collapsable[data-state="open"] .collapsable-chevron {
  transform: rotate(180deg);
}

.collapsable-content {
  display: grid;
  grid-template-rows: 0fr;
  visibility: hidden;
  transition:
    grid-template-rows 0.2s ease,
    visibility 0s linear 0.2s;
}

.collapsable-content[aria-hidden="false"] {
  grid-template-rows: 1fr;
  visibility: visible;
  transition:
    grid-template-rows 0.2s ease,
    visibility 0s linear;
}

.collapsable-content-clip {
  min-height: 0;
  overflow: hidden;
}

.collapsable-content-inner {
  padding-bottom: var(--gap-4);
}

.collapsable[data-disabled] {
  opacity: 0.5;
}

@media (prefers-reduced-motion: reduce) {
  .collapsable-content,
  .collapsable-chevron {
    transition: none;
  }
}
</style>
