<script setup lang="ts">
import { computed, useAttrs, type CSSProperties } from 'vue';
import Text from '../Text/Text.vue';
import type { TextProps } from '../Text/types';

export interface FormErrorProps extends TextProps {
  message?: string;
  gap?: string;
}

const props = withDefaults(defineProps<FormErrorProps>(), {
  Element: 'p',
  typography: 'label-2',
  color: 'negative',
  textAlign: 'inherit',
  gap: 'var(--gap-1)',
});

const attrs = useAttrs();

const textProps = computed(() => ({
  Element: props.Element,
  typography: props.typography,
  clamp: props.clamp,
  ellipsis: props.ellipsis,
  color: props.color,
  textAlign: props.textAlign,
}));

const styles = computed<CSSProperties>(() => ({
  '--form-error-gap': props.gap,
}) as CSSProperties);
</script>

<template>
  <Transition name="form-error">
    <div v-if="props.message" class="form-error" :style="styles">
      <div class="form-error-content">
        <div class="form-error-message-box">
          <Transition name="form-error-message" mode="out-in">
            <Text v-bind="{ ...attrs, ...textProps }" :key="props.message">
              {{ props.message }}
            </Text>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.form-error {
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  transition:
    opacity 0.16s ease,
    transform 0.16s ease,
    grid-template-rows 0.16s ease;
}

.form-error-content {
  min-height: 0;
  overflow: hidden;
}

.form-error-message-box {
  padding-top: var(--form-error-gap);
}

.form-error :deep(p) {
  margin: 0;
}

.form-error-enter-from,
.form-error-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
  transform: translateY(-3px);
}

.form-error-message-enter-active,
.form-error-message-leave-active {
  transition:
    opacity 0.16s ease,
    transform 0.16s ease;
}

.form-error-message-enter-from,
.form-error-message-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}
</style>
