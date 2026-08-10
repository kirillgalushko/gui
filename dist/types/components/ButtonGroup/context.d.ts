import type { InjectionKey } from "vue";
export type ButtonGroupOrientation = "horizontal" | "vertical";
export interface ButtonGroupContext {
    orientation: ButtonGroupOrientation;
}
export declare const buttonGroupContextKey: InjectionKey<ButtonGroupContext>;
