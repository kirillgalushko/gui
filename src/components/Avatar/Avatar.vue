<script setup lang="ts">
import { computed, inject, ref } from "vue";
import type { Color } from "../../types/colors";
import { avatarGroupContextKey } from "./context";

defineOptions({
  inheritAttrs: false,
});

export type AvatarMode =
  | "default"
  | "accent"
  | "secondary"
  | "ghost"
  | "outlined"
  | "negative"
  | "positive"
  | "danger"
  | "warning";
export type AvatarColor = Color;
export type AvatarShape = "square" | "circle";

export interface AvatarProps {
  shape?: AvatarShape;
  mode?: AvatarMode;
  color?: AvatarColor;
  src?: string;
  name?: string;
  size?: string;
  interactive?: boolean;
  disabled?: boolean;
  overlayBlur?: boolean;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  mode: "default",
  interactive: false,
  disabled: false,
  overlayBlur: true,
});
const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const group = inject(avatarGroupContextKey, null);
const imageLoaded = ref<boolean>(false);
const shape = computed(() => props.shape ?? group?.shape.value ?? "circle");
const size = computed(() => props.size ?? group?.size.value ?? "40px");

const modeStyles: Record<
  AvatarMode,
  { backgroundColor: string; color?: string }
> = {
  default: {
    backgroundColor: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
  },
  accent: {
    backgroundColor: "hsl(var(--accent))",
    color: "hsl(0 0% 98%)",
  },
  secondary: {
    backgroundColor: "hsl(var(--secondary))",
    color: "hsl(var(--secondary-foreground))",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  outlined: {
    backgroundColor: "transparent",
    color: "hsl(var(--foreground))",
  },
  negative: {
    backgroundColor:
      "color-mix(in oklab, hsl(var(--negative)) 20%, transparent)",
    color: "hsl(var(--negative))",
  },
  positive: {
    backgroundColor:
      "color-mix(in oklab, hsl(var(--positive)) 20%, transparent)",
    color: "hsl(var(--positive))",
  },
  danger: {
    backgroundColor: "color-mix(in oklab, hsl(var(--danger)) 20%, transparent)",
    color: "hsl(var(--danger))",
  },
  warning: {
    backgroundColor:
      "color-mix(in oklab, hsl(var(--warning)) 20%, transparent)",
    color: "hsl(var(--warning))",
  },
};

const fallback = computed(() => {
  const parts = props.name?.trim().split(/\s+/).filter(Boolean) ?? [];
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? "";

  return `${first}${second}`.toUpperCase();
});

function handleImageLoad() {
  imageLoaded.value = true;
}

const styles = computed(() => {
  const borderRadius =
    shape.value === "square"
      ? {
          borderRadius: `calc(${size.value} / 4)`,
        }
      : {};
  const paletteColor =
    props.color === undefined ? undefined : `var(--color-${props.color}-500)`;
  const modeStyle = modeStyles[props.mode];

  return {
    width: size.value,
    height: size.value,
    fontSize: `calc(${size.value} / 2.5)`,
    "--avatar-bg":
      paletteColor === undefined
        ? modeStyle.backgroundColor
        : `color-mix(in oklab, ${paletteColor} 20%, transparent)`,
    "--avatar-color": paletteColor ?? modeStyle.color ?? "inherit",
    ...borderRadius,
  };
});
</script>

<template>
  <component
    :is="props.interactive ? 'button' : 'div'"
    :style="styles"
    :class="[
      'avatar',
      shape,
      props.mode,
      {
        interactive: props.interactive,
        disabled: props.disabled,
        'has-overlay': Boolean($slots.overlay),
      },
    ]"
    :type="props.interactive ? 'button' : undefined"
    :disabled="props.interactive ? props.disabled : undefined"
    v-bind="$attrs"
    @click="emit('click', $event)"
  >
    <div class="avatar-content">
      <img
        v-if="props.src"
        v-show="imageLoaded"
        @load="handleImageLoad"
        class="avatar-image"
        :src="props.src"
      />
      <slot>
        {{ fallback }}
      </slot>
    </div>
    <div
      v-if="$slots.overlay"
      class="avatar-overlay"
      :class="{ 'avatar-overlay-blur': props.overlayBlur }"
      aria-hidden="true"
    >
      <slot name="overlay" />
    </div>
    <div v-if="$slots.corner" class="avatar-corner">
      <slot name="corner" />
    </div>
  </component>
</template>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: var(--avatar-bg);
  color: var(--avatar-color);
  position: relative;
  font-size: 16px;
  flex-shrink: 0;
}

.avatar.interactive {
  padding: 0;
  font: inherit;
  line-height: 1;
  appearance: none;
  border: 0;
  outline: 2px solid transparent;
  outline-offset: 2px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.avatar.interactive:focus-visible {
  outline-color: hsl(var(--ring));
}

.avatar.interactive:disabled {
  cursor: not-allowed;
  opacity: 0.64;
}

.avatar-content {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: inherit;
}

.avatar-corner {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  transform: translate(25%, 25%);
}

.avatar-overlay {
  position: absolute;
  z-index: 1;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--avatar-overlay-foreground, 0 0% 98%));
  background-color: hsl(
    var(--avatar-overlay-background, 240 5% 4%) /
      var(--avatar-overlay-opacity, 0.56)
  );
  border-radius: inherit;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--motion-duration-fast) var(--motion-ease-out);
}

.avatar-overlay-blur {
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}

.avatar.has-overlay:hover:not(.disabled) .avatar-overlay,
.avatar.has-overlay:focus-visible:not(.disabled) .avatar-overlay {
  opacity: 1;
}

.avatar-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.outlined {
  border: 1px solid hsl(var(--border));
}

.square {
  border-radius: 12px;
}

.circle {
  border-radius: 100%;
}
</style>
