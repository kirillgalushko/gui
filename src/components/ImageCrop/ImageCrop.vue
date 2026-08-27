<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch, type CSSProperties } from "vue";
import { useResize } from "../../hooks/useResize";
import Loader from "../Loader/Loader.vue";
import {
  calculateImageCropLayout,
  calculateImageCropRect,
  calculateImageCropVisibleImageRect,
  clampImageCropValue,
  constrainImageCropRect,
  constrainImageCropRectToBounds,
  imageCropAreaToRect,
  imageCropRectToArea,
  moveImageCropRect,
  normalizeImageCropTransform,
  resizeImageCropRectWithinBounds,
  type ImageCropRect,
} from "./imageCropGeometry";
import {
  DEFAULT_IMAGE_CROP_TRANSFORM,
  type ImageCropArea,
  type ImageCropImageFit,
  type ImageCropMimeType,
  type ImageCropReadyEvent,
  type ImageCropResizeHandle,
  type ImageCropResult,
  type ImageCropResultOptions,
  type ImageCropShape,
  type ImageCropSource,
  type ImageCropTransform,
} from "./types";

export interface ImageCropProps {
  source: ImageCropSource;
  modelValue?: ImageCropTransform;
  crop?: ImageCropArea;
  alt?: string;
  aspectRatio?: number;
  imageFit?: ImageCropImageFit;
  lockAspectRatio?: boolean;
  shape?: ImageCropShape;
  cropArea?: number;
  minCropSize?: number;
  resizable?: boolean;
  height?: string;
  outputWidth?: number;
  outputMimeType?: ImageCropMimeType;
  outputQuality?: number;
  outputFileName?: string;
  crossOrigin?: "anonymous" | "use-credentials";
  disabled?: boolean;
  showGrid?: boolean;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<ImageCropProps>(), {
  alt: "",
  aspectRatio: 1,
  imageFit: "contain",
  lockAspectRatio: true,
  shape: "rectangle",
  cropArea: 0.82,
  minCropSize: 80,
  resizable: true,
  height: "clamp(280px, 58dvh, 560px)",
  outputWidth: 1024,
  outputMimeType: "image/jpeg",
  outputQuality: 0.9,
  crossOrigin: undefined,
  disabled: false,
  showGrid: true,
  ariaLabel: "Область кадрирования изображения",
});

const emit = defineEmits<{
  "update:modelValue": [transform: ImageCropTransform];
  "update:crop": [crop: ImageCropArea];
  "resize-start": [crop: ImageCropArea, handle: ImageCropResizeHandle];
  resize: [crop: ImageCropArea, handle: ImageCropResizeHandle];
  "resize-end": [crop: ImageCropArea, handle: ImageCropResizeHandle];
  ready: [event: ImageCropReadyEvent];
  error: [error: Error];
}>();

type Point = { x: number; y: number };
type ResizeSession = {
  pointerId: number;
  handle: ImageCropResizeHandle;
  startPoint: Point;
  startCrop: ImageCropRect;
  bounds: ImageCropRect;
};
type MoveSession = {
  pointerId: number;
  startPoint: Point;
  startCrop: ImageCropRect;
  bounds: ImageCropRect;
};

const resizeHandles: ReadonlyArray<{
  value: ImageCropResizeHandle;
  label: string;
}> = [
  { value: "north", label: "Изменить верхнюю границу" },
  { value: "north-east", label: "Изменить правый верхний угол" },
  { value: "east", label: "Изменить правую границу" },
  { value: "south-east", label: "Изменить правый нижний угол" },
  { value: "south", label: "Изменить нижнюю границу" },
  { value: "south-west", label: "Изменить левый нижний угол" },
  { value: "west", label: "Изменить левую границу" },
  { value: "north-west", label: "Изменить левый верхний угол" },
];

const resizeCursors: Record<ImageCropResizeHandle, CSSProperties["cursor"]> = {
  north: "ns-resize",
  east: "ew-resize",
  south: "ns-resize",
  west: "ew-resize",
  "north-east": "nesw-resize",
  "south-east": "nwse-resize",
  "south-west": "nesw-resize",
  "north-west": "nwse-resize",
};

const stage = ref<HTMLElement | null>(null);
const image = ref<HTMLImageElement | null>(null);
const viewport = ref({ width: 0, height: 0 });
const cropRect = ref<ImageCropRect>({ x: 0, y: 0, width: 0, height: 0 });
const imageSize = ref({ width: 0, height: 0 });
const isLoading = ref(true);
const loadError = ref<Error | null>(null);
const generatedObjectUrl = ref<string | null>(null);
let resizeSession: ResizeSession | null = null;
let moveSession: MoveSession | null = null;
const activeResizeHandle = ref<ImageCropResizeHandle | null>(null);
const isMovingCrop = ref(false);

const transform = ref<ImageCropTransform>(
  normalizeImageCropTransform(
    props.modelValue ?? { ...DEFAULT_IMAGE_CROP_TRANSFORM },
  ),
);

const resizeOptions = computed(() => ({
  minSize: clampImageCropValue(props.minCropSize, 24, 1_024),
  aspectRatio: props.lockAspectRatio
    ? clampImageCropValue(props.aspectRatio, 0.05, 20)
    : undefined,
}));

const resolvedSource = ref("");

const layout = computed(() =>
  calculateImageCropLayout({
    viewport: viewport.value,
    image: imageSize.value,
    aspectRatio: props.aspectRatio,
    cropArea: props.cropArea,
    crop: cropRect.value,
    imageFit: props.imageFit,
    transform: transform.value,
  }),
);

const stageStyle = computed<CSSProperties>(() => ({
  height: props.height,
  cursor:
    activeResizeHandle.value === null
      ? undefined
      : resizeCursors[activeResizeHandle.value],
}));
const imageStyle = computed<CSSProperties>(() => ({
  left: `${viewport.value.width / 2}px`,
  top: `${viewport.value.height / 2}px`,
  width: `${imageSize.value.width * layout.value.scale}px`,
  height: `${imageSize.value.height * layout.value.scale}px`,
  transform: `translate3d(-50%, -50%, 0) rotate(${transform.value.rotation}deg)`,
}));
const cropStyle = computed<CSSProperties>(() => ({
  left: `${layout.value.crop.x}px`,
  top: `${layout.value.crop.y}px`,
  width: `${layout.value.crop.width}px`,
  height: `${layout.value.crop.height}px`,
}));

useResize(stage, () => {
  if (stage.value === null) return;
  updateViewport({
    width: stage.value.clientWidth,
    height: stage.value.clientHeight,
  });
});

watch(
  () => props.modelValue,
  (value) => {
    if (value === undefined) return;
    transform.value = normalizeImageCropTransform(value);
    fitCropToImage();
  },
  { deep: true },
);

watch(
  () => props.disabled,
  (disabled) => {
    if (!disabled) return;
    resizeSession = null;
    moveSession = null;
    activeResizeHandle.value = null;
    isMovingCrop.value = false;
  },
);

watch(
  () => props.crop,
  (value) => {
    if (value === undefined || viewport.value.width <= 0) return;
    cropRect.value = constrainImageCropRect(
      imageCropAreaToRect(value, viewport.value),
      viewport.value,
      resizeOptions.value,
    );
    fitCropToImage(false);
  },
  { deep: true },
);

watch(
  [
    () => props.aspectRatio,
    () => props.imageFit,
    () => props.lockAspectRatio,
    () => props.minCropSize,
  ],
  () => {
    if (viewport.value.width <= 0) return;
    cropRect.value = constrainImageCropRect(
      cropRect.value,
      viewport.value,
      resizeOptions.value,
    );
    fitCropToImage();
  },
);

watch(
  () => props.cropArea,
  () => resetCrop(),
);

watch(
  () => props.source,
  (source) => {
    releaseObjectUrl();
    resolvedSource.value =
      typeof source === "string"
        ? source
        : (generatedObjectUrl.value = URL.createObjectURL(source));
    isLoading.value = true;
    loadError.value = null;
    imageSize.value = { width: 0, height: 0 };
    reset();
  },
  { immediate: true },
);

onBeforeUnmount(releaseObjectUrl);

function releaseObjectUrl() {
  if (generatedObjectUrl.value !== null) {
    URL.revokeObjectURL(generatedObjectUrl.value);
    generatedObjectUrl.value = null;
  }
}

function updateTransform(value: ImageCropTransform) {
  const next = normalizeImageCropTransform(value);
  transform.value = next;
  emit("update:modelValue", { ...next });
}

function updateViewport(nextViewport: { width: number; height: number }) {
  if (nextViewport.width <= 0 || nextViewport.height <= 0) return;

  const previousViewport = viewport.value;
  let nextCrop: ImageCropRect;

  if (previousViewport.width <= 0 || previousViewport.height <= 0) {
    nextCrop =
      props.crop === undefined
        ? calculateImageCropRect(
            nextViewport,
            props.aspectRatio,
            props.cropArea,
          )
        : imageCropAreaToRect(props.crop, nextViewport);
  } else {
    const responsiveArea =
      props.crop ?? imageCropRectToArea(cropRect.value, previousViewport);
    nextCrop = imageCropAreaToRect(responsiveArea, nextViewport);
  }

  viewport.value = nextViewport;
  cropRect.value = constrainImageCropRect(
    nextCrop,
    nextViewport,
    resizeOptions.value,
  );
  fitCropToImage(false);
}

function currentCropArea() {
  return imageCropRectToArea(cropRect.value, viewport.value);
}

function sameCropRect(first: ImageCropRect, second: ImageCropRect) {
  return (
    Math.abs(first.x - second.x) < 0.01 &&
    Math.abs(first.y - second.y) < 0.01 &&
    Math.abs(first.width - second.width) < 0.01 &&
    Math.abs(first.height - second.height) < 0.01
  );
}

function updateCropRect(
  value: ImageCropRect,
  options: { emitUpdate?: boolean } = {},
) {
  let next = constrainImageCropRect(value, viewport.value, resizeOptions.value);
  const imageBounds = calculateImageCropVisibleImageRect(
    layout.value,
    viewport.value,
  );
  if (imageBounds.width > 0 && imageBounds.height > 0) {
    next = constrainImageCropRectToBounds(
      next,
      imageBounds,
      resizeOptions.value,
    );
  }
  if (sameCropRect(cropRect.value, next)) return;

  cropRect.value = next;
  if (options.emitUpdate !== false) emit("update:crop", currentCropArea());
}

function fitCropToImage(emitUpdate = true) {
  if (imageSize.value.width <= 0 || imageSize.value.height <= 0) return;
  const bounds = calculateImageCropVisibleImageRect(
    layout.value,
    viewport.value,
  );
  if (bounds.width <= 0 || bounds.height <= 0) return;
  updateCropRect(
    constrainImageCropRectToBounds(cropRect.value, bounds, resizeOptions.value),
    { emitUpdate },
  );
}

function setCrop(value: ImageCropArea) {
  if (props.disabled || viewport.value.width <= 0) return;
  updateCropRect(imageCropAreaToRect(value, viewport.value));
}

function resetCrop(emitUpdate = true) {
  if (viewport.value.width <= 0 || viewport.value.height <= 0) {
    cropRect.value = { x: 0, y: 0, width: 0, height: 0 };
    return;
  }
  updateCropRect(
    calculateImageCropRect(viewport.value, props.aspectRatio, props.cropArea),
    { emitUpdate },
  );
}

function handleLoad() {
  if (image.value === null) return;
  imageSize.value = {
    width: image.value.naturalWidth,
    height: image.value.naturalHeight,
  };
  fitCropToImage();
  isLoading.value = false;
  loadError.value = null;
  emit("ready", {
    naturalWidth: image.value.naturalWidth,
    naturalHeight: image.value.naturalHeight,
  });
}

function handleError() {
  isLoading.value = false;
  const error = new Error("Не удалось открыть изображение");
  loadError.value = error;
  emit("error", error);
}

function rotateClockwise() {
  if (props.disabled) return;
  updateTransform({
    rotation: transform.value.rotation + 90,
  });
  fitCropToImage();
}

function rotateCounterclockwise() {
  if (props.disabled) return;
  updateTransform({
    rotation: transform.value.rotation - 90,
  });
  fitCropToImage();
}

function reset() {
  updateTransform({ ...DEFAULT_IMAGE_CROP_TRANSFORM });
  resetCrop();
}

function moveCropBy(
  deltaX: number,
  deltaY: number,
  sourceCrop = cropRect.value,
  bounds = calculateImageCropVisibleImageRect(layout.value, viewport.value),
) {
  if (props.disabled) return;
  updateCropRect(moveImageCropRect(sourceCrop, deltaX, deltaY, bounds));
}

function movePointerDown(event: PointerEvent) {
  if (
    props.disabled ||
    isLoading.value ||
    loadError.value !== null ||
    moveSession !== null
  ) {
    return;
  }
  event.preventDefault();
  if (event.currentTarget instanceof HTMLElement) {
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  moveSession = {
    pointerId: event.pointerId,
    startPoint: { x: event.clientX, y: event.clientY },
    startCrop: { ...cropRect.value },
    bounds: calculateImageCropVisibleImageRect(layout.value, viewport.value),
  };
  isMovingCrop.value = true;
}

function resizePointerDown(event: PointerEvent, handle: ImageCropResizeHandle) {
  if (
    props.disabled ||
    !props.resizable ||
    isLoading.value ||
    loadError.value !== null
  ) {
    return;
  }
  event.preventDefault();
  if (event.currentTarget instanceof HTMLElement) {
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  resizeSession = {
    pointerId: event.pointerId,
    handle,
    startPoint: { x: event.clientX, y: event.clientY },
    startCrop: { ...cropRect.value },
    bounds: calculateImageCropVisibleImageRect(layout.value, viewport.value),
  };
  activeResizeHandle.value = handle;
  emit("resize-start", currentCropArea(), handle);
}

function pointerMove(event: PointerEvent) {
  if (resizeSession?.pointerId === event.pointerId) {
    event.preventDefault();
    const session = resizeSession;
    updateCropRect(
      resizeImageCropRectWithinBounds(
        session.startCrop,
        session.handle,
        event.clientX - session.startPoint.x,
        event.clientY - session.startPoint.y,
        session.bounds,
        resizeOptions.value,
      ),
    );
    emit("resize", currentCropArea(), session.handle);
    return;
  }
  if (moveSession?.pointerId === event.pointerId) {
    event.preventDefault();
    const session = moveSession;
    moveCropBy(
      event.clientX - session.startPoint.x,
      event.clientY - session.startPoint.y,
      session.startCrop,
      session.bounds,
    );
  }
}

function pointerUp(event: PointerEvent) {
  if (resizeSession?.pointerId === event.pointerId) {
    const handle = resizeSession.handle;
    resizeSession = null;
    activeResizeHandle.value = null;
    emit("resize-end", currentCropArea(), handle);
    return;
  }
  if (moveSession?.pointerId === event.pointerId) {
    moveSession = null;
    isMovingCrop.value = false;
  }
}

function handleMoveKeydown(event: KeyboardEvent) {
  if (props.disabled) return;
  const step = event.shiftKey ? 16 : 4;
  const delta = {
    ArrowLeft: { x: -step, y: 0 },
    ArrowRight: { x: step, y: 0 },
    ArrowUp: { x: 0, y: -step },
    ArrowDown: { x: 0, y: step },
  }[event.key];
  if (delta === undefined) return;
  event.preventDefault();
  moveCropBy(delta.x, delta.y);
}

function handleResizeKeydown(
  event: KeyboardEvent,
  handle: ImageCropResizeHandle,
) {
  if (props.disabled || !props.resizable) return;
  const movesHorizontally = handle.includes("east") || handle.includes("west");
  const movesVertically = handle.includes("north") || handle.includes("south");
  const step = event.shiftKey ? 16 : 4;
  const delta = {
    ArrowLeft: { x: -step, y: 0, enabled: movesHorizontally },
    ArrowRight: { x: step, y: 0, enabled: movesHorizontally },
    ArrowUp: { x: 0, y: -step, enabled: movesVertically },
    ArrowDown: { x: 0, y: step, enabled: movesVertically },
  }[event.key];
  if (delta === undefined || !delta.enabled) return;
  event.preventDefault();
  emit("resize-start", currentCropArea(), handle);
  updateCropRect(
    resizeImageCropRectWithinBounds(
      cropRect.value,
      handle,
      delta.x,
      delta.y,
      calculateImageCropVisibleImageRect(layout.value, viewport.value),
      resizeOptions.value,
    ),
  );
  emit("resize", currentCropArea(), handle);
  emit("resize-end", currentCropArea(), handle);
}

function handleKeydown(event: KeyboardEvent) {
  if (props.disabled) return;
  const panStep = event.shiftKey ? 40 : 12;
  const actions: Partial<Record<string, () => void>> = {
    ArrowLeft: () => moveCropBy(-panStep, 0),
    ArrowRight: () => moveCropBy(panStep, 0),
    ArrowUp: () => moveCropBy(0, -panStep),
    ArrowDown: () => moveCropBy(0, panStep),
    r: rotateClockwise,
    R: rotateClockwise,
    "0": reset,
  };
  const action = actions[event.key];
  if (action === undefined) return;
  event.preventDefault();
  action();
}

async function getResult(
  options: ImageCropResultOptions = {},
): Promise<ImageCropResult> {
  if (
    image.value === null ||
    isLoading.value ||
    loadError.value !== null ||
    layout.value.crop.width <= 0
  ) {
    throw new Error("Изображение ещё не готово к кадрированию");
  }

  const aspectRatio = clampImageCropValue(
    layout.value.crop.width / layout.value.crop.height,
    0.05,
    20,
  );
  const maxOutputWidth = Math.max(
    1,
    Math.floor(aspectRatio < 1 ? 4096 * aspectRatio : 4096),
  );
  const outputWidth = Math.round(
    clampImageCropValue(options.width ?? props.outputWidth, 1, maxOutputWidth),
  );
  const outputHeight = Math.max(1, Math.round(outputWidth / aspectRatio));
  const mimeType = options.mimeType ?? props.outputMimeType;
  const quality = clampImageCropValue(
    options.quality ?? props.outputQuality,
    0,
    1,
  );
  const canvas = document.createElement("canvas");
  canvas.width = outputWidth;
  canvas.height = outputHeight;
  const context = canvas.getContext("2d");
  if (context === null) throw new Error("Canvas недоступен");

  const outputScale = outputWidth / layout.value.crop.width;
  if (mimeType === "image/jpeg") {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, outputWidth, outputHeight);
  }
  const cropCenterX = layout.value.crop.x + layout.value.crop.width / 2;
  const cropCenterY = layout.value.crop.y + layout.value.crop.height / 2;
  context.translate(
    outputWidth / 2 + (viewport.value.width / 2 - cropCenterX) * outputScale,
    outputHeight / 2 + (viewport.value.height / 2 - cropCenterY) * outputScale,
  );
  context.rotate((transform.value.rotation * Math.PI) / 180);
  context.scale(
    layout.value.scale * outputScale,
    layout.value.scale * outputScale,
  );
  context.drawImage(
    image.value,
    -imageSize.value.width / 2,
    -imageSize.value.height / 2,
  );

  try {
    const blob = await canvasToBlob(canvas, mimeType, quality);
    const fileName =
      options.fileName ??
      props.outputFileName ??
      `cropped-image.${extensionForMimeType(mimeType)}`;
    return {
      blob,
      file: new File([blob], fileName, { type: mimeType }),
      width: outputWidth,
      height: outputHeight,
      mimeType,
      transform: { ...transform.value },
      crop: currentCropArea(),
    };
  } catch (error: unknown) {
    const normalized =
      error instanceof Error
        ? error
        : new Error("Не удалось подготовить изображение");
    emit("error", normalized);
    throw normalized;
  }
}

function extensionForMimeType(mimeType: ImageCropMimeType) {
  if (mimeType === "image/jpeg") return "jpg";
  return mimeType.slice("image/".length);
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: ImageCropMimeType,
  quality: number,
) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) =>
        blob === null
          ? reject(new Error("Не удалось подготовить изображение"))
          : resolve(blob),
      mimeType,
      quality,
    );
  });
}

defineExpose({
  getResult,
  reset,
  resetCrop,
  rotateClockwise,
  rotateCounterclockwise,
  setCrop,
});
</script>

<template>
  <div
    ref="stage"
    class="image-crop"
    :class="{ disabled: props.disabled }"
    :style="stageStyle"
    :tabindex="props.disabled ? -1 : 0"
    role="group"
    :aria-label="props.ariaLabel"
    :aria-busy="isLoading || undefined"
    @pointermove="pointerMove"
    @pointerup="pointerUp"
    @pointercancel="pointerUp"
    @keydown="handleKeydown"
  >
    <img
      ref="image"
      class="image-crop-source"
      :src="resolvedSource"
      :alt="props.alt"
      :crossorigin="props.crossOrigin"
      :style="imageStyle"
      draggable="false"
      @load="handleLoad"
      @error="handleError"
    />

    <div
      v-if="!isLoading && loadError === null"
      class="image-crop-frame"
      :class="props.shape"
      :style="cropStyle"
    >
      <div class="image-crop-frame-clip" :class="props.shape">
        <div v-if="props.showGrid" class="image-crop-grid" />
        <slot name="overlay" />
      </div>
      <button
        type="button"
        class="image-crop-move-handle"
        :class="{ active: isMovingCrop }"
        aria-label="Переместить область кадрирования"
        aria-keyshortcuts="ArrowLeft ArrowRight ArrowUp ArrowDown"
        :disabled="props.disabled"
        @pointerdown.stop="movePointerDown"
        @keydown.stop="handleMoveKeydown"
        @click.stop.prevent
      />
      <template v-if="props.resizable">
        <button
          v-for="handle in resizeHandles"
          :key="handle.value"
          type="button"
          class="image-crop-resize-handle"
          :class="handle.value"
          :style="{ cursor: resizeCursors[handle.value] }"
          :aria-label="handle.label"
          aria-keyshortcuts="ArrowLeft ArrowRight ArrowUp ArrowDown"
          :disabled="props.disabled"
          @pointerdown.stop="resizePointerDown($event, handle.value)"
          @keydown.stop="handleResizeKeydown($event, handle.value)"
          @click.stop.prevent
        />
      </template>
    </div>

    <div v-if="isLoading" class="image-crop-state">
      <slot name="loading">
        <Loader size="24px" />
      </slot>
    </div>

    <div v-else-if="loadError !== null" class="image-crop-state" role="alert">
      <slot name="error" :error="loadError">
        {{ loadError.message }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.image-crop {
  position: relative;
  width: 100%;
  min-height: 220px;
  max-height: calc(100dvh - 180px);
  overflow: hidden;
  box-sizing: border-box;
  color: hsl(var(--primary));
  background:
    linear-gradient(45deg, hsl(var(--muted)) 25%, transparent 25%) 0 0 / 20px
      20px,
    linear-gradient(-45deg, hsl(var(--muted)) 25%, transparent 25%) 0 10px /
      20px 20px,
    linear-gradient(45deg, transparent 75%, hsl(var(--muted)) 75%) 10px -10px /
      20px 20px,
    linear-gradient(-45deg, transparent 75%, hsl(var(--muted)) 75%) -10px 0 /
      20px 20px,
    hsl(var(--background));
  border: 1px solid hsl(var(--border));
  border-radius: 14px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  touch-action: none;
  user-select: none;
  isolation: isolate;
}

.image-crop:focus-visible {
  outline-color: hsl(var(--ring));
}

.image-crop.disabled {
  cursor: not-allowed;
  opacity: 0.64;
}

.image-crop-source {
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  max-width: none;
  max-height: none;
  object-fit: fill;
  pointer-events: none;
  will-change: transform;
}

.image-crop-frame {
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid hsl(var(--primary) / 0.9);
  box-shadow: 0 0 0 9999px hsl(240 5% 4% / 0.62);
  pointer-events: none;
}

.image-crop-frame.rectangle {
  border-radius: 8px;
}

.image-crop-frame.circle {
  border-radius: 999px;
}

.image-crop-frame-clip {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.image-crop-frame-clip.rectangle {
  border-radius: inherit;
}

.image-crop-frame-clip.circle {
  border-radius: 999px;
}

.image-crop-grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to right,
      transparent calc(33.333% - 0.5px),
      hsl(var(--primary) / 0.4) calc(33.333% - 0.5px),
      hsl(var(--primary) / 0.4) calc(33.333% + 0.5px),
      transparent calc(33.333% + 0.5px),
      transparent calc(66.666% - 0.5px),
      hsl(var(--primary) / 0.4) calc(66.666% - 0.5px),
      hsl(var(--primary) / 0.4) calc(66.666% + 0.5px),
      transparent calc(66.666% + 0.5px)
    ),
    linear-gradient(
      to bottom,
      transparent calc(33.333% - 0.5px),
      hsl(var(--primary) / 0.4) calc(33.333% - 0.5px),
      hsl(var(--primary) / 0.4) calc(33.333% + 0.5px),
      transparent calc(33.333% + 0.5px),
      transparent calc(66.666% - 0.5px),
      hsl(var(--primary) / 0.4) calc(66.666% - 0.5px),
      hsl(var(--primary) / 0.4) calc(66.666% + 0.5px),
      transparent calc(66.666% + 0.5px)
    );
}

.image-crop-move-handle {
  position: absolute;
  z-index: 1;
  inset: 0;
  margin: 0;
  padding: 0;
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: inherit;
  outline: none;
  cursor: grab;
  pointer-events: auto;
  touch-action: none;
}

.image-crop-move-handle.active {
  cursor: grabbing;
}

.image-crop-move-handle:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -3px;
}

.image-crop-move-handle:disabled {
  cursor: not-allowed;
}

.image-crop-resize-handle {
  position: absolute;
  z-index: 2;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 8px;
  outline: none;
  pointer-events: auto;
  touch-action: none;
}

.image-crop-resize-handle::before {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  background: hsl(var(--background));
  border: 2px solid hsl(var(--primary));
  content: "";
  transform: translate(-50%, -50%);
}

.image-crop-resize-handle::after {
  position: absolute;
  inset: 3px;
  border: 2px solid transparent;
  border-radius: 7px;
  content: "";
}

.image-crop-resize-handle:focus-visible::after {
  border-color: hsl(var(--ring));
}

.image-crop-resize-handle:disabled {
  cursor: not-allowed !important;
}

.image-crop-resize-handle.north,
.image-crop-resize-handle.south {
  left: 50%;
  width: 48px;
  height: 28px;
}

.image-crop-resize-handle.north {
  top: 0;
  transform: translate(-50%, -50%);
}

.image-crop-resize-handle.south {
  bottom: 0;
  transform: translate(-50%, 50%);
}

.image-crop-resize-handle.east,
.image-crop-resize-handle.west {
  top: 50%;
  width: 28px;
  height: 48px;
}

.image-crop-resize-handle.east {
  right: 0;
  transform: translate(50%, -50%);
}

.image-crop-resize-handle.west {
  left: 0;
  transform: translate(-50%, -50%);
}

.image-crop-resize-handle.north::before,
.image-crop-resize-handle.south::before {
  width: 18px;
  height: 5px;
  border-width: 1px;
  border-radius: 999px;
}

.image-crop-resize-handle.east::before,
.image-crop-resize-handle.west::before {
  width: 5px;
  height: 18px;
  border-width: 1px;
  border-radius: 999px;
}

.image-crop-resize-handle.north-east {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.image-crop-resize-handle.south-east {
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);
}

.image-crop-resize-handle.south-west {
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
}

.image-crop-resize-handle.north-west {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

.image-crop-state {
  position: absolute;
  z-index: 2;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--gap-4);
  color: hsl(var(--muted-foreground));
  background-color: hsl(var(--background) / 0.82);
  text-align: center;
}

@media (max-width: 639px) {
  .image-crop {
    min-height: 240px;
    border-radius: 12px;
  }
}
</style>
