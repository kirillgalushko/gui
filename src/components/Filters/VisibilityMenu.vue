<script setup lang="ts">
import { computed } from "vue";
import { IconCheckOutline, IconColumns2Outline } from "@gui/icons";
import Button from "../Button/Button.vue";
import Dropdown, { type DropdownContentWidth } from "../Dropdown/Dropdown.vue";
import DropdownItem from "../Dropdown/DropdownItem.vue";
import DropdownList from "../Dropdown/DropdownList.vue";
import { resolveFilterIcon } from "./filters";
import type { FilterControlAppearance, VisibilityOption } from "./types";

export interface VisibilityMenuProps extends FilterControlAppearance {
  items: VisibilityOption[];
  label?: string;
  menuLabel?: string;
  minVisible?: number;
  disabled?: boolean;
  contentWidth?: DropdownContentWidth;
}

const props = withDefaults(defineProps<VisibilityMenuProps>(), {
  label: "Колонки",
  menuLabel: "Показывать колонки",
  minVisible: 1,
  size: "medium",
  mode: "outline",
  contentWidth: "extra-small",
});

const model = defineModel<string[]>({ default: () => [] });
const emit = defineEmits<{
  toggle: [value: string, visible: boolean];
}>();

const selectedValues = computed(() => new Set(model.value));

const isVisible = (value: string): boolean => selectedValues.value.has(value);

const isToggleDisabled = (item: VisibilityOption): boolean => {
  return (
    !!props.disabled ||
    !!item.disabled ||
    (isVisible(item.value) && model.value.length <= props.minVisible)
  );
};

const toggle = (item: VisibilityOption) => {
  if (isToggleDisabled(item)) {
    return;
  }

  const visible = !isVisible(item.value);

  model.value = visible
    ? [...model.value, item.value]
    : model.value.filter((value) => value !== item.value);
  emit("toggle", item.value, visible);
};
</script>

<template>
  <Dropdown :content-width="props.contentWidth">
    <slot name="trigger" :label="props.label">
      <Button :size="props.size" :mode="props.mode" :disabled="props.disabled">
        <IconColumns2Outline />
        {{ props.label }}
      </Button>
    </slot>

    <template #popper>
      <DropdownList :aria-label="props.menuLabel">
        <DropdownItem
          v-for="item in props.items"
          :key="item.value"
          :disabled="isToggleDisabled(item)"
          :aria-pressed="isVisible(item.value)"
          @click="toggle(item)"
        >
          <slot name="item" :item="item" :visible="isVisible(item.value)">
            <component v-if="item.icon" :is="resolveFilterIcon(item.icon)" />
            <span>{{ item.label }}</span>
          </slot>
          <IconCheckOutline
            v-if="isVisible(item.value)"
            class="visibility-menu-check"
            aria-hidden="true"
          />
        </DropdownItem>
      </DropdownList>
    </template>
  </Dropdown>
</template>

<style scoped>
.visibility-menu-check {
  margin-left: auto;
  flex: 0 0 auto;
}
</style>
