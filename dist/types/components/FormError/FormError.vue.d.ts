import type { TextProps } from '../Text/types';
export interface FormErrorProps extends TextProps {
    message?: string;
    gap?: string;
}
declare const _default: import("vue").DefineComponent<FormErrorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<FormErrorProps> & Readonly<{}>, {
    textAlign: import("csstype").Property.TextAlign;
    Element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "a" | "button" | "label";
    typography: import("../Text/types").Typography;
    color: "default" | "inherit" | "secondary" | "negative";
    gap: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
