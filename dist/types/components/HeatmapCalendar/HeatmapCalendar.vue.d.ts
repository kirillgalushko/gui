import type { HeatmapCalendarCell, HeatmapCalendarMonthSegment, HeatmapCalendarProps } from "./types";
declare const _default: <TMeta = unknown>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onCell-click"?: ((cell: HeatmapCalendarCell<TMeta>, event: MouseEvent) => any) | undefined;
        readonly "onCell-focus"?: ((cell: HeatmapCalendarCell<TMeta>, event: FocusEvent) => any) | undefined;
        readonly "onCell-blur"?: ((cell: HeatmapCalendarCell<TMeta>, event: FocusEvent) => any) | undefined;
        readonly "onCell-enter"?: ((cell: HeatmapCalendarCell<TMeta>, event: MouseEvent) => any) | undefined;
        readonly "onCell-leave"?: ((cell: HeatmapCalendarCell<TMeta>, event: MouseEvent) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onCell-click" | "onCell-focus" | "onCell-blur" | "onCell-enter" | "onCell-leave"> & HeatmapCalendarProps<TMeta> & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        cell(props: {
            cell: HeatmapCalendarCell<TMeta>;
        }): unknown;
        overlay(props: {
            cell: HeatmapCalendarCell<TMeta>;
        }): unknown;
        legend(props: {
            levels: number[];
            palette: readonly string[];
        }): unknown;
        "month-label"(props: {
            label: string;
            segment: HeatmapCalendarMonthSegment;
        }): unknown;
        "weekday-label"(props: {
            label: string;
            date: Date;
        }): unknown;
    };
    emit: ((evt: "cell-click", cell: HeatmapCalendarCell<TMeta>, event: MouseEvent) => void) & ((evt: "cell-focus", cell: HeatmapCalendarCell<TMeta>, event: FocusEvent) => void) & ((evt: "cell-blur", cell: HeatmapCalendarCell<TMeta>, event: FocusEvent) => void) & ((evt: "cell-enter", cell: HeatmapCalendarCell<TMeta>, event: MouseEvent) => void) & ((evt: "cell-leave", cell: HeatmapCalendarCell<TMeta>, event: MouseEvent) => void);
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
