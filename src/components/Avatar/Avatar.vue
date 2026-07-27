<script setup lang="ts">
import { computed, ref } from "vue";
import type { Color } from "../../types/colors";

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

export interface AvatarProps {
  shape?: "square" | "circle";
  mode?: AvatarMode;
  color?: AvatarColor;
  src?: string;
  name?: string;
  size?: string;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  shape: "circle",
  size: "40px",
  mode: "default",
});

const imageLoaded = ref<boolean>(false);

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
    props.shape === "square"
      ? {
          borderRadius: `calc(${props.size} / 4)`,
        }
      : {};
  const paletteColor =
    props.color === undefined ? undefined : `var(--color-${props.color}-500)`;
  const modeStyle = modeStyles[props.mode];

  return {
    width: props.size,
    height: props.size,
    fontSize: `calc(${props.size} / 2.5)`,
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
  <div
    :style="styles"
    :class="['avatar', props.shape, props.mode]"
    v-bind="$attrs"
  >
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
  overflow: hidden;
  font-size: 16px;
  flex-shrink: 0;
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
