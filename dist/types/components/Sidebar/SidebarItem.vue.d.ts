export interface SidebarItemProps {
    selected?: boolean;
}
declare function __VLS_template(): {
    slots: {
        left?(_: {}): any;
        left?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        right?(_: {}): any;
        compact?(_: {}): any;
        tooltip?(_: {}): any;
    };
    refs: {
        buttonElement: HTMLButtonElement;
        centerElement: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<SidebarItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarItemProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
