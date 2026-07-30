<script setup lang="ts">
import { computed, watch } from "vue";
import Stack from "../Stack/Stack.vue";
import FilterClear from "./FilterClear.vue";
import FilterItem from "./FilterItem.vue";
import FilterMenu from "./FilterMenu.vue";
import { createFilter, groupActiveFilters, toggleFilterValue } from "./filters";
import type {
  ActiveFilter,
  FilterControlAppearance,
  FilterField,
  FilterItemLayout,
  FilterMenuSelectPayload,
} from "./types";

export interface FiltersProps extends FilterControlAppearance {
  fields: FilterField[];
  addLabel?: string;
  clearLabel?: string;
  selectedLabel?: string;
  showClear?: boolean;
  showMenu?: boolean;
  showItems?: boolean;
  allowDuplicateFields?: boolean;
  disabled?: boolean;
  createId?: () => string;
  itemLayout?: FilterItemLayout;
}

const props = withDefaults(defineProps<FiltersProps>(), {
  addLabel: "Добавить фильтр",
  clearLabel: "Сбросить",
  selectedLabel: "выбрано",
  showClear: true,
  showMenu: true,
  showItems: true,
  allowDuplicateFields: false,
  size: "medium",
  mode: "outline",
  itemLayout: "full",
});

const model = defineModel<ActiveFilter[]>({ default: () => [] });
const emit = defineEmits<{
  add: [filter: ActiveFilter];
  remove: [filter: ActiveFilter];
  clear: [];
}>();

const fieldsByKey = computed(
  () => new Map(props.fields.map((field) => [field.key, field])),
);
const resolvedFilters = computed(() => {
  return model.value.flatMap((filter) => {
    const field = fieldsByKey.value.get(filter.field);
    return field ? [{ filter, field }] : [];
  });
});

watch(
  () => [model.value, props.fields, props.allowDuplicateFields] as const,
  ([filters, fields, allowDuplicateFields]) => {
    if (allowDuplicateFields) return;

    const grouped = groupActiveFilters(filters, fields);
    if (
      grouped.length !== filters.length ||
      grouped.some(
        (filter, index) =>
          filter.operator !== filters[index]?.operator ||
          filter.values.length !== filters[index]?.values.length,
      )
    ) {
      model.value = grouped;
    }
  },
  { immediate: true },
);

const addFilter = ({ field, option }: FilterMenuSelectPayload) => {
  const currentFilter = model.value.find(
    (filter) => filter.field === field.key,
  );

  if (currentFilter && !props.allowDuplicateFields) {
    if (!option) {
      return;
    }

    const values =
      field.type === "multiselect"
        ? toggleFilterValue(
            currentFilter.values,
            option.value,
            field.isValueEqual,
          )
        : [option.value];

    updateFilter({ ...currentFilter, values });
    return;
  }

  const filter = createFilter(field, option, props.createId?.());
  model.value = [...model.value, filter];
  emit("add", filter);
};

const updateFilter = (filter: ActiveFilter) => {
  model.value = model.value.map((currentFilter) =>
    currentFilter.id === filter.id ? filter : currentFilter,
  );
};

const removeFilter = (filter: ActiveFilter) => {
  model.value = model.value.filter(
    (currentFilter) => currentFilter.id !== filter.id,
  );
  emit("remove", filter);
};

const clearFilters = () => {
  model.value = model.value.filter(
    (filter) => !fieldsByKey.value.has(filter.field),
  );
  emit("clear");
};
</script>

<template>
  <Stack direction="row" :gap="2" wrap align-items="center">
    <FilterMenu
      v-if="props.showMenu"
      :fields="props.fields"
      :label="props.addLabel"
      :size="props.size"
      :mode="props.mode"
      :disabled="props.disabled"
      @select="addFilter"
    >
      <template v-if="$slots.trigger" #trigger="slotProps">
        <slot name="trigger" v-bind="slotProps"></slot>
      </template>
      <template v-if="$slots.field" #field="slotProps">
        <slot name="field" v-bind="slotProps"></slot>
      </template>
      <template v-if="$slots.option" #option="slotProps">
        <slot name="option" v-bind="slotProps"></slot>
      </template>
    </FilterMenu>

    <FilterItem
      v-for="{ filter, field } in props.showItems ? resolvedFilters : []"
      :key="filter.id"
      :model-value="filter"
      :field="field"
      :size="props.size"
      :mode="props.mode"
      :selected-label="props.selectedLabel"
      :layout="field.itemLayout ?? props.itemLayout"
      :disabled="props.disabled"
      @update:model-value="updateFilter"
      @remove="removeFilter"
    >
      <template v-if="$slots['filter-field']" #field="slotProps">
        <slot name="filter-field" v-bind="slotProps"></slot>
      </template>
      <template v-if="$slots.operator" #operator="slotProps">
        <slot name="operator" v-bind="slotProps"></slot>
      </template>
      <template v-if="$slots.value" #value="slotProps">
        <slot name="value" v-bind="slotProps"></slot>
      </template>
      <template v-if="$slots['value-menu']" #value-menu="slotProps">
        <slot name="value-menu" v-bind="slotProps"></slot>
      </template>
    </FilterItem>

    <FilterClear
      v-if="props.showItems && props.showClear && resolvedFilters.length > 0"
      :label="props.clearLabel"
      :size="props.size"
      :mode="props.mode"
      :disabled="props.disabled"
      @clear="clearFilters"
    >
      <template v-if="$slots['clear-icon']" #icon>
        <slot name="clear-icon"></slot>
      </template>
    </FilterClear>
  </Stack>
</template>
