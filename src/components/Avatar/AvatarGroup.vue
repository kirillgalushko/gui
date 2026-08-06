<script setup lang="ts">
import { computed, provide } from "vue";
import type { AvatarShape } from "./Avatar.vue";
import { avatarGroupContextKey } from "./context";

export interface AvatarGroupProps {
  overlap?: string;
  shape?: AvatarShape;
  size?: string;
  surface?: string;
}

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  shape: "circle",
  size: "40px",
  surface: "hsl(var(--background))",
});

const shape = computed(() => props.shape);
const size = computed(() => props.size);
const overlap = computed(() => props.overlap ?? `calc(${props.size} / 4)`);

provide(avatarGroupContextKey, { shape, size });
</script>

<template>
  <div
    class="avatar-group"
    role="group"
    :style="{
      '--avatar-group-overlap': overlap,
      '--avatar-group-surface': props.surface,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.avatar-group {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  isolation: isolate;
}

.avatar-group > :deep(.avatar) {
  background:
    linear-gradient(var(--avatar-bg), var(--avatar-bg)),
    var(--avatar-group-surface);
  box-shadow: 0 0 0 3px var(--avatar-group-surface);
  margin-inline-start: calc(var(--avatar-group-overlap) * -1);
}

.avatar-group > :deep(.avatar:first-child) {
  margin-inline-start: 0;
}
</style>
