<script setup lang="ts">
import { computed, ref } from "vue";
import type { BorderRadius, Padding } from "../../types";

defineOptions({
  inheritAttrs: false,
});

interface Card {
  Element?: "div" | "button" | "section";
  background?: "default" | "secondary";
  /** Делает фон полупрозрачным и размывает содержимое под карточкой. */
  blur?: boolean;
  fullHeight?: boolean;
  stretched?: boolean;
  padding?: Padding;
  borderRadius?: BorderRadius;
}

interface NonInteractiveCard extends Card {
  interactive?: false;
  onClick?: (event: MouseEvent) => void;
}

interface InteractiveCard extends Card {
  interactive: true;
  onClick: (event: MouseEvent) => void;
}

export type CardProps = NonInteractiveCard | InteractiveCard;

const props = withDefaults(defineProps<CardProps>(), {
  interactive: false,
  blur: false,
  background: "default",
  padding: 8,
  borderRadius: 16,
});

const element = computed(
  () => props.Element ?? (props.interactive ? "button" : "div"),
);
const cardRef = ref<HTMLElement | null>(null);

defineExpose({
  element: cardRef,
});
</script>

<template>
  <component
    ref="cardRef"
    v-bind="$attrs"
    :is="element"
    :type="element === 'button' ? 'button' : undefined"
    :class="[
      'card',
      props.background,
      {
        'full-height': props.fullHeight,
        interactive: props.interactive,
        stretched: props.stretched,
        blur: props.blur,
      },
    ]"
    :style="{
      '--gui-card-padding': `${props.padding}px`,
      '--gui-card-border-radius': `${props.borderRadius}px`,
      padding: `${props.padding}px`,
      borderRadius: `${props.borderRadius}px`,
    }"
    @click="onClick"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.card {
  --gui-card-background: hsl(var(--card));
  box-sizing: border-box;
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
  padding: 12px;
  display: inline-block;
  font-family: var(--font-family);
  background-color: var(--gui-card-background);
}

.default {
  --gui-card-background: hsl(var(--card));
}

.secondary {
  --gui-card-background: hsl(var(--secondary));
}

.blur {
  background: color-mix(in oklab, var(--gui-card-background) 70%, transparent);
  backdrop-filter: blur(20px);
  border-color: hsl(var(--border) / 0.7);
}

.interactive {
  text-align: initial;
  transition:
    background-color 0.2s,
    scale 0.2s;
  cursor: pointer;
}

.interactive:hover {
  background-color: color-mix(
    in oklab,
    var(--gui-card-background) 80%,
    hsl(var(--secondary))
  );
}

.interactive:active {
  scale: 0.99;
}

.interactive:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.stretched {
  width: 100%;
}

.full-height {
  height: 100%;
}

.card > :deep(.card-content:first-child) {
  margin-top: calc(var(--gui-card-padding) * -1);
}

.card > :deep(.card-content:last-child) {
  margin-bottom: calc(var(--gui-card-padding) * -1);
}

.card > :deep(.card-content + .card-content) {
  padding-top: 0;
}

.card > :deep(.card-content[data-border] + .card-content) {
  padding-top: var(--gui-card-padding);
}

.card > :deep(.card-header + .card-footer) {
  margin-top: var(--gui-card-padding);
}

.card > :deep(.card-header[data-border] + .card-footer) {
  margin-top: 0;
}

.card > :deep(.card-header[data-border] + .card-footer),
.card > :deep(.card-content[data-border] + .card-footer) {
  border-top: 0;
}
</style>
