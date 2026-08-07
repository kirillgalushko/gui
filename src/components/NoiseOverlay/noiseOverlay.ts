export const getNoiseOverlayFrequency = (grainSize: number): number => {
  const normalizedGrainSize = Math.min(8, Math.max(0.5, grainSize));

  return Number((1 / normalizedGrainSize).toFixed(3));
};

export interface NoiseOverlayPatternOptions {
  grainSize: number;
  octaves: number;
  seed: number;
}

export const createNoiseOverlayPattern = ({
  grainSize,
  octaves,
  seed,
}: NoiseOverlayPatternOptions): string => {
  const frequency = getNoiseOverlayFrequency(grainSize);
  const normalizedOctaves = Math.min(6, Math.max(1, Math.round(octaves)));
  const normalizedSeed = Math.round(seed);
  const svg = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><filter id="noise" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="${frequency}" numOctaves="${normalizedOctaves}" seed="${normalizedSeed}" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#noise)"/></svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};
