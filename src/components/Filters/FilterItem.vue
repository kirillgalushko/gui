<script setup lang="ts">
import { computed } from "vue";
import { IconCheckOutline, IconXOutline } from "@gui/icons";
import Button from "../Button/Button.vue";
import ButtonGroup from "../ButtonGroup/ButtonGroup.vue";
import DatePicker from "../DatePicker/DatePicker.vue";
import type { DatePickerChangePayload } from "../DatePicker/types";
import Dropdown, { type DropdownContentWidth } from "../Dropdown/Dropdown.vue";
import DropdownItem from "../Dropdown/DropdownItem.vue";
import DropdownList from "../Dropdown/DropdownList.vue";
import Input from "../Input/Input.vue";
import {
  formatFilterValue,
  getFilterOperators,
  isFilterValueSelected,
  resolveFilterIcon,
  toggleFilterValue,
} from "./filters";
import type {
  ActiveFilter,
  FilterControlAppearance,
  FilterField,
  FilterItemLayout,
  FilterOperator,
  FilterOption,
} from "./types";

export interface FilterItemProps extends FilterControlAppearance {
  field: FilterField;
  disabled?: boolean;
  selectedLabel?: string;
  removeLabel?: string;
  contentWidth?: DropdownContentWidth;
  layout?: FilterItemLayout;
}

const props = withDefaults(defineProps<FilterItemProps>(), {
  size: "medium",
  mode: "outline",
  selectedLabel: "выбрано",
  removeLabel: "Удалить фильтр",
  contentWidth: "extra-small",
  layout: "full",
});

const model = defineModel<ActiveFilter>({ required: true });
const emit = defineEmits<{
  remove: [filter: ActiveFilter];
}>();

const operators = computed(() => getFilterOperators(props.field));
const currentOperator = computed(() => {
  return (
    operators.value.find(
      (operator) => operator.value === model.value.operator,
    ) ?? operators.value[0]
  );
});
const valueLabel = computed(() =>
  formatFilterValue(model.value, props.field, props.selectedLabel),
);
const textValue = computed({
  get: () => String(model.value.values[0] ?? ""),
  set: (value: string) => {
    updateFilter({ values: value ? [value] : [] });
  },
});
const dateValue = computed(() => {
  const value = model.value.values[0];

  return value instanceof Date ? value : null;
});

const updateFilter = (patch: Partial<ActiveFilter>) => {
  if (props.disabled) {
    return;
  }

  model.value = { ...model.value, ...patch };
};

const selectOperator = (operator: FilterOperator) => {
  updateFilter({ operator: operator.value });
};

const selectOption = (option: FilterOption) => {
  if (option.disabled || props.disabled) {
    return;
  }

  const values =
    props.field.type === "multiselect"
      ? toggleFilterValue(
          model.value.values,
          option.value,
          props.field.isValueEqual,
        )
      : [option.value];

  updateFilter({ values });
};

const selectDate = ({ value }: DatePickerChangePayload) => {
  updateFilter({ values: value === null ? [] : [value] });
};

const isSelected = (option: FilterOption): boolean =>
  isFilterValueSelected(
    model.value.values,
    option.value,
    props.field.isValueEqual,
  );
</script>

<template>
  <ButtonGroup :aria-label="props.field.label">
    <Button
      v-if="props.layout === 'full'"
      as-child
      :size="props.size"
      :mode="props.mode"
    >
      <span>
        <slot name="field" :field="props.field">
          <component
            v-if="props.field.icon"
            :is="resolveFilterIcon(props.field.icon)"
          />
          {{ props.field.label }}
        </slot>
      </span>
    </Button>

    <Dropdown
      v-if="props.layout === 'full'"
      :content-width="props.contentWidth"
    >
      <Button :size="props.size" :mode="props.mode" :disabled="props.disabled">
        <slot name="operator" :operator="currentOperator" :filter="model">
          {{ currentOperator?.label }}
        </slot>
      </Button>

      <template #popper>
        <DropdownList :aria-label="`Оператор: ${props.field.label}`">
          <DropdownItem
            v-for="operator in operators"
            :key="operator.value"
            :aria-pressed="operator.value === model.operator"
            @click="selectOperator(operator)"
          >
            <span>{{ operator.label }}</span>
            <IconCheckOutline
              v-if="operator.value === model.operator"
              class="filter-item-check"
              aria-hidden="true"
            />
          </DropdownItem>
        </DropdownList>
      </template>
    </Dropdown>

    <Dropdown :content-width="props.contentWidth" content-padding="none">
      <Button :size="props.size" :mode="props.mode" :disabled="props.disabled">
        <slot
          name="value"
          :filter="model"
          :field="props.field"
          :label="valueLabel"
        >
          {{ valueLabel }}
        </slot>
      </Button>

      <template #popper>
        <slot
          v-if="$slots['value-menu']"
          name="value-menu"
          :filter="model"
          :field="props.field"
          :update-filter="updateFilter"
        ></slot>

        <div v-else-if="props.field.type === 'date'" class="filter-item-input">
          <DatePicker
            :value="dateValue"
            :size="props.size"
            :placeholder="props.field.placeholder"
            stretched
            :on-change="selectDate"
          />
        </div>

        <div v-else-if="props.field.type === 'text'" class="filter-item-input">
          <Input
            v-model="textValue"
            :size="props.size"
            :placeholder="props.field.placeholder"
            :aria-label="props.field.label"
          />
        </div>

        <DropdownList
          v-else
          class="filter-item-list"
          :aria-label="`Значение: ${props.field.label}`"
        >
          <DropdownItem
            v-for="option in props.field.options ?? []"
            :key="String(option.value)"
            :disabled="option.disabled"
            :aria-pressed="isSelected(option)"
            @click="selectOption(option)"
          >
            <component
              v-if="option.icon"
              :is="resolveFilterIcon(option.icon)"
            />
            <span>{{ option.label }}</span>
            <IconCheckOutline
              v-if="isSelected(option)"
              class="filter-item-check"
              aria-hidden="true"
            />
          </DropdownItem>
        </DropdownList>
      </template>
    </Dropdown>

    <Button
      squared
      :size="props.size"
      :mode="props.mode"
      :disabled="props.disabled"
      :aria-label="props.removeLabel"
      @click="emit('remove', model)"
    >
      <IconXOutline />
    </Button>
  </ButtonGroup>
</template>

<style scoped>
.filter-item-check {
  margin-left: auto;
  flex: 0 0 auto;
}

.filter-item-input {
  padding: var(--gap-2);
}

.filter-item-list {
  padding: var(--gap-1);
}
</style>
