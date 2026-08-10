import "floating-vue/dist/style.css";
export interface DropdownProps {
    stretched?: boolean;
    contentWidth?: DropdownContentWidth;
    contentMaxWidth?: string;
    contentPadding?: "none" | "default" | "comfortable";
}
export type DropdownContentWidth = "auto" | "extra-small" | "small" | "medium" | "large";
declare var __VLS_6: {}, __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
} & {
    popper?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<DropdownProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DropdownProps> & Readonly<{}>, {
    stretched: boolean;
    contentWidth: DropdownContentWidth;
    contentMaxWidth: string;
    contentPadding: "none" | "default" | "comfortable";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
