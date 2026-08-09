<script setup lang="ts">
import { computed } from "vue";
import AsChild from "../../internal/AsChild";
import Text from "../Text/Text.vue";
import type { Typography } from "../Text/types";

defineOptions({
  inheritAttrs: false,
});

export interface LinkProps {
  typography?: Typography;
  asChild?: boolean;
  inline?: boolean;
  wrap?: boolean;
  underlined?: boolean;
  underlineOnHover?: boolean;
  disabled?: boolean;
  enableVisited?: boolean;
  mode?: "inherit" | "accent";
  Element?: "a" | "button" | "span";
}

const props = withDefaults(defineProps<LinkProps>(), {
  Element: "a",
  mode: "accent",
  typography: "inherit",
  inline: true,
});

const linkAttrs = computed(() => {
  if (!props.disabled) {
    return {};
  }

  return {
    "aria-disabled": "true",
    tabindex: -1,
    disabled: props.Element === "button" || props.asChild ? true : undefined,
  };
});

const linkClass = computed(() => [
  "link",
  `mode-${props.mode}`,
  {
    inline: props.inline,
    wrap: props.wrap,
    underlined: props.underlined,
    "underline-on-hover": props.underlineOnHover,
    disabled: props.disabled,
    "enable-visited": props.enableVisited,
  },
]);
</script>

<template>
  <AsChild
    v-if="props.asChild"
    v-bind="{ ...$attrs, ...linkAttrs }"
    :class="linkClass"
  >
    <slot></slot>
  </AsChild>

  <Text
    v-else
    v-bind="{ ...$attrs, ...linkAttrs }"
    :Element="props.Element"
    :typography="props.typography"
    color="inherit"
    :class="linkClass"
  >
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
  transition:
    color 0.2s,
    opacity 0.2s,
    outline-color 0.1s;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.link.mode-accent {
  --link-color: var(--accent);
  color: hsl(var(--link-color));
}

.link.mode-inherit {
  color: inherit;
}

.link.inline {
  display: inline-flex;
}

.link.wrap {
  display: inline;
  white-space: normal;
  overflow-wrap: anywhere;
}

.link.wrap .link-content {
  display: inline;
  overflow-wrap: anywhere;
}

.link.underlined {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.link.underline-on-hover:hover:not(.disabled) {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.link.mode-accent:hover:not(.disabled) {
  color: hsl(var(--link-color) / 0.75);
}

.link:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
  border-radius: 4px;
}

.link.mode-accent.enable-visited:visited {
  color: hsl(var(--accent-muted));
}

.link.disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.link.mode-accent.disabled {
  color: hsl(var(--muted-foreground));
}

.link.mode-inherit.disabled {
  opacity: 0.5;
}

button.link {
  appearance: none;
  border: 0;
  background: transparent;
  font: inherit;
  padding: 0;
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
