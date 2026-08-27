import { describe, expect, it, vi } from "vitest";
import type { ChartData } from "chart.js";
import {
  barGradientPlugin,
  createChartOptions,
  withBarBorderRadius,
  withChartPalette,
} from "./chart";

describe("withChartPalette", () => {
  it("adds palette callbacks without mutating source data", () => {
    const source = {
      labels: ["Янв", "Фев"],
      datasets: [{ label: "Брони", data: [12, 18] }],
    } satisfies ChartData<"line">;

    const result = withChartPalette("line", source);

    expect(result).not.toBe(source);
    expect(result.datasets[0]).not.toBe(source.datasets[0]);
    expect(result.datasets[0]?.borderColor).toBeTypeOf("function");
    expect(result.datasets[0]?.backgroundColor).toBeTypeOf("function");
    expect(source.datasets[0]).not.toHaveProperty("borderColor");
  });

  it("keeps explicit dataset colors", () => {
    const source = {
      labels: ["Янв"],
      datasets: [
        {
          label: "Брони",
          data: [12],
          backgroundColor: "#123456",
          borderColor: "#654321",
        },
      ],
    } satisfies ChartData<"bar">;

    const result = withChartPalette("bar", source);

    expect(result.datasets[0]?.backgroundColor).toBe("#123456");
    expect(result.datasets[0]?.borderColor).toBe("#654321");
  });
});

describe("barGradientPlugin", () => {
  it("creates the gradient from finalized bar geometry before drawing", () => {
    const gradient = { addColorStop: vi.fn() } as unknown as CanvasGradient;
    const createLinearGradient = vi.fn(() => gradient);
    const bar = {
      active: false,
      base: 100,
      horizontal: false,
      options: { backgroundColor: "rgb(0, 112, 247)" },
      x: 40,
      y: 24,
      getProps: () => bar,
    };
    const context = {
      dataIndex: 0,
      dataset: { backgroundColor: "rgb(0, 112, 247)" },
      datasetIndex: 0,
    };
    const chart = {
      ctx: { createLinearGradient },
      getSortedVisibleDatasetMetas: () => [
        {
          controller: { getContext: () => context },
          data: [bar],
          type: "bar",
        },
      ],
    };
    const hook = barGradientPlugin.beforeDatasetsDraw;

    if (!hook) {
      throw new Error("Expected a beforeDatasetsDraw hook");
    }

    hook(chart as never, { cancelable: true }, {});

    expect(bar.options.backgroundColor).toBe(gradient);
    expect(createLinearGradient).toHaveBeenCalledWith(0, 24, 0, 100);
    expect(gradient.addColorStop).toHaveBeenNthCalledWith(
      1,
      0,
      "rgba(0, 112, 247, 0.9)",
    );
    expect(gradient.addColorStop).toHaveBeenNthCalledWith(
      2,
      1,
      "rgba(0, 112, 247, 0.1)",
    );
  });
});

describe("withBarBorderRadius", () => {
  it("sets a shared radius without mutating the source datasets", () => {
    const source = {
      labels: ["Янв"],
      datasets: [{ label: "Брони", data: [12], borderRadius: 6 }],
    } satisfies ChartData<"bar">;

    const result = withBarBorderRadius(source, 12);

    expect(result).not.toBe(source);
    expect(result.datasets[0]).not.toBe(source.datasets[0]);
    expect(result.datasets[0]?.borderRadius).toBe(12);
    expect(source.datasets[0]?.borderRadius).toBe(6);
  });
});

describe("createChartOptions", () => {
  it("merges GUI defaults with consumer options", () => {
    const result = createChartOptions("bar", {
      indexAxis: "y",
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: false } },
    });

    expect(result.maintainAspectRatio).toBe(false);
    expect(result.indexAxis).toBe("y");
    expect(result.plugins?.legend?.display).toBe(false);
    const yScale = result.scales?.y as
      | { beginAtZero?: boolean; ticks?: { padding?: number } }
      | undefined;

    expect(yScale?.beginAtZero).toBe(false);
    expect(yScale?.ticks?.padding).toBe(8);
  });

  it("uses a GUI doughnut cutout only when none is supplied", () => {
    expect(createChartOptions("doughnut").cutout).toBe("64%");
    expect(createChartOptions("doughnut", { cutout: "72%" }).cutout).toBe(
      "72%",
    );
  });
});
