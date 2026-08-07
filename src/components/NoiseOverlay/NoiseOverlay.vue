<script setup lang="ts">
import { computed } from "vue";
import { createNoiseOverlayPattern } from "./noiseOverlay";

export type NoiseOverlayBlendMode = "normal" | "overlay" | "soft-light";
export type NoiseOverlayPosition = "absolute" | "fixed";

export interface NoiseOverlayProps {
  blendMode?: NoiseOverlayBlendMode;
  grainSize?: number;
  octaves?: number;
  opacity?: number;
  position?: NoiseOverlayPosition;
  seed?: number;
  zIndex?: number;
}

const props = withDefaults(defineProps<NoiseOverlayProps>(), {
  blendMode: "soft-light",
  grainSize: 1.25,
  octaves: 4,
  opacity: 0.08,
  position: "absolute",
  seed: 7,
  zIndex: 1,
});

const pattern = computed(() =>
  createNoiseOverlayPattern({
    grainSize: props.grainSize,
    octaves: props.octaves,
    seed: props.seed,
  }),
);
const style = computed(() => ({
  "--noise-overlay-blend-mode": props.blendMode,
  "--noise-overlay-opacity": props.opacity,
  "--noise-overlay-z-index": props.zIndex,
  backgroundImage: `url("${pattern.value}")`,
}));
</script>

<template>
  <div v-if="$slots.default" class="NoiseOverlaySurface">
    <div
      :class="['NoiseOverlay', `NoiseOverlay--${props.position}`]"
      :style="style"
      aria-hidden="true"
    />
    <div class="NoiseOverlaySurface__content">
      <slot />
    </div>
  </div>

  <div
    v-else
    :class="['NoiseOverlay', `NoiseOverlay--${props.position}`]"
    :style="style"
    aria-hidden="true"
  />
</template>

<style scoped>
.NoiseOverlaySurface {
  position: relative;
  isolation: isolate;
  align-self: start;
  min-width: 0;
  width: 100%;
  height: max-content;
}

.NoiseOverlaySurface__content {
  position: relative;
  z-index: 1;
}

.NoiseOverlay {
  z-index: var(--noise-overlay-z-index);
  inset: 0;
  pointer-events: none;
  user-select: none;
  width: 100%;
  height: 100%;
  opacity: clamp(0, var(--noise-overlay-opacity), 1);
  background-repeat: repeat;
  background-size: 512px 512px;
  mix-blend-mode: var(--noise-overlay-blend-mode);
}

.NoiseOverlay--absolute {
  position: absolute;
}

.NoiseOverlay--fixed {
  position: fixed;
}
</style>
