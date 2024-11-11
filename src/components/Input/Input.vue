<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

export interface InputProps {
  maxWidth?: string;
  disabled?: boolean;
}

const leftAdornment = ref<HTMLDivElement>()
const rightAdornment = ref<HTMLDivElement>()
const props = withDefaults(defineProps<InputProps>(), { maxWidth: '100%' })

const inputStyles = computed(() => {
  const getPadding = ((element: Ref<HTMLDivElement | undefined>) => {
    if (element.value?.clientWidth) {
      return element.value?.clientWidth + 20
    }
    return 12
  })
  const paddingLeft = getPadding(leftAdornment)
  const paddingRight = getPadding(rightAdornment)
  return `padding-left: ${paddingLeft}px; padding-right: ${paddingRight}px;`
});
</script>

<template>
  <div :style="{ maxWidth: props.maxWidth }" :class="['input-container', { 'disabled': props.disabled }]">
    <div ref="leftAdornment" class="adornment left-adornment">
      <slot name="leftAdornment"></slot>
    </div>
    <input v-bind="$attrs" :disabled="props.disabled" :style="inputStyles" :class="['input']" />
    <div ref="rightAdornment" class="adornment right-adornment">
      <slot name="rightAdornment"></slot>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
  display: inline-flex;
  width: 100%;
}

.input-container.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input {
  padding: 8px 12px;
  border: 1px solid hsl(var(--border));
  background: transparent;
  color: hsl(var(--foreground));
  border-radius: 6px;
  font-size: 14px;
  height: 40px;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  transition: outline-width 0.2s;
}

.input:disabled {
  cursor: not-allowed;
}

.input:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.adornment {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
}

.left-adornment {
  left: 12px;
}

.right-adornment {
  right: 12px;
}
</style>