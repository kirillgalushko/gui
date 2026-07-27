<script setup lang="ts">
import { computed, inject } from "vue";
import type { Color } from "../../types/colors";
import {
  timelineContextKey,
  timelineItemContextKey,
  type TimelineIndicatorSize,
  type TimelineIndicatorVariant,
  type TimelineTone,
} from "./types";

export interface TimelineIndicatorProps {
  variant?: TimelineIndicatorVariant;
  size?: TimelineIndicatorSize;
  mode?: TimelineTone;
  color?: Color;
}

const props = withDefaults(defineProps<TimelineIndicatorProps>(), {
  variant: "solid",
  size: "medium",
  mode: "auto",
});
const timeline = inject(timelineContextKey);
const item = inject(timelineItemContextKey);

if (!timeline || !item) {
  throw new Error("TimelineIndicator must be used inside TimelineItem");
}

const resolvedMode = computed(() => {
  if (props.mode !== "auto") {
    return props.mode;
  }

  if (item.state.value === "completed") {
    return "default";
  }

  if (item.state.value === "current") {
    return "accent";
  }

  if (item.state.value === "pending") {
    return "muted";
  }

  return "default";
});

const size = computed(() => {
  const sizes: Record<"small" | "medium" | "large", string> = {
    small: "12px",
    medium: "24px",
    large: "40px",
  };

  return props.size === "small" ||
    props.size === "medium" ||
    props.size === "large"
    ? sizes[props.size as keyof typeof sizes]
    : props.size;
});

const styles = computed(() => {
  const semanticColors: Record<Exclude<TimelineTone, "auto">, string> = {
    default: "hsl(var(--primary))",
    muted: "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    positive: "hsl(var(--positive))",
    negative: "hsl(var(--negative))",
    danger: "hsl(var(--danger))",
    warning: "hsl(var(--warning))",
  };
  const color = props.color
    ? `var(--color-${props.color}-500)`
    : semanticColors[resolvedMode.value];
  const foreground =
    resolvedMode.value === "default" && !props.color
      ? "hsl(var(--primary-foreground))"
      : "hsl(0 0% 98%)";

  return {
    "--timeline-indicator-size": size.value,
    "--timeline-indicator-color": color,
    "--timeline-indicator-foreground": foreground,
  };
});
</script>

<template>
  <span
    :class="['timeline-indicator', timeline.orientation.value, props.variant]"
    :style="styles"
    :data-state="item.state.value"
  >
    <slot></slot>
  </span>
</template>

<style scoped>
.timeline-indicator {
  grid-area: rail;
  z-index: 1;
  display: inline-flex;
  width: var(--timeline-indicator-size);
  height: var(--timeline-indicator-size);
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  align-self: start;
  justify-self: center;
  box-sizing: border-box;
  border-radius: 999px;
  color: var(--timeline-indicator-foreground);
  font-size: calc(var(--timeline-indicator-size) * 0.5);
  line-height: 1;
}

.vertical {
  margin-top: calc(
    (var(--timeline-rail-size) - var(--timeline-indicator-size)) / 2
  );
}

.horizontal {
  align-self: center;
  justify-self: start;
}

.solid {
  background: var(--timeline-indicator-color);
}

.outline {
  border: 2px solid var(--timeline-indicator-color);
  background: hsl(var(--background));
  color: var(--timeline-indicator-color);
}

.soft {
  background: color-mix(
    in oklab,
    var(--timeline-indicator-color) 18%,
    hsl(var(--background))
  );
  color: var(--timeline-indicator-color);
}

.ghost {
  color: var(--timeline-indicator-color);
}

.timeline-indicator :deep(svg) {
  width: 1em;
  height: 1em;
}
</style>
