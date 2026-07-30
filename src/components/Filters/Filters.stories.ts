import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import {
  IconAlertCircleOutline,
  IconCalendarOutline,
  IconCircleCheckOutline,
  IconCircleXOutline,
  IconClockOutline,
  IconFlagOutline,
  IconUserOutline,
} from "@gui/icons";
import Stack from "../Stack/Stack.vue";
import FilterClear from "./FilterClear.vue";
import FilterItem from "./FilterItem.vue";
import FilterMenu from "./FilterMenu.vue";
import Filters from "./Filters.vue";
import VisibilityMenu from "./VisibilityMenu.vue";
import type { ActiveFilter, FilterField, VisibilityOption } from "./types";

const fields: FilterField[] = [
  {
    key: "status",
    label: "Статус",
    type: "multiselect",
    icon: IconCircleCheckOutline,
    searchable: true,
    options: [
      { value: "todo", label: "К выполнению", icon: IconClockOutline },
      {
        value: "progress",
        label: "В работе",
        icon: IconAlertCircleOutline,
      },
      { value: "done", label: "Готово", icon: IconCircleCheckOutline },
      { value: "cancelled", label: "Отменено", icon: IconCircleXOutline },
    ],
  },
  {
    key: "priority",
    label: "Приоритет",
    type: "multiselect",
    icon: IconFlagOutline,
    options: [
      { value: "low", label: "Низкий" },
      { value: "medium", label: "Средний" },
      { value: "high", label: "Высокий" },
      { value: "urgent", label: "Срочный" },
    ],
  },
  {
    key: "guest",
    label: "Гость",
    type: "select",
    icon: IconUserOutline,
    options: [
      { value: "anna", label: "Анна Петрова" },
      { value: "ivan", label: "Иван Соколов" },
    ],
  },
  {
    key: "arrival",
    label: "Дата заезда",
    type: "custom",
    icon: IconCalendarOutline,
    operators: [
      { value: "on", label: "в дату" },
      { value: "before", label: "до даты" },
      { value: "after", label: "после даты" },
    ],
    valuePlaceholder: "Выберите дату",
  },
  {
    key: "comment",
    label: "Комментарий",
    type: "text",
    placeholder: "Введите текст…",
  },
];

const columns: VisibilityOption[] = [
  { value: "guest", label: "Гость", icon: IconUserOutline },
  { value: "status", label: "Статус", icon: IconCircleCheckOutline },
  { value: "arrival", label: "Заезд", icon: IconCalendarOutline },
  { value: "departure", label: "Выезд", icon: IconCalendarOutline },
  { value: "priority", label: "Приоритет", icon: IconFlagOutline },
];

const meta = {
  title: "Components/Filters",
  component: Filters,
  args: {
    fields,
    size: "medium",
    mode: "outline",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["extra-small", "small", "medium", "large"],
    },
    mode: {
      control: "select",
      options: ["default", "contrast", "ghost", "outline", "accent"],
    },
  },
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Filters },
    setup() {
      const filters = ref<ActiveFilter[]>([
        {
          id: "priority-filter",
          field: "priority",
          operator: "is_any_of",
          values: ["high", "urgent"],
        },
      ]);

      return { args, filters };
    },
    template: `<Filters v-model="filters" v-bind="args" />`,
  }),
};

export const Controls: Story = {
  render: () => ({
    components: {
      FilterClear,
      FilterItem,
      FilterMenu,
      Stack,
      VisibilityMenu,
    },
    setup() {
      const visibleColumns = ref(["guest", "status", "arrival", "departure"]);
      const priority = ref<ActiveFilter>({
        id: "priority-filter",
        field: "priority",
        operator: "is_any_of",
        values: ["high", "urgent"],
      });

      return {
        columns,
        fields,
        priority,
        priorityField: fields[1],
        visibleColumns,
      };
    },
    template: `
      <Stack direction="column" :gap="3" align-items="start">
        <VisibilityMenu v-model="visibleColumns" :items="columns" />
        <FilterMenu :fields="fields" />
        <FilterItem
          v-model="priority"
          :field="priorityField"
          @remove="priority.values = []"
        />
        <FilterClear />
      </Stack>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Filters, Stack },
    setup() {
      const filters = ref<ActiveFilter[]>([
        {
          id: "status-filter",
          field: "status",
          operator: "is_any_of",
          values: ["todo", "progress"],
        },
      ]);

      return { fields, filters };
    },
    template: `
      <Stack direction="column" :gap="3" align-items="start">
        <Filters v-model="filters" :fields="fields" size="extra-small" />
        <Filters v-model="filters" :fields="fields" size="small" />
        <Filters v-model="filters" :fields="fields" size="medium" />
        <Filters v-model="filters" :fields="fields" size="large" />
      </Stack>
    `,
  }),
};

export const CompactItems: Story = {
  render: () => ({
    components: { Filters },
    setup() {
      const filters = ref<ActiveFilter[]>([
        {
          id: "guest-filter",
          field: "guest",
          operator: "is",
          values: ["anna"],
        },
      ]);

      return { fields, filters };
    },
    template: `<Filters v-model="filters" :fields="fields" item-layout="compact" />`,
  }),
};
