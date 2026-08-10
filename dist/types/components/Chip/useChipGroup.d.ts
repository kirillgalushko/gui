import type { InjectionKey } from "vue";
import type { ChipMode, ChipSize, ChipValue } from "./types";
export interface ChipGroupContext {
    mode: ChipMode;
    size: ChipSize;
    disabled: boolean;
    isSelected: (value: ChipValue) => boolean;
    select: (value: ChipValue) => void;
}
export declare const chipGroupContextKey: InjectionKey<ChipGroupContext>;
