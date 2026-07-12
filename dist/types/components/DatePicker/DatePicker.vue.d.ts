import type { DatePickerChangePayload, DatePickerValue } from './types';
export interface DatePickerProps {
    value?: DatePickerValue;
    onChange?: (payload: DatePickerChangePayload) => void;
    minDate?: Date;
    maxDate?: Date;
    placeholder?: string;
    stretched?: boolean;
    disabled?: boolean;
}
declare const _default: import("vue").DefineComponent<DatePickerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DatePickerProps> & Readonly<{}>, {
    value: DatePickerValue;
    placeholder: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
