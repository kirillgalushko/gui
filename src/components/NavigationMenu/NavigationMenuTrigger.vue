<script setup lang="ts">
import { inject, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { IconChevronDownOutline } from "@gui/icons";
import {
  navigationMenuContextKey,
  navigationMenuItemContextKey,
} from "./context";

const navigationMenu = inject(navigationMenuContextKey);
const item = inject(navigationMenuItemContextKey);

if (!navigationMenu || !item) {
  throw new Error(
    "NavigationMenuTrigger must be used inside NavigationMenuItem",
  );
}

const triggerRef = ref<HTMLButtonElement | null>(null);

const focusContent = () => {
  void nextTick(() => {
    document.getElementById(item.contentId)?.focus();
  });
};

const handleKeydown = (event: KeyboardEvent) => {
  if (["ArrowDown", "Enter", " "].includes(event.key)) {
    event.preventDefault();
    navigationMenu.open(item.value);
    focusContent();
  }
};

onMounted(() => {
  item.triggerRef.value = triggerRef.value;
  navigationMenu.registerTrigger(item.value, triggerRef.value);
});
onBeforeUnmount(() => {
  item.triggerRef.value = null;
  navigationMenu.registerTrigger(item.value, null);
});
</script>

<template>
  <button
    :id="item.triggerId"
    ref="triggerRef"
    class="navigation-menu-trigger"
    type="button"
    data-navigation-menu-focusable
    :aria-controls="item.contentId"
    :aria-expanded="item.isOpen.value"
    aria-haspopup="true"
    :data-state="item.isOpen.value ? 'open' : 'closed'"
    :disabled="item.disabled.value"
    @click="navigationMenu.toggle(item.value)"
    @keydown="handleKeydown"
  >
    <span class="navigation-menu-trigger-content">
      <slot></slot>
    </span>
    <IconChevronDownOutline
      class="navigation-menu-trigger-icon"
      aria-hidden="true"
    />
  </button>
</template>

<style scoped>
.navigation-menu-trigger {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: var(--gap-1);
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
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition:
    color var(--motion-duration-fast) var(--motion-ease-out),
    background-color var(--motion-duration-fast) var(--motion-ease-out),
    outline-color var(--motion-duration-fast) var(--motion-ease-out);
}

.navigation-menu-trigger:hover,
.navigation-menu-trigger[data-state="open"] {
  background: hsl(var(--muted));
  color: hsl(var(--foreground));
}

.navigation-menu-trigger:focus-visible {
  outline-color: hsl(var(--ring));
}

.navigation-menu-trigger:disabled {
  cursor: not-allowed;
}

.navigation-menu-trigger-icon {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  transition: transform var(--motion-duration-base) var(--motion-ease-spring);
}

.navigation-menu-trigger[data-state="open"] .navigation-menu-trigger-icon {
  transform: rotate(180deg);
}

:global(.navigation-menu[data-mobile]) .navigation-menu-trigger,
:global(.navigation-menu[data-orientation="vertical"])
  .navigation-menu-trigger {
  width: 100%;
  justify-content: space-between;
}

@media (prefers-reduced-motion: reduce) {
  .navigation-menu-trigger,
  .navigation-menu-trigger-icon {
    transition: none;
  }
}
</style>
