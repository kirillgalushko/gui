import { BorderRadius, Padding } from '../../types';
interface Card {
    background?: 'default' | 'secondary';
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
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import("vue").PublicProps>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
