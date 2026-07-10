export type CalendarMode = 'single' | 'range';

export type CalendarValue = Date | string | null;

export type CalendarRangeValue = {
  start: CalendarValue;
  end: CalendarValue;
};

export type CalendarDay = {
  date: Date;
  id: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isSelected: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
  hasRangeBackground: boolean;
  isDisabled: boolean;
};

export type CalendarSelectPayload = {
  date: Date;
  day: CalendarDay;
};

export type CalendarRangePayload = {
  start: Date | null;
  end: Date | null;
};

export type CalendarMonthChangePayload = {
  month: Date;
  direction: 'previous' | 'next' | 'set';
};
