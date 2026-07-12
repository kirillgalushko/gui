import type { DateInputChangePayload, DateInputValue } from './types';
export interface DateInputProps {
    value?: DateInputValue;
    onChange?: (payload: DateInputChangePayload) => void;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    invalid?: boolean;
    description?: string;
    errorMessage?: string;
    maxWidth?: string;
    placeholder?: string;
    stretched?: boolean;
}
declare const _default: import("vue").DefineComponent<DateInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DateInputProps> & Readonly<{}>, {
    value: DateInputValue;
    maxWidth: string;
    placeholder: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
