import { computed, ref, type MaybeRefOrGetter, toValue } from "vue";

export const useImageViewerTransform = (
  minScale: MaybeRefOrGetter<number>,
  maxScale: MaybeRefOrGetter<number>,
) => {
  const scale = ref(1);
  const rotation = ref(0);
  const x = ref(0);
  const y = ref(0);
  const isTransformed = computed(
    () => scale.value !== toValue(minScale) || rotation.value !== 0,
  );
  const style = computed(() => ({
    transform: `translate3d(${x.value}px, ${y.value}px, 0) scale(${scale.value}) rotate(${rotation.value}deg)`,
  }));

  const setScale = (value: number) => {
    scale.value = Math.min(
      Math.max(value, toValue(minScale)),
      toValue(maxScale),
    );
    if (scale.value === toValue(minScale)) {
      x.value = 0;
      y.value = 0;
    }
  };
  const zoomIn = () => setScale(scale.value + 0.5);
  const zoomOut = () => setScale(scale.value - 0.5);
  const rotate = () => {
    rotation.value = (rotation.value + 90) % 360;
  };
  const panBy = (deltaX: number, deltaY: number) => {
    if (scale.value > toValue(minScale)) {
      x.value += deltaX;
      y.value += deltaY;
    }
  };
  const reset = () => {
    scale.value = toValue(minScale);
    rotation.value = 0;
    x.value = 0;
    y.value = 0;
  };

  return {
    isTransformed,
    panBy,
    reset,
    rotate,
    rotation,
    scale,
    setScale,
    style,
    x,
    y,
    zoomIn,
    zoomOut,
  };
};
