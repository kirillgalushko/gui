import type { CreateHeatmapCalendarModelOptions, HeatmapCalendarDateValue, HeatmapCalendarDirection, HeatmapCalendarModel, HeatmapCalendarMonthSegment, HeatmapCalendarWeek } from "./types";
export declare const parseHeatmapCalendarDate: (value: HeatmapCalendarDateValue) => Date;
export declare const getHeatmapCalendarDateKey: (date: Date) => string;
export declare const createHeatmapCalendarModel: <TMeta = unknown>(options: CreateHeatmapCalendarModelOptions<TMeta>) => HeatmapCalendarModel<TMeta>;
export declare const getHeatmapCalendarDisplayWeeks: <TMeta>(weeks: readonly HeatmapCalendarWeek<TMeta>[], direction: HeatmapCalendarDirection) => HeatmapCalendarWeek<TMeta>[];
export declare const createHeatmapCalendarMonthSegments: <TMeta>(weeks: readonly HeatmapCalendarWeek<TMeta>[], direction: HeatmapCalendarDirection) => HeatmapCalendarMonthSegment[];
