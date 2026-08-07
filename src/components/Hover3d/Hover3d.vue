<script setup lang="ts">
import { toRef } from "vue";
import { useHover3d } from "./useHover3d";

export interface Hover3dProps {
  disabled?: boolean;
  maxTilt?: number;
  scale?: number;
  stretched?: boolean;
}

const props = withDefaults(defineProps<Hover3dProps>(), {
  disabled: false,
  maxTilt: 9,
  scale: 1.035,
  stretched: false,
});

const { isActive, onPointerMove, reset, style } = useHover3d({
  disabled: toRef(props, "disabled"),
  maxTilt: toRef(props, "maxTilt"),
  scale: toRef(props, "scale"),
});
</script>

<template>
  <div
    :class="[
      'Hover3d',
      { active: isActive && !props.disabled, stretched: props.stretched },
    ]"
    :style="style"
    @pointermove="onPointerMove"
    @pointerleave="reset"
    @pointercancel="reset"
  >
    <div class="Hover3d__surface">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.Hover3d {
  display: inline-block;
  min-width: 0;
  perspective: 900px;
}

.Hover3d.active {
  z-index: 2;
}

.Hover3d.stretched {
  display: block;
  width: 100%;
}

.Hover3d__surface {
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotateX(var(--hover-3d-rotate-x, 0deg))
    rotateY(var(--hover-3d-rotate-y, 0deg)) scale3d(1, 1, 1);
  transform-origin: center;
  transform-style: preserve-3d;
  transition: transform 420ms cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform;
}

.Hover3d.active .Hover3d__surface {
  transform: rotateX(var(--hover-3d-rotate-x, 0deg))
    rotateY(var(--hover-3d-rotate-y, 0deg))
    scale3d(var(--hover-3d-scale), var(--hover-3d-scale), var(--hover-3d-scale));
  transition-duration: 80ms;
  transition-timing-function: linear;
}
</style>
