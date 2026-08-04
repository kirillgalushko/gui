<script setup lang="ts">
import { computed, inject } from "vue";
import AsChild from "../../internal/AsChild";
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
}

const props = withDefaults(defineProps<NavigationMenuLinkProps>(), {
  active: false,
  asChild: false,
  closeOnSelect: true,
  disabled: false,
  Element: "a",
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
    class="navigation-menu-link"
    :data-active="props.active || undefined"
    @click="handleClick"
  >
    <slot></slot>
  </AsChild>

  <component
    :is="props.Element"
    v-else
    v-bind="{ ...$attrs, ...linkAttrs }"
    class="navigation-menu-link"
    :data-active="props.active || undefined"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.navigation-menu-link {
  display: flex;
  min-height: 36px;
  align-items: center;
  gap: var(--gap-2);
  box-sizing: border-box;
  padding: var(--gap-2) var(--gap-3);
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: hsl(var(--muted-foreground));
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: initial;
  text-decoration: none;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition:
    color var(--motion-duration-fast) var(--motion-ease-out),
    background-color var(--motion-duration-fast) var(--motion-ease-out),
    outline-color var(--motion-duration-fast) var(--motion-ease-out);
}

.navigation-menu-link:hover,
.navigation-menu-link[data-active] {
  background: hsl(var(--muted));
  color: hsl(var(--foreground));
}

.navigation-menu-link:focus-visible {
  outline-color: hsl(var(--ring));
}

.navigation-menu-link[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.5;
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
