export declare const getNoiseOverlayFrequency: (grainSize: number) => number;
export interface NoiseOverlayPatternOptions {
    grainSize: number;
    octaves: number;
    seed: number;
}
export declare const createNoiseOverlayPattern: ({ grainSize, octaves, seed, }: NoiseOverlayPatternOptions) => string;
