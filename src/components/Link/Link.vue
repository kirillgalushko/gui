<script setup lang="ts">
import { computed } from 'vue';
import Text from '../Text/Text.vue';
import type { Typography } from '../Text/types';

defineOptions({
  inheritAttrs: false,
});

export interface LinkProps {
  typography?: Typography;
  inline?: boolean;
  underlined?: boolean;
  disabled?: boolean;
  enableVisited?: boolean;
  mode?: 'inherit' | 'accent';
  Element?: 'a' | 'button' | 'span';
}

const props = withDefaults(defineProps<LinkProps>(), {
  Element: 'a',
  mode: 'accent',
  typography: 'inherit',
  inline: true,
});

const linkAttrs = computed(() => {
  if (!props.disabled) {
    return {};
  }

  return {
    'aria-disabled': 'true',
    tabindex: -1,
    disabled: props.Element === 'button' ? true : undefined,
  };
});
</script>

<template>
  <Text v-bind="{ ...$attrs, ...linkAttrs }" :Element="props.Element" :typography="props.typography" color="inherit"
    :class="[
      'link',
      `mode-${props.mode}`,
      {
        inline: props.inline,
        underlined: props.underlined,
        disabled: props.disabled,
        'enable-visited': props.enableVisited,
      }
    ]">
    <span v-if="$slots.iconLeft" class="link-icon">
      <slot name="iconLeft"></slot>
    </span>
    <span class="link-content">
      <slot></slot>
    </span>
    <span v-if="$slots.iconRight" class="link-icon">
      <slot name="iconRight"></slot>
    </span>
  </Text>
</template>

<style scoped>
.link {
  --link-color: var(--accent);

  display: inline-flex;
  align-items: center;
  gap: var(--gap-1);
  color: hsl(var(--link-color));
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s, opacity 0.2s, outline-color 0.1s;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.link.mode-accent {
  --link-color: var(--accent);
  color: hsl(var(--link-color));
}

.link.mode-inherit {
  --link-color: var(--foreground);
  color: hsl(var(--link-color));
}

.link.inline {
  display: inline-flex;
}

.link.underlined {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.link:hover:not(.disabled) {
  color: hsl(var(--link-color) / 0.75);
}

.link:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
  border-radius: 4px;
}

.link.enable-visited:visited {
  color: hsl(var(--accent-muted));
}

.link.disabled {
  color: hsl(var(--muted-foreground));
  cursor: not-allowed;
  pointer-events: none;
}

.link-icon {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.link.inline .link-content {
  display: inline;
}
</style>
