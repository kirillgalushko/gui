<script setup lang="ts">
import { computed, ref } from 'vue';

export interface AvatarProps {
  shape?: 'square' | 'circle'
  color?: 'default' | 'secondary' | 'outlined'
  src?: string
  size?: string
}

const props = withDefaults(defineProps<AvatarProps>(), {
  shape: 'circle',
  size: '40px',
  color: 'default',
})

const imageLoaded = ref<boolean>(false);

function handleImageLoad() {
  imageLoaded.value = true;
}

const styles = computed(() => {
  const borderRadius = props.shape === 'square' ? {
    borderRadius: `calc(${props.size} / 4)`,
  } : {}
  return {
    width: props.size,
    height: props.size,
    fontSize: `calc(${props.size} / 2.5)`,
    ...borderRadius,
  }
})
</script>

<template>
  <div :style="styles" :class="['avatar', props.shape, props.color]" v-bind="$attrs">
    <img v-show="imageLoaded" @load="handleImageLoad" class="avatar-image" :src="props.src" />
    <slot></slot>
  </div>
</template>

<style scoped>
.avatar {
  --avatar-bg: var(--primary);
  --avatar-color: var(--primary-foreground);

  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: hsl(var(--avatar-bg));
  color: hsl(var(--avatar-color));
  position: relative;
  overflow: hidden;
  font-size: 16px;
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

.secondary {
  --avatar-bg: var(--secondary);
  --avatar-color: var(--secondary-foreground);
}

.outlined {
  border: 1px solid hsl(var(--border));
  background: transparent;
  --avatar-color: var(--foreground);
}

.square {
  border-radius: 12px;
}

.circle {
  border-radius: 100%;
}
</style>