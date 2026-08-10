import type { ButtonProps } from "../Button/Button.vue";
import type { ComponentSize } from "../../types";
import type { DateNavigatorChangePayload, DateNavigatorMode } from "./types";
export interface DateNavigatorProps {
    value: Date;
    mode?: DateNavigatorMode;
    buttonMode?: ButtonProps["mode"];
    size?: ComponentSize;
    onChange: (payload: DateNavigatorChangePayload) => void;
    minDate?: Date;
    maxDate?: Date;
}
declare const _default: import("vue").DefineComponent<DateNavigatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DateNavigatorProps> & Readonly<{}>, {
    mode: DateNavigatorMode;
    size: ComponentSize;
    buttonMode: "default" | "contrast" | "accent" | "negative" | "ghost" | "outline";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
