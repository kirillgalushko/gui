<script setup lang="ts">
export type AuroraBackgroundIntensity = "subtle" | "medium" | "strong";
export type AuroraBackgroundPalette = "brand" | "ocean" | "sunset";

export interface AuroraBackgroundProps {
  animated?: boolean;
  intensity?: AuroraBackgroundIntensity;
  palette?: AuroraBackgroundPalette;
}

const props = withDefaults(defineProps<AuroraBackgroundProps>(), {
  animated: true,
  intensity: "medium",
  palette: "brand",
});
</script>

<template>
  <div
    :class="[
      'AuroraBackground',
      `AuroraBackground--${props.palette}`,
      `AuroraBackground--${props.intensity}`,
      { 'AuroraBackground--animated': props.animated },
    ]"
  >
    <div class="AuroraBackground__canvas" aria-hidden="true">
      <span
        v-for="index in 9"
        :key="index"
        :class="['AuroraBackground__orb', `AuroraBackground__orb--${index}`]"
      />
    </div>

    <div class="AuroraBackground__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.AuroraBackground {
  --aurora-canvas-opacity: 0.72;
  --aurora-color-1: var(--color-blue-400);
  --aurora-color-2: var(--color-violet-400);
  --aurora-color-3: var(--color-purple-400);
  --aurora-color-4: var(--color-sky-300);
  --aurora-color-5: var(--color-violet-300);
  --aurora-core-weight: 34%;
  --aurora-mid-weight: 22%;
  --aurora-blend-mode: screen;

  position: relative;
  isolation: isolate;
  align-self: start;
  min-width: 0;
  width: 100%;
  height: max-content;
  background: hsl(var(--background));
}

.AuroraBackground--ocean {
  --aurora-color-1: var(--color-cyan-500);
  --aurora-color-2: var(--color-blue-500);
  --aurora-color-3: var(--color-sky-500);
  --aurora-color-4: var(--color-teal-500);
  --aurora-color-5: var(--color-violet-500);
}

.AuroraBackground--sunset {
  --aurora-color-1: var(--color-orange-500);
  --aurora-color-2: var(--color-pink-500);
  --aurora-color-3: var(--color-purple-500);
  --aurora-color-4: var(--color-amber-500);
  --aurora-color-5: var(--color-rose-500);
}

.AuroraBackground--subtle {
  --aurora-canvas-opacity: 0.42;
}

.AuroraBackground--strong {
  --aurora-canvas-opacity: 1;
}

:global(.light-theme) .AuroraBackground {
  --aurora-core-weight: 46%;
  --aurora-mid-weight: 30%;
  --aurora-blend-mode: multiply;
}

.AuroraBackground__canvas {
  position: absolute;
  z-index: 0;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: var(--aurora-canvas-opacity);
  background: linear-gradient(
    180deg,
    color-mix(in oklab, var(--aurora-color-2) 7%, hsl(var(--background))) 0%,
    hsl(var(--background)) 16%,
    color-mix(in oklab, var(--aurora-color-1) 6%, hsl(var(--background))) 34%,
    hsl(var(--background)) 52%,
    color-mix(in oklab, var(--aurora-color-3) 7%, hsl(var(--background))) 72%,
    hsl(var(--background)) 100%
  );
}

.AuroraBackground__content {
  position: relative;
  z-index: 1;
}

.AuroraBackground__orb {
  position: absolute;
  border-radius: 50%;
  width: clamp(520px, 72vw, 1280px);
  aspect-ratio: 1.35;
  transform: translate3d(0, 0, 0) rotate(-10deg);
  background: radial-gradient(
    ellipse at center,
    color-mix(
        in oklab,
        var(--aurora-orb-color) var(--aurora-core-weight),
        transparent
      )
      0%,
    color-mix(
        in oklab,
        var(--aurora-orb-color) var(--aurora-mid-weight),
        transparent
      )
      20%,
    transparent 70%
  );
  /* mix-blend-mode: var(--aurora-blend-mode); */
  will-change: transform;
}

.AuroraBackground__orb--1 {
  --aurora-orb-color: var(--aurora-color-1);

  top: -4%;
  left: 22%;
}

.AuroraBackground__orb--2 {
  --aurora-orb-color: var(--aurora-color-3);

  top: 7%;
  right: -28%;
  width: clamp(480px, 64vw, 1120px);
}

.AuroraBackground__orb--3 {
  --aurora-orb-color: var(--aurora-color-4);

  top: 21%;
  left: -30%;
  width: clamp(460px, 66vw, 1180px);
}

.AuroraBackground__orb--4 {
  --aurora-orb-color: var(--aurora-color-2);

  top: 35%;
  right: -24%;
}

.AuroraBackground__orb--5 {
  --aurora-orb-color: var(--aurora-color-1);

  top: 50%;
  left: -24%;
  width: clamp(500px, 68vw, 1200px);
}

.AuroraBackground__orb--6 {
  --aurora-orb-color: var(--aurora-color-5);

  top: 64%;
  right: -28%;
  width: clamp(460px, 62vw, 1080px);
}

.AuroraBackground__orb--7 {
  --aurora-orb-color: var(--aurora-color-4);

  top: 78%;
  left: -22%;
}

.AuroraBackground__orb--8 {
  --aurora-orb-color: var(--aurora-color-2);

  right: -8%;
  bottom: -5%;
  width: clamp(540px, 78vw, 1360px);
}

.AuroraBackground__orb--9 {
  --aurora-orb-color: var(--aurora-color-5);

  top: 1.5%;
  left: 36%;
  width: clamp(360px, 42vw, 760px);
  opacity: 0.58;
}

.AuroraBackground--animated .AuroraBackground__orb:nth-child(odd) {
  animation: aurora-background-float-a 12s ease-in-out infinite alternate;
}

.AuroraBackground--animated .AuroraBackground__orb:nth-child(even) {
  animation: aurora-background-float-b 15s ease-in-out infinite alternate;
}

.AuroraBackground--animated .AuroraBackground__orb--2,
.AuroraBackground--animated .AuroraBackground__orb--6 {
  animation-delay: -11s;
}

.AuroraBackground--animated .AuroraBackground__orb--3,
.AuroraBackground--animated .AuroraBackground__orb--7 {
  animation-delay: -18s;
}

.AuroraBackground--animated .AuroraBackground__orb--9 {
  animation-delay: -7s;
}

@keyframes aurora-background-float-a {
  0% {
    opacity: 0.5;
    transform: translate3d(-6%, -4%, 0) rotate(-12deg) scale(0.8);
  }

  50% {
    opacity: 1;
    transform: translate3d(6%, 8%, 0) rotate(-4deg) scale(1.05);
  }

  100% {
    opacity: 0.5;
    transform: translate3d(-1%, 10%, 0) rotate(4deg) scale(1);
  }
}

@keyframes aurora-background-float-b {
  0% {
    opacity: 1;
    transform: translate3d(4%, -4%, 0) rotate(9deg) scale(1.04);
  }

  50% {
    opacity: 0.5;
    transform: translate3d(-4%, 3%, 0) rotate(2deg) scale(0.98);
  }

  100% {
    opacity: 1;
    transform: translate3d(2%, 6%, 0) rotate(-7deg) scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .AuroraBackground__orb {
    animation: none !important;
    will-change: auto;
  }
}
</style>
