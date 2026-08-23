import { describe, expect, it } from "vitest";
import type { ChartData } from "chart.js";
import { createChartOptions, withChartPalette } from "./chart";

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
