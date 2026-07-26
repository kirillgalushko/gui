import { computed, watch, type MaybeRefOrGetter } from "vue";
import { toValue } from "vue";
import type { ImageViewerItem } from "./types";

export const normalizeImageViewerIndex = (index: number, count: number) =>
  count === 0 ? 0 : Math.min(Math.max(0, index), count - 1);

export const useImageViewerNavigation = (
  images: MaybeRefOrGetter<ImageViewerItem[]>,
  activeIndex: MaybeRefOrGetter<number>,
  loop: MaybeRefOrGetter<boolean>,
  onChange: (index: number) => void,
) => {
  const count = computed(() => toValue(images).length);
  const index = computed(() =>
    normalizeImageViewerIndex(toValue(activeIndex), count.value),
  );
  const current = computed(() => toValue(images)[index.value]);
  const canPrevious = computed(
    () => count.value > 1 && (toValue(loop) || index.value > 0),
  );
  const canNext = computed(
    () => count.value > 1 && (toValue(loop) || index.value < count.value - 1),
  );

  const goTo = (nextIndex: number) => {
    if (count.value === 0) return;
    if (toValue(loop)) {
      onChange((nextIndex + count.value) % count.value);
      return;
    }
    onChange(normalizeImageViewerIndex(nextIndex, count.value));
  };

  const previous = () => {
    if (canPrevious.value) goTo(index.value - 1);
  };
  const next = () => {
    if (canNext.value) goTo(index.value + 1);
  };

  watch(count, () => {
    if (toValue(activeIndex) !== index.value) onChange(index.value);
  });

  return { canNext, canPrevious, count, current, goTo, index, next, previous };
};
