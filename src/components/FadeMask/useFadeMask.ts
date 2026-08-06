import {
  computed,
  type CSSProperties,
  type MaybeRefOrGetter,
  toValue,
} from "vue";

export type FadeMaskDirection = "top" | "right" | "bottom" | "left";
export type FadeMaskEasing = "linear" | "smooth";

export interface FadeMaskOptions {
  aspectRatio?: MaybeRefOrGetter<string | undefined>;
  direction?: MaybeRefOrGetter<FadeMaskDirection>;
  disabled?: MaybeRefOrGetter<boolean>;
  easing?: MaybeRefOrGetter<FadeMaskEasing>;
  end?: MaybeRefOrGetter<number>;
  start?: MaybeRefOrGetter<number>;
}

interface FadeMaskGradientOptions {
  direction: FadeMaskDirection;
  easing: FadeMaskEasing;
  end: number;
  start: number;
}

const FADE_MASK_SMOOTH_STEPS = 8;

const directions: Record<FadeMaskDirection, string> = {
  top: "to top",
  right: "to right",
  bottom: "to bottom",
  left: "to left",
};

const clampPercentage = (value: number) => Math.min(100, Math.max(0, value));

const formatNumber = (value: number) => Number(value.toFixed(3));

export const getFadeMaskGradient = ({
  direction,
  easing,
  end,
  start,
}: FadeMaskGradientOptions) => {
  const normalizedStart = clampPercentage(Math.min(start, end));
  const normalizedEnd = clampPercentage(Math.max(start, end));
  const range = normalizedEnd - normalizedStart;

  if (easing === "linear" || range === 0) {
    return `linear-gradient(${directions[direction]}, black ${normalizedStart}%, transparent ${normalizedEnd}%)`;
  }

  const stops = Array.from(
    { length: FADE_MASK_SMOOTH_STEPS + 1 },
    (_, index) => {
      const progress = index / FADE_MASK_SMOOTH_STEPS;
      const smoothProgress = progress * progress * (3 - 2 * progress);
      const opacity = formatNumber(1 - smoothProgress);
      const position = formatNumber(normalizedStart + range * progress);

      return `rgb(0 0 0 / ${opacity}) ${position}%`;
    },
  );

  return `linear-gradient(${directions[direction]}, black 0%, ${stops.join(", ")}, transparent 100%)`;
};

export const useFadeMask = (options: FadeMaskOptions = {}) => {
  const style = computed<CSSProperties>(() => {
    const aspectRatio =
      options.aspectRatio === undefined
        ? undefined
        : toValue(options.aspectRatio);

    if (options.disabled && toValue(options.disabled)) {
      return { aspectRatio };
    }

    const maskImage = getFadeMaskGradient({
      direction:
        options.direction === undefined ? "bottom" : toValue(options.direction),
      easing: options.easing === undefined ? "smooth" : toValue(options.easing),
      end: options.end === undefined ? 90 : toValue(options.end),
      start: options.start === undefined ? 40 : toValue(options.start),
    });

    return {
      aspectRatio,
      maskImage,
      WebkitMaskImage: maskImage,
    };
  });

  return { style };
};
