import type { BorderRadius, Padding } from "../../types";
interface Card {
    background?: "default" | "secondary";
    /** Делает фон полупрозрачным и размывает содержимое под карточкой. */
    blur?: boolean;
    fullHeight?: boolean;
    stretched?: boolean;
    padding?: Padding;
    borderRadius?: BorderRadius;
}
interface NonInteractiveCard extends Card {
    interactive?: false;
    onClick?: (event: MouseEvent) => void;
}
interface InteractiveCard extends Card {
    interactive: true;
    onClick: (event: MouseEvent) => void;
}
export type CardProps = NonInteractiveCard | InteractiveCard;
declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import("vue").PublicProps>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
