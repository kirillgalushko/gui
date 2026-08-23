export type HeatmapCalendarDateValue = Date | string;
export type HeatmapCalendarOrientation = "horizontal" | "vertical";
export type HeatmapCalendarDirection = "forward" | "reverse";
export type HeatmapCalendarScale = "quantile" | "linear";
export type HeatmapCalendarSize = "extra-small" | "small" | "medium" | "large" | number | string;
export type HeatmapCalendarWeekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type HeatmapCalendarOverlayType = "tooltip" | "hover-card";
export type HeatmapCalendarOverlayPlacement = "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
export interface HeatmapCalendarDatum<TMeta = unknown> {
    date: HeatmapCalendarDateValue;
    value: number;
    meta?: TMeta;
}
export interface HeatmapCalendarCell<TMeta = unknown> {
    date: Date;
    dateKey: string;
    value: number;
    level: number;
    meta: TMeta | undefined;
    hasData: boolean;
    isInRange: boolean;
    isDisabled: boolean;
}
export interface HeatmapCalendarWeek<TMeta = unknown> {
    key: string;
    cells: HeatmapCalendarCell<TMeta>[];
}
export interface HeatmapCalendarMonthSegment {
    key: string;
    date: Date;
    start: number;
    span: number;
}
export interface HeatmapCalendarLabelsConfig {
    showMonths?: boolean;
    showWeekdays?: boolean;
    /** Дни недели в формате Date#getDay(): 0 — воскресенье, 1 — понедельник. */
    weekdays?: readonly HeatmapCalendarWeekday[];
    monthFormat?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    weekdayFormat?: "long" | "short" | "narrow";
}
export interface HeatmapCalendarLegendConfig {
    position?: "top" | "bottom";
    lowLabel?: string;
    highLabel?: string;
}
export interface HeatmapCalendarOverlayConfig {
    type?: HeatmapCalendarOverlayType;
    placement?: HeatmapCalendarOverlayPlacement;
    openDelay?: number;
    closeDelay?: number;
    offset?: number;
}
export interface HeatmapCalendarLevelContext {
    levelCount: number;
    maxValue: number;
    positiveValues: readonly number[];
}
export type HeatmapCalendarGetLevel = (value: number, context: HeatmapCalendarLevelContext) => number;
export interface HeatmapCalendarProps<TMeta = unknown> {
    data?: readonly HeatmapCalendarDatum<TMeta>[];
    startDate?: HeatmapCalendarDateValue;
    endDate?: HeatmapCalendarDateValue;
    /** Используется только когда startDate не задан. */
    rangeDays?: number;
    weekStartsOn?: HeatmapCalendarWeekday;
    orientation?: HeatmapCalendarOrientation;
    direction?: HeatmapCalendarDirection;
    cellSize?: HeatmapCalendarSize;
    cellGap?: number | string;
    cellRadius?: number | string;
    locale?: string;
    labels?: boolean | HeatmapCalendarLabelsConfig;
    legend?: boolean | HeatmapCalendarLegendConfig;
    overlay?: boolean | HeatmapCalendarOverlayConfig;
    palette?: readonly string[];
    scale?: HeatmapCalendarScale;
    thresholds?: readonly number[];
    getLevel?: HeatmapCalendarGetLevel;
    clickable?: boolean | ((cell: HeatmapCalendarCell<TMeta>) => boolean);
    disabled?: boolean | ((cell: HeatmapCalendarCell<TMeta>) => boolean);
    getCellLabel?: (cell: HeatmapCalendarCell<TMeta>) => string;
    loading?: boolean;
    ariaLabel?: string;
}
export interface CreateHeatmapCalendarModelOptions<TMeta = unknown> {
    data: readonly HeatmapCalendarDatum<TMeta>[];
    startDate?: HeatmapCalendarDateValue;
    endDate?: HeatmapCalendarDateValue;
    rangeDays: number;
    weekStartsOn: HeatmapCalendarWeekday;
    levelCount: number;
    scale: HeatmapCalendarScale;
    thresholds?: readonly number[];
    getLevel?: HeatmapCalendarGetLevel;
    disabled?: boolean | ((cell: HeatmapCalendarCell<TMeta>) => boolean);
}
export interface HeatmapCalendarModel<TMeta = unknown> {
    startDate: Date;
    endDate: Date;
    weeks: HeatmapCalendarWeek<TMeta>[];
    positiveValues: number[];
    maxValue: number;
}
