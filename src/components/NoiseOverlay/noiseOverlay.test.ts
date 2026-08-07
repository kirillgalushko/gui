import { describe, expect, it } from "vitest";
import {
  createNoiseOverlayPattern,
  getNoiseOverlayFrequency,
} from "./noiseOverlay";

describe("getNoiseOverlayFrequency", () => {
  it("converts grain size into an SVG turbulence frequency", () => {
    expect(getNoiseOverlayFrequency(1.25)).toBe(0.8);
    expect(getNoiseOverlayFrequency(2)).toBe(0.5);
  });

  it("keeps the frequency inside a useful rendering range", () => {
    expect(getNoiseOverlayFrequency(0)).toBe(2);
    expect(getNoiseOverlayFrequency(20)).toBe(0.125);
  });

  it("creates a high-resolution SVG pattern with normalized parameters", () => {
    const pattern = decodeURIComponent(
      createNoiseOverlayPattern({ grainSize: 2, octaves: 9, seed: 4.4 }),
    );

    expect(pattern).toContain('viewBox="0 0 512 512"');
    expect(pattern).toContain('baseFrequency="0.5"');
    expect(pattern).toContain('numOctaves="6"');
    expect(pattern).toContain('seed="4"');
  });
});
