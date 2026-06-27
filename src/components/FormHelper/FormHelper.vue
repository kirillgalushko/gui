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
  <div
    v-if="message"
    :class="['form-helper', messageMode, { disabled: props.disabled }]"
    :style="{ marginTop: props.gap }"
  >
    <Transition name="form-helper-message" mode="out-in">
      <Text
        :id="props.descriptionId"
        :key="messageMode"
        Element="p"
        typography="label-3"
        color="inherit"
      >
        {{ message }}
      </Text>
    </Transition>
  </div>
</template>

<style scoped>
.form-helper {
  min-height: 14px;
  color: hsl(var(--muted-foreground));
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
