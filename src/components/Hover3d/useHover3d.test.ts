import { describe, expect, it } from "vitest";
import { getHover3dTransform } from "./useHover3d";

const bounds = {
  left: 100,
  top: 200,
  width: 256,
  height: 192,
};

describe("getHover3dTransform", () => {
  it("keeps content flat when the pointer is in the center", () => {
    expect(getHover3dTransform(228, 296, bounds)).toEqual({
      rotateX: 0,
      rotateY: 0,
      scale: 1.025,
    });
  });

  it("tilts content toward the pointer", () => {
    expect(getHover3dTransform(100, 200, bounds)).toEqual({
      rotateX: -7,
      rotateY: 7,
      scale: 1.025,
    });
  });

  it("reduces tilt and scale for larger content", () => {
    const largeBounds = {
      ...bounds,
      width: 512,
      height: 384,
    };

    expect(getHover3dTransform(100, 200, largeBounds)).toEqual({
      rotateX: -3.5,
      rotateY: 3.5,
      scale: 1.0125,
    });
  });

  it("uses custom strength and clamps coordinates outside content", () => {
    expect(
      getHover3dTransform(800, 500, bounds, { maxTilt: 4, scale: 1.04 }),
    ).toEqual({
      rotateX: 4,
      rotateY: -4,
      scale: 1.04,
    });
  });
});
