<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { IconMenu2Outline } from "@gui/icons";
import { useViewportBreakpoint } from "../../hooks/useViewportBreakpoint";
import Button from "../Button/Button.vue";
import Sheet from "../Sheet/Sheet.vue";
import Stack from "../Stack/Stack.vue";

export type NavbarMode = "default" | "floating";

export interface NavbarProps {
  ariaLabel?: string;
  blur?: boolean;
  defaultMobileOpen?: boolean;
  mobileMenuLabel?: string;
  mobileMenuTitle?: string;
  mobileOpen?: boolean;
  mode?: NavbarMode;
  sticky?: boolean;
  stretched?: boolean;
}

const props = withDefaults(defineProps<NavbarProps>(), {
  ariaLabel: "Основная навигация",
  blur: false,
  defaultMobileOpen: false,
  mobileMenuLabel: "Открыть меню",
  mobileMenuTitle: "Меню",
  mobileOpen: undefined,
  mode: "default",
  sticky: false,
});

const emit = defineEmits<{
  "update:mobileOpen": [value: boolean];
}>();

const breakpoint = useViewportBreakpoint();
const isMobile = computed(() => breakpoint.isMobile);
const isStretched = computed(
  () => props.stretched ?? props.mode !== "floating",
);
const uncontrolledMobileOpen = ref(props.defaultMobileOpen);
const isMobileOpen = computed(
  () => props.mobileOpen ?? uncontrolledMobileOpen.value,
);

const setMobileOpen = (value: boolean) => {
  if (props.mobileOpen === undefined) {
    uncontrolledMobileOpen.value = value;
  }

  emit("update:mobileOpen", value);
};

const handleMobileNavigationClick = (event: MouseEvent) => {
  const target = event.target;

  if (target instanceof Element && target.closest("a[href]")) {
    setMobileOpen(false);
  }
};

watch(isMobile, (mobile) => {
  if (!mobile && isMobileOpen.value) {
    setMobileOpen(false);
  }
});
</script>

<template>
  <header
    :class="[
      'navbar',
      `navbar-${props.mode}`,
      {
        blur: props.blur,
        'navbar-sticky': props.sticky,
        'navbar-stretched': isStretched,
      },
    ]"
    :data-mode="props.mode"
  >
    <div class="navbar-layout">
      <div class="navbar-brand">
        <slot name="brand"></slot>
      </div>

      <template v-if="!isMobile">
        <div class="navbar-navigation" :aria-label="props.ariaLabel">
          <slot></slot>
        </div>

        <Stack
          v-if="$slots.actions"
          class="navbar-actions"
          direction="row"
          :gap="2"
          align-items="center"
          justify-content="end"
        >
          <slot name="actions"></slot>
        </Stack>
      </template>

      <Button
        v-else
        class="navbar-menu-button"
        mode="ghost"
        size="medium"
        squared
        type="button"
        :aria-label="props.mobileMenuLabel"
        :aria-expanded="isMobileOpen"
        @click="setMobileOpen(true)"
      >
        <IconMenu2Outline />
      </Button>
    </div>

    <Sheet
      v-if="isMobile"
      :is-opened="isMobileOpen"
      :title="props.mobileMenuTitle"
      side="right"
      size="small"
      mode="floating"
      :on-close="() => setMobileOpen(false)"
    >
      <div class="navbar-mobile-content" @click="handleMobileNavigationClick">
        <div class="navbar-mobile-navigation" :aria-label="props.ariaLabel">
          <slot></slot>
        </div>

        <Stack v-if="$slots.actions" direction="column" :gap="2" stretched>
          <slot name="actions"></slot>
        </Stack>
      </div>
    </Sheet>
  </header>
</template>

<style scoped>
.navbar {
  --navbar-radius: 0;
  --navbar-padding-x: var(--gap-6);
  --navbar-padding-y: var(--gap-4);

  z-index: 40;
  width: max-content;
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid hsl(var(--border));
  border-radius: var(--navbar-radius);
  background: hsl(var(--card));
  color: hsl(var(--foreground));
  font-family: var(--font-family);
  transition:
    border-radius var(--motion-duration-base) var(--motion-ease-out),
    box-shadow var(--motion-duration-base) var(--motion-ease-out),
    transform var(--motion-duration-base) var(--motion-ease-out);
}

.navbar-stretched {
  width: 100%;
}

.navbar:not(.navbar-stretched) {
  margin-inline: auto;
}

.navbar-floating {
  --navbar-radius: 999px;
  --navbar-padding-x: 10px;
  --navbar-padding-y: var(--gap-2);
}

.navbar-sticky {
  position: sticky;
  top: 0;
}

.navbar-floating.navbar-sticky {
  top: var(--gap-3);
}

.navbar-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: var(--gap-4);
  box-sizing: border-box;
  min-height: 48px;
  padding: var(--navbar-padding-y) var(--navbar-padding-x);
}

.navbar-brand {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-self: start;
}

.navbar-navigation {
  display: flex;
  align-items: center;
  justify-self: center;
}

.navbar-actions {
  min-width: 0;
  justify-self: end;
}

.navbar-mobile-content {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--gap-6);
}

.navbar-mobile-navigation {
  display: flex;
  width: 100%;
}

.blur {
  background: color-mix(in oklab, hsl(var(--card)) 80%, transparent);
  backdrop-filter: blur(20px);
  border-color: hsl(var(--border) / 0.5);
}

@media (max-width: 767px) {
  .navbar {
    --navbar-padding-x: var(--gap-3);
    --navbar-padding-y: var(--gap-2);
  }

  .navbar-floating {
    --navbar-radius: 20px;
  }

  .navbar-layout {
    display: flex;
    min-height: 44px;
    justify-content: space-between;
  }

  .navbar-menu-button {
    flex: 0 0 auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .navbar {
    transition: none;
  }
}
</style>
