import type { ComputedRef, InjectionKey } from "vue";
export interface AccordionContext {
    disabled: ComputedRef<boolean>;
    isOpen: (value: string) => boolean;
    toggle: (value: string) => void;
}
export interface AccordionItemContext {
    contentId: string;
    disabled: ComputedRef<boolean>;
    isOpen: ComputedRef<boolean>;
    toggle: () => void;
    triggerId: string;
}
export declare const accordionContextKey: InjectionKey<AccordionContext>;
export declare const accordionItemContextKey: InjectionKey<AccordionItemContext>;
