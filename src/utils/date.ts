export const toDate = (value: Date | string): Date =>
  value instanceof Date ? value : new Date(value);

export const startOfDay = (date: Date): Date => {
  const nextDate = new Date(date);
  nextDate.setHours(0, 0, 0, 0);
  return nextDate;
};

export const endOfDay = (date: Date): Date => {
  const nextDate = new Date(date);
  nextDate.setHours(23, 59, 59, 999);
  return nextDate;
};

export const addDays = (date: Date, amount: number): Date => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + amount);
  return nextDate;
};

export const isSameDay = (firstDate: Date, secondDate: Date): boolean =>
  firstDate.getFullYear() === secondDate.getFullYear() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getDate() === secondDate.getDate();

export const isBeforeDay = (firstDate: Date, secondDate: Date): boolean =>
  startOfDay(firstDate).getTime() < startOfDay(secondDate).getTime();

export const isAfterDay = (firstDate: Date, secondDate: Date): boolean =>
  startOfDay(firstDate).getTime() > startOfDay(secondDate).getTime();

export const formatRuShortWeekdayMonthDay = (date: Date): string =>
  new Intl.DateTimeFormat('ru-RU', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(date).replace('.', '');
