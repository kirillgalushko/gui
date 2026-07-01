<script setup lang="ts">
import { computed } from 'vue';

const badgeColors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'mauve',
  'olive',
  'mist',
  'taupe',
] as const;

export type BadgeColor = typeof badgeColors[number];
export type BadgeMode = 'default' | 'secondary' | 'ghost' | 'negative' | 'positive' | 'danger' | 'warning';

export interface BadgeProps {
  mode?: BadgeMode;
  color?: BadgeColor;
}

const props = withDefaults(defineProps<BadgeProps>(), { mode: 'default' });

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
  <div class="Badge" :style="badgeStyle">
    <slot></slot>
  </div>
</template>

<style scoped>
.Badge {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  box-sizing: border-box;
  min-width: 20px;
  background-color: var(--badge-background);
  color: var(--badge-color);
}
</style>
