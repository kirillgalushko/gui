<script setup lang="ts">
import { inject } from "vue";
import { accordionItemContextKey } from "./context";

const item = inject(accordionItemContextKey);

if (item === undefined) {
  throw new Error("AccordionContent must be used inside AccordionItem");
}
</script>

<template>
  <div
    :id="item.contentId"
    class="accordion-content"
    role="region"
    :aria-hidden="!item.isOpen.value"
    :aria-labelledby="item.triggerId"
    :data-state="item.isOpen.value ? 'open' : 'closed'"
  >
    <div class="accordion-content-clip">
      <div class="accordion-content-inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  visibility: hidden;
  transition:
    grid-template-rows 0.2s ease,
    visibility 0s linear 0.2s;
}

.accordion-content[data-state="open"] {
  grid-template-rows: 1fr;
  visibility: visible;
  transition:
    grid-template-rows 0.2s ease,
    visibility 0s linear;
}

.accordion-content-clip {
  min-height: 0;
  overflow: hidden;
}

.accordion-content-inner {
  padding: 0 0 var(--gap-4);
  color: hsl(var(--muted-foreground));
  font-size: 14px;
  line-height: 20px;
}

@media (prefers-reduced-motion: reduce) {
  .accordion-content {
    transition: none;
  }
}
</style>
