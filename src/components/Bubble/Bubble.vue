<script setup lang="ts">
import type { ComponentSize } from "../../types";

export type BubbleMode =
  | "default"
  | "contrast"
  | "accent"
  | "secondary"
  | "ghost"
  | "outlined"
  | "negative"
  | "positive"
  | "danger"
  | "warning";
export type BubbleAlign = "start" | "end";
export type BubbleSize = ComponentSize;

export interface BubbleProps {
  /** Визуальный тон поверхности сообщения. */
  mode?: BubbleMode;

  /** Расположение сообщения в строке диалога. */
  align?: BubbleAlign;

  /** Плотность и типографика сообщения. */
  size?: BubbleSize;
}

const props = withDefaults(defineProps<BubbleProps>(), {
  mode: "default",
  align: "start",
  size: "medium",
});
</script>

<template>
  <div
    v-bind="$attrs"
    :class="['bubble', `bubble--align-${props.align}`]"
    :data-align="props.align"
    :data-mode="props.mode"
    :data-size="props.size"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.bubble {
  --bubble-background: hsl(var(--input));
  --bubble-color: hsl(var(--primary));
  --bubble-border-color: hsl(var(--border));
  --bubble-outline: hsl(var(--ring));
  --bubble-font-size: 14px;
  --bubble-line-height: 20px;
  --bubble-padding-block: 8px;
  --bubble-padding-inline: var(--gap-3);
  --bubble-radius: 18px;
  --bubble-tail-radius: calc(var(--bubble-radius) / 3);
  --bubble-max-width: min(80%, 720px);

  display: flex;
  width: fit-content;
  max-width: var(--bubble-max-width);
  min-width: 0;
  flex-direction: column;
  box-sizing: border-box;
  color: var(--bubble-color);
  font-family: var(--font-family);
}

.bubble--align-end {
  align-self: end;
  margin-inline-start: auto;
}

.bubble[data-align="start"] :deep(.bubble-content) {
  border-end-start-radius: var(--bubble-tail-radius);
}

.bubble[data-align="end"] :deep(.bubble-content) {
  border-end-end-radius: var(--bubble-tail-radius);
}

.bubble[data-size="extra-small"] {
  --bubble-font-size: 12px;
  --bubble-line-height: 16px;
  --bubble-padding-block: var(--gap-1);
  --bubble-padding-inline: var(--gap-2);
  --bubble-radius: 12px;
}

.bubble[data-size="small"] {
  --bubble-font-size: 13px;
  --bubble-line-height: 18px;
  --bubble-padding-block: 6px;
  --bubble-padding-inline: 10px;
  --bubble-radius: 14px;
}

.bubble[data-size="large"] {
  --bubble-font-size: 16px;
  --bubble-line-height: 24px;
  --bubble-padding-block: 10px;
  --bubble-padding-inline: var(--gap-4);
  --bubble-radius: 20px;
}

.bubble[data-mode="accent"] {
  --bubble-background: hsl(var(--accent));
  --bubble-color: hsl(0 0% 98%);
  --bubble-outline: hsl(var(--accent));
}

.bubble[data-mode="contrast"] {
  --bubble-background: hsl(var(--primary));
  --bubble-color: hsl(var(--primary-foreground));
  --bubble-border-color: transparent;
  --bubble-outline: hsl(var(--muted-foreground));
}

.bubble[data-mode="secondary"] {
  --bubble-background: hsl(var(--secondary));
  --bubble-color: hsl(var(--secondary-foreground));
  --bubble-border-color: hsl(var(--border));
}

.bubble[data-mode="ghost"] {
  --bubble-background: transparent;
  --bubble-color: hsl(var(--foreground));
  --bubble-max-width: 100%;
}

.bubble[data-mode="outlined"] {
  --bubble-background: transparent;
  --bubble-color: hsl(var(--foreground));
  --bubble-border-color: hsl(var(--border));
}

.bubble[data-mode="negative"] {
  --bubble-background: color-mix(
    in oklab,
    hsl(var(--negative)) 20%,
    transparent
  );
  --bubble-color: hsl(var(--negative));
  --bubble-border-color: color-mix(
    in oklab,
    hsl(var(--negative)) 30%,
    transparent
  );
}

.bubble[data-mode="positive"] {
  --bubble-background: color-mix(
    in oklab,
    hsl(var(--positive)) 20%,
    transparent
  );
  --bubble-color: hsl(var(--positive));
  --bubble-border-color: color-mix(
    in oklab,
    hsl(var(--positive)) 30%,
    transparent
  );
}

.bubble[data-mode="danger"] {
  --bubble-background: color-mix(in oklab, hsl(var(--danger)) 20%, transparent);
  --bubble-color: hsl(var(--danger));
  --bubble-border-color: color-mix(
    in oklab,
    hsl(var(--danger)) 30%,
    transparent
  );
}

.bubble[data-mode="warning"] {
  --bubble-background: color-mix(
    in oklab,
    hsl(var(--warning)) 20%,
    transparent
  );
  --bubble-color: hsl(var(--warning));
  --bubble-border-color: color-mix(
    in oklab,
    hsl(var(--warning)) 30%,
    transparent
  );
}
</style>
