<script setup lang="ts">
import { inject } from "vue";
import { IconChevronDownOutline } from "@gui/icons";
import { accordionItemContextKey } from "./context";

const item = inject(accordionItemContextKey);

if (item === undefined) {
  throw new Error("AccordionTrigger must be used inside AccordionItem");
}
</script>

<template>
  <button
    :id="item.triggerId"
    class="accordion-trigger"
    type="button"
    :aria-controls="item.contentId"
    :aria-expanded="item.isOpen.value"
    :disabled="item.disabled.value"
    :data-state="item.isOpen.value ? 'open' : 'closed'"
    @click="item.toggle"
  >
    <span class="accordion-trigger-content">
      <slot></slot>
    </span>
    <IconChevronDownOutline class="accordion-chevron" aria-hidden="true" />
  </button>
</template>

<style scoped>
.accordion-trigger {
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
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: initial;
  cursor: pointer;
  transition: color 0.2s ease;
}

.accordion-trigger:hover {
  color: hsl(var(--muted-foreground));
}

.accordion-trigger:focus-visible {
  border-radius: 8px;
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.accordion-trigger:disabled {
  cursor: not-allowed;
}

.accordion-trigger-content {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
}

.accordion-chevron {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  transition: transform 0.2s ease;
}

.accordion-trigger[data-state="open"] .accordion-chevron {
  transform: rotate(180deg);
}
</style>
