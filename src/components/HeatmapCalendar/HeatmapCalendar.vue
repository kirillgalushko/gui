<script setup lang="ts" generic="TMeta = unknown">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  shallowRef,
  useId,
  watch,
  type CSSProperties,
} from "vue";
import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/vue";
import ScrollArea from "../ScrollArea/ScrollArea.vue";
import {
  createHeatmapCalendarModel,
  createHeatmapCalendarMonthSegments,
  getHeatmapCalendarDisplayWeeks,
} from "./heatmapCalendar";
import type {
  HeatmapCalendarCell,
  HeatmapCalendarLabelsConfig,
  HeatmapCalendarLegendConfig,
  HeatmapCalendarMonthSegment,
  HeatmapCalendarOverlayConfig,
  HeatmapCalendarProps,
} from "./types";

const defaultPalette = [
  "var(--heatmap-calendar-level-0)",
  "var(--heatmap-calendar-level-1)",
  "var(--heatmap-calendar-level-2)",
  "var(--heatmap-calendar-level-3)",
  "var(--heatmap-calendar-level-4)",
] as const;

const sizePresets = {
  "extra-small": { size: 8, gap: 2, radius: 2 },
  small: { size: 10, gap: 3, radius: 3 },
  medium: { size: 14, gap: 4, radius: 4 },
  large: { size: 18, gap: 5, radius: 5 },
} as const;

const defaultLabels: Required<HeatmapCalendarLabelsConfig> = {
  showMonths: true,
  showWeekdays: true,
  weekdays: [2, 4, 6],
  monthFormat: "short",
  weekdayFormat: "short",
};

const defaultLegend: Required<HeatmapCalendarLegendConfig> = {
  position: "bottom",
  lowLabel: "Меньше",
  highLabel: "Больше",
};

const props = withDefaults(defineProps<HeatmapCalendarProps<TMeta>>(), {
  data: () => [],
  startDate: undefined,
  endDate: undefined,
  rangeDays: 365,
  weekStartsOn: 1,
  orientation: "horizontal",
  direction: "forward",
  cellSize: "medium",
  cellGap: undefined,
  cellRadius: undefined,
  locale: "ru-RU",
  labels: true,
  legend: false,
  overlay: true,
  palette: undefined,
  scale: "quantile",
  thresholds: undefined,
  getLevel: undefined,
  clickable: false,
  disabled: false,
  getCellLabel: undefined,
  loading: false,
  ariaLabel: "Календарь активности",
});

const emit = defineEmits<{
  "cell-click": [cell: HeatmapCalendarCell<TMeta>, event: MouseEvent];
  "cell-focus": [cell: HeatmapCalendarCell<TMeta>, event: FocusEvent];
  "cell-blur": [cell: HeatmapCalendarCell<TMeta>, event: FocusEvent];
  "cell-enter": [cell: HeatmapCalendarCell<TMeta>, event: MouseEvent];
  "cell-leave": [cell: HeatmapCalendarCell<TMeta>, event: MouseEvent];
}>();

defineSlots<{
  cell(props: { cell: HeatmapCalendarCell<TMeta> }): unknown;
  overlay(props: { cell: HeatmapCalendarCell<TMeta> }): unknown;
  legend(props: { levels: number[]; palette: readonly string[] }): unknown;
  "month-label"(props: {
    label: string;
    segment: HeatmapCalendarMonthSegment;
  }): unknown;
  "weekday-label"(props: { label: string; date: Date }): unknown;
}>();

const palette = computed<readonly string[]>(() =>
  props.palette && props.palette.length >= 2 ? props.palette : defaultPalette,
);

const calendar = computed(() =>
  createHeatmapCalendarModel<TMeta>({
    data: props.data,
    startDate: props.startDate,
    endDate: props.endDate,
    rangeDays: props.rangeDays,
    weekStartsOn: props.weekStartsOn,
    levelCount: palette.value.length,
    scale: props.scale,
    thresholds: props.thresholds,
    getLevel: props.getLevel,
    disabled: props.disabled,
  }),
);

const displayWeeks = computed(() =>
  getHeatmapCalendarDisplayWeeks(calendar.value.weeks, props.direction),
);
const monthSegments = computed(() =>
  createHeatmapCalendarMonthSegments(displayWeeks.value, props.direction),
);
const labels = computed<Required<HeatmapCalendarLabelsConfig>>(() => {
  if (props.labels === false) {
    return { ...defaultLabels, showMonths: false, showWeekdays: false };
  }

  return props.labels === true
    ? defaultLabels
    : { ...defaultLabels, ...props.labels };
});
const legend = computed<Required<HeatmapCalendarLegendConfig> | null>(() => {
  if (props.legend === false) {
    return null;
  }

  return props.legend === true
    ? defaultLegend
    : { ...defaultLegend, ...props.legend };
});
const overlay = computed<Required<HeatmapCalendarOverlayConfig> | null>(() => {
  if (props.overlay === false) {
    return null;
  }

  const config = props.overlay === true ? {} : props.overlay;
  const type = config.type ?? "tooltip";

  return {
    type,
    placement: config.placement ?? "top",
    openDelay: config.openDelay ?? 80,
    closeDelay: config.closeDelay ?? (type === "hover-card" ? 120 : 0),
    offset: config.offset ?? 8,
  };
});

const activeCell = shallowRef<HeatmapCalendarCell<TMeta> | null>(null);
const overlayId = useId();
const overlayTargetRef = shallowRef<HTMLElement | null>(null);
const overlayRef = ref<HTMLElement | null>(null);
const isOverlayOpen = ref(false);
let overlayTimeout: ReturnType<typeof setTimeout> | undefined;

const overlayMiddleware = computed(() => [
  offset(overlay.value?.offset ?? 8),
  flip(),
  shift({ padding: 8 }),
]);
const { floatingStyles, update: updateOverlay } = useFloating(
  overlayTargetRef,
  overlayRef,
  {
    placement: computed(() => overlay.value?.placement ?? "top"),
    middleware: overlayMiddleware,
    whileElementsMounted: autoUpdate,
  },
);

const clearOverlayTimeout = () => {
  if (overlayTimeout) {
    clearTimeout(overlayTimeout);
    overlayTimeout = undefined;
  }
};

const openOverlay = (
  cell: HeatmapCalendarCell<TMeta>,
  target: EventTarget | null,
) => {
  if (!overlay.value || props.loading || !cell.isInRange) {
    return;
  }

  clearOverlayTimeout();
  activeCell.value = cell;
  overlayTargetRef.value = target instanceof HTMLElement ? target : null;

  const show = () => {
    isOverlayOpen.value = true;
    nextTick(updateOverlay);
  };

  if (overlay.value.openDelay > 0) {
    overlayTimeout = setTimeout(show, overlay.value.openDelay);
  } else {
    show();
  }
};

const closeOverlay = () => {
  clearOverlayTimeout();

  const hide = () => {
    isOverlayOpen.value = false;
  };

  if ((overlay.value?.closeDelay ?? 0) > 0) {
    overlayTimeout = setTimeout(hide, overlay.value?.closeDelay);
  } else {
    hide();
  }
};

const handleCellEnter = (
  cell: HeatmapCalendarCell<TMeta>,
  event: MouseEvent,
) => {
  emit("cell-enter", cell, event);
  openOverlay(cell, event.currentTarget);
};

const handleCellLeave = (
  cell: HeatmapCalendarCell<TMeta>,
  event: MouseEvent,
) => {
  emit("cell-leave", cell, event);
  closeOverlay();
};

const handleCellFocus = (
  cell: HeatmapCalendarCell<TMeta>,
  event: FocusEvent,
) => {
  emit("cell-focus", cell, event);
  openOverlay(cell, event.currentTarget);
};

const handleCellBlur = (
  cell: HeatmapCalendarCell<TMeta>,
  event: FocusEvent,
) => {
  const currentTarget = event.currentTarget;

  if (
    currentTarget instanceof HTMLElement &&
    event.relatedTarget instanceof Node &&
    currentTarget.contains(event.relatedTarget)
  ) {
    return;
  }

  emit("cell-blur", cell, event);
  closeOverlay();
};

const isCellClickable = (cell: HeatmapCalendarCell<TMeta>): boolean =>
  cell.isInRange &&
  (props.clickable === true ||
    (typeof props.clickable === "function" && props.clickable(cell)));

const handleCellClick = (
  cell: HeatmapCalendarCell<TMeta>,
  event: MouseEvent,
) => {
  if (!cell.isDisabled && !props.loading) {
    emit("cell-click", cell, event);
  }
};

const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat(props.locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
const formatValue = (cell: HeatmapCalendarCell<TMeta>): string =>
  cell.hasData
    ? new Intl.NumberFormat(props.locale).format(cell.value)
    : "Нет данных";
const getCellLabel = (cell: HeatmapCalendarCell<TMeta>): string =>
  props.getCellLabel?.(cell) ??
  `${formatValue(cell)}, ${formatDate(cell.date)}`;
const formatMonth = (date: Date): string =>
  new Intl.DateTimeFormat(props.locale, {
    month: labels.value.monthFormat,
  }).format(date);
const formatWeekday = (date: Date): string =>
  new Intl.DateTimeFormat(props.locale, {
    weekday: labels.value.weekdayFormat,
  }).format(date);
const shouldShowWeekday = (date: Date): boolean =>
  labels.value.weekdays.includes(date.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6);

const resolveLength = (value: number | string): string =>
  typeof value === "number" ? `${value}px` : value;
const activeSizePreset = computed(() =>
  typeof props.cellSize === "string" && props.cellSize in sizePresets
    ? sizePresets[props.cellSize as keyof typeof sizePresets]
    : undefined,
);
const componentStyles = computed<CSSProperties>(() => ({
  "--heatmap-calendar-cell-size": resolveLength(
    activeSizePreset.value?.size ?? props.cellSize,
  ),
  "--heatmap-calendar-cell-gap": resolveLength(
    props.cellGap ?? activeSizePreset.value?.gap ?? 4,
  ),
  "--heatmap-calendar-cell-radius": resolveLength(
    props.cellRadius ?? activeSizePreset.value?.radius ?? 4,
  ),
  "--heatmap-calendar-week-count": displayWeeks.value.length,
}));
const legendLevels = computed(() =>
  Array.from({ length: palette.value.length }, (_, index) => index),
);
const getCellStyle = (cell: HeatmapCalendarCell<TMeta>): CSSProperties => ({
  "--heatmap-calendar-cell-color":
    palette.value[cell.level] ?? palette.value[palette.value.length - 1],
});
const getMonthSegmentStyle = (
  segment: HeatmapCalendarMonthSegment,
): CSSProperties =>
  props.orientation === "horizontal"
    ? { gridColumn: `${segment.start + 1} / span ${segment.span}` }
    : { gridRow: `${segment.start + 1} / span ${segment.span}` };

watch(
  () => [
    props.overlay,
    props.loading,
    calendar.value.startDate,
    calendar.value.endDate,
  ],
  closeOverlay,
);

onBeforeUnmount(clearOverlayTimeout);
</script>

<template>
  <section
    :class="[
      'heatmap-calendar',
      `heatmap-calendar--${props.orientation}`,
      `heatmap-calendar--${props.direction}`,
      { 'heatmap-calendar--loading': props.loading },
    ]"
    :style="componentStyles"
    :aria-label="props.ariaLabel"
    :aria-busy="props.loading || undefined"
  >
    <div
      v-if="legend?.position === 'top'"
      class="heatmap-calendar__legend"
      aria-label="Шкала интенсивности"
    >
      <slot name="legend" :levels="legendLevels" :palette="palette">
        <span>{{ legend.lowLabel }}</span>
        <span
          v-for="level in legendLevels"
          :key="level"
          class="heatmap-calendar__legend-cell"
          :style="{ '--heatmap-calendar-cell-color': palette[level] }"
          aria-hidden="true"
        ></span>
        <span>{{ legend.highLabel }}</span>
      </slot>
    </div>

    <ScrollArea
      orientation="horizontal"
      :keyboard-focusable="false"
      :stable-scrollbar="false"
    >
      <div class="heatmap-calendar__plot">
        <div
          v-if="labels.showMonths"
          class="heatmap-calendar__month-labels"
          aria-hidden="true"
        >
          <span
            v-for="segment in monthSegments"
            :key="segment.key"
            class="heatmap-calendar__month-label"
            :style="getMonthSegmentStyle(segment)"
          >
            <slot
              name="month-label"
              :label="formatMonth(segment.date)"
              :segment="segment"
            >
              {{ formatMonth(segment.date) }}
            </slot>
          </span>
        </div>

        <div
          v-if="labels.showWeekdays"
          class="heatmap-calendar__weekday-labels"
          aria-hidden="true"
        >
          <span
            v-for="cell in displayWeeks[0]?.cells ?? []"
            :key="cell.date.getDay()"
            class="heatmap-calendar__weekday-label"
          >
            <slot
              v-if="shouldShowWeekday(cell.date)"
              name="weekday-label"
              :label="formatWeekday(cell.date)"
              :date="cell.date"
            >
              {{ formatWeekday(cell.date) }}
            </slot>
          </span>
        </div>

        <div
          class="heatmap-calendar__grid"
          role="grid"
          :aria-label="props.ariaLabel"
          :aria-rowcount="
            props.orientation === 'horizontal' ? 7 : displayWeeks.length
          "
          :aria-colcount="
            props.orientation === 'horizontal' ? displayWeeks.length : 7
          "
        >
          <template v-for="week in displayWeeks" :key="week.key">
            <div
              v-for="cell in week.cells"
              :key="cell.dateKey"
              :class="[
                'heatmap-calendar__grid-cell',
                {
                  'heatmap-calendar__grid-cell--outside': !cell.isInRange,
                  'heatmap-calendar__grid-cell--disabled': cell.isDisabled,
                },
              ]"
              role="gridcell"
              :aria-hidden="!cell.isInRange || undefined"
              @mouseenter="handleCellEnter(cell, $event)"
              @mouseleave="handleCellLeave(cell, $event)"
              @focusin="handleCellFocus(cell, $event)"
              @focusout="handleCellBlur(cell, $event)"
            >
              <button
                v-if="isCellClickable(cell)"
                class="heatmap-calendar__cell heatmap-calendar__cell--clickable"
                type="button"
                :style="getCellStyle(cell)"
                :disabled="cell.isDisabled || props.loading"
                :aria-label="getCellLabel(cell)"
                :aria-describedby="
                  isOverlayOpen && activeCell?.dateKey === cell.dateKey
                    ? overlayId
                    : undefined
                "
                @click="handleCellClick(cell, $event)"
              >
                <slot name="cell" :cell="cell"></slot>
              </button>
              <span
                v-else
                class="heatmap-calendar__cell"
                :style="getCellStyle(cell)"
                :aria-label="cell.isInRange ? getCellLabel(cell) : undefined"
                :aria-describedby="
                  isOverlayOpen && activeCell?.dateKey === cell.dateKey
                    ? overlayId
                    : undefined
                "
              >
                <slot name="cell" :cell="cell"></slot>
              </span>
            </div>
          </template>
        </div>
      </div>
    </ScrollArea>

    <div
      v-if="legend?.position === 'bottom'"
      class="heatmap-calendar__legend"
      aria-label="Шкала интенсивности"
    >
      <slot name="legend" :levels="legendLevels" :palette="palette">
        <span>{{ legend.lowLabel }}</span>
        <span
          v-for="level in legendLevels"
          :key="level"
          class="heatmap-calendar__legend-cell"
          :style="{ '--heatmap-calendar-cell-color': palette[level] }"
          aria-hidden="true"
        ></span>
        <span>{{ legend.highLabel }}</span>
      </slot>
    </div>
  </section>

  <Teleport to="body">
    <Transition name="heatmap-calendar-overlay">
      <div
        v-if="isOverlayOpen && activeCell && overlay"
        :id="overlayId"
        ref="overlayRef"
        :class="[
          'heatmap-calendar-overlay',
          `heatmap-calendar-overlay--${overlay.type}`,
        ]"
        :style="floatingStyles"
        :role="overlay.type === 'tooltip' ? 'tooltip' : 'dialog'"
        :aria-label="
          overlay.type === 'hover-card' ? getCellLabel(activeCell) : undefined
        "
        @mouseenter="overlay.type === 'hover-card' && clearOverlayTimeout()"
        @mouseleave="overlay.type === 'hover-card' && closeOverlay()"
        @focusin="overlay.type === 'hover-card' && clearOverlayTimeout()"
        @focusout="overlay.type === 'hover-card' && closeOverlay()"
      >
        <slot name="overlay" :cell="activeCell">
          <div class="heatmap-calendar-overlay__value">
            {{ formatValue(activeCell) }}
          </div>
          <div class="heatmap-calendar-overlay__date">
            {{ formatDate(activeCell.date) }}
          </div>
        </slot>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.heatmap-calendar {
  --heatmap-calendar-level-0: hsl(var(--muted));
  --heatmap-calendar-level-1: color-mix(
    in srgb,
    hsl(var(--foreground)) 24%,
    hsl(var(--muted))
  );
  --heatmap-calendar-level-2: color-mix(
    in srgb,
    hsl(var(--foreground)) 40%,
    hsl(var(--muted))
  );
  --heatmap-calendar-level-3: color-mix(
    in srgb,
    hsl(var(--foreground)) 60%,
    hsl(var(--muted))
  );
  --heatmap-calendar-level-4: color-mix(
    in srgb,
    hsl(var(--foreground)) 82%,
    hsl(var(--muted))
  );
  width: 100%;
  min-width: 0;
  color: hsl(var(--foreground));
  font-family: var(--font-family);
}

.heatmap-calendar__plot {
  display: grid;
  width: max-content;
  padding: 2px;
}

.heatmap-calendar--horizontal .heatmap-calendar__plot {
  grid-template-areas:
    "corner months"
    "weekdays cells";
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  column-gap: var(--gap-2);
  row-gap: var(--gap-1);
}

.heatmap-calendar--vertical .heatmap-calendar__plot {
  grid-template-areas:
    "corner weekdays"
    "months cells";
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  column-gap: var(--gap-2);
  row-gap: var(--gap-1);
}

.heatmap-calendar__month-labels,
.heatmap-calendar__weekday-labels {
  color: hsl(var(--muted-foreground));
  font-size: 12px;
  line-height: 1;
  user-select: none;
}

.heatmap-calendar__month-labels {
  grid-area: months;
  display: grid;
  overflow: hidden;
}

.heatmap-calendar--horizontal .heatmap-calendar__month-labels {
  grid-template-columns: repeat(
    var(--heatmap-calendar-week-count),
    var(--heatmap-calendar-cell-size)
  );
  column-gap: var(--heatmap-calendar-cell-gap);
}

.heatmap-calendar--vertical .heatmap-calendar__month-labels {
  grid-template-rows: repeat(
    var(--heatmap-calendar-week-count),
    var(--heatmap-calendar-cell-size)
  );
  row-gap: var(--heatmap-calendar-cell-gap);
}

.heatmap-calendar__month-label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.heatmap-calendar--vertical .heatmap-calendar__month-label {
  align-self: start;
  padding-inline-end: var(--gap-1);
}

.heatmap-calendar__weekday-labels {
  grid-area: weekdays;
  display: grid;
}

.heatmap-calendar--horizontal .heatmap-calendar__weekday-labels {
  grid-template-rows: repeat(7, var(--heatmap-calendar-cell-size));
  row-gap: var(--heatmap-calendar-cell-gap);
  justify-items: end;
}

.heatmap-calendar--vertical .heatmap-calendar__weekday-labels {
  grid-template-columns: repeat(7, var(--heatmap-calendar-cell-size));
  column-gap: var(--heatmap-calendar-cell-gap);
  justify-items: center;
}

.heatmap-calendar__weekday-label {
  display: flex;
  align-items: center;
  min-width: 1.75em;
}

.heatmap-calendar--horizontal .heatmap-calendar__weekday-label {
  justify-content: flex-end;
}

.heatmap-calendar--vertical .heatmap-calendar__weekday-label {
  justify-content: center;
}

.heatmap-calendar__grid {
  grid-area: cells;
  display: grid;
}

.heatmap-calendar--horizontal .heatmap-calendar__grid {
  grid-template-rows: repeat(7, var(--heatmap-calendar-cell-size));
  grid-auto-columns: var(--heatmap-calendar-cell-size);
  grid-auto-flow: column;
  gap: var(--heatmap-calendar-cell-gap);
}

.heatmap-calendar--vertical .heatmap-calendar__grid {
  grid-template-columns: repeat(7, var(--heatmap-calendar-cell-size));
  grid-auto-rows: var(--heatmap-calendar-cell-size);
  grid-auto-flow: row;
  gap: var(--heatmap-calendar-cell-gap);
}

.heatmap-calendar__grid-cell,
.heatmap-calendar__cell {
  width: var(--heatmap-calendar-cell-size);
  height: var(--heatmap-calendar-cell-size);
  box-sizing: border-box;
}

.heatmap-calendar__grid-cell--outside {
  visibility: hidden;
}

.heatmap-calendar__cell {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  border: 0;
  border-radius: var(--heatmap-calendar-cell-radius);
  color: inherit;
  background: var(--heatmap-calendar-cell-color);
  font: inherit;
  transition:
    filter var(--motion-duration-fast) ease,
    transform var(--motion-duration-fast) var(--motion-ease-out);
}

.heatmap-calendar__cell--clickable {
  cursor: pointer;
}

.heatmap-calendar__cell--clickable:hover:not(:disabled) {
  filter: brightness(1.12);
  transform: scale(1.08);
}

.heatmap-calendar__cell--clickable:focus-visible {
  position: relative;
  z-index: 1;
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.heatmap-calendar__grid-cell--disabled .heatmap-calendar__cell,
.heatmap-calendar__cell:disabled {
  cursor: not-allowed;
  opacity: 0.48;
}

.heatmap-calendar__legend {
  display: flex;
  align-items: center;
  width: max-content;
  margin-block: var(--gap-2);
  gap: var(--gap-1);
  color: hsl(var(--muted-foreground));
  font-size: 12px;
  line-height: 1;
}

.heatmap-calendar__legend-cell {
  width: var(--heatmap-calendar-cell-size);
  height: var(--heatmap-calendar-cell-size);
  border-radius: var(--heatmap-calendar-cell-radius);
  background: var(--heatmap-calendar-cell-color);
}

.heatmap-calendar--loading .heatmap-calendar__cell {
  background: hsl(var(--skeleton));
  animation: heatmap-calendar-pulse 1.6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes heatmap-calendar-pulse {
  50% {
    opacity: 0.55;
  }
}

@media (prefers-reduced-motion: reduce) {
  .heatmap-calendar__cell,
  .heatmap-calendar--loading .heatmap-calendar__cell {
    animation: none;
    transition: none;
  }
}
</style>

<style>
.heatmap-calendar-overlay {
  z-index: 50;
  box-sizing: border-box;
  width: max-content;
  max-width: min(320px, calc(100vw - 16px));
  border: 1px solid hsl(var(--border));
  border-radius: 10px;
  color: hsl(var(--popover-foreground));
  background: hsl(var(--popover) / 0.92);
  box-shadow: 0 10px 30px hsl(var(--background) / 0.18);
  font-family: var(--font-family);
  font-size: 13px;
  line-height: 1.35;
  backdrop-filter: blur(20px);
}

.heatmap-calendar-overlay--tooltip {
  padding: 6px 10px;
  pointer-events: none;
}

.heatmap-calendar-overlay--hover-card {
  padding: var(--gap-3);
}

.heatmap-calendar-overlay__value {
  color: hsl(var(--popover-foreground));
  font-weight: 600;
}

.heatmap-calendar-overlay__date {
  margin-top: 2px;
  color: hsl(var(--muted-foreground));
}

.heatmap-calendar-overlay-enter-active,
.heatmap-calendar-overlay-leave-active {
  transition: opacity var(--motion-duration-fast) ease;
}

.heatmap-calendar-overlay-enter-from,
.heatmap-calendar-overlay-leave-to {
  opacity: 0;
}
</style>
