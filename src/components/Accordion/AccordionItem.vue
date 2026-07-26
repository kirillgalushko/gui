<script setup lang="ts">
import { computed, inject, provide, useId } from "vue";
import { accordionContextKey, accordionItemContextKey } from "./context";

export interface AccordionItemProps {
  disabled?: boolean;
  value: string;
}

const props = withDefaults(defineProps<AccordionItemProps>(), {
  disabled: false,
});
const accordion = inject(accordionContextKey);

if (accordion === undefined) {
  throw new Error("AccordionItem must be used inside Accordion");
}

const id = useId();
const isOpen = computed(() => accordion.isOpen(props.value));
const disabled = computed(() => accordion.disabled.value || props.disabled);
const toggle = () => {
  if (!disabled.value) {
    accordion.toggle(props.value);
  }
};

provide(accordionItemContextKey, {
  contentId: `${id}-content`,
  disabled,
  isOpen,
  toggle,
  triggerId: `${id}-trigger`,
});
</script>

<template>
  <div
    class="accordion-item"
    :data-disabled="disabled || undefined"
    :data-state="isOpen ? 'open' : 'closed'"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.accordion-item {
  border-bottom: 1px solid hsl(var(--border));
}

.accordion-item:last-child {
  border-bottom: 0;
}

.accordion-item[data-disabled] {
  opacity: 0.5;
}
</style>
