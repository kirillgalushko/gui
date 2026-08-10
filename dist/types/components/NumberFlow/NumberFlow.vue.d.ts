import { type Format } from "@number-flow/vue";
import type { TextProps, Typography } from "../Text/types";
import { type NumberFlowDirection, type NumberFlowTimingOverrides } from "./useNumberFlow";
export type NumberFlowFormat = Format;
export interface NumberFlowProps {
    Element?: TextProps["Element"];
    animateOnMount?: boolean;
    animated?: boolean;
    color?: TextProps["color"];
    continuous?: boolean;
    direction?: NumberFlowDirection;
    duration?: number;
    easing?: string;
    format?: NumberFlowFormat;
    initialValue?: number;
    locales?: Intl.LocalesArgument;
    mountDelay?: number;
    prefix?: string;
    respectMotionPreference?: boolean;
    startOnVisible?: boolean;
    suffix?: string;
    textAlign?: TextProps["textAlign"];
    timing?: NumberFlowTimingOverrides;
    typography?: Typography;
    value: number;
    visibilityRootMargin?: string;
    visibilityThreshold?: number;
    willChange?: boolean;
}
declare const _default: import("vue").DefineComponent<NumberFlowProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "animations-finish": () => any;
    "animations-start": () => any;
}, string, import("vue").PublicProps, Readonly<NumberFlowProps> & Readonly<{
    "onAnimations-finish"?: (() => any) | undefined;
    "onAnimations-start"?: (() => any) | undefined;
}>, {
    direction: NumberFlowDirection;
    textAlign: import("csstype").Property.TextAlign;
    Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
    typography: Typography;
    color: "default" | "negative" | "inherit" | "secondary";
    duration: number;
    easing: string;
    animated: boolean;
    animateOnMount: boolean;
    initialValue: number;
    mountDelay: number;
    startOnVisible: boolean;
    visibilityRootMargin: string;
    visibilityThreshold: number;
    continuous: boolean;
    respectMotionPreference: boolean;
    willChange: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
