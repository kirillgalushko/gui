<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { accordionContextKey } from "./context";

export interface AccordionProps {
  defaultValue?: string[];
  disabled?: boolean;
  modelValue?: string[];
  multiple?: boolean;
}

const props = withDefaults(defineProps<AccordionProps>(), {
  defaultValue: () => [],
  disabled: false,
  modelValue: undefined,
  multiple: false,
});

const emit = defineEmits<{
  change: [value: string[]];
  "update:modelValue": [value: string[]];
}>();

const uncontrolledValue = ref([...props.defaultValue]);
const value = computed(() => props.modelValue ?? uncontrolledValue.value);

const updateValue = (nextValue: string[]) => {
  if (props.modelValue === undefined) {
    uncontrolledValue.value = nextValue;
  }

  emit("update:modelValue", nextValue);
  emit("change", nextValue);
};

const toggle = (itemValue: string) => {
  if (props.disabled) {
    return;
  }

  const isItemOpen = value.value.includes(itemValue);
  const nextValue = props.multiple
    ? isItemOpen
      ? value.value.filter((value) => value !== itemValue)
      : [...value.value, itemValue]
    : isItemOpen
      ? []
      : [itemValue];

  updateValue(nextValue);
};

provide(accordionContextKey, {
  disabled: computed(() => props.disabled),
  isOpen: (itemValue) => value.value.includes(itemValue),
  toggle,
});
</script>

<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<style scoped>
.accordion {
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  color: hsl(var(--foreground));
  font-family: var(--font-family);
}
</style>
