<script setup lang="ts">
import { computed, useAttrs } from "vue";

export type BubbleContentElement = "div" | "a" | "button";

export interface BubbleContentProps {
  /** Семантический HTML-элемент поверхности сообщения. */
  as?: BubbleContentElement;
}

const props = withDefaults(defineProps<BubbleContentProps>(), {
  as: "div",
});

const attrs = useAttrs();
const buttonType = computed(() =>
  props.as === "button" ? (attrs.type ?? "button") : undefined,
);
</script>

<template>
  <component
    :is="props.as"
    v-bind="$attrs"
    class="bubble-content"
    :type="buttonType"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.bubble-content {
  display: block;
  width: fit-content;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: var(--bubble-padding-block, 8px)
    var(--bubble-padding-inline, var(--gap-3));
  border: 1px solid var(--bubble-border-color, transparent);
  border-radius: var(--bubble-radius, 18px);
  background: var(--bubble-background, hsl(var(--primary)));
  color: var(--bubble-color, hsl(var(--primary-foreground)));
  font: inherit;
  font-size: var(--bubble-font-size, 14px);
  line-height: var(--bubble-line-height, 20px);
  text-align: start;
  text-wrap: pretty;
  overflow-wrap: anywhere;
}

:global(.bubble[data-mode="ghost"]) .bubble-content {
  width: 100%;
}

button.bubble-content,
a.bubble-content {
  appearance: none;
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color var(--motion-duration-fast) var(--motion-ease-out),
    border-color var(--motion-duration-fast) var(--motion-ease-out),
    color var(--motion-duration-fast) var(--motion-ease-out);
}

button.bubble-content {
  border-width: 1px;
}

button.bubble-content:disabled {
  cursor: not-allowed;
  opacity: 0.64;
}

button.bubble-content:focus-visible,
a.bubble-content:focus-visible {
  outline: 2px solid var(--bubble-outline, hsl(var(--ring)));
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  button.bubble-content,
  a.bubble-content {
    transition: none;
  }
}
</style>
