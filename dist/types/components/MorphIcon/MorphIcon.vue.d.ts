import { type Component } from "vue";
import { type IconInput, type MorphOptions, type ReducedMotionMode, type SpringPreset } from "morphicons/vue";
type GuiIconInput = IconInput | Component;
export interface MorphIconProps {
    icon?: GuiIconInput;
    from?: GuiIconInput;
    to?: GuiIconInput;
    progress?: number;
    spring?: SpringPreset | MorphOptions;
    reducedMotion?: ReducedMotionMode;
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
    label?: string;
}
declare const _default: import("vue").DefineComponent<MorphIconProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<MorphIconProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
