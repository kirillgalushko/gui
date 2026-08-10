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
declare function __VLS_template(): {
    slots: {
        toolbar?(_: {
            image: ImageViewerItem;
            index: number;
        }): any;
        error?(_: {
            image: ImageViewerItem;
            index: number;
            retry: () => void;
        }): any;
        caption?(_: {
            image: ImageViewerItem;
            index: number;
        }): any;
        thumbnail?(_: {
            image: ImageViewerItem;
            index: number;
        }): any;
    };
    refs: {
        dialog: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
