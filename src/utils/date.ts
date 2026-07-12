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

export const addHours = (date: Date, amount: number): Date => {
  const nextDate = new Date(date);
  nextDate.setHours(nextDate.getHours() + amount);
  return nextDate;
};

export const addMonths = (date: Date, amount: number): Date => {
  const nextDate = new Date(date);
  nextDate.setMonth(nextDate.getMonth() + amount, 1);
  return nextDate;
};

export const addYears = (date: Date, amount: number): Date => {
  const nextDate = new Date(date);
  nextDate.setFullYear(nextDate.getFullYear() + amount, 0, 1);
  return nextDate;
};

export const startOfWeek = (date: Date): Date => {
  const dayStart = startOfDay(date);
  const day = dayStart.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  return addDays(dayStart, diff);
};

export const startOfMonth = (date: Date): Date =>
  startOfDay(new Date(date.getFullYear(), date.getMonth(), 1));

export const startOfYear = (date: Date): Date =>
  startOfDay(new Date(date.getFullYear(), 0, 1));

export const isSameDay = (firstDate: Date, secondDate: Date): boolean =>
  firstDate.getFullYear() === secondDate.getFullYear() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getDate() === secondDate.getDate();

export const isBeforeDay = (firstDate: Date, secondDate: Date): boolean =>
  startOfDay(firstDate).getTime() < startOfDay(secondDate).getTime();

export const isAfterDay = (firstDate: Date, secondDate: Date): boolean =>
  startOfDay(firstDate).getTime() > startOfDay(secondDate).getTime();

export const differenceInCalendarDays = (end: Date, start: Date): number =>
  Math.round((startOfDay(end).getTime() - startOfDay(start).getTime()) / 86_400_000);

export const setDateHour = (date: Date, hour: number): Date => {
  const nextDate = new Date(date);
  nextDate.setHours(hour, 0, 0, 0);
  return nextDate;
};

export const roundDateToNearestHour = (date: Date): Date => {
  const nextDate = new Date(date);
  const elapsedHourMs =
    nextDate.getMinutes() * 60_000 +
    nextDate.getSeconds() * 1_000 +
    nextDate.getMilliseconds();

  if (elapsedHourMs >= 30 * 60_000) {
    nextDate.setHours(nextDate.getHours() + 1);
  }

  nextDate.setMinutes(0, 0, 0);
  return nextDate;
};

export const snapDateToHour = (date: Date, hour: number): Date => {
  const currentDay = setDateHour(date, hour);
  const previousDay = setDateHour(addDays(date, -1), hour);
  const nextDay = setDateHour(addDays(date, 1), hour);

  return [previousDay, currentDay, nextDay].reduce((nearest, candidate) => {
    const nearestDistance = Math.abs(nearest.getTime() - date.getTime());
    const candidateDistance = Math.abs(candidate.getTime() - date.getTime());

    return candidateDistance < nearestDistance ? candidate : nearest;
  }, currentDay);
};

export const formatRuShortWeekdayMonthDay = (date: Date): string =>
  new Intl.DateTimeFormat('ru-RU', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(date).replace('.', '');

export const formatRuMonthYear = (date: Date): string =>
  new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    year: 'numeric',
  }).format(date).replace(' г.', '');

export const formatRuDayMonth = (date: Date): string =>
  new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'short',
  }).format(date).replace('.', '');

export const formatRuReadableDateTime = (value: Date | string): string =>
  new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(toDate(value));
