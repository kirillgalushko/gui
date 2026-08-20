<script setup lang="ts">
import { computed } from "vue";
import {
  IconArrowDownOutline,
  IconArrowUpOutline,
  IconArrowsSortOutline,
} from "@gui/icons";
import Button from "../Button/Button.vue";
import Dropdown, { type DropdownContentWidth } from "../Dropdown/Dropdown.vue";
import DropdownGroup from "../Dropdown/DropdownGroup.vue";
import DropdownLabel from "../Dropdown/DropdownLabel.vue";
import DropdownRadioGroup from "../Dropdown/DropdownRadioGroup.vue";
import DropdownRadioItem from "../Dropdown/DropdownRadioItem.vue";
import DropdownSeparator from "../Dropdown/DropdownSeparator.vue";
import type {
  FilterControlAppearance,
  SortOption,
  SortOrder,
  SortState,
} from "./types";

export interface SortMenuProps extends FilterControlAppearance {
  options: SortOption[];
  label?: string;
  fieldLabel?: string;
  orderLabel?: string;
  ascendingLabel?: string;
  descendingLabel?: string;
  disabled?: boolean;
  contentWidth?: DropdownContentWidth;
  contentMaxWidth?: string;
}

const props = withDefaults(defineProps<SortMenuProps>(), {
  label: "Сортировка",
  fieldLabel: "Сортировать по",
  orderLabel: "Порядок",
  ascendingLabel: "По возрастанию",
  descendingLabel: "По убыванию",
  size: "medium",
  mode: "outline",
  contentWidth: "small",
});

const model = defineModel<SortState>({ required: true });
const selectedOption = computed(() =>
  props.options.find((option) => option.value === model.value.value),
);

const updateField = (value: string | number | null): void => {
  if (typeof value !== "string") {
    return;
  }

  const option = props.options.find((item) => item.value === value);
  if (
    option === undefined ||
    option.disabled ||
    option.value === model.value.value
  ) {
    return;
  }

  model.value = {
    value: option.value,
    order: option.defaultOrder ?? model.value.order,
  };
};

const updateOrder = (value: string | number | null): void => {
  if (value !== "asc" && value !== "desc") {
    return;
  }

  model.value = { ...model.value, order: value as SortOrder };
};
</script>

<template>
  <Dropdown
    :content-width="props.contentWidth"
    :content-max-width="props.contentMaxWidth"
  >
    <slot
      name="trigger"
      :label="props.label"
      :sort="model"
      :option="selectedOption"
    >
      <Button :size="props.size" :mode="props.mode" :disabled="props.disabled">
        <IconArrowsSortOutline />
        {{ props.label }}
      </Button>
    </slot>

    <template #popper>
      <DropdownGroup :aria-label="props.fieldLabel">
        <DropdownLabel>{{ props.fieldLabel }}</DropdownLabel>
        <DropdownRadioGroup
          :model-value="model.value"
          :disabled="props.disabled"
          @update:model-value="updateField"
        >
          <DropdownRadioItem
            v-for="option in props.options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
          >
            <slot
              name="option"
              :option="option"
              :selected="option.value === model.value"
            >
              {{ option.label }}
            </slot>
          </DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownGroup>
      <DropdownSeparator />
      <DropdownGroup :aria-label="props.orderLabel">
        <DropdownLabel>{{ props.orderLabel }}</DropdownLabel>
        <DropdownRadioGroup
          :model-value="model.order"
          :disabled="props.disabled"
          @update:model-value="updateOrder"
        >
          <DropdownRadioItem value="asc">
            <IconArrowUpOutline />
            {{ props.ascendingLabel }}
          </DropdownRadioItem>
          <DropdownRadioItem value="desc">
            <IconArrowDownOutline />
            {{ props.descendingLabel }}
          </DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownGroup>
    </template>
  </Dropdown>
</template>
