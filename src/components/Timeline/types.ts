import type { ComputedRef, InjectionKey } from "vue";
import type { Color } from "../../types/colors";

export type TimelineOrientation = "vertical" | "horizontal";
export type TimelineDirection = "forward" | "reverse";
export type TimelineDatePosition = "top" | "side";
export type TimelineStep = string | number;
export type TimelineItemState = "default" | "completed" | "current" | "pending";
export type TimelineIndicatorVariant = "solid" | "outline" | "soft" | "ghost";
export type TimelineIndicatorSize = "small" | "medium" | "large" | string;
export type TimelineTone =
  | "auto"
  | "default"
  | "muted"
  | "accent"
  | "positive"
  | "negative"
  | "danger"
  | "warning";
export type TimelineColor = Color;

export interface TimelineContext {
  orientation: ComputedRef<TimelineOrientation>;
  direction: ComputedRef<TimelineDirection>;
  datePosition: ComputedRef<TimelineDatePosition>;
  activeStep: ComputedRef<TimelineStep | undefined>;
}

export interface TimelineItemContext {
  state: ComputedRef<TimelineItemState>;
}

export const timelineContextKey: InjectionKey<TimelineContext> =
  Symbol("timeline");
export const timelineItemContextKey: InjectionKey<TimelineItemContext> =
  Symbol("timeline-item");
