<script setup lang="ts">
import { IconCheckOutline } from "@gui/icons";
import BaseMenuItem from "./BaseMenuItem.vue";
import { toggleMenuCheckboxValue } from "./menuSelection";

export interface BaseMenuCheckboxItemProps {
  disabled?: boolean;
}

const props = defineProps<BaseMenuCheckboxItemProps>();
const model = defineModel<boolean>({ default: false });

const toggle = () => {
  model.value = toggleMenuCheckboxValue(model.value, props.disabled);
};
</script>

<template>
  <BaseMenuItem
    role="menuitemcheckbox"
    :disabled="props.disabled"
    :selected="model"
    :aria-checked="model"
    :data-state="model ? 'checked' : 'unchecked'"
    @click="toggle"
  >
    <slot></slot>
    <template #trailing>
      <slot name="indicator" :checked="model">
        <IconCheckOutline v-if="model" />
      </slot>
    </template>
  </BaseMenuItem>
</template>
