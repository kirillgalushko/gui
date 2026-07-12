import type { HourPickerChangePayload } from './types';
export interface HourPickerProps {
    value?: string;
    onChange?: (payload: HourPickerChangePayload) => void;
    label?: string;
    name?: string;
    stretched?: boolean;
}
declare const _default: import("vue").DefineComponent<HourPickerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<HourPickerProps> & Readonly<{}>, {
    label: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
