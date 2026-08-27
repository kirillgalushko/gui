export type ImageCropSource = string | Blob;

export type ImageCropShape = "rectangle" | "circle";

export type ImageCropImageFit = "contain" | "cover";

export type ImageCropMimeType = "image/jpeg" | "image/png" | "image/webp";

/** Crop rectangle normalized to the current viewport, from 0 to 1. */
export type ImageCropArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type ImageCropResizeHandle =
  | "north"
  | "east"
  | "south"
  | "west"
  | "north-east"
  | "south-east"
  | "south-west"
  | "north-west";

export type ImageCropTransform = {
  /** Clockwise rotation in degrees. ImageCrop normalizes it to 90° steps. */
  rotation: number;
};

export type ImageCropReadyEvent = {
  naturalWidth: number;
  naturalHeight: number;
};

export type ImageCropResultOptions = {
  width?: number;
  mimeType?: ImageCropMimeType;
  quality?: number;
  fileName?: string;
};

export type ImageCropResult = {
  blob: Blob;
  file: File;
  width: number;
  height: number;
  mimeType: ImageCropMimeType;
  transform: ImageCropTransform;
  crop: ImageCropArea;
};

export type ImageCropApi = {
  getResult(options?: ImageCropResultOptions): Promise<ImageCropResult>;
  reset(): void;
  resetCrop(): void;
  rotateClockwise(): void;
  rotateCounterclockwise(): void;
  setCrop(value: ImageCropArea): void;
};

export const DEFAULT_IMAGE_CROP_TRANSFORM: Readonly<ImageCropTransform> = {
  rotation: 0,
};
