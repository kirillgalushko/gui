import type { Ref } from "vue";

type Point = { x: number; y: number };

export const useImageViewerGestures = (options: {
  scale: Ref<number>;
  minScale: () => number;
  maxScale: () => number;
  swipeThreshold: () => number;
  onNext: () => void;
  onPrevious: () => void;
  panBy: (x: number, y: number) => void;
  setScale: (scale: number) => void;
}) => {
  const pointers = new Map<number, Point>();
  let start: Point | null = null;
  let previous: Point | null = null;
  let pinchDistance = 0;
  let pinchScale = 1;

  const distance = ([a, b]: Point[]) =>
    a && b ? Math.hypot(a.x - b.x, a.y - b.y) : 0;

  const pointerDown = (event: PointerEvent) => {
    const point = { x: event.clientX, y: event.clientY };
    pointers.set(event.pointerId, point);
    start ??= point;
    previous = point;
    if (pointers.size === 2) {
      pinchDistance = distance([...pointers.values()]);
      pinchScale = options.scale.value;
    }
  };

  const pointerMove = (event: PointerEvent) => {
    if (!pointers.has(event.pointerId)) return;
    const point = { x: event.clientX, y: event.clientY };
    pointers.set(event.pointerId, point);
    if (pointers.size === 2) {
      const nextDistance = distance([...pointers.values()]);
      if (pinchDistance > 0) {
        options.setScale(
          Math.min(
            options.maxScale(),
            Math.max(
              options.minScale(),
              pinchScale * (nextDistance / pinchDistance),
            ),
          ),
        );
      }
    } else if (previous && options.scale.value > options.minScale()) {
      options.panBy(point.x - previous.x, point.y - previous.y);
    }
    previous = point;
  };

  const pointerUp = (event: PointerEvent) => {
    const end = pointers.get(event.pointerId);
    pointers.delete(event.pointerId);
    if (
      end &&
      start &&
      options.scale.value === options.minScale() &&
      Math.abs(end.x - start.x) >= options.swipeThreshold()
    ) {
      if (end.x < start.x) {
        options.onNext();
      } else {
        options.onPrevious();
      }
    }
    if (pointers.size === 0) {
      start = null;
      previous = null;
      pinchDistance = 0;
    }
  };

  return { pointerDown, pointerMove, pointerUp };
};
