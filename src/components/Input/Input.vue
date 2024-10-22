<script setup lang="ts">
interface InputProps {
  stretched?: boolean
}

const model = defineModel()
const props = defineProps<InputProps>()
</script>

<template>
  <input v-bind="$attrs" v-model="model" :class="['input', { stretched: props.stretched }]" />
</template>

<style scoped>
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
}

.input:focus-visible {
  outline: 2px solid hsl(var(--ring));
}

.stretched {
  width: 100%;
}
</style>