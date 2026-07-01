<script setup lang="ts">
import { computed, ref } from 'vue';
import { IconEyeClosedOutline, IconEyeOutline } from '@gui/icons';
import Action from '../Action/Action.vue';
import Input from '../Input/Input.vue';

defineOptions({
  inheritAttrs: false,
});

export interface PasswordInputProps {
  modelValue?: string;
  autoFocus?: boolean;
  maxWidth?: string;
  disabled?: boolean;
  description?: string;
  errorMessage?: string;
  invalid?: boolean;
  descriptionId?: string;
}

const props = withDefaults(defineProps<PasswordInputProps>(), { maxWidth: '100%' });
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();
const isPasswordVisible = ref(false);

const inputType = computed(() => isPasswordVisible.value ? 'text' : 'password');
const toggleLabel = computed(() => isPasswordVisible.value ? 'Скрыть пароль' : 'Показать пароль');

const togglePasswordVisibility = () => {
  if (props.disabled) {
    return;
  }

  isPasswordVisible.value = !isPasswordVisible.value;
};

const updateModelValue = (value: string | unknown) => {
  emit('update:modelValue', String(value ?? ''));
};
</script>

<template>
  <Input v-bind="$attrs" :model-value="props.modelValue" :type="inputType" :max-width="props.maxWidth"
    :auto-focus="props.autoFocus" :disabled="props.disabled" :description="props.description"
    :error-message="props.errorMessage" :invalid="props.invalid" :description-id="props.descriptionId"
    @update:model-value="updateModelValue">
    <template #rightAdornment>
      <Action type="button" :aria-label="toggleLabel" :aria-pressed="isPasswordVisible" :disabled="props.disabled"
        class="password-toggle" @click.prevent="togglePasswordVisibility">
        <IconEyeOutline v-if="isPasswordVisible" />
        <IconEyeClosedOutline v-else />
      </Action>
    </template>
  </Input>
</template>

<style scoped>
.password-toggle {
  color: hsl(var(--muted-foreground));
  font-size: 20px;
}

.password-toggle:hover:not(:disabled) {
  color: hsl(var(--foreground));
}

.password-toggle:disabled {
  cursor: not-allowed;
}
</style>
