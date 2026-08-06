<script setup lang="ts">
import { computed } from "vue";
import Avatar from "./Avatar.vue";
import type { AvatarColor, AvatarMode, AvatarShape } from "./Avatar.vue";

export interface AvatarGroupCountProps {
  ariaLabel?: string;
  color?: AvatarColor;
  count: number;
  mode?: AvatarMode;
  shape?: AvatarShape;
  size?: string;
}

const props = withDefaults(defineProps<AvatarGroupCountProps>(), {
  mode: "secondary",
});

const ariaLabel = computed(
  () => props.ariaLabel ?? `Ещё участников: ${props.count}`,
);
</script>

<template>
  <Avatar
    :aria-label="ariaLabel"
    :color="props.color"
    :mode="props.mode"
    :shape="props.shape"
    :size="props.size"
  >
    <slot>+{{ props.count }}</slot>
  </Avatar>
</template>
