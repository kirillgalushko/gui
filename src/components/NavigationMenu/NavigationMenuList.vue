<script setup lang="ts">
import { inject } from "vue";
import { navigationMenuContextKey } from "./context";

const navigationMenu = inject(navigationMenuContextKey);

if (!navigationMenu) {
  throw new Error("NavigationMenuList must be used inside NavigationMenu");
}

const handleKeydown = (event: KeyboardEvent) => {
  const horizontal = navigationMenu.orientation.value === "horizontal";
  const previousKey = horizontal ? "ArrowLeft" : "ArrowUp";
  const nextKey = horizontal ? "ArrowRight" : "ArrowDown";

  if (![previousKey, nextKey, "Home", "End"].includes(event.key)) {
    return;
  }

  const currentTarget = event.currentTarget;

  if (!(currentTarget instanceof HTMLElement)) {
    return;
  }

  const triggers = Array.from(
    currentTarget.querySelectorAll<HTMLElement>(
      "[data-navigation-menu-focusable]:not([aria-disabled='true']):not(:disabled)",
    ),
  );
  const currentIndex = triggers.indexOf(document.activeElement as HTMLElement);

  if (currentIndex < 0 || triggers.length === 0) {
    return;
  }

  event.preventDefault();

  const nextIndex =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? triggers.length - 1
        : event.key === nextKey
          ? (currentIndex + 1) % triggers.length
          : (currentIndex - 1 + triggers.length) % triggers.length;

  triggers[nextIndex]?.focus();
};
</script>

<template>
  <ul
    class="navigation-menu-list"
    :data-mobile="navigationMenu.isMobile.value || undefined"
    :data-orientation="navigationMenu.orientation.value"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </ul>
</template>

<style scoped>
.navigation-menu-list {
  display: flex;
  align-items: center;
  gap: var(--gap-1);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navigation-menu-list[data-orientation="vertical"],
.navigation-menu-list[data-mobile] {
  width: 100%;
  flex-direction: column;
  align-items: stretch;
}
</style>
