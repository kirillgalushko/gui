<script setup lang="ts">
import { computed, inject } from "vue";
import { IconCircleDotOutline } from "@gui/icons";
import BaseMenuItem from "./BaseMenuItem.vue";
import {
  baseMenuRadioGroupContextKey,
  type BaseMenuRadioValue,
} from "./baseMenuRadioGroup";

export interface BaseMenuRadioItemProps {
  value: BaseMenuRadioValue;
  disabled?: boolean;
}

const props = defineProps<BaseMenuRadioItemProps>();
const group = inject(baseMenuRadioGroupContextKey);

if (!group) {
  throw new Error("BaseMenuRadioItem must be used inside BaseMenuRadioGroup");
}

const disabled = computed(() => !!props.disabled || group.disabled.value);
const checked = computed(() => group.model.value === props.value);

const select = () => {
  if (!disabled.value) {
    group.select(props.value);
  }
};
</script>

<template>
  <BaseMenuItem
    role="menuitemradio"
    :disabled="disabled"
    :selected="checked"
    :aria-checked="checked"
    :data-state="checked ? 'checked' : 'unchecked'"
    @click="select"
  >
    <slot></slot>
    <template #trailing>
      <slot name="indicator" :checked="checked">
        <IconCircleDotOutline v-if="checked" />
      </slot>
    </template>
  </BaseMenuItem>
</template>
