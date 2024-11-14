<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';

export interface TextareaProps {
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  layout?: 'fixed' | 'fill-vertical' | 'fill-horizontal' | 'fill-both' | 'hug'
  placeholder?: string
}

const props = withDefaults(defineProps<TextareaProps>(), {
  resize: 'none',
  layout: 'fixed',
});

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const model = defineModel<string>()
const styles = computed(() => ({
  resize: props.resize,
}));

const autoResize = () => {
  if (props.layout === 'hug' && textareaRef.value) {
    textareaRef.value.style.height = 'auto';
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight + 2}px`;
  }
};

onMounted(() => {
  autoResize();
});

watch(() => props.layout, autoResize);

</script>

<template>
  <textarea ref="textareaRef" v-bind="$attrs" v-model="model" :placeholder="props.placeholder" :style="styles"
    :class="['textarea', props.layout]" @input="autoResize"></textarea>
</template>

<style scoped>
.textarea {
  padding: 8px 12px;
  border: 1px solid hsl(var(--border));
  background: transparent;
  color: hsl(var(--foreground));
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
  min-height: 120px;
  min-width: 220px;
  transition: outline-width 0.2s;
}

.textarea:disabled {
  cursor: not-allowed;
}

.textarea:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.fixed {
  min-height: 120px;
  min-width: 220px;
}

.fill-vertical {
  flex: 1;
  height: 100%;
}

.fill-horizontal {
  width: 100%;
}

.fill-both {
  flex: 1;
  height: 100%;
  width: 100%;
}

.hug {
  width: 100%;
  min-height: 40px;
}
</style>
