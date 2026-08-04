<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, provide, ref } from "vue";
import { useViewportBreakpoint } from "../../hooks/useViewportBreakpoint";
import {
  navigationMenuContextKey,
  type NavigationMenuOrientation,
} from "./context";
import { useNavigationMenu } from "./useNavigationMenu";

export interface NavigationMenuProps {
  ariaLabel?: string;
  closeDelayDuration?: number;
  defaultValue?: string;
  delayDuration?: number;
  modelValue?: string;
  openOnHover?: boolean;
  orientation?: NavigationMenuOrientation;
}

const props = withDefaults(defineProps<NavigationMenuProps>(), {
  ariaLabel: "Основная навигация",
  closeDelayDuration: 180,
  defaultValue: "",
  delayDuration: 120,
  modelValue: undefined,
  openOnHover: true,
  orientation: "horizontal",
});

const emit = defineEmits<{
  change: [value: string];
  "update:modelValue": [value: string];
}>();

const breakpoint = useViewportBreakpoint();
const isMobile = computed(() => breakpoint.isMobile);
const navigationMenuRef = ref<HTMLElement | null>(null);
const triggerElements = new Map<string, HTMLElement>();

const menu = useNavigationMenu({
  closeDelayDuration: props.closeDelayDuration,
  defaultValue: props.defaultValue,
  delayDuration: props.delayDuration,
  modelValue: () => props.modelValue,
  onValueChange: (value) => {
    emit("update:modelValue", value);
    emit("change", value);
  },
});

const registerTrigger = (value: string, element: HTMLElement | null) => {
  if (element) {
    triggerElements.set(value, element);
  } else {
    triggerElements.delete(value);
  }
};

const handleFocusOut = (event: FocusEvent) => {
  const nextTarget = event.relatedTarget;

  if (
    !(nextTarget instanceof Node) ||
    !navigationMenuRef.value?.contains(nextTarget)
  ) {
    menu.scheduleClose();
  }
};

const handleDocumentPointerDown = (event: PointerEvent) => {
  const target = event.target;

  if (target instanceof Node && !navigationMenuRef.value?.contains(target)) {
    menu.close();
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && menu.value.value) {
    event.preventDefault();
    const trigger = triggerElements.get(menu.value.value);
    menu.close();
    trigger?.focus();
  }
};

provide(navigationMenuContextKey, {
  ...menu,
  isMobile,
  openOnHover: computed(() => props.openOnHover),
  orientation: computed(() => props.orientation),
  registerTrigger,
});

onMounted(() => {
  document.addEventListener("pointerdown", handleDocumentPointerDown);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", handleDocumentPointerDown);
});
</script>

<template>
  <nav
    ref="navigationMenuRef"
    class="navigation-menu"
    :aria-label="props.ariaLabel"
    :data-mobile="isMobile || undefined"
    :data-orientation="props.orientation"
    @focusin="menu.cancelScheduledChange"
    @focusout="handleFocusOut"
    @keydown="handleKeydown"
    @pointerenter="menu.cancelScheduledChange"
    @pointerleave="menu.scheduleClose"
  >
    <slot></slot>
  </nav>
</template>

<style scoped>
.navigation-menu {
  position: relative;
  display: flex;
  width: max-content;
  max-width: 100%;
  align-items: center;
  color: hsl(var(--foreground));
  font-family: var(--font-family);
}

.navigation-menu[data-orientation="vertical"],
.navigation-menu[data-mobile] {
  width: 100%;
  align-items: stretch;
}
</style>
