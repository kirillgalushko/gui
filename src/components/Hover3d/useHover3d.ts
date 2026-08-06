import {
  computed,
  onBeforeUnmount,
  reactive,
  ref,
  toValue,
  watch,
  type MaybeRefOrGetter,
} from "vue";

export interface Hover3dBounds {
  height: number;
  left: number;
  top: number;
  width: number;
}

export interface Hover3dTransform {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export interface UseHover3dOptions {
  disabled?: MaybeRefOrGetter<boolean>;
  maxTilt?: MaybeRefOrGetter<number>;
  scale?: MaybeRefOrGetter<number>;
}

export interface Hover3dTransformOptions {
  maxTilt?: number;
  scale?: number;
}

const HOVER_3D_REFERENCE_SIZE = 320;
const HOVER_3D_MIN_SIZE_FACTOR = 0.35;
const HOVER_3D_MAX_SIZE_FACTOR = 1.5;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const getHover3dTransform = (
  clientX: number,
  clientY: number,
  bounds: Hover3dBounds,
  options: Hover3dTransformOptions = {},
): Hover3dTransform => {
  const diagonal = Math.hypot(bounds.width, bounds.height);
  const sizeFactor = clamp(
    HOVER_3D_REFERENCE_SIZE / Math.max(diagonal, 1),
    HOVER_3D_MIN_SIZE_FACTOR,
    HOVER_3D_MAX_SIZE_FACTOR,
  );
  const maxTilt = (options.maxTilt ?? 7) * sizeFactor;
  const scale = 1 + ((options.scale ?? 1.025) - 1) * sizeFactor;
  const relativeX = clamp(
    (clientX - bounds.left) / Math.max(bounds.width, 1),
    0,
    1,
  );
  const relativeY = clamp(
    (clientY - bounds.top) / Math.max(bounds.height, 1),
    0,
    1,
  );

  return {
    rotateX: (relativeY - 0.5) * maxTilt * 2,
    rotateY: (0.5 - relativeX) * maxTilt * 2,
    scale,
  };
};

export const useHover3d = (options: UseHover3dOptions = {}) => {
  const isActive = ref(false);
  const transform = reactive<Hover3dTransform>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  let animationFrame: number | undefined;

  const cancelFrame = () => {
    if (animationFrame === undefined) return;

    window.cancelAnimationFrame(animationFrame);
    animationFrame = undefined;
  };

  const reset = () => {
    cancelFrame();
    isActive.value = false;
    transform.rotateX = 0;
    transform.rotateY = 0;
    transform.scale = 1;
  };

  const onPointerMove = (event: PointerEvent) => {
    if (
      toValue(options.disabled) === true ||
      event.pointerType !== "mouse" ||
      !(event.currentTarget instanceof HTMLElement)
    ) {
      return;
    }

    const nextTransform = getHover3dTransform(
      event.clientX,
      event.clientY,
      event.currentTarget.getBoundingClientRect(),
      {
        maxTilt: toValue(options.maxTilt) ?? 7,
        scale: toValue(options.scale) ?? 1.025,
      },
    );

    isActive.value = true;
    cancelFrame();
    animationFrame = window.requestAnimationFrame(() => {
      Object.assign(transform, nextTransform);
      animationFrame = undefined;
    });
  };

  const style = computed(() => ({
    "--hover-3d-rotate-x": `${transform.rotateX}deg`,
    "--hover-3d-rotate-y": `${transform.rotateY}deg`,
    "--hover-3d-scale": String(transform.scale),
  }));

  watch(
    () => toValue(options.disabled),
    (disabled) => disabled && reset(),
  );
  onBeforeUnmount(cancelFrame);

  return {
    isActive,
    onPointerMove,
    reset,
    style,
  };
};
