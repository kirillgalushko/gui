export interface UseSheetOptions {
    isOpened?: boolean;
    showOverlay?: boolean;
    closeOnOverlayClick: boolean;
    closeOnEscape: boolean;
    onClose?: () => void;
}
export declare const useSheet: (options: UseSheetOptions) => {
    close: () => void;
    sheetRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
};
