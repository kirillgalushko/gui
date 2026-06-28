<script setup lang="ts">
import { computed, ref } from 'vue';
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

const isFocused = ref(false);
const completedRulesCount = computed(() => props.rules.filter((rule) => rule.valid).length);
const rulesMax = computed(() => props.rules.length);
const hasValue = computed(() => (props.modelValue ?? '').length > 0);
const shouldShowRules = computed(() => props.rules.length > 0 && (isFocused.value || hasValue.value));

const computedProgress = computed(() => {
  if (typeof props.progress === 'number') {
    return Math.min(rulesMax.value, Math.max(0, props.progress));
  }

  if (!rulesMax.value) {
    return 0;
  }

  return completedRulesCount.value;
});

const progressColor = computed(() => {
  const progressRatio = rulesMax.value ? computedProgress.value / rulesMax.value : 0;

  if (progressRatio >= 0.75) {
    return props.strongColor;
  }

  if (progressRatio >= 0.4) {
    return props.mediumColor;
  }

  return props.weakColor;
});

const updateModelValue = (value: string) => {
  emit('update:modelValue', value);
};

const handleFocusIn = () => {
  isFocused.value = true;
};

const handleFocusOut = (event: FocusEvent) => {
  const currentTarget = event.currentTarget;
  const relatedTarget = event.relatedTarget;

  if (
    currentTarget instanceof HTMLElement
    && relatedTarget instanceof Node
    && currentTarget.contains(relatedTarget)
  ) {
    return;
  }

  isFocused.value = false;
};
</script>

<template>
  <div :style="{ maxWidth: props.maxWidth }" class="password-strength" @focusin="handleFocusIn"
    @focusout="handleFocusOut">
    <PasswordInput v-bind="$attrs" :model-value="props.modelValue" :max-width="props.maxWidth"
      :disabled="props.disabled" :description="props.description" :error-message="props.errorMessage"
      :invalid="props.invalid" :description-id="props.descriptionId" @update:model-value="updateModelValue" />

    <Transition name="password-strength-details">
      <div v-if="shouldShowRules" class="password-strength-details">
        <div class="password-strength-details-content">
          <ProgressBar :progress="computedProgress" :color="progressColor" :segments="props.progressSegments"
            :height="props.progressHeight" :gap="props.progressGap" :max="rulesMax" />

          <ul class="password-strength-rules">
            <li v-for="(rule, index) in props.rules" :key="rule.id ?? index"
              :class="['password-strength-rule', { valid: rule.valid }]"
              :style="{ '--rule-enter-delay': `${index * 34}ms` }">
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
    </Transition>
  </div>
</template>

<style scoped>
.password-strength {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.password-strength-details {
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  transition:
    grid-template-rows 0.28s cubic-bezier(0.2, 0, 0, 1),
    opacity 0.2s ease;
}

.password-strength-details-content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
  min-height: 0;
  padding-top: var(--gap-2);
  overflow: hidden;
  transform-origin: top;
  transition: transform 0.28s cubic-bezier(0.2, 0, 0, 1);
}

.password-strength-details-enter-from,
.password-strength-details-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}

.password-strength-details-enter-from .password-strength-details-content,
.password-strength-details-leave-to .password-strength-details-content {
  transform: translateY(-8px);
}

.password-strength-rules {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
}

.password-strength-rule {
  display: flex;
  align-items: center;
  gap: var(--gap-1);
  max-height: 24px;
  margin-bottom: var(--gap-1);
  overflow: hidden;
  color: hsl(var(--muted-foreground));
  transition:
    color 0.2s ease,
    opacity 0.22s ease,
    transform 0.22s ease,
    max-height 0.22s ease,
    margin-bottom 0.22s ease;
}

.password-strength-rule:last-child {
  margin-bottom: 0;
}

.password-strength-details-enter-from .password-strength-rule,
.password-strength-details-leave-to .password-strength-rule {
  opacity: 0;
  transform: translateY(-4px);
}

.password-strength-details-enter-active .password-strength-rule {
  transition-delay: var(--rule-enter-delay, 0ms);
}

.password-strength-rule.valid {
  color: hsl(var(--positive));
  opacity: 0;
  transform: translateY(-3px);
  max-height: 0;
  margin-bottom: 0;
  transition-delay: 0s, 0.18s, 0.18s, 0.18s, 0.18s;
}

.password-strength-rule-icon {
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 16px;
}
</style>
