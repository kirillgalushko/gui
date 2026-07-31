<script setup lang="ts">
import { computed } from "vue";
import type { Color } from "../../types/colors";

export type BadgeColor = Color;
export type BadgeSize = "extra-small" | "small" | "medium" | "large";
export type BadgeMode =
  | "default"
  | "accent"
  | "secondary"
  | "ghost"
  | "negative"
  | "positive"
  | "danger"
  | "warning";

export interface BadgeProps {
  mode?: BadgeMode;
  size?: BadgeSize;
  color?: BadgeColor;
  Element?: "div" | "button" | "span";
}

const props = withDefaults(defineProps<BadgeProps>(), {
  mode: "default",
  size: "medium",
  Element: "div",
});

const modeStyles: Record<
  BadgeMode,
  { backgroundColor: string; color?: string; borderColor?: string }
> = {
  default: {
    backgroundColor: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
  },
  accent: {
    backgroundColor: "hsl(var(--accent))",
    color: "hsl(0 0% 98%)",
  },
  secondary: {
    backgroundColor: "hsl(var(--input))",
    color: "hsl(var(--secondary-foreground))",
    borderColor: "hsl(var(--border))",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  negative: {
    backgroundColor:
      "color-mix(in oklab, hsl(var(--negative)) 20%, transparent)",
    color: "hsl(var(--negative))",
  },
  positive: {
    backgroundColor:
      "color-mix(in oklab, hsl(var(--positive)) 20%, transparent)",
    color: "hsl(var(--positive))",
  },
  danger: {
    backgroundColor: "color-mix(in oklab, hsl(var(--danger)) 20%, transparent)",
    color: "hsl(var(--danger))",
  },
  warning: {
    backgroundColor:
      "color-mix(in oklab, hsl(var(--warning)) 20%, transparent)",
    color: "hsl(var(--warning))",
  },
};

const badgeStyle = computed(() => {
  if (props.color) {
    const color = `var(--color-${props.color}-500)`;

    return {
      "--badge-background": `color-mix(in oklab, ${color} 20%, transparent)`,
      "--badge-color": color,
      "--badge-border-color": `color-mix(in oklab, ${color} 15%, transparent)`,
    };
  }

  const modeStyle = modeStyles[props.mode];

  return {
    "--badge-background": modeStyle.backgroundColor,
    "--badge-color": modeStyle.color ?? "inherit",
    "--badge-border-color":
      modeStyle.borderColor ??
      (modeStyle.color
        ? `color-mix(in oklab, ${modeStyle.color} 15%, transparent)`
        : "inherit"),
  };
});

const hasBorder = computed(
  () =>
    Boolean(props.color) ||
    !(["default", "ghost", "accent"] as BadgeMode[]).includes(props.mode),
);
</script>

<template>
  <component
    v-bind="$attrs"
    :is="props.Element"
    :class="['Badge', props.size, { 'with-border': hasBorder }]"
    :style="badgeStyle"
    :type="props.Element === 'button' ? 'button' : undefined"
  >
    <slot></slot>
    <slot name="right"></slot>
  </component>
</template>

<style scoped>
.Badge {
  --badge-font-size: 11px;
  --badge-line-height: 1.5;
  --badge-padding: 2px 6px;
  --badge-min-width: 20px;
  --badge-gap: var(--gap-1);
  --badge-border-radius: 8px;

  font-family: var(--font-family);
  font-weight: 700;
  font-size: var(--badge-font-size);
  line-height: var(--badge-line-height);
  padding: var(--badge-padding);
  border-radius: var(--badge-border-radius);
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  box-sizing: border-box;
  min-width: var(--badge-min-width);
  background-color: var(--badge-background);
  color: var(--badge-color);
  text-wrap: nowrap;
  display: inline-flex;
  flex-direction: row;
  flex-shrink: 0;
  gap: var(--badge-gap);
}

.Badge.with-border {
  border: 1px solid var(--badge-border-color);
}

.Badge.extra-small {
  --badge-font-size: 9px;
  --badge-line-height: 1.35;
  --badge-padding: 0 var(--gap-1);
  --badge-min-width: 14px;
  --badge-border-radius: 5px;
}

.Badge.small {
  --badge-font-size: 10px;
  --badge-line-height: 1.4;
  --badge-padding: 1px 5px;
  --badge-min-width: 16px;
  --badge-border-radius: 6px;
}

.Badge.medium {
  --badge-font-size: 11px;
  --badge-line-height: 1.5;
  --badge-padding: 2px 6px;
  --badge-min-width: 20px;
  --badge-border-radius: 8px;
}

.Badge.large {
  --badge-font-size: 12px;
  --badge-line-height: 1.5;
  --badge-padding: 3px 8px;
  --badge-min-width: 24px;
  --badge-border-radius: 10px;
}

button.Badge {
  appearance: none;
  border: none;
  cursor: pointer;
  margin: 0;
}

button.Badge.with-border {
  border: 1px solid var(--badge-border-color);
}

button.Badge:disabled {
  cursor: not-allowed;
  opacity: 0.64;
}

button.Badge:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}
</style>
