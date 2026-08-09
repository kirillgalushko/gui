<script setup lang="ts">
import { computed, provide } from "vue";
import {
  baseMenuRadioGroupContextKey,
  type BaseMenuRadioValue,
} from "./baseMenuRadioGroup";
import { selectMenuRadioValue } from "./menuSelection";

export interface BaseMenuRadioGroupProps {
  disabled?: boolean;
}

const props = defineProps<BaseMenuRadioGroupProps>();
const model = defineModel<BaseMenuRadioValue | null>({ default: null });
const disabled = computed(() => !!props.disabled);

const select = (value: BaseMenuRadioValue) => {
  model.value = selectMenuRadioValue(model.value, value, disabled.value);
};

provide(baseMenuRadioGroupContextKey, {
  model,
  disabled,
  select,
});
</script>

<template>
  <div role="group">
    <slot></slot>
  </div>
</template>
