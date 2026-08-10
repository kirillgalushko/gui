export type DateNavigatorMode = "day" | "threeDays" | "week" | "twoWeeks" | "month" | "year";
export type DateNavigatorRange = {
    start: Date;
    end: Date;
};
export type DateNavigatorChangePayload = {
    value: Date;
    mode: DateNavigatorMode;
    range: DateNavigatorRange;
};
