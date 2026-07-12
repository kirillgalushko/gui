<script setup lang="ts">
import { computed } from "vue";
import Text from "../Text/Text.vue";

export interface FieldHelperProps {
  description?: string;
  errorMessage?: string;
  invalid?: boolean;
  gap?: string;
  disabled?: boolean;
  descriptionId?: string;
}

const props = withDefaults(defineProps<FieldHelperProps>(), {
  gap: "var(--gap-1)",
});

const message = computed(() => {
  if (props.invalid) {
    return props.errorMessage;
  }

  return props.description;
});

const messageMode = computed(() => (props.invalid ? "error" : "description"));
</script>

<template>
  <Transition name="field-helper">
    <div
      v-if="message"
      :class="['field-helper', messageMode, { disabled: props.disabled }]"
      :style="{ '--field-helper-gap': props.gap }"
    >
      <div class="field-helper-content">
        <div class="field-helper-message-box">
          <Transition name="field-helper-message" mode="out-in">
            <Text
              :id="props.descriptionId"
              :key="messageMode"
              Element="p"
              typography="label-1"
              color="inherit"
            >
              {{ message }}
            </Text>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.field-helper {
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

.field-helper-content {
  min-height: 0;
  overflow: hidden;
}

.field-helper-message-box {
  min-height: 14px;
  padding-top: var(--field-helper-gap);
}

.field-helper.error {
  color: hsl(var(--negative));
}

.field-helper.disabled {
  opacity: 0.5;
}

.field-helper :deep(p) {
  margin: 0;
}

.field-helper-enter-from,
.field-helper-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
  transform: translateY(-3px);
}

.field-helper-message-enter-active,
.field-helper-message-leave-active {
  transition:
    opacity 0.16s ease,
    transform 0.16s ease;
}

.field-helper-message-enter-from,
.field-helper-message-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}
</style>
