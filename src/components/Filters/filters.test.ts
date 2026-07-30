import { describe, expect, it } from "vitest";
import {
  createFilter,
  filterFieldsByQuery,
  filterOptionsByQuery,
  formatFilterValue,
  getFilterOperators,
  groupActiveFilters,
  isFilterValueSelected,
  toggleFilterValue,
} from "./filters";
import type { ActiveFilter, FilterField } from "./types";

const statusField: FilterField<string> = {
  key: "status",
  label: "Статус",
  type: "multiselect",
  options: [
    { value: "new", label: "Новая" },
    { value: "done", label: "Завершена", keywords: ["готово"] },
  ],
};

describe("filters", () => {
  it("создаёт фильтр с оператором и выбранной опцией", () => {
    const filter = createFilter(statusField, statusField.options?.[1], "id-1");

    expect(filter).toEqual({
      id: "id-1",
      field: "status",
      operator: "is_any_of",
      values: ["done"],
    });
  });

  it("использует операторы, заданные полем", () => {
    const field: FilterField = {
      key: "custom",
      label: "Связь",
      operators: [{ value: "overlaps", label: "пересекается с" }],
    };

    expect(getFilterOperators(field)).toEqual(field.operators);
  });

  it("предоставляет понятные операторы для даты", () => {
    const field: FilterField<Date> = {
      key: "arrival",
      label: "Дата заезда",
      type: "date",
    };

    expect(getFilterOperators(field)).toEqual([
      { value: "is", label: "в дату" },
      { value: "on_or_after", label: "начиная с" },
      { value: "on_or_before", label: "до даты" },
    ]);
  });

  it("добавляет и удаляет значение без изменения исходного массива", () => {
    const initial = ["new"];
    const added = toggleFilterValue(initial, "done");
    const removed = toggleFilterValue(added, "new");

    expect(initial).toEqual(["new"]);
    expect(added).toEqual(["new", "done"]);
    expect(removed).toEqual(["done"]);
    expect(isFilterValueSelected(removed, "done")).toBe(true);
  });

  it("поддерживает пользовательское сравнение объектных значений", () => {
    const selected = [{ id: 1 }];
    const sameValue = { id: 1 };
    const comparator = (left: { id: number }, right: { id: number }) =>
      left.id === right.id;

    expect(toggleFilterValue(selected, sameValue, comparator)).toEqual([]);
    expect(isFilterValueSelected(selected, sameValue, comparator)).toBe(true);
  });

  it("форматирует одиночное, множественное и пустое значения", () => {
    const baseFilter: ActiveFilter<string> = {
      id: "id-1",
      field: "status",
      operator: "is_any_of",
      values: [],
    };

    expect(formatFilterValue(baseFilter, statusField)).toBe(
      "Выберите значение",
    );
    expect(
      formatFilterValue({ ...baseFilter, values: ["done"] }, statusField),
    ).toBe("Завершена");
    expect(
      formatFilterValue(
        { ...baseFilter, values: ["new", "done"] },
        statusField,
      ),
    ).toBe("2 выбрано");
  });

  it("ищет поля, подписи опций и ключевые слова без учёта регистра", () => {
    expect(filterFieldsByQuery([statusField], "СТА")).toEqual([statusField]);
    expect(filterOptionsByQuery(statusField.options ?? [], "ГОТОВО")).toEqual([
      statusField.options?.[1],
    ]);
  });

  it("объединяет значения повторных фильтров одного поля", () => {
    const filters: ActiveFilter[] = [
      { id: "status-1", field: "status", operator: "is", values: ["new"] },
      { id: "status-2", field: "status", operator: "is", values: ["done"] },
      { id: "period-from", field: "period", operator: "after", values: [1] },
      { id: "period-to", field: "period", operator: "before", values: [2] },
    ];

    expect(groupActiveFilters(filters, [statusField])).toEqual([
      {
        id: "status-1",
        field: "status",
        operator: "is",
        values: ["new", "done"],
      },
      { id: "period-from", field: "period", operator: "after", values: [1] },
      { id: "period-to", field: "period", operator: "before", values: [2] },
    ]);
  });

  it("оставляет последнее значение при группировке одиночного поля", () => {
    const guestField: FilterField = {
      key: "guest",
      label: "Гость",
      type: "select",
    };

    expect(
      groupActiveFilters(
        [
          { id: "guest-1", field: "guest", operator: "is", values: ["anna"] },
          { id: "guest-2", field: "guest", operator: "is", values: ["ivan"] },
        ],
        [guestField],
      ),
    ).toEqual([
      { id: "guest-1", field: "guest", operator: "is", values: ["ivan"] },
    ]);
  });
});
