<script setup lang="ts">
import { Toaster as VueSonnerToaster } from "vue-sonner";
import "vue-sonner/style.css";
import type { ToasterProps } from "vue-sonner";

const props = withDefaults(defineProps<ToasterProps>(), {
  theme: "system",
  position: "bottom-center",
  closeButton: true,
  richColors: true,
  visibleToasts: 4,
  gap: 12,
});
</script>

<template>
  <VueSonnerToaster v-bind="props" class="Toaster" />
</template>

<style>
[data-sonner-toaster].Toaster,
[data-sonner-toaster].Toaster[data-sonner-theme] {
  --width: 356px;
  --border-radius: 16px;
  --normal-bg: hsl(var(--popover));
  --normal-bg-hover: color-mix(
    in oklab,
    hsl(var(--popover)) 88%,
    hsl(var(--popover-foreground))
  );
  --normal-border: hsl(var(--border));
  --normal-border-hover: color-mix(
    in oklab,
    hsl(var(--border)) 72%,
    hsl(var(--popover-foreground))
  );
  --normal-text: hsl(var(--popover-foreground));
  --success-bg: color-mix(
    in oklab,
    hsl(var(--positive)) 14%,
    hsl(var(--popover))
  );
  --success-border: color-mix(
    in oklab,
    hsl(var(--positive)) 36%,
    hsl(var(--border))
  );
  --success-text: hsl(var(--positive));
  --info-bg: color-mix(in oklab, hsl(var(--accent)) 14%, hsl(var(--popover)));
  --info-border: color-mix(
    in oklab,
    hsl(var(--accent)) 36%,
    hsl(var(--border))
  );
  --info-text: hsl(var(--accent));
  --warning-bg: color-mix(
    in oklab,
    hsl(var(--warning)) 14%,
    hsl(var(--popover))
  );
  --warning-border: color-mix(
    in oklab,
    hsl(var(--warning)) 36%,
    hsl(var(--border))
  );
  --warning-text: hsl(var(--warning));
  --error-bg: color-mix(
    in oklab,
    hsl(var(--negative)) 14%,
    hsl(var(--popover))
  );
  --error-border: color-mix(
    in oklab,
    hsl(var(--negative)) 36%,
    hsl(var(--border))
  );
  --error-text: hsl(var(--negative));
  font-family: var(--font-family);
}

[data-sonner-toaster].Toaster [data-sonner-toast][data-styled="true"] {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28);
  font-size: 14px;
  line-height: 20px;
  gap: var(--gap-2);
}

.light-theme
  [data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"] {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.14);
}

[data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-title] {
  font-weight: 600;
  line-height: 20px;
}

[data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-description] {
  color: hsl(var(--muted-foreground));
  line-height: 18px;
}

[data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-button] {
  height: 28px;
  border-radius: 8px;
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  font-family: var(--font-family);
  font-weight: 500;
}

[data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-cancel] {
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}

[data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-close-button] {
  background: hsl(var(--popover));
  border-color: hsl(var(--border));
  color: hsl(var(--popover-foreground));
}

[data-sonner-toaster].Toaster [data-sonner-toast]:focus-visible,
[data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-button]:focus-visible,
[data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-close-button]:focus-visible {
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.28),
    0 0 0 2px hsl(var(--ring));
}

.light-theme [data-sonner-toaster].Toaster [data-sonner-toast]:focus-visible,
.light-theme
  [data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-button]:focus-visible,
.light-theme
  [data-sonner-toaster].Toaster
  [data-sonner-toast][data-styled="true"]
  [data-close-button]:focus-visible {
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.14),
    0 0 0 2px hsl(var(--ring));
}
</style>
