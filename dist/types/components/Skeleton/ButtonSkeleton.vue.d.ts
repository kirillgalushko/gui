import type { ComponentSize } from "../../types";
export interface ButtonSkeletonProps {
    loading?: boolean;
    size?: ComponentSize;
    width?: string;
    stretched?: boolean;
    squared?: boolean;
    rounded?: boolean;
}
declare var __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ButtonSkeletonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ButtonSkeletonProps> & Readonly<{}>, {
    size: ComponentSize;
    width: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
