import { markRaw, toRaw, type Component } from "vue";
import type {
  ActiveFilter,
  FilterField,
  FilterFieldType,
  FilterOperator,
  FilterOption,
} from "./types";

const DEFAULT_OPERATORS: Record<FilterFieldType, FilterOperator[]> = {
  text: [
    { value: "contains", label: "содержит" },
    { value: "not_contains", label: "не содержит" },
    { value: "is", label: "равно" },
    { value: "is_not", label: "не равно" },
  ],
  select: [
    { value: "is", label: "равно" },
    { value: "is_not", label: "не равно" },
  ],
  multiselect: [
    { value: "is_any_of", label: "любое из" },
    { value: "is_all_of", label: "все из" },
    { value: "is_none_of", label: "ни одно из" },
  ],
  date: [
    { value: "is", label: "в дату" },
    { value: "on_or_after", label: "начиная с" },
    { value: "on_or_before", label: "до даты" },
  ],
  custom: [
    { value: "is", label: "равно" },
    { value: "is_not", label: "не равно" },
  ],
};

let fallbackId = 0;

const isEqual = (left: unknown, right: unknown): boolean =>
  Object.is(left, right);

export const resolveFilterIcon = (icon?: Component): Component | undefined => {
  return icon ? markRaw(toRaw(icon)) : undefined;
};

const getDefaultValues = <T>(
  field: FilterField<T>,
  option?: FilterOption<T>,
): T[] => {
  if (option) {
    return [option.value];
  }

  if (Array.isArray(field.defaultValue)) {
    return [...field.defaultValue];
  }

  return field.defaultValue === undefined ? [] : [field.defaultValue];
};

export const createFilterId = (): string => {
  if (
    typeof globalThis.crypto !== "undefined" &&
    typeof globalThis.crypto.randomUUID === "function"
  ) {
    return globalThis.crypto.randomUUID();
  }

  fallbackId += 1;
  return `filter-${Date.now()}-${fallbackId}`;
};

export const getFilterOperators = <T>(
  field: FilterField<T>,
): FilterOperator[] => {
  if (field.operators?.length) {
    return field.operators;
  }

  return DEFAULT_OPERATORS[field.type ?? "text"];
};

export const createFilter = <T>(
  field: FilterField<T>,
  option?: FilterOption<T>,
  id = createFilterId(),
): ActiveFilter<T> => {
  const operators = getFilterOperators(field);

  return {
    id,
    field: field.key,
    operator: field.defaultOperator ?? operators[0]?.value ?? "is",
    values: getDefaultValues(field, option),
  };
};

export const toggleFilterValue = <T>(
  values: T[],
  value: T,
  comparator: (left: T, right: T) => boolean = isEqual,
): T[] => {
  const index = values.findIndex((candidate) => comparator(candidate, value));

  if (index === -1) {
    return [...values, value];
  }

  return values.filter((_, valueIndex) => valueIndex !== index);
};

export const groupActiveFilters = (
  filters: readonly ActiveFilter[],
  fields: readonly FilterField[],
): ActiveFilter[] => {
  const fieldsByKey = new Map(fields.map((field) => [field.key, field]));
  const result: ActiveFilter[] = [];
  const filtersByField = new Map<string, ActiveFilter>();

  filters.forEach((filter) => {
    const field = fieldsByKey.get(filter.field);
    if (!field) {
      result.push(filter);
      return;
    }

    const current = filtersByField.get(filter.field);
    if (!current) {
      const clone = { ...filter, values: [...filter.values] };
      filtersByField.set(filter.field, clone);
      result.push(clone);
      return;
    }

    current.operator = filter.operator;
    if (field.type !== "multiselect") {
      current.values = [...filter.values];
      return;
    }

    filter.values.forEach((value) => {
      if (!current.values.some((candidate) => Object.is(candidate, value))) {
        current.values.push(value);
      }
    });
  });

  return result;
};

export const isFilterValueSelected = <T>(
  values: T[],
  value: T,
  comparator: (left: T, right: T) => boolean = isEqual,
): boolean => values.some((candidate) => comparator(candidate, value));

export const formatFilterValue = <T>(
  filter: ActiveFilter<T>,
  field: FilterField<T>,
  selectedLabel = "выбрано",
): string => {
  const options = field.options ?? [];
  const customLabel = field.formatValue?.(filter.values, options);

  if (customLabel) {
    return customLabel;
  }

  if (filter.values.length === 0) {
    return field.valuePlaceholder ?? field.placeholder ?? "Выберите значение";
  }

  const labels = filter.values.map((value) => {
    return (
      options.find((option) =>
        (field.isValueEqual ?? isEqual)(option.value, value),
      )?.label ?? String(value)
    );
  });

  if (labels.length === 1) {
    return labels[0] ?? "";
  }

  return `${labels.length} ${selectedLabel}`;
};

export const filterFieldsByQuery = <T>(
  fields: FilterField<T>[],
  query: string,
): FilterField<T>[] => {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) {
    return fields;
  }

  return fields.filter((field) =>
    field.label.toLocaleLowerCase().includes(normalizedQuery),
  );
};

export const filterOptionsByQuery = <T>(
  options: FilterOption<T>[],
  query: string,
): FilterOption<T>[] => {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) {
    return options;
  }

  return options.filter((option) => {
    const searchableText = [option.label, ...(option.keywords ?? [])]
      .join(" ")
      .toLocaleLowerCase();

    return searchableText.includes(normalizedQuery);
  });
};
