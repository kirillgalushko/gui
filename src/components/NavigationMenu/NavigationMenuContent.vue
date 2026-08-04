<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/vue";
import {
  navigationMenuContextKey,
  navigationMenuItemContextKey,
} from "./context";

const navigationMenu = inject(navigationMenuContextKey);
const item = inject(navigationMenuItemContextKey);

if (!navigationMenu || !item) {
  throw new Error(
    "NavigationMenuContent must be used inside NavigationMenuItem",
  );
}

const floatingRef = ref<HTMLElement | null>(null);
const isInline = computed(
  () =>
    navigationMenu.isMobile.value ||
    navigationMenu.orientation.value === "vertical",
);
const { floatingStyles } = useFloating(item.triggerRef, floatingRef, {
  placement: "bottom-start",
  middleware: [offset(8), flip(), shift({ padding: 8 })],
  whileElementsMounted: autoUpdate,
});
const contentStyle = computed(() =>
  isInline.value ? undefined : floatingStyles.value,
);
</script>

<template>
  <Transition name="navigation-menu-content">
    <div
      v-if="item.isOpen.value"
      :id="item.contentId"
      ref="floatingRef"
      class="navigation-menu-content"
      role="region"
      tabindex="-1"
      :aria-labelledby="item.triggerId"
      data-state="open"
      :style="contentStyle"
      @pointerenter="navigationMenu.cancelScheduledChange"
      @pointerleave="navigationMenu.scheduleClose"
    >
      <div class="navigation-menu-content-inner">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.navigation-menu-content {
  z-index: 50;
  width: max-content;
  min-width: 240px;
  max-width: min(480px, calc(100vw - var(--gap-6)));
  overflow: hidden;
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
  background: hsl(var(--popover));
  color: hsl(var(--popover-foreground));
  outline: none;
  transform-origin: top center;
}

.navigation-menu-content:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.navigation-menu-content-inner {
  display: grid;
  gap: var(--gap-1);
  box-sizing: border-box;
  padding: var(--gap-2);
}

.navigation-menu-content-enter-active,
.navigation-menu-content-leave-active {
  transition: opacity var(--motion-duration-base) var(--motion-ease-out);
}

.navigation-menu-content-enter-from,
.navigation-menu-content-leave-to {
  opacity: 0;
}

:global(.navigation-menu[data-mobile]) .navigation-menu-content,
:global(.navigation-menu[data-orientation="vertical"])
  .navigation-menu-content {
  position: static;
  width: 100%;
  min-width: 0;
  max-width: none;
  border: 0;
  border-radius: 0;
  background: transparent;
  transform: none;
}

:global(.navigation-menu[data-mobile]) .navigation-menu-content-inner,
:global(.navigation-menu[data-orientation="vertical"])
  .navigation-menu-content-inner {
  padding: var(--gap-1) 0 var(--gap-2) var(--gap-3);
}

:global(.navigation-menu[data-mobile]) .navigation-menu-content-enter-from,
:global(.navigation-menu[data-mobile]) .navigation-menu-content-leave-to,
:global(.navigation-menu[data-orientation="vertical"])
  .navigation-menu-content-enter-from,
:global(.navigation-menu[data-orientation="vertical"])
  .navigation-menu-content-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .navigation-menu-content-enter-active,
  .navigation-menu-content-leave-active {
    transition: none;
  }
}
</style>
