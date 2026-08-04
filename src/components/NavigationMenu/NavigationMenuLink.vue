<script setup lang="ts">
import { computed, inject } from "vue";
import AsChild from "../../internal/AsChild";
import type { ComponentSize } from "../../types";
import { navigationMenuContextKey } from "./context";

defineOptions({
  inheritAttrs: false,
});

export interface NavigationMenuLinkProps {
  active?: boolean;
  asChild?: boolean;
  closeOnSelect?: boolean;
  disabled?: boolean;
  Element?: "a" | "button";
  rounded?: boolean;
  size?: ComponentSize;
}

const props = withDefaults(defineProps<NavigationMenuLinkProps>(), {
  active: false,
  asChild: false,
  closeOnSelect: true,
  disabled: false,
  Element: "a",
  rounded: false,
  size: "medium",
});
const navigationMenu = inject(navigationMenuContextKey);

if (!navigationMenu) {
  throw new Error("NavigationMenuLink must be used inside NavigationMenu");
}

const linkAttrs = computed(() => ({
  "aria-current": props.active ? ("page" as const) : undefined,
  "aria-disabled": props.disabled || undefined,
  "data-navigation-menu-focusable": "",
  disabled:
    props.disabled && (props.Element === "button" || props.asChild)
      ? true
      : undefined,
  tabindex: props.disabled ? -1 : undefined,
}));

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }

  if (props.closeOnSelect) {
    navigationMenu.close();
  }
};
</script>

<template>
  <AsChild
    v-if="props.asChild"
    v-bind="{ ...$attrs, ...linkAttrs }"
    :class="['navigation-menu-link', props.size, { rounded: props.rounded }]"
    :data-active="props.active || undefined"
    @click="handleClick"
  >
    <slot></slot>
  </AsChild>

  <component
    :is="props.Element"
    v-else
    v-bind="{ ...$attrs, ...linkAttrs }"
    :class="['navigation-menu-link', props.size, { rounded: props.rounded }]"
    :data-active="props.active || undefined"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.navigation-menu-link {
  --navigation-menu-link-bg: hsl(var(--input));
  --navigation-menu-link-text: hsl(var(--primary));
  --navigation-menu-link-outline: hsl(var(--ring));
  --navigation-menu-link-height: 36px;
  --navigation-menu-link-padding: 8px 14px;
  --navigation-menu-link-font-size: 14px;
  --navigation-menu-link-line-height: 20px;
  --navigation-menu-link-radius: 12px;

  display: flex;
  height: var(--navigation-menu-link-height);
  align-items: center;
  justify-content: center;
  gap: var(--gap-1);
  box-sizing: border-box;
  padding: var(--navigation-menu-link-padding);
  border: 0;
  border-radius: var(--navigation-menu-link-radius);
  background: transparent;
  color: var(--navigation-menu-link-text);
  font: inherit;
  font-size: var(--navigation-menu-link-font-size);
  font-weight: 500;
  line-height: var(--navigation-menu-link-line-height);
  text-align: center;
  text-decoration: none;
  text-wrap: nowrap;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition:
    color var(--motion-duration-fast) var(--motion-ease-out),
    background-color var(--motion-duration-fast) var(--motion-ease-out),
    outline-color var(--motion-duration-fast) var(--motion-ease-out);
}

.navigation-menu-link.rounded {
  border-radius: 999px;
}

.navigation-menu-link.extra-small {
  --navigation-menu-link-height: 24px;
  --navigation-menu-link-padding: 4px 8px;
  --navigation-menu-link-font-size: 12px;
  --navigation-menu-link-line-height: 16px;
  --navigation-menu-link-radius: 8px;
}

.navigation-menu-link.small {
  --navigation-menu-link-height: 32px;
  --navigation-menu-link-padding: 6px 12px;
  --navigation-menu-link-font-size: 13px;
  --navigation-menu-link-line-height: 18px;
  --navigation-menu-link-radius: 10px;
}

.navigation-menu-link.medium {
  --navigation-menu-link-height: 36px;
  --navigation-menu-link-padding: 8px 14px;
  --navigation-menu-link-font-size: 14px;
  --navigation-menu-link-line-height: 20px;
  --navigation-menu-link-radius: 12px;
}

.navigation-menu-link.large {
  --navigation-menu-link-height: 40px;
  --navigation-menu-link-padding: 8px 16px;
  --navigation-menu-link-font-size: 14px;
  --navigation-menu-link-line-height: 20px;
  --navigation-menu-link-radius: 12px;
}

.navigation-menu-link:hover,
.navigation-menu-link[data-active] {
  background: color-mix(
    in oklab,
    var(--navigation-menu-link-bg) 80%,
    transparent
  );
}

.navigation-menu-link:focus-visible {
  outline-color: var(--navigation-menu-link-outline);
}

.navigation-menu-link[aria-disabled="true"] {
  color: hsl(var(--muted-foreground));
  cursor: not-allowed;
}

:global(.navigation-menu[data-mobile]) .navigation-menu-link,
:global(.navigation-menu[data-orientation="vertical"]) .navigation-menu-link {
  width: 100%;
  min-height: 44px;
}

@media (prefers-reduced-motion: reduce) {
  .navigation-menu-link {
    transition: none;
  }
}
</style>
