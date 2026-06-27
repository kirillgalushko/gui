<script setup lang="ts">
import { computed } from 'vue';
import { IconCircleCheckOutline, IconCircleXOutline } from '@gui/icons';
import PasswordInput from '../PasswordInput/PasswordInput.vue';
import ProgressBar from '../ProgressBar/ProgressBar.vue';
import Text from '../Text/Text.vue';

defineOptions({
  inheritAttrs: false,
});

export interface PasswordStrengthRule {
  id?: string | number;
  label: string;
  valid: boolean;
}

export interface PasswordStrengthInputProps {
  modelValue?: string;
  rules?: PasswordStrengthRule[];
  progress?: number;
  progressSegments?: number;
  progressHeight?: string;
  progressGap?: string;
  weakColor?: string;
  mediumColor?: string;
  strongColor?: string;
  maxWidth?: string;
  disabled?: boolean;
  description?: string;
  errorMessage?: string;
  invalid?: boolean;
  descriptionId?: string;
}

const props = withDefaults(defineProps<PasswordStrengthInputProps>(), {
  rules: () => [],
  progressSegments: 4,
  progressHeight: '8px',
  progressGap: 'var(--gap-1)',
  weakColor: 'negative',
  mediumColor: 'warning',
  strongColor: 'positive',
  maxWidth: '100%',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const completedRulesCount = computed(() => props.rules.filter((rule) => rule.valid).length);

const computedProgress = computed(() => {
  if (typeof props.progress === 'number') {
    return Math.min(100, Math.max(0, props.progress));
  }

  if (!props.rules.length) {
    return 0;
  }

  return (completedRulesCount.value / props.rules.length) * 100;
});

const progressColor = computed(() => {
  if (computedProgress.value >= 75) {
    return props.strongColor;
  }

  if (computedProgress.value >= 40) {
    return props.mediumColor;
  }

  return props.weakColor;
});

const updateModelValue = (value: string) => {
  emit('update:modelValue', value);
};
</script>

<template>
  <div :style="{ maxWidth: props.maxWidth }" class="password-strength">
    <PasswordInput
      v-bind="$attrs"
      :model-value="props.modelValue"
      :max-width="props.maxWidth"
      :disabled="props.disabled"
      :description="props.description"
      :error-message="props.errorMessage"
      :invalid="props.invalid"
      :description-id="props.descriptionId"
      @update:model-value="updateModelValue"
    />

    <div v-if="props.rules.length" class="password-strength-details">
      <ProgressBar
        :progress="computedProgress"
        :color="progressColor"
        :segments="props.progressSegments"
        :height="props.progressHeight"
        :gap="props.progressGap"
      />

      <ul class="password-strength-rules">
        <li
          v-for="(rule, index) in props.rules"
          :key="rule.id ?? index"
          :class="['password-strength-rule', { valid: rule.valid }]"
        >
          <span class="password-strength-rule-icon">
            <IconCircleCheckOutline v-if="rule.valid" />
            <IconCircleXOutline v-else />
          </span>
          <Text Element="span" typography="label-3" color="inherit">
            {{ rule.label }}
          </Text>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.password-strength {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.password-strength-details {
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
  margin-top: var(--gap-2);
}

.password-strength-rules {
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
  padding: 0;
  margin: 0;
  list-style: none;
}

.password-strength-rule {
  display: flex;
  align-items: center;
  gap: var(--gap-1);
  color: hsl(var(--muted-foreground));
  transition: color 0.2s ease;
}

.password-strength-rule.valid {
  color: hsl(var(--positive));
}

.password-strength-rule-icon {
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 16px;
}
</style>
