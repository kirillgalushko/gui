<script setup lang="ts">
import { defineProps } from 'vue';

export interface LoaderProps {
  size?: string | number;
}

const props = defineProps<LoaderProps>();
const loaderSize = typeof props.size === 'number' ? `${props.size}px` : props.size || '1em';
</script>

<template>
  <div :style="{ width: loaderSize, height: loaderSize }" class="loader">
    <svg :width="loaderSize" :height="loaderSize" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"
        class="loader__circle" />
    </svg>
  </div>
</template>

<style scoped>
.loader {
  display: inline-block;
}

.loader__circle {
  stroke-dasharray: 110;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 3s ease-in-out infinite, rotate 1s linear infinite;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 110;
  }

  50% {
    stroke-dashoffset: 20;
  }

  100% {
    stroke-dashoffset: 110;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
