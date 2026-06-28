<script setup lang="ts">
import { computed } from 'vue';
import Text from '../Text/Text.vue';

export interface FormHelperProps {
  description?: string;
  errorMessage?: string;
  invalid?: boolean;
  gap?: string;
  disabled?: boolean;
  descriptionId?: string;
}

const props = withDefaults(defineProps<FormHelperProps>(), {
  gap: 'var(--gap-1)',
});

const message = computed(() => {
  if (props.invalid) {
    return props.errorMessage;
  }

  return props.description;
});

const messageMode = computed(() => props.invalid ? 'error' : 'description');
</script>

<template>
  <Transition name="form-helper">
    <div v-if="message" :class="['form-helper', messageMode, { disabled: props.disabled }]"
      :style="{ '--form-helper-gap': props.gap }">
      <div class="form-helper-content">
        <div class="form-helper-message-box">
          <Transition name="form-helper-message" mode="out-in">
            <Text :id="props.descriptionId" :key="messageMode" Element="p" typography="label-3" color="inherit">
              {{ message }}
            </Text>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.form-helper {
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  color: hsl(var(--muted-foreground));
  transition:
    color 0.16s ease,
    opacity 0.16s ease,
    transform 0.16s ease,
    grid-template-rows 0.16s ease;
}

.form-helper-content {
  min-height: 0;
  overflow: hidden;
}

.form-helper-message-box {
  min-height: 14px;
  padding-top: var(--form-helper-gap);
}

.form-helper.error {
  color: hsl(var(--negative));
}

.form-helper.disabled {
  opacity: 0.5;
}

.form-helper :deep(p) {
  margin: 0;
}

.form-helper-enter-from,
.form-helper-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
  transform: translateY(-3px);
}

.form-helper-message-enter-active,
.form-helper-message-leave-active {
  transition: opacity 0.16s ease, transform 0.16s ease;
}

.form-helper-message-enter-from,
.form-helper-message-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}
</style>
