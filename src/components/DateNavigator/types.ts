export type DateNavigatorMode = 'day' | 'week' | 'month' | 'year';

export type DateNavigatorRange = {
  start: Date;
  end: Date;
};

export type DateNavigatorChangePayload = {
  value: Date;
  mode: DateNavigatorMode;
  range: DateNavigatorRange;
};
