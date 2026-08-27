import type {
  ImageCropArea,
  ImageCropImageFit,
  ImageCropResizeHandle,
  ImageCropTransform,
} from "./types";

export type ImageCropSize = {
  width: number;
  height: number;
};

export type ImageCropRect = ImageCropSize & {
  x: number;
  y: number;
};

export type ImageCropLayout = {
  crop: ImageCropRect;
  scale: number;
  renderedWidth: number;
  renderedHeight: number;
};

export type ImageCropResizeOptions = {
  minSize: number;
  aspectRatio?: number;
};

export const clampImageCropValue = (value: number, min: number, max: number) =>
  Math.min(Math.max(Number.isFinite(value) ? value : min, min), max);

export const normalizeImageCropRotation = (rotation: number) => {
  const normalized = Math.round(rotation / 90) * 90;
  return ((normalized % 360) + 360) % 360;
};

export const normalizeImageCropTransform = (
  transform: ImageCropTransform,
): ImageCropTransform => ({
  rotation: normalizeImageCropRotation(transform.rotation),
});

export const calculateImageCropRect = (
  viewport: ImageCropSize,
  aspectRatio: number,
  cropArea: number,
): ImageCropRect => {
  if (viewport.width <= 0 || viewport.height <= 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }

  const safeAspectRatio = clampImageCropValue(aspectRatio, 0.05, 20);
  const safeCropArea = clampImageCropValue(cropArea, 0.2, 1);
  const availableWidth = viewport.width * safeCropArea;
  const availableHeight = viewport.height * safeCropArea;
  const availableAspectRatio = availableWidth / availableHeight;
  const width =
    availableAspectRatio > safeAspectRatio
      ? availableHeight * safeAspectRatio
      : availableWidth;
  const height = width / safeAspectRatio;

  return {
    x: (viewport.width - width) / 2,
    y: (viewport.height - height) / 2,
    width,
    height,
  };
};

export const imageCropAreaToRect = (
  area: ImageCropArea,
  viewport: ImageCropSize,
): ImageCropRect => {
  const width = clampImageCropValue(area.width, 0, 1);
  const height = clampImageCropValue(area.height, 0, 1);

  return {
    x: clampImageCropValue(area.x, 0, 1 - width) * viewport.width,
    y: clampImageCropValue(area.y, 0, 1 - height) * viewport.height,
    width: width * viewport.width,
    height: height * viewport.height,
  };
};

export const imageCropRectToArea = (
  rect: ImageCropRect,
  viewport: ImageCropSize,
): ImageCropArea => {
  if (viewport.width <= 0 || viewport.height <= 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }

  const width = clampImageCropValue(rect.width / viewport.width, 0, 1);
  const height = clampImageCropValue(rect.height / viewport.height, 0, 1);

  return {
    x: clampImageCropValue(rect.x / viewport.width, 0, 1 - width),
    y: clampImageCropValue(rect.y / viewport.height, 0, 1 - height),
    width,
    height,
  };
};

export const constrainImageCropRect = (
  rect: ImageCropRect,
  viewport: ImageCropSize,
  options: ImageCropResizeOptions,
): ImageCropRect => {
  if (viewport.width <= 0 || viewport.height <= 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }

  const minSize = Math.max(1, options.minSize);
  const centerX = rect.x + rect.width / 2;
  const centerY = rect.y + rect.height / 2;

  if (options.aspectRatio === undefined) {
    const width = clampImageCropValue(
      Math.abs(rect.width),
      Math.min(minSize, viewport.width),
      viewport.width,
    );
    const height = clampImageCropValue(
      Math.abs(rect.height),
      Math.min(minSize, viewport.height),
      viewport.height,
    );

    return {
      x: clampImageCropValue(centerX - width / 2, 0, viewport.width - width),
      y: clampImageCropValue(centerY - height / 2, 0, viewport.height - height),
      width,
      height,
    };
  }

  const aspectRatio = clampImageCropValue(options.aspectRatio, 0.05, 20);
  const maxHeight = Math.min(viewport.height, viewport.width / aspectRatio);
  const minHeight = Math.min(
    maxHeight,
    Math.max(minSize, minSize / aspectRatio),
  );
  const projectedHeight =
    (aspectRatio * Math.abs(rect.width) + Math.abs(rect.height)) /
    (aspectRatio * aspectRatio + 1);
  const height = clampImageCropValue(projectedHeight, minHeight, maxHeight);
  const width = height * aspectRatio;

  return {
    x: clampImageCropValue(centerX - width / 2, 0, viewport.width - width),
    y: clampImageCropValue(centerY - height / 2, 0, viewport.height - height),
    width,
    height,
  };
};

export const constrainImageCropRectToBounds = (
  rect: ImageCropRect,
  bounds: ImageCropRect,
  options: ImageCropResizeOptions,
): ImageCropRect => {
  const constrained = constrainImageCropRect(
    {
      x: rect.x - bounds.x,
      y: rect.y - bounds.y,
      width: rect.width,
      height: rect.height,
    },
    { width: bounds.width, height: bounds.height },
    options,
  );

  return {
    ...constrained,
    x: constrained.x + bounds.x,
    y: constrained.y + bounds.y,
  };
};

export const resizeImageCropRect = (
  rect: ImageCropRect,
  handle: ImageCropResizeHandle,
  deltaX: number,
  deltaY: number,
  viewport: ImageCropSize,
  options: ImageCropResizeOptions,
): ImageCropRect => {
  const start = constrainImageCropRect(rect, viewport, options);
  const movesNorth = handle.includes("north");
  const movesEast = handle.includes("east");
  const movesSouth = handle.includes("south");
  const movesWest = handle.includes("west");

  if (options.aspectRatio === undefined) {
    const minWidth = Math.min(Math.max(1, options.minSize), viewport.width);
    const minHeight = Math.min(Math.max(1, options.minSize), viewport.height);
    let left = start.x;
    let top = start.y;
    let right = start.x + start.width;
    let bottom = start.y + start.height;

    if (movesWest) {
      left = clampImageCropValue(start.x + deltaX, 0, right - minWidth);
    }
    if (movesEast) {
      right = clampImageCropValue(
        start.x + start.width + deltaX,
        left + minWidth,
        viewport.width,
      );
    }
    if (movesNorth) {
      top = clampImageCropValue(start.y + deltaY, 0, bottom - minHeight);
    }
    if (movesSouth) {
      bottom = clampImageCropValue(
        start.y + start.height + deltaY,
        top + minHeight,
        viewport.height,
      );
    }

    return { x: left, y: top, width: right - left, height: bottom - top };
  }

  const aspectRatio = clampImageCropValue(options.aspectRatio, 0.05, 20);
  const minimumHeight = Math.max(
    options.minSize,
    options.minSize / aspectRatio,
    1,
  );
  const isCorner = (movesNorth || movesSouth) && (movesEast || movesWest);

  if (isCorner) {
    const anchorX = movesWest ? start.x + start.width : start.x;
    const anchorY = movesNorth ? start.y + start.height : start.y;
    const horizontalDirection = movesEast ? 1 : -1;
    const verticalDirection = movesSouth ? 1 : -1;
    const targetWidth = start.width + horizontalDirection * deltaX;
    const targetHeight = start.height + verticalDirection * deltaY;
    const projectedHeight =
      (aspectRatio * targetWidth + targetHeight) /
      (aspectRatio * aspectRatio + 1);
    const availableWidth = movesEast ? viewport.width - anchorX : anchorX;
    const availableHeight = movesSouth ? viewport.height - anchorY : anchorY;
    const maxHeight = Math.min(availableHeight, availableWidth / aspectRatio);
    const height = clampImageCropValue(
      projectedHeight,
      Math.min(minimumHeight, maxHeight),
      maxHeight,
    );
    const width = height * aspectRatio;

    return {
      x: movesWest ? anchorX - width : anchorX,
      y: movesNorth ? anchorY - height : anchorY,
      width,
      height,
    };
  }

  if (movesEast || movesWest) {
    const anchorX = movesWest ? start.x + start.width : start.x;
    const centerY = start.y + start.height / 2;
    const direction = movesEast ? 1 : -1;
    const targetWidth = start.width + direction * deltaX;
    const maxWidth = Math.min(
      movesEast ? viewport.width - anchorX : anchorX,
      2 * Math.min(centerY, viewport.height - centerY) * aspectRatio,
    );
    const minWidth = Math.min(minimumHeight * aspectRatio, maxWidth);
    const width = clampImageCropValue(targetWidth, minWidth, maxWidth);
    const height = width / aspectRatio;

    return {
      x: movesWest ? anchorX - width : anchorX,
      y: centerY - height / 2,
      width,
      height,
    };
  }

  const anchorY = movesNorth ? start.y + start.height : start.y;
  const centerX = start.x + start.width / 2;
  const direction = movesSouth ? 1 : -1;
  const targetHeight = start.height + direction * deltaY;
  const maxHeight = Math.min(
    movesSouth ? viewport.height - anchorY : anchorY,
    (2 * Math.min(centerX, viewport.width - centerX)) / aspectRatio,
  );
  const height = clampImageCropValue(
    targetHeight,
    Math.min(minimumHeight, maxHeight),
    maxHeight,
  );
  const width = height * aspectRatio;

  return {
    x: centerX - width / 2,
    y: movesNorth ? anchorY - height : anchorY,
    width,
    height,
  };
};

export const resizeImageCropRectWithinBounds = (
  rect: ImageCropRect,
  handle: ImageCropResizeHandle,
  deltaX: number,
  deltaY: number,
  bounds: ImageCropRect,
  options: ImageCropResizeOptions,
): ImageCropRect => {
  const resized = resizeImageCropRect(
    {
      x: rect.x - bounds.x,
      y: rect.y - bounds.y,
      width: rect.width,
      height: rect.height,
    },
    handle,
    deltaX,
    deltaY,
    { width: bounds.width, height: bounds.height },
    options,
  );

  return {
    ...resized,
    x: resized.x + bounds.x,
    y: resized.y + bounds.y,
  };
};

export const moveImageCropRect = (
  rect: ImageCropRect,
  deltaX: number,
  deltaY: number,
  bounds: ImageCropRect,
): ImageCropRect => {
  const maxX = Math.max(bounds.x, bounds.x + bounds.width - rect.width);
  const maxY = Math.max(bounds.y, bounds.y + bounds.height - rect.height);

  return {
    ...rect,
    x: clampImageCropValue(rect.x + deltaX, bounds.x, maxX),
    y: clampImageCropValue(rect.y + deltaY, bounds.y, maxY),
  };
};

export const calculateImageCropLayout = (input: {
  viewport: ImageCropSize;
  image: ImageCropSize;
  aspectRatio: number;
  cropArea: number;
  crop?: ImageCropRect;
  imageFit?: ImageCropImageFit;
  transform: ImageCropTransform;
}): ImageCropLayout => {
  const crop =
    input.crop ??
    calculateImageCropRect(input.viewport, input.aspectRatio, input.cropArea);
  const rotation = normalizeImageCropRotation(input.transform.rotation);
  const swapsAxes = rotation === 90 || rotation === 270;
  const rotatedWidth = swapsAxes ? input.image.height : input.image.width;
  const rotatedHeight = swapsAxes ? input.image.width : input.image.height;
  const fit = input.imageFit ?? "contain";
  const baseScale =
    rotatedWidth > 0 && rotatedHeight > 0
      ? fit === "cover"
        ? Math.max(
            input.viewport.width / rotatedWidth,
            input.viewport.height / rotatedHeight,
          )
        : Math.min(
            input.viewport.width / rotatedWidth,
            input.viewport.height / rotatedHeight,
          )
      : 0;
  const scale = baseScale;
  const renderedWidth = rotatedWidth * scale;
  const renderedHeight = rotatedHeight * scale;

  return {
    crop,
    scale,
    renderedWidth,
    renderedHeight,
  };
};

export const calculateImageCropVisibleImageRect = (
  layout: ImageCropLayout,
  viewport: ImageCropSize,
): ImageCropRect => {
  const imageCenterX = viewport.width / 2;
  const imageCenterY = viewport.height / 2;
  const left = Math.max(0, imageCenterX - layout.renderedWidth / 2);
  const top = Math.max(0, imageCenterY - layout.renderedHeight / 2);
  const right = Math.min(
    viewport.width,
    imageCenterX + layout.renderedWidth / 2,
  );
  const bottom = Math.min(
    viewport.height,
    imageCenterY + layout.renderedHeight / 2,
  );

  return {
    x: left,
    y: top,
    width: Math.max(0, right - left),
    height: Math.max(0, bottom - top),
  };
};
