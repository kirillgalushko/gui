import type { Meta, StoryObj } from "@storybook/vue3";
import type { ChartData, ChartOptions } from "chart.js";
import ChartBar from "./ChartBar.vue";
import ChartDoughnut from "./ChartDoughnut.vue";
import ChartLine from "./ChartLine.vue";
import ChartPie from "./ChartPie.vue";
import ChartPolarArea from "./ChartPolarArea.vue";
import ChartRadar from "./ChartRadar.vue";

const labels = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"];

const lineData = {
  labels,
  datasets: [
    {
      label: "Бронирования",
      data: [32, 42, 38, 54, 61, 67],
    },
    {
      label: "Отмены",
      data: [4, 6, 3, 7, 5, 8],
    },
  ],
} satisfies ChartData<"line">;

const barData = {
  labels,
  datasets: [
    {
      label: "Выручка, тыс. ₽",
      data: [420, 510, 470, 650, 720, 810],
    },
    {
      label: "Расходы, тыс. ₽",
      data: [210, 240, 225, 280, 310, 340],
    },
  ],
} satisfies ChartData<"bar">;

const sourceLabels = ["Прямые", "Площадки", "Партнёры", "Соцсети"];
const sourceValues = [186, 305, 237, 92];

const doughnutData = {
  labels: sourceLabels,
  datasets: [{ label: "Бронирования", data: sourceValues }],
} satisfies ChartData<"doughnut">;

const pieData = {
  labels: ["Подтверждено", "Ожидает", "Отменено"],
  datasets: [{ label: "Статус", data: [68, 21, 11] }],
} satisfies ChartData<"pie">;

const radarData = {
  labels: [
    "Заполняемость",
    "Средний чек",
    "Отзывы",
    "Скорость ответа",
    "Повторные гости",
  ],
  datasets: [
    { label: "Этот месяц", data: [86, 72, 91, 78, 64] },
    { label: "Прошлый месяц", data: [70, 68, 84, 65, 58] },
  ],
} satisfies ChartData<"radar">;

const polarAreaData = {
  labels: ["Студии", "1-комнатные", "2-комнатные", "Апартаменты"],
  datasets: [{ label: "Объекты", data: [18, 29, 16, 12] }],
} satisfies ChartData<"polarArea">;

const horizontalBarOptions = {
  indexAxis: "y",
} satisfies ChartOptions<"bar">;

const meta: Meta<typeof ChartLine> = {
  title: "Components/Chart",
  component: ChartLine,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChartLine>;

export const Line: Story = {
  args: {
    ariaLabel: "Динамика бронирований и отмен по месяцам",
    data: lineData,
  },
};

export const Bar: Story = {
  render: () => ({
    components: { ChartBar },
    setup: () => ({ barData }),
    template: `
      <ChartBar
        :data="barData"
        aria-label="Сравнение выручки и расходов по месяцам"
      />
    `,
  }),
};

export const HorizontalBar: Story = {
  render: () => ({
    components: { ChartBar },
    setup: () => ({ barData, horizontalBarOptions }),
    template: `
      <ChartBar
        :data="barData"
        :options="horizontalBarOptions"
        aria-label="Горизонтальное сравнение выручки и расходов"
      />
    `,
  }),
};

export const Doughnut: Story = {
  render: () => ({
    components: { ChartDoughnut },
    setup: () => ({ doughnutData }),
    template: `
      <ChartDoughnut
        :data="doughnutData"
        aria-label="Источники бронирований"
      />
    `,
  }),
};

export const Pie: Story = {
  render: () => ({
    components: { ChartPie },
    setup: () => ({ pieData }),
    template: `
      <ChartPie :data="pieData" aria-label="Статусы бронирований" />
    `,
  }),
};

export const Radar: Story = {
  render: () => ({
    components: { ChartRadar },
    setup: () => ({ radarData }),
    template: `
      <ChartRadar
        :data="radarData"
        aria-label="Сравнение показателей объектов"
      />
    `,
  }),
};

export const PolarArea: Story = {
  render: () => ({
    components: { ChartPolarArea },
    setup: () => ({ polarAreaData }),
    template: `
      <ChartPolarArea
        :data="polarAreaData"
        aria-label="Распределение объектов по типам"
      />
    `,
  }),
};
