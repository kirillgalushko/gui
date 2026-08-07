<script setup lang="ts">
import { computed, ref } from "vue";
import { IconChevronDownOutline } from "@gui/icons";
import { useCollapse } from "../../hooks/useCollapse";
import Collapse from "../Collapse/Collapse.vue";

export interface CollapsibleSectionProps {
  defaultOpened?: boolean;
  disabled?: boolean;
  modelValue?: boolean;
  title: string;
}

const props = withDefaults(defineProps<CollapsibleSectionProps>(), {
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

const internalOpened = ref(props.defaultOpened);
const controlledOpened = computed({
  get: () => props.modelValue ?? internalOpened.value,
  set: (opened: boolean) => {
    if (props.modelValue === undefined) internalOpened.value = opened;
    emit("update:modelValue", opened);
    emit("change", opened);
  },
});

const { collapseProps, opened, triggerProps } = useCollapse({
  disabled: computed(() => props.disabled),
  opened: controlledOpened,
});
</script>

<template>
  <div
    class="collapsible-section"
    :data-disabled="props.disabled || undefined"
    :data-state="opened ? 'open' : 'closed'"
  >
    <button
      v-bind="triggerProps"
      class="collapsible-section-trigger"
      type="button"
      :disabled="props.disabled"
    >
      <span class="collapsible-section-heading">
        <span class="collapsible-section-icon" aria-hidden="true">
          <slot name="icon"></slot>
        </span>
        <span>{{ props.title }}</span>
      </span>
      <IconChevronDownOutline
        class="collapsible-section-chevron"
        aria-hidden="true"
      />
    </button>

    <Collapse v-bind="collapseProps" :duration="200">
      <div class="collapsible-section-content">
        <slot></slot>
      </div>
    </Collapse>
  </div>
</template>

<style scoped>
.collapsible-section-trigger {
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

.collapsible-section-trigger:hover {
  color: hsl(var(--muted-foreground));
}

.collapsible-section-trigger:focus-visible {
  border-radius: 8px;
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.collapsible-section-trigger:disabled {
  cursor: not-allowed;
}

.collapsible-section-heading {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  gap: var(--gap-2);
}

.collapsible-section-icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
}

.collapsible-section-icon :deep(svg) {
  width: 20px;
  height: 20px;
}

.collapsible-section-chevron {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  transition: transform 0.2s ease;
}

.collapsible-section[data-state="open"] .collapsible-section-chevron {
  transform: rotate(180deg);
}

.collapsible-section-content {
  padding-bottom: var(--gap-4);
}

.collapsible-section[data-disabled] {
  opacity: 0.5;
}

@media (prefers-reduced-motion: reduce) {
  .collapsible-section-chevron {
    transition: none;
  }
}
</style>
