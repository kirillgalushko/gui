import {
  addDays,
  isAfterDay,
  startOfDay,
  startOfWeek,
  toDate,
} from "../../utils/date";
import type {
  CreateHeatmapCalendarModelOptions,
  HeatmapCalendarCell,
  HeatmapCalendarDateValue,
  HeatmapCalendarDirection,
  HeatmapCalendarLevelContext,
  HeatmapCalendarModel,
  HeatmapCalendarMonthSegment,
  HeatmapCalendarWeek,
  HeatmapCalendarWeekday,
} from "./types";

const dateOnlyPattern = /^(\d{4})-(\d{2})-(\d{2})$/;

export const parseHeatmapCalendarDate = (
  value: HeatmapCalendarDateValue,
): Date => {
  if (typeof value === "string") {
    const match = dateOnlyPattern.exec(value);

    if (match) {
      const [, year = "", month = "", day = ""] = match;

      return startOfDay(new Date(Number(year), Number(month) - 1, Number(day)));
    }
  }

  return startOfDay(toDate(value));
};

export const getHeatmapCalendarDateKey = (date: Date): string => {
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getWeekStart = (
  date: Date,
  weekStartsOn: HeatmapCalendarWeekday,
): Date => {
  const monday = startOfWeek(date);
  const candidate = addDays(monday, weekStartsOn === 0 ? -1 : weekStartsOn - 1);

  return isAfterDay(candidate, date) ? addDays(candidate, -7) : candidate;
};

const clampLevel = (level: number, levelCount: number): number =>
  Number.isFinite(level)
    ? Math.min(levelCount - 1, Math.max(0, Math.round(level)))
    : 0;

const getQuantile = (
  sortedValues: readonly number[],
  ratio: number,
): number => {
  if (sortedValues.length === 0) {
    return 0;
  }

  const index = Math.min(
    sortedValues.length - 1,
    Math.max(0, Math.ceil(sortedValues.length * ratio) - 1),
  );

  return sortedValues[index] ?? 0;
};

const createQuantileThresholds = (
  positiveValues: readonly number[],
  positiveLevelCount: number,
): number[] =>
  Array.from({ length: Math.max(0, positiveLevelCount - 1) }, (_, index) =>
    getQuantile(positiveValues, (index + 1) / positiveLevelCount),
  );

const getThresholdLevel = (
  value: number,
  thresholds: readonly number[],
  levelCount: number,
): number => {
  const level = thresholds.findIndex((threshold) => value <= threshold);

  return clampLevel(
    level === -1 ? thresholds.length + 1 : level + 1,
    levelCount,
  );
};

const createLevelResolver = (
  positiveValues: readonly number[],
  levelCount: number,
  options: Pick<
    CreateHeatmapCalendarModelOptions,
    "getLevel" | "scale" | "thresholds"
  >,
) => {
  const positiveLevelCount = Math.max(1, levelCount - 1);
  const maxValue = positiveValues[positiveValues.length - 1] ?? 0;
  const context: HeatmapCalendarLevelContext = {
    levelCount,
    maxValue,
    positiveValues,
  };
  const explicitThresholds = options.thresholds
    ? [...options.thresholds]
        .filter(Number.isFinite)
        .sort((first, second) => first - second)
    : undefined;
  const quantileThresholds = createQuantileThresholds(
    positiveValues,
    positiveLevelCount,
  );

  return (value: number): number => {
    if (options.getLevel) {
      return clampLevel(options.getLevel(value, context), levelCount);
    }

    if (value <= 0 || maxValue <= 0) {
      return 0;
    }

    if (explicitThresholds?.length) {
      return getThresholdLevel(value, explicitThresholds, levelCount);
    }

    if (options.scale === "linear") {
      return clampLevel(
        Math.max(1, Math.ceil((value / maxValue) * positiveLevelCount)),
        levelCount,
      );
    }

    return getThresholdLevel(value, quantileThresholds, levelCount);
  };
};

const getRange = (
  startDate: HeatmapCalendarDateValue | undefined,
  endDate: HeatmapCalendarDateValue | undefined,
  rangeDays: number,
): { startDate: Date; endDate: Date } => {
  const normalizedEnd = endDate
    ? parseHeatmapCalendarDate(endDate)
    : startOfDay(new Date());
  const safeRangeDays = Number.isFinite(rangeDays)
    ? Math.max(1, Math.floor(rangeDays))
    : 365;
  const normalizedStart = startDate
    ? parseHeatmapCalendarDate(startDate)
    : addDays(normalizedEnd, -(safeRangeDays - 1));

  if (isAfterDay(normalizedStart, normalizedEnd)) {
    return { startDate: normalizedEnd, endDate: normalizedStart };
  }

  return { startDate: normalizedStart, endDate: normalizedEnd };
};

const getDisplayRange = (
  startDate: Date,
  endDate: Date,
  displayStartDate: HeatmapCalendarDateValue | undefined,
  displayEndDate: HeatmapCalendarDateValue | undefined,
): { displayStartDate: Date; displayEndDate: Date } => {
  const normalizedStart = displayStartDate
    ? parseHeatmapCalendarDate(displayStartDate)
    : startDate;
  const normalizedEnd = displayEndDate
    ? parseHeatmapCalendarDate(displayEndDate)
    : endDate;

  if (isAfterDay(normalizedStart, normalizedEnd)) {
    return { displayStartDate: normalizedEnd, displayEndDate: normalizedStart };
  }

  return { displayStartDate: normalizedStart, displayEndDate: normalizedEnd };
};

export const createHeatmapCalendarModel = <TMeta = unknown>(
  options: CreateHeatmapCalendarModelOptions<TMeta>,
): HeatmapCalendarModel<TMeta> => {
  const { startDate, endDate } = getRange(
    options.startDate,
    options.endDate,
    options.rangeDays,
  );
  const { displayStartDate, displayEndDate } = getDisplayRange(
    startDate,
    endDate,
    options.displayStartDate,
    options.displayEndDate,
  );
  const aggregatedData = new Map<
    string,
    { value: number; meta: TMeta | undefined }
  >();
  const startDateKey = getHeatmapCalendarDateKey(startDate);
  const endDateKey = getHeatmapCalendarDateKey(endDate);

  for (const datum of options.data) {
    const date = parseHeatmapCalendarDate(datum.date);

    if (Number.isNaN(date.getTime()) || !Number.isFinite(datum.value)) {
      continue;
    }

    const dateKey = getHeatmapCalendarDateKey(date);
    const current = aggregatedData.get(dateKey);

    aggregatedData.set(dateKey, {
      value: (current?.value ?? 0) + datum.value,
      meta: datum.meta ?? current?.meta,
    });
  }

  const valuesInRange = Array.from(aggregatedData, ([dateKey, datum]) => ({
    dateKey,
    ...datum,
  })).filter(({ dateKey }) => dateKey >= startDateKey && dateKey <= endDateKey);
  const positiveValues = valuesInRange
    .map(({ value }) => value)
    .filter((value) => value > 0)
    .sort((first, second) => first - second);
  const safeLevelCount = Math.max(2, Math.floor(options.levelCount));
  const resolveLevel = createLevelResolver(
    positiveValues,
    safeLevelCount,
    options,
  );
  const gridStart = getWeekStart(displayStartDate, options.weekStartsOn);
  const gridEnd = addDays(
    getWeekStart(displayEndDate, options.weekStartsOn),
    6,
  );
  const weeks: HeatmapCalendarWeek<TMeta>[] = [];

  for (
    let weekStart = gridStart;
    weekStart <= gridEnd;
    weekStart = addDays(weekStart, 7)
  ) {
    const cells: HeatmapCalendarCell<TMeta>[] = [];

    for (let weekdayIndex = 0; weekdayIndex < 7; weekdayIndex += 1) {
      const date = addDays(weekStart, weekdayIndex);
      const dateKey = getHeatmapCalendarDateKey(date);
      const datum = aggregatedData.get(dateKey);
      const isInDisplayRange =
        date >= displayStartDate && date <= displayEndDate;
      const isInRange = date >= startDate && date <= endDate;
      const cell: HeatmapCalendarCell<TMeta> = {
        date,
        dateKey,
        value: datum?.value ?? 0,
        level: resolveLevel(datum?.value ?? 0),
        meta: datum?.meta,
        hasData: datum !== undefined,
        isInDisplayRange,
        isInRange,
        isDisabled: false,
      };

      cell.isDisabled =
        !isInRange ||
        options.disabled === true ||
        (typeof options.disabled === "function" && options.disabled(cell));
      cells.push(cell);
    }

    weeks.push({ key: getHeatmapCalendarDateKey(weekStart), cells });
  }

  return {
    startDate,
    endDate,
    displayStartDate,
    displayEndDate,
    weeks,
    positiveValues,
    maxValue: positiveValues[positiveValues.length - 1] ?? 0,
  };
};

export const getHeatmapCalendarDisplayWeeks = <TMeta>(
  weeks: readonly HeatmapCalendarWeek<TMeta>[],
  direction: HeatmapCalendarDirection,
): HeatmapCalendarWeek<TMeta>[] =>
  direction === "reverse" ? [...weeks].reverse() : [...weeks];

export const createHeatmapCalendarMonthSegments = <TMeta>(
  weeks: readonly HeatmapCalendarWeek<TMeta>[],
  direction: HeatmapCalendarDirection,
): HeatmapCalendarMonthSegment[] => {
  const segments: HeatmapCalendarMonthSegment[] = [];

  weeks.forEach((week, weekIndex) => {
    const displayRangeCells = week.cells.filter(
      (cell) => cell.isInDisplayRange,
    );
    const monthBoundaryCell = displayRangeCells.find((cell) =>
      direction === "reverse"
        ? addDays(cell.date, 1).getDate() === 1
        : cell.date.getDate() === 1,
    );
    const representativeCell =
      monthBoundaryCell ??
      (direction === "reverse"
        ? displayRangeCells[displayRangeCells.length - 1]
        : displayRangeCells[0]);

    if (!representativeCell) {
      return;
    }

    const monthKey = `${representativeCell.date.getFullYear()}-${representativeCell.date.getMonth()}`;
    const previous = segments[segments.length - 1];

    if (previous?.key === monthKey) {
      previous.span += 1;
      return;
    }

    segments.push({
      key: monthKey,
      date: representativeCell.date,
      start: weekIndex,
      span: 1,
    });
  });

  return segments;
};
