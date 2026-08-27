import { describe, expect, it } from "vitest";
import {
  calculateImageCropLayout,
  calculateImageCropRect,
  calculateImageCropVisibleImageRect,
  constrainImageCropRect,
  constrainImageCropRectToBounds,
  imageCropAreaToRect,
  imageCropRectToArea,
  moveImageCropRect,
  normalizeImageCropRotation,
  normalizeImageCropTransform,
  resizeImageCropRect,
  resizeImageCropRectWithinBounds,
} from "./imageCropGeometry";

describe("imageCropGeometry", () => {
  it("fits the requested aspect ratio inside the responsive crop area", () => {
    expect(
      calculateImageCropRect({ width: 1_000, height: 600 }, 1, 0.8),
    ).toEqual({ x: 260, y: 60, width: 480, height: 480 });

    expect(
      calculateImageCropRect({ width: 360, height: 640 }, 16 / 9, 0.9),
    ).toEqual({ x: 18, y: 228.875, width: 324, height: 182.25 });
  });

  it("fits the whole image into the viewport independently of the crop", () => {
    const landscape = calculateImageCropLayout({
      viewport: { width: 500, height: 500 },
      image: { width: 1_000, height: 500 },
      aspectRatio: 1,
      cropArea: 0.8,
      transform: { rotation: 0 },
    });
    const rotated = calculateImageCropLayout({
      viewport: { width: 500, height: 500 },
      image: { width: 1_000, height: 500 },
      aspectRatio: 1,
      cropArea: 0.8,
      transform: { rotation: 90 },
    });

    expect(landscape.scale).toBe(0.5);
    expect(landscape.renderedWidth).toBe(500);
    expect(landscape.renderedHeight).toBe(250);
    expect(rotated.renderedWidth).toBe(250);
    expect(rotated.renderedHeight).toBe(500);
  });

  it("supports an explicit cover fit without coupling scale to crop size", () => {
    const layout = calculateImageCropLayout({
      viewport: { width: 500, height: 500 },
      image: { width: 1_000, height: 500 },
      aspectRatio: 1,
      cropArea: 0.4,
      imageFit: "cover",
      transform: { rotation: 0 },
    });

    expect(layout.scale).toBe(1);
    expect(layout.renderedWidth).toBe(1_000);
    expect(layout.renderedHeight).toBe(500);
  });

  it("normalizes external transforms and rotation safely", () => {
    expect(normalizeImageCropRotation(-91)).toBe(270);
    expect(normalizeImageCropTransform({ rotation: 181 })).toEqual({
      rotation: 180,
    });
  });

  it("converts crop coordinates between responsive and normalized space", () => {
    const viewport = { width: 800, height: 500 };
    const area = { x: 0.1, y: 0.2, width: 0.5, height: 0.6 };

    expect(imageCropAreaToRect(area, viewport)).toEqual({
      x: 80,
      y: 100,
      width: 400,
      height: 300,
    });
    expect(
      imageCropRectToArea(imageCropAreaToRect(area, viewport), viewport),
    ).toEqual(area);
  });

  it("resizes sides and corners freely while enforcing boundaries", () => {
    const viewport = { width: 500, height: 400 };
    const rect = { x: 100, y: 80, width: 240, height: 200 };
    const options = { minSize: 80 };

    expect(
      resizeImageCropRect(rect, "east", 300, 0, viewport, options),
    ).toEqual({ x: 100, y: 80, width: 400, height: 200 });
    expect(
      resizeImageCropRect(rect, "north-west", 220, 150, viewport, options),
    ).toEqual({ x: 260, y: 200, width: 80, height: 80 });
    expect(
      resizeImageCropRect(rect, "south", 0, -500, viewport, options),
    ).toEqual({ x: 100, y: 80, width: 240, height: 80 });
  });

  it("keeps the aspect ratio from corners with the opposite corner fixed", () => {
    const resized = resizeImageCropRect(
      { x: 100, y: 100, width: 200, height: 100 },
      "south-east",
      100,
      50,
      { width: 600, height: 400 },
      { minSize: 60, aspectRatio: 2 },
    );

    expect(resized).toEqual({ x: 100, y: 100, width: 300, height: 150 });
  });

  it("keeps the aspect ratio from sides and grows around the opposite axis", () => {
    expect(
      resizeImageCropRect(
        { x: 150, y: 100, width: 200, height: 200 },
        "east",
        80,
        0,
        { width: 600, height: 400 },
        { minSize: 80, aspectRatio: 1 },
      ),
    ).toEqual({ x: 150, y: 60, width: 280, height: 280 });
  });

  it("constrains external crop rectangles and preserves a locked ratio", () => {
    expect(
      constrainImageCropRect(
        { x: -100, y: 360, width: 500, height: 100 },
        { width: 400, height: 400 },
        { minSize: 80, aspectRatio: 1 },
      ),
    ).toEqual({ x: 0, y: 100, width: 300, height: 300 });
  });

  it("moves the crop rectangle without leaving the visible image bounds", () => {
    const rect = { x: 100, y: 80, width: 240, height: 200 };
    const bounds = { x: 50, y: 40, width: 400, height: 320 };

    expect(moveImageCropRect(rect, 300, -100, bounds)).toEqual({
      x: 210,
      y: 40,
      width: 240,
      height: 200,
    });
  });

  it("constrains and resizes crop rectangles inside offset image bounds", () => {
    const bounds = { x: 100, y: 80, width: 300, height: 240 };
    const options = { minSize: 60 };

    expect(
      constrainImageCropRectToBounds(
        { x: 20, y: 30, width: 500, height: 400 },
        bounds,
        options,
      ),
    ).toEqual({ x: 100, y: 80, width: 300, height: 240 });
    expect(
      resizeImageCropRectWithinBounds(
        { x: 150, y: 120, width: 160, height: 120 },
        "south-east",
        300,
        300,
        bounds,
        options,
      ),
    ).toEqual({ x: 150, y: 120, width: 250, height: 200 });
  });

  it("keeps the visible image centered independently of the crop rectangle", () => {
    expect(
      calculateImageCropVisibleImageRect(
        {
          crop: { x: 20, y: 30, width: 120, height: 100 },
          scale: 1,
          renderedWidth: 700,
          renderedHeight: 300,
        },
        { width: 600, height: 500 },
      ),
    ).toEqual({ x: 0, y: 100, width: 600, height: 300 });
  });
});
