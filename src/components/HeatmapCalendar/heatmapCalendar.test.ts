import { describe, expect, it } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import HeatmapCalendar from "./HeatmapCalendar.vue";
import { HeatmapCalendar as AsyncHeatmapCalendar } from "../../index";
import {
  createHeatmapCalendarMonthSegments,
  createHeatmapCalendarModel,
  getHeatmapCalendarDateKey,
  getHeatmapCalendarDisplayWeeks,
  parseHeatmapCalendarDate,
} from "./heatmapCalendar";

const createModel = (
  overrides: Partial<Parameters<typeof createHeatmapCalendarModel>[0]> = {},
) =>
  createHeatmapCalendarModel({
    data: [],
    startDate: "2026-08-01",
    endDate: "2026-08-10",
    rangeDays: 365,
    weekStartsOn: 1,
    levelCount: 5,
    scale: "quantile",
    ...overrides,
  });

describe("parseHeatmapCalendarDate", () => {
  it("parses YYYY-MM-DD as a local calendar date", () => {
    const date = parseHeatmapCalendarDate("2026-08-23");

    expect(getHeatmapCalendarDateKey(date)).toBe("2026-08-23");
    expect(date.getHours()).toBe(0);
  });
});

describe("createHeatmapCalendarModel", () => {
  it("aligns the range to complete weeks and marks filler cells", () => {
    const model = createModel();

    expect(model.weeks).toHaveLength(3);
    expect(model.weeks[0]?.key).toBe("2026-07-27");
    const lastWeek = model.weeks[model.weeks.length - 1];

    expect(lastWeek?.cells[lastWeek.cells.length - 1]?.dateKey).toBe(
      "2026-08-16",
    );
    expect(
      model.weeks
        .flatMap(({ cells }) => cells)
        .filter(({ isInRange }) => isInRange),
    ).toHaveLength(10);
  });

  it("keeps the selected range hidden outside a wider display range", () => {
    const model = createModel({
      startDate: "2026-08-01",
      endDate: "2026-08-10",
      displayStartDate: "2026-01-01",
      displayEndDate: "2026-12-31",
    });

    expect(model.weeks[0]?.key).toBe("2025-12-29");
    expect(model.weeks).toHaveLength(53);
    expect(
      model.weeks
        .flatMap(({ cells }) => cells)
        .find(({ dateKey }) => dateKey === "2026-01-01"),
    ).toMatchObject({ isInRange: false, isDisabled: true });
    expect(
      model.weeks
        .flatMap(({ cells }) => cells)
        .find(({ dateKey }) => dateKey === "2026-08-03"),
    ).toMatchObject({ isInRange: true, isDisabled: false });
    const monthSegments = createHeatmapCalendarMonthSegments(
      model.weeks,
      "forward",
    );

    expect(monthSegments).toHaveLength(12);
    expect(monthSegments[0]?.key).toBe("2026-0");
    expect(monthSegments[monthSegments.length - 1]?.key).toBe("2026-11");
  });

  it("sums duplicate dates without mutating source data", () => {
    const data = [
      { date: "2026-08-03", value: 2, meta: { source: "first" } },
      { date: "2026-08-03", value: 5, meta: { source: "second" } },
    ];
    const model = createModel({ data });
    const cell = model.weeks
      .flatMap(({ cells }) => cells)
      .find(({ dateKey }) => dateKey === "2026-08-03");

    expect(cell).toMatchObject({
      value: 7,
      hasData: true,
      meta: { source: "second" },
    });
    expect(data[0]?.value).toBe(2);
  });

  it("supports fixed thresholds and a custom level resolver", () => {
    const thresholdModel = createModel({
      data: [
        { date: "2026-08-03", value: 4 },
        { date: "2026-08-04", value: 40 },
      ],
      thresholds: [5, 10, 20],
    });
    const levels = thresholdModel.weeks
      .flatMap(({ cells }) => cells)
      .filter(({ hasData }) => hasData)
      .map(({ level }) => level);

    expect(levels).toEqual([1, 4]);

    const customModel = createModel({
      data: [{ date: "2026-08-03", value: 4 }],
      getLevel: () => 99,
    });
    const customCell = customModel.weeks
      .flatMap(({ cells }) => cells)
      .find(({ hasData }) => hasData);

    expect(customCell?.level).toBe(4);
  });

  it("uses rangeDays from an inclusive end date and normalizes reversed bounds", () => {
    const ranged = createModel({
      startDate: undefined,
      endDate: "2026-08-10",
      rangeDays: 3,
    });
    const reversed = createModel({
      startDate: "2026-08-10",
      endDate: "2026-08-01",
    });

    expect(getHeatmapCalendarDateKey(ranged.startDate)).toBe("2026-08-08");
    expect(getHeatmapCalendarDateKey(reversed.startDate)).toBe("2026-08-01");
    expect(getHeatmapCalendarDateKey(reversed.endDate)).toBe("2026-08-10");
  });

  it("reverses week order without reversing weekdays inside a week", () => {
    const model = createModel();
    const reversed = getHeatmapCalendarDisplayWeeks(model.weeks, "reverse");

    expect(reversed[0]?.key).toBe(model.weeks[model.weeks.length - 1]?.key);
    expect(reversed[0]?.cells[0]?.date.getDay()).toBe(1);
  });

  it("starts a month segment in the week containing the month boundary", () => {
    const model = createModel({
      startDate: "2026-07-20",
      endDate: "2026-08-10",
    });
    const forward = createHeatmapCalendarMonthSegments(model.weeks, "forward");
    const reversedWeeks = getHeatmapCalendarDisplayWeeks(
      model.weeks,
      "reverse",
    );
    const reverse = createHeatmapCalendarMonthSegments(
      reversedWeeks,
      "reverse",
    );

    expect(forward.map(({ key, start }) => [key, start])).toEqual([
      ["2026-6", 0],
      ["2026-7", 1],
    ]);
    expect(reverse.map(({ key, start }) => [key, start])).toEqual([
      ["2026-7", 0],
      ["2026-6", 2],
    ]);
  });
});

describe("HeatmapCalendar", () => {
  it("renders disabled, non-interactive cells outside the selected range", () => {
    const wrapper = mount(HeatmapCalendar, {
      props: {
        startDate: "2026-08-01",
        endDate: "2026-08-10",
        displayStartDate: "2026-01-01",
        displayEndDate: "2026-12-31",
        labels: false,
        overlay: false,
        clickable: true,
      },
    });

    expect(wrapper.findAll(".heatmap-calendar__grid-cell")).toHaveLength(371);
    const outsideCell = wrapper.find(".heatmap-calendar__grid-cell--outside");

    expect(
      wrapper.findAll(".heatmap-calendar__grid-cell--outside"),
    ).toHaveLength(361);
    expect(outsideCell.attributes("aria-hidden")).toBe("true");
    expect(outsideCell.find("button").exists()).toBe(false);
    expect(
      wrapper
        .find(
          ".heatmap-calendar__grid-cell:not(.heatmap-calendar__grid-cell--outside)",
        )
        .find("button")
        .exists(),
    ).toBe(true);
  });

  it("forwards display bounds through the public async component", async () => {
    const wrapper = mount({
      components: { AsyncHeatmapCalendar },
      template: `
        <AsyncHeatmapCalendar
          start-date="2026-08-01"
          end-date="2026-08-10"
          display-start-date="2026-01-01"
          display-end-date="2026-12-31"
          :labels="false"
          :overlay="false"
        />
      `,
    });

    await flushPromises();

    expect(wrapper.findAll(".heatmap-calendar__grid-cell")).toHaveLength(371);
  });

  it("scrolls the end of the selected range into view when enabled", async () => {
    const wrapper = mount(HeatmapCalendar, {
      props: {
        startDate: "2026-08-01",
        endDate: "2026-08-10",
        displayStartDate: "2026-01-01",
        displayEndDate: "2026-12-31",
        labels: false,
        overlay: false,
      },
    });
    const scrollArea = wrapper.get(".scroll-area").element;
    const rangeEndCell = wrapper.get(
      "[data-heatmap-calendar-range-end]",
    ).element;

    Object.defineProperties(scrollArea, {
      clientWidth: { configurable: true, value: 100 },
      scrollLeft: { configurable: true, value: 0, writable: true },
    });
    scrollArea.getBoundingClientRect = () => new DOMRect(0, 0, 100, 100);
    rangeEndCell.getBoundingClientRect = () => new DOMRect(250, 0, 18, 18);

    await wrapper.setProps({ autoScrollToRange: true });
    await flushPromises();

    expect(scrollArea.scrollLeft).toBe(176);
  });
});
