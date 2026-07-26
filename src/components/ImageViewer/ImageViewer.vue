<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, toRef, watch } from "vue";
import {
  IconChevronLeftOutline,
  IconChevronRightOutline,
  IconImageInPictureOutline,
  IconMinusOutline,
  IconPlusOutline,
  IconRefreshOutline,
  IconRotateClockwiseOutline,
  IconXOutline,
} from "@gui/icons";
import Button from "../Button/Button.vue";
import Loader from "../Loader/Loader.vue";
import Text from "../Text/Text.vue";
import type {
  ImageViewerError,
  ImageViewerItem,
  ImageViewerThumbnails,
} from "./types";
import { useImageViewerGestures } from "./useImageViewerGestures";
import { useImageViewerNavigation } from "./useImageViewerNavigation";
import { useImageViewerTransform } from "./useImageViewerTransform";

export interface ImageViewerProps {
  images: ImageViewerItem[];
  isOpened?: boolean;
  activeIndex?: number;
  loop?: boolean;
  showTitle?: boolean;
  showCounter?: boolean;
  showThumbnails?: ImageViewerThumbnails;
  zoomable?: boolean;
  rotatable?: boolean;
  closeOnBackdrop?: boolean;
  minScale?: number;
  maxScale?: number;
  preload?: number;
  swipeThreshold?: number;
}

const props = withDefaults(defineProps<ImageViewerProps>(), {
  isOpened: false,
  activeIndex: 0,
  loop: false,
  showTitle: true,
  showCounter: true,
  showThumbnails: "auto",
  zoomable: true,
  rotatable: true,
  closeOnBackdrop: true,
  minScale: 1,
  maxScale: 4,
  preload: 1,
  swipeThreshold: 48,
});
const emit = defineEmits<{
  "update:isOpened": [value: boolean];
  "update:activeIndex": [value: number];
  close: [];
  change: [index: number, image: ImageViewerItem];
  error: [value: ImageViewerError];
}>();

const dialog = ref<HTMLElement | null>(null);
const isLoading = ref(true);
const hasError = ref(false);
const retryKey = ref(0);
let previousBodyOverflow = "";

const navigation = useImageViewerNavigation(
  toRef(props, "images"),
  toRef(props, "activeIndex"),
  toRef(props, "loop"),
  (index) => {
    emit("update:activeIndex", index);
    const image = props.images[index];
    if (image) emit("change", index, image);
  },
);
const transform = useImageViewerTransform(
  toRef(props, "minScale"),
  toRef(props, "maxScale"),
);
const gestures = useImageViewerGestures({
  scale: transform.scale,
  minScale: () => props.minScale,
  maxScale: () => props.maxScale,
  swipeThreshold: () => props.swipeThreshold,
  onNext: navigation.next,
  onPrevious: navigation.previous,
  panBy: transform.panBy,
  setScale: transform.setScale,
});
const thumbnailsVisible = computed(
  () =>
    props.images.length > 1 &&
    (props.showThumbnails === true || props.showThumbnails === "auto"),
);

const close = () => {
  emit("update:isOpened", false);
  emit("close");
};
const load = () => {
  isLoading.value = false;
  hasError.value = false;
};
const fail = (event: Event) => {
  isLoading.value = false;
  hasError.value = true;
  const image = navigation.current.value;
  if (image) emit("error", { image, index: navigation.index.value, event });
};
const retry = () => {
  isLoading.value = true;
  hasError.value = false;
  retryKey.value += 1;
};
const select = (index: number) => navigation.goTo(index);
const backdropClick = (event: MouseEvent) => {
  if (props.closeOnBackdrop && event.target === event.currentTarget) close();
};
const wheel = (event: WheelEvent) => {
  if (!props.zoomable) return;
  event.preventDefault();
  transform.setScale(transform.scale.value + (event.deltaY < 0 ? 0.25 : -0.25));
};
const doubleClick = () => {
  if (!props.zoomable) return;
  transform.setScale(
    transform.scale.value === props.minScale
      ? Math.min(2, props.maxScale)
      : props.minScale,
  );
};
const keydown = (event: KeyboardEvent) => {
  if (!props.isOpened) return;
  if (event.key === "Escape") close();
  if (event.key === "ArrowLeft") navigation.previous();
  if (event.key === "ArrowRight") navigation.next();
  if (props.zoomable && (event.key === "+" || event.key === "="))
    transform.zoomIn();
  if (props.zoomable && event.key === "-") transform.zoomOut();
  if (props.rotatable && event.key.toLowerCase() === "r") transform.rotate();
  if (event.key === "0") transform.reset();
};
const preload = () => {
  if (typeof Image === "undefined") return;
  for (let offset = 1; offset <= props.preload; offset += 1) {
    for (const index of [
      navigation.index.value - offset,
      navigation.index.value + offset,
    ]) {
      const normalized = props.loop
        ? (index + props.images.length) % props.images.length
        : index;
      const item = props.images[normalized];
      if (item) new Image().src = item.src;
    }
  }
};

watch(
  () => navigation.index.value,
  () => {
    transform.reset();
    isLoading.value = true;
    hasError.value = false;
    if (props.isOpened) preload();
  },
);
watch(
  () => props.isOpened,
  (opened) => {
    if (opened) {
      preload();
      previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", keydown);
      nextTick(() => dialog.value?.focus());
    } else {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", keydown);
    }
  },
  { immediate: true },
);
onBeforeUnmount(() => {
  document.body.style.overflow = previousBodyOverflow;
  window.removeEventListener("keydown", keydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="image-viewer-fade">
      <div
        v-if="props.isOpened && navigation.current.value"
        ref="dialog"
        class="image-viewer"
        role="dialog"
        aria-modal="true"
        aria-label="Просмотр изображений"
        tabindex="-1"
        @click="backdropClick"
      >
        <header class="image-viewer-header">
          <div class="image-viewer-heading">
            <Text
              v-if="props.showTitle && navigation.current.value.title"
              typography="label-3"
              color="inherit"
              ellipsis
            >
              {{ navigation.current.value.title }}
            </Text>
            <Text v-if="props.showCounter" typography="label-1" color="inherit">
              {{ navigation.index.value + 1 }} / {{ navigation.count.value }}
            </Text>
          </div>
          <div class="image-viewer-toolbar">
            <slot
              name="toolbar"
              :image="navigation.current.value"
              :index="navigation.index.value"
            />
            <Button
              v-if="props.zoomable"
              squared
              mode="ghost"
              size="small"
              aria-label="Уменьшить"
              :disabled="transform.scale.value <= props.minScale"
              @click="transform.zoomOut"
              ><IconMinusOutline
            /></Button>
            <Button
              v-if="props.zoomable"
              squared
              mode="ghost"
              size="small"
              aria-label="Увеличить"
              :disabled="transform.scale.value >= props.maxScale"
              @click="transform.zoomIn"
              ><IconPlusOutline
            /></Button>
            <Button
              v-if="props.rotatable"
              squared
              mode="ghost"
              size="small"
              aria-label="Повернуть"
              @click="transform.rotate"
              ><IconRotateClockwiseOutline
            /></Button>
            <Button
              squared
              mode="ghost"
              size="small"
              aria-label="Закрыть"
              @click="close"
            >
              <IconXOutline />
            </Button>
          </div>
        </header>

        <main
          class="image-viewer-stage"
          :class="{ pannable: transform.scale.value > props.minScale }"
          @wheel="wheel"
          @dblclick="doubleClick"
          @pointerdown="gestures.pointerDown"
          @pointermove="gestures.pointerMove"
          @pointerup="gestures.pointerUp"
          @pointercancel="gestures.pointerUp"
        >
          <button
            v-if="navigation.count.value > 1"
            class="image-viewer-edge previous"
            type="button"
            aria-label="Предыдущее изображение"
            :disabled="!navigation.canPrevious.value"
            @click.stop="navigation.previous"
          >
            <IconChevronLeftOutline />
          </button>

          <Transition name="image-viewer-image" mode="out-in">
            <div
              :key="`${navigation.current.value.id}-${retryKey}`"
              class="image-viewer-media"
            >
              <Loader v-if="isLoading && !hasError" />
              <div v-if="hasError" class="image-viewer-error">
                <slot
                  name="error"
                  :image="navigation.current.value"
                  :index="navigation.index.value"
                  :retry="retry"
                >
                  <IconImageInPictureOutline />
                  <Text typography="label-3" color="inherit"
                    >Не удалось загрузить изображение</Text
                  >
                  <Button mode="contrast" size="small" @click="retry">
                    <IconRefreshOutline /> Повторить
                  </Button>
                </slot>
              </div>
              <img
                v-show="!hasError"
                class="image-viewer-image"
                :class="{ rotated: transform.rotation.value % 180 !== 0 }"
                :style="transform.style.value"
                :src="navigation.current.value.src"
                :alt="
                  navigation.current.value.alt ??
                  navigation.current.value.title ??
                  ''
                "
                draggable="false"
                @load="load"
                @error="fail"
              />
            </div>
          </Transition>

          <button
            v-if="navigation.count.value > 1"
            class="image-viewer-edge next"
            type="button"
            aria-label="Следующее изображение"
            :disabled="!navigation.canNext.value"
            @click.stop="navigation.next"
          >
            <IconChevronRightOutline />
          </button>
        </main>

        <footer
          v-if="
            thumbnailsVisible ||
            (props.showTitle && navigation.current.value.description) ||
            $slots.caption
          "
          class="image-viewer-footer"
        >
          <slot
            name="caption"
            :image="navigation.current.value"
            :index="navigation.index.value"
          >
            <Text
              v-if="props.showTitle && navigation.current.value.description"
              color="inherit"
              text-align="center"
            >
              {{ navigation.current.value.description }}
            </Text>
          </slot>
          <div v-if="thumbnailsVisible" class="image-viewer-thumbnails">
            <button
              v-for="(image, index) in props.images"
              :key="image.id"
              class="image-viewer-thumbnail"
              :class="{ active: index === navigation.index.value }"
              type="button"
              :aria-label="`Открыть изображение ${index + 1}`"
              :aria-current="
                index === navigation.index.value ? 'true' : undefined
              "
              @click="select(index)"
            >
              <slot name="thumbnail" :image="image" :index="index">
                <img
                  :src="image.thumbnailSrc ?? image.src"
                  :alt="image.alt ?? ''"
                />
              </slot>
            </button>
          </div>
        </footer>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.image-viewer {
  position: fixed;
  z-index: 200;
  inset: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  box-sizing: border-box;
  min-width: 0;
  padding: max(var(--gap-3), env(safe-area-inset-top))
    max(var(--gap-3), env(safe-area-inset-right))
    max(var(--gap-3), env(safe-area-inset-bottom))
    max(var(--gap-3), env(safe-area-inset-left));
  background: hsl(var(--background) / 0.96);
  color: hsl(var(--foreground));
  font-family: var(--font-family);
  outline: none;
  backdrop-filter: blur(18px);
}
.image-viewer-header {
  z-index: 3;
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-3);
}
.image-viewer-heading {
  min-width: 0;
  display: grid;
  gap: var(--gap-1);
}
.image-viewer-toolbar {
  display: flex;
  flex: 0 0 auto;
  gap: var(--gap-1);
}
.image-viewer-stage {
  position: relative;
  display: grid;
  min-width: 0;
  min-height: 0;
  place-items: center;
  overflow: hidden;
  touch-action: none;
}
.image-viewer-stage.pannable {
  cursor: grab;
}
.image-viewer-stage.pannable:active {
  cursor: grabbing;
}
.image-viewer-media {
  grid-area: 1 / 1;
  display: grid;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  place-items: center;
}
.image-viewer-image {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  will-change: transform;
  transition: transform 180ms ease;
}
.image-viewer-image.rotated {
  max-width: min(100%, calc(100dvh - 160px));
  max-height: min(100%, calc(100vw - var(--gap-6)));
}
.image-viewer-error {
  display: grid;
  place-items: center;
  gap: var(--gap-3);
  text-align: center;
}
.image-viewer-error > :first-child {
  width: 48px;
  height: 48px;
  color: hsl(var(--muted-foreground));
}
.image-viewer-edge {
  position: absolute;
  z-index: 2;
  top: 10%;
  bottom: 10%;
  width: min(14vw, 128px);
  border: 0;
  padding: 0;
  background: transparent;
  color: hsl(var(--foreground));
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 180ms ease,
    background 180ms ease;
}
.image-viewer-edge:hover,
.image-viewer-edge:focus-visible {
  opacity: 1;
  background: hsl(var(--foreground) / 0.06);
}
.image-viewer-edge:disabled {
  cursor: default;
  opacity: 0;
}
.image-viewer-edge svg {
  width: 32px;
  height: 32px;
}
.image-viewer-edge.previous {
  left: 0;
}
.image-viewer-edge.next {
  right: 0;
}
.image-viewer-footer {
  z-index: 3;
  display: grid;
  min-width: 0;
  gap: var(--gap-2);
}
.image-viewer-thumbnails {
  display: flex;
  max-width: 100%;
  justify-content: center;
  gap: var(--gap-2);
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scrollbar-width: thin;
}
.image-viewer-thumbnail {
  width: 56px;
  height: 56px;
  flex: 0 0 auto;
  box-sizing: border-box;
  padding: 2px;
  border: 2px solid transparent;
  border-radius: 10px;
  background: hsl(var(--muted));
  overflow: hidden;
  scroll-snap-align: center;
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}
.image-viewer-thumbnail:hover,
.image-viewer-thumbnail.active {
  opacity: 1;
}
.image-viewer-thumbnail.active {
  border-color: hsl(var(--accent));
  transform: translateY(-2px);
}
.image-viewer-thumbnail img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
}
.image-viewer-fade-enter-active,
.image-viewer-fade-leave-active {
  transition: opacity 180ms ease;
}
.image-viewer-fade-enter-from,
.image-viewer-fade-leave-to {
  opacity: 0;
}
.image-viewer-image-enter-active,
.image-viewer-image-leave-active {
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}
.image-viewer-image-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.image-viewer-image-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
@media (max-width: 639px) {
  .image-viewer {
    padding: max(var(--gap-2), env(safe-area-inset-top))
      max(var(--gap-2), env(safe-area-inset-right))
      max(var(--gap-2), env(safe-area-inset-bottom))
      max(var(--gap-2), env(safe-area-inset-left));
  }
  .image-viewer-heading {
    padding-left: var(--gap-2);
  }
  .image-viewer-edge {
    display: none;
  }
  .image-viewer-thumbnail {
    width: 48px;
    height: 48px;
  }
}
@media (max-height: 520px) {
  .image-viewer-thumbnails {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .image-viewer *,
  .image-viewer-fade-enter-active,
  .image-viewer-fade-leave-active {
    transition: none !important;
  }
}
</style>
