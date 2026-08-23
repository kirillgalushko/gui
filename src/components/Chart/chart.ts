import {
  Chart as ChartJS,
  type BarElement,
  type Chart,
  type ChartData,
  type ChartOptions,
  type ChartType,
  type Color,
  type DefaultDataPoint,
  type Plugin,
  type ScriptableContext,
  registerables,
} from "chart.js";

ChartJS.register(...registerables);

export const chartPaletteTokens = [
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "chart-6",
] as const;

export type ChartPaletteToken = (typeof chartPaletteTokens)[number];

const fallbackColors: Record<string, string> = {
  background: "rgb(24, 24, 27)",
  border: "rgb(63, 63, 70)",
  "card-foreground": "rgb(250, 250, 250)",
  "chart-1": "rgb(0, 112, 247)",
  "chart-2": "rgb(34, 197, 94)",
  "chart-3": "rgb(250, 204, 21)",
  "chart-4": "rgb(139, 92, 246)",
  "chart-5": "rgb(6, 182, 212)",
  "chart-6": "rgb(239, 68, 68)",
  foreground: "rgb(250, 250, 250)",
  "muted-foreground": "rgb(161, 161, 170)",
  popover: "rgb(24, 24, 27)",
};

const hslTokenFallbacks: Record<string, string> = {
  background: "240 5% 6%",
  border: "240 5% 15.9%",
  "card-foreground": "0 0% 98%",
  foreground: "0 0% 98%",
  "muted-foreground": "240 5% 64.9%",
  popover: "240 5% 7%",
};

const colorProbes = new WeakMap<Element, HTMLElement>();

const getColorProbe = (element: Element): HTMLElement | undefined => {
  const existingProbe = colorProbes.get(element);

  if (existingProbe?.isConnected) {
    return existingProbe;
  }

  const parent = element.parentElement;
  const document = element.ownerDocument;

  if (!parent || !document.defaultView) {
    return undefined;
  }

  const probe = document.createElement("span");
  probe.setAttribute("aria-hidden", "true");
  probe.style.position = "absolute";
  probe.style.width = "0";
  probe.style.height = "0";
  probe.style.overflow = "hidden";
  probe.style.pointerEvents = "none";
  probe.style.visibility = "hidden";
  parent.append(probe);
  colorProbes.set(element, probe);

  return probe;
};

const withAlpha = (color: string, alpha: number): string => {
  if (alpha >= 1) {
    return color;
  }

  const channels = color.match(/[\d.]+/g)?.slice(0, 3);

  if (!channels || channels.length < 3) {
    return color;
  }

  return `rgba(${channels.join(", ")}, ${alpha})`;
};

export const resolveChartTokenColor = (
  element: Element,
  token: string,
  alpha = 1,
): string => {
  const fallback = fallbackColors[token] ?? fallbackColors.foreground;
  const probe = getColorProbe(element);

  if (!probe) {
    return withAlpha(fallback, alpha);
  }

  probe.style.color = hslTokenFallbacks[token]
    ? `hsl(var(--${token}, ${hslTokenFallbacks[token]}))`
    : `var(--${token}, ${fallback})`;
  const color =
    element.ownerDocument.defaultView?.getComputedStyle(probe).color ??
    fallback;

  return withAlpha(color || fallback, alpha);
};

const removeColorProbe = (element: Element): void => {
  colorProbes.get(element)?.remove();
  colorProbes.delete(element);
};

const paletteColor =
  (datasetIndex: number, alpha = 1, useDataIndex = false) =>
  (context: ScriptableContext<ChartType>): string => {
    const colorIndex = useDataIndex ? context.dataIndex : datasetIndex;
    const token =
      chartPaletteTokens[colorIndex % chartPaletteTokens.length] ??
      chartPaletteTokens[0];

    return resolveChartTokenColor(context.chart.canvas, token, alpha);
  };

const tokenColor =
  (token: string, alpha = 1) =>
  (context: { chart: Chart }): string =>
    resolveChartTokenColor(context.chart.canvas, token, alpha);

const setDatasetDefault = (
  dataset: Record<string, unknown>,
  property: string,
  value: unknown,
): void => {
  if (dataset[property] === undefined) {
    dataset[property] = value;
  }
};

export const withChartPalette = <
  TType extends ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown,
>(
  type: TType,
  data: ChartData<TType, TData, TLabel>,
): ChartData<TType, TData, TLabel> => ({
  ...data,
  datasets: data.datasets.map((sourceDataset, datasetIndex) => {
    const dataset = { ...sourceDataset } as typeof sourceDataset &
      Record<string, unknown>;

    if (type === "pie" || type === "doughnut" || type === "polarArea") {
      setDatasetDefault(
        dataset,
        "backgroundColor",
        paletteColor(datasetIndex, 0.88, true),
      );
      setDatasetDefault(
        dataset,
        "hoverBackgroundColor",
        paletteColor(datasetIndex, 1, true),
      );
      setDatasetDefault(dataset, "borderColor", tokenColor("background"));
      setDatasetDefault(dataset, "borderWidth", 2);

      return dataset;
    }

    setDatasetDefault(dataset, "borderColor", paletteColor(datasetIndex));
    setDatasetDefault(
      dataset,
      "backgroundColor",
      paletteColor(datasetIndex, type === "bar" ? 0.82 : 0.18),
    );

    if (type === "line" || type === "radar") {
      setDatasetDefault(
        dataset,
        "pointBackgroundColor",
        paletteColor(datasetIndex),
      );
      setDatasetDefault(dataset, "pointBorderColor", tokenColor("background"));
    }

    return dataset;
  }),
});

type BarBackgroundColor =
  ChartData<"bar">["datasets"][number]["backgroundColor"];

const resolveBarBackgroundColor = (
  backgroundColor: BarBackgroundColor,
  context: ScriptableContext<"bar">,
): Color | undefined => {
  const color =
    typeof backgroundColor === "function"
      ? backgroundColor(context, {})
      : backgroundColor;

  return (
    Array.isArray(color) ? (color[context.dataIndex] ?? color[0]) : color
  ) as Color | undefined;
};

const barGradientStartOpacity = 0.9;
const barGradientEndOpacity = 0.1;

const withColorOpacity = (color: string, opacity: number): string => {
  const channels = color.match(/[\d.]+/g)?.slice(0, 3);

  return channels?.length === 3
    ? `rgba(${channels.join(", ")}, ${opacity})`
    : color;
};

export const withBarGradient = (data: ChartData<"bar">): ChartData<"bar"> => ({
  ...data,
  datasets: data.datasets.map((sourceDataset) => {
    const backgroundColor = sourceDataset.backgroundColor;

    return {
      ...sourceDataset,
      backgroundColor: (context) => {
        const color = resolveBarBackgroundColor(backgroundColor, context);
        const { chartArea, ctx } = context.chart;

        if (typeof color !== "string" || !chartArea) {
          return color;
        }

        const bar = context.chart.getDatasetMeta(context.datasetIndex).data[
          context.dataIndex
        ] as BarElement | undefined;
        const { base, horizontal } =
          bar?.getProps(["base", "horizontal"], true) ?? {};
        const gradient = horizontal
          ? ctx.createLinearGradient(
              bar?.x ?? chartArea.right,
              0,
              base ?? chartArea.left,
              0,
            )
          : ctx.createLinearGradient(
              0,
              bar?.y ?? chartArea.top,
              0,
              base ?? chartArea.bottom,
            );

        gradient.addColorStop(
          0,
          withColorOpacity(color, barGradientStartOpacity),
        );
        gradient.addColorStop(
          1,
          withColorOpacity(color, barGradientEndOpacity),
        );

        return gradient;
      },
    };
  }),
});

export const withBarBorderRadius = (
  data: ChartData<"bar">,
  borderRadius: number,
): ChartData<"bar"> => ({
  ...data,
  datasets: data.datasets.map((dataset) => ({ ...dataset, borderRadius })),
});

type RuntimeRecord = Record<string, unknown>;

interface RuntimeChartOptions extends RuntimeRecord {
  animation?: RuntimeRecord | false;
  elements?: RuntimeRecord;
  font?: RuntimeRecord;
  interaction?: RuntimeRecord;
  layout?: RuntimeRecord;
  plugins?: RuntimeRecord;
  scales?: RuntimeRecord;
}

const asRecord = (value: unknown): RuntimeRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as RuntimeRecord)
    : {};

const mergeScale = (defaults: unknown, overrides: unknown): RuntimeRecord => {
  const defaultScale = asRecord(defaults);
  const overrideScale = asRecord(overrides);

  return {
    ...defaultScale,
    ...overrideScale,
    border: {
      ...asRecord(defaultScale.border),
      ...asRecord(overrideScale.border),
    },
    grid: {
      ...asRecord(defaultScale.grid),
      ...asRecord(overrideScale.grid),
    },
    pointLabels: {
      ...asRecord(defaultScale.pointLabels),
      ...asRecord(overrideScale.pointLabels),
    },
    ticks: {
      ...asRecord(defaultScale.ticks),
      ...asRecord(overrideScale.ticks),
    },
  };
};

const mergeScales = (
  defaults: RuntimeRecord,
  overrides: RuntimeRecord,
): RuntimeRecord => {
  const keys = new Set([...Object.keys(defaults), ...Object.keys(overrides)]);

  return Object.fromEntries(
    Array.from(keys, (key) => [key, mergeScale(defaults[key], overrides[key])]),
  );
};

const cartesianScales: RuntimeRecord = {
  x: {
    border: { display: false },
    grid: { display: false },
    ticks: {
      color: tokenColor("muted-foreground"),
      maxRotation: 0,
      padding: 8,
    },
  },
  y: {
    beginAtZero: true,
    border: { display: false },
    grid: { color: tokenColor("border", 0.55) },
    ticks: {
      color: tokenColor("muted-foreground"),
      padding: 8,
    },
  },
};

const radialScales: RuntimeRecord = {
  r: {
    angleLines: { color: tokenColor("border", 0.55) },
    beginAtZero: true,
    grid: { color: tokenColor("border", 0.55) },
    pointLabels: { color: tokenColor("muted-foreground") },
    ticks: {
      backdropColor: "transparent",
      color: tokenColor("muted-foreground"),
    },
  },
};

export const createChartOptions = <TType extends ChartType>(
  type: TType,
  options?: ChartOptions<TType>,
): ChartOptions<TType> => {
  const source = (options ?? {}) as RuntimeChartOptions;
  const sourcePlugins = asRecord(source.plugins);
  const sourceLegend = asRecord(sourcePlugins.legend);
  const sourceTooltip = asRecord(sourcePlugins.tooltip);
  const sourceElements = asRecord(source.elements);
  const circular = type === "pie" || type === "doughnut";
  const scales =
    type === "line" || type === "bar"
      ? mergeScales(cartesianScales, asRecord(source.scales))
      : type === "radar" || type === "polarArea"
        ? mergeScales(radialScales, asRecord(source.scales))
        : source.scales;

  const result: RuntimeChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    ...source,
    animation:
      source.animation === false
        ? false
        : {
            duration: 220,
            easing: "easeOutQuart",
            ...asRecord(source.animation),
          },
    interaction: {
      intersect: false,
      mode: circular ? "nearest" : "index",
      ...asRecord(source.interaction),
    },
    layout: {
      padding: 0,
      ...asRecord(source.layout),
    },
    plugins: {
      ...sourcePlugins,
      legend: {
        display: true,
        position: "bottom",
        ...sourceLegend,
        labels: {
          boxHeight: 8,
          boxWidth: 8,
          padding: 16,
          pointStyle: "rectRounded",
          usePointStyle: true,
          ...asRecord(sourceLegend.labels),
        },
      },
      tooltip: {
        backgroundColor: tokenColor("popover"),
        bodyColor: tokenColor("card-foreground"),
        borderColor: tokenColor("border"),
        borderWidth: 1,
        boxPadding: 4,
        cornerRadius: 8,
        padding: 12,
        titleColor: tokenColor("muted-foreground"),
        ...sourceTooltip,
      },
    },
    scales,
  };

  if (type === "line") {
    result.elements = {
      ...sourceElements,
      line: {
        borderWidth: 2,
        tension: 0.35,
        ...asRecord(sourceElements.line),
      },
      point: {
        hoverRadius: 4,
        radius: 0,
        ...asRecord(sourceElements.point),
      },
    };
  }

  if (type === "bar") {
    result.elements = {
      ...sourceElements,
      bar: {
        borderRadius: 4,
        borderSkipped: false,
        ...asRecord(sourceElements.bar),
      },
    };
  }

  if (type === "doughnut" && source.cutout === undefined) {
    result.cutout = "64%";
  }

  return result as ChartOptions<TType>;
};

interface ThemeObserverState {
  frame?: number;
  observer: MutationObserver;
}

const observerStates = new WeakMap<object, ThemeObserverState>();

const readLegendLabels = (options: unknown): RuntimeRecord => {
  const plugins = asRecord(asRecord(options).plugins);
  const legend = asRecord(plugins.legend);

  return asRecord(legend.labels);
};

export const createChartThemePlugin = <TType extends ChartType>(
  getOptions: () => ChartOptions<TType> | undefined,
): Plugin<TType> => ({
  id: "gui-theme",
  beforeLayout: (chart) => {
    const sourceLabels = readLegendLabels(getOptions());
    const chartLabels = readLegendLabels(chart.options);

    if (sourceLabels.color === undefined) {
      chartLabels.color = resolveChartTokenColor(
        chart.canvas,
        "muted-foreground",
      );
    }

    const sourceFont = asRecord(asRecord(getOptions()).font);

    if (sourceFont.family === undefined) {
      const fontFamily = chart.canvas.ownerDocument.defaultView
        ?.getComputedStyle(chart.canvas)
        .getPropertyValue("--font-family")
        .trim();

      if (fontFamily && chart.options?.font) {
        chart.options.font.family = fontFamily;
      }
    }
  },
  afterInit: (chart) => {
    const document = chart.canvas.ownerDocument;

    if (!document.defaultView?.MutationObserver) {
      return;
    }

    const observer = new document.defaultView.MutationObserver(() => {
      const state = observerStates.get(chart);

      if (!state || state.frame !== undefined) {
        return;
      }

      state.frame = document.defaultView?.requestAnimationFrame(() => {
        state.frame = undefined;
        chart.update("none");
      });
    });

    let target: Element | null = chart.canvas.parentElement;

    while (target) {
      observer.observe(target, {
        attributeFilter: ["class", "style"],
        attributes: true,
      });
      target = target.parentElement;
    }

    observerStates.set(chart, { observer });
  },
  afterDestroy: (chart) => {
    const state = observerStates.get(chart);

    if (state?.frame !== undefined) {
      chart.canvas.ownerDocument.defaultView?.cancelAnimationFrame(state.frame);
    }

    state?.observer.disconnect();
    observerStates.delete(chart);
    removeColorProbe(chart.canvas);
  },
});
