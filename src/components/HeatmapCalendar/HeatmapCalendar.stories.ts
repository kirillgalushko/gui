import type { Meta, StoryObj } from "@storybook/vue3";
import { computed, ref } from "vue";
import Badge from "../Badge/Badge.vue";
import Stack from "../Stack/Stack.vue";
import Text from "../Text/Text.vue";
import HeatmapCalendar from "./HeatmapCalendar.vue";
import type { HeatmapCalendarCell, HeatmapCalendarDatum } from "./types";

type ActivityMeta = {
  label: string;
};

const startDate = new Date(2025, 7, 24);
const endDate = new Date(2026, 7, 23);

const activityData: HeatmapCalendarDatum<ActivityMeta>[] = Array.from(
  { length: 365 },
  (_, index) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + index);
    const value = (index * 17 + index ** 2 * 3) % 48;

    return {
      date,
      value: index % 9 === 0 ? 0 : value,
      meta: { label: "минут активности" },
    };
  },
).filter(({ value }) => value > 0);

const meta: Meta<typeof HeatmapCalendar> = {
  title: "Components/HeatmapCalendar",
  component: HeatmapCalendar,
  tags: ["autodocs"],
  args: {
    data: activityData,
    startDate,
    endDate,
    orientation: "horizontal",
    direction: "forward",
    cellSize: "medium",
    labels: true,
    legend: false,
    overlay: true,
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    direction: {
      control: "select",
      options: ["forward", "reverse"],
    },
    cellSize: {
      control: "select",
      options: ["extra-small", "small", "medium", "large"],
    },
    scale: {
      control: "select",
      options: ["quantile", "linear"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeatmapCalendar>;

export const Default: Story = {};

export const InteractiveHoverCard: Story = {
  render: () => ({
    components: { Badge, HeatmapCalendar, Stack, Text },
    setup() {
      const selected = ref<HeatmapCalendarCell<ActivityMeta> | null>(null);
      const selectedLabel = computed(() =>
        selected.value
          ? `Выбрано: ${selected.value.value} минут за ${selected.value.date.toLocaleDateString("ru-RU")}`
          : "Нажмите на день с активностью",
      );

      return { activityData, endDate, selected, selectedLabel, startDate };
    },
    template: `
      <Stack direction="column" :gap="3">
        <Text color="secondary">{{ selectedLabel }}</Text>
        <HeatmapCalendar
          :data="activityData"
          :start-date="startDate"
          :end-date="endDate"
          :clickable="(cell) => cell.hasData"
          :overlay="{ type: 'hover-card', placement: 'top', openDelay: 80 }"
          :legend="{ lowLabel: 'Меньше минут', highLabel: 'Больше минут' }"
          @cell-click="selected = $event"
        >
          <template #overlay="{ cell }">
            <Stack direction="column" :gap="1">
              <Stack direction="row" :gap="2" align-items="center">
                <Text typography="title-1">{{ cell.value }} минут</Text>
                <Badge v-if="cell.value >= 36" mode="positive">Цель выполнена</Badge>
              </Stack>
              <Text color="secondary">
                {{ cell.date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) }}
              </Text>
            </Stack>
          </template>
        </HeatmapCalendar>
      </Stack>
    `,
  }),
};

export const VerticalRange: Story = {
  args: {
    startDate: undefined,
    endDate,
    rangeDays: 90,
    orientation: "vertical",
    direction: "reverse",
    cellSize: "large",
    labels: {
      weekdays: [1, 2, 3, 4, 5, 6, 0],
      weekdayFormat: "narrow",
    },
    legend: true,
  },
};

export const CustomPaletteAndThresholds: Story = {
  args: {
    rangeDays: 120,
    startDate: undefined,
    endDate,
    palette: [
      "hsl(var(--muted))",
      "color-mix(in srgb, hsl(var(--accent)) 25%, hsl(var(--muted)))",
      "color-mix(in srgb, hsl(var(--accent)) 48%, hsl(var(--muted)))",
      "color-mix(in srgb, hsl(var(--accent)) 72%, hsl(var(--muted)))",
      "hsl(var(--accent))",
    ],
    thresholds: [10, 20, 30],
    cellSize: 16,
    cellGap: 3,
    cellRadius: "50%",
    legend: { position: "top", lowLabel: "0", highLabel: "40+" },
  },
};

export const Loading: Story = {
  args: {
    rangeDays: 90,
    startDate: undefined,
    endDate,
    loading: true,
  },
};
