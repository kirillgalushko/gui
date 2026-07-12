<script setup lang="ts">
import { computed } from 'vue';
import type { Color } from '../../types/colors';

export type BadgeColor = Color;
export type BadgeMode = 'default' | 'secondary' | 'ghost' | 'negative' | 'positive' | 'danger' | 'warning';

export interface BadgeProps {
  mode?: BadgeMode;
  color?: BadgeColor;
  Element?: 'div' | 'button' | 'span';
}

const props = withDefaults(defineProps<BadgeProps>(), { mode: 'default', Element: 'div' });

const modeStyles: Record<BadgeMode, { backgroundColor: string; color?: string }> = {
  default: {
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    backgroundColor: 'hsl(var(--secondary))',
    color: 'hsl(var(--secondary-foreground))',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  negative: {
    backgroundColor: 'color-mix(in oklab, hsl(var(--negative)) 20%, transparent)',
    color: 'hsl(var(--negative))',
  },
  positive: {
    backgroundColor: 'color-mix(in oklab, hsl(var(--positive)) 20%, transparent)',
    color: 'hsl(var(--positive))',
  },
  danger: {
    backgroundColor: 'color-mix(in oklab, hsl(var(--danger)) 20%, transparent)',
    color: 'hsl(var(--danger))',
  },
  warning: {
    backgroundColor: 'color-mix(in oklab, hsl(var(--warning)) 20%, transparent)',
    color: 'hsl(var(--warning))',
  },
};

const badgeStyle = computed(() => {
  if (props.color) {
    const color = `var(--color-${props.color}-500)`;

    return {
      '--badge-background': `color-mix(in oklab, ${color} 20%, transparent)`,
      '--badge-color': color,
    };
  }

  const modeStyle = modeStyles[props.mode];

  return {
    '--badge-background': modeStyle.backgroundColor,
    '--badge-color': modeStyle.color ?? 'inherit',
  };
});
</script>

<template>
  <component
    v-bind="$attrs"
    :is="props.Element"
    class="Badge"
    :style="badgeStyle"
    :type="props.Element === 'button' ? 'button' : undefined"
  >
    <slot></slot>
    <slot name="right"></slot>
  </component>
</template>

<style scoped>
.Badge {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 11px;
  line-height: 1.5;
  padding: 2px 6px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  box-sizing: border-box;
  min-width: 20px;
  background-color: var(--badge-background);
  color: var(--badge-color);
  text-wrap: nowrap;
  display: inline-flex;
  flex-direction: row;
  gap: var(--gap-1);
}

button.Badge {
  appearance: none;
  border: none;
  cursor: pointer;
  margin: 0;
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
