import type { ImageViewerError, ImageViewerItem, ImageViewerThumbnails } from "./types";
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
declare var __VLS_15: {
    image: ImageViewerItem;
    index: number;
}, __VLS_72: {
    image: ImageViewerItem;
    index: number;
    retry: () => void;
}, __VLS_96: {
    image: ImageViewerItem;
    index: number;
}, __VLS_101: {
    image: ImageViewerItem;
    index: number;
};
type __VLS_Slots = {} & {
    toolbar?: (props: typeof __VLS_15) => any;
} & {
    error?: (props: typeof __VLS_72) => any;
} & {
    caption?: (props: typeof __VLS_96) => any;
} & {
    thumbnail?: (props: typeof __VLS_101) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ImageViewerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (index: number, image: ImageViewerItem) => any;
    close: () => any;
    error: (value: ImageViewerError) => any;
    "update:isOpened": (value: boolean) => any;
    "update:activeIndex": (value: number) => any;
}, string, import("vue").PublicProps, Readonly<ImageViewerProps> & Readonly<{
    onChange?: ((index: number, image: ImageViewerItem) => any) | undefined;
    onClose?: (() => any) | undefined;
    onError?: ((value: ImageViewerError) => any) | undefined;
    "onUpdate:isOpened"?: ((value: boolean) => any) | undefined;
    "onUpdate:activeIndex"?: ((value: number) => any) | undefined;
}>, {
    isOpened: boolean;
    activeIndex: number;
    loop: boolean;
    showTitle: boolean;
    showCounter: boolean;
    showThumbnails: ImageViewerThumbnails;
    zoomable: boolean;
    rotatable: boolean;
    closeOnBackdrop: boolean;
    minScale: number;
    maxScale: number;
    preload: number;
    swipeThreshold: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
