import type { ButtonProps } from '../Button/Button.vue';
import type { DateNavigatorChangePayload, DateNavigatorMode } from './types';
export interface DateNavigatorProps {
    value: Date;
    mode?: DateNavigatorMode;
    buttonMode?: ButtonProps['mode'];
    size?: ButtonProps['size'];
    onChange: (payload: DateNavigatorChangePayload) => void;
    minDate?: Date;
    maxDate?: Date;
}
declare const _default: import("vue").DefineComponent<DateNavigatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DateNavigatorProps> & Readonly<{}>, {
    size: "small" | "medium" | "large" | "extra-small";
    mode: DateNavigatorMode;
    buttonMode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
