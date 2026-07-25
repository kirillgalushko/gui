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
  Math.round(
    (startOfDay(end).getTime() - startOfDay(start).getTime()) / 86_400_000,
  );

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
  new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
    .format(date)
    .replace(".", "");

export const formatRuMonthYear = (date: Date): string =>
  new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(" г.", "");

export const formatRuDayMonth = (date: Date): string =>
  new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short",
  })
    .format(date)
    .replace(".", "");

export const formatRuReadableDateTime = (value: Date | string): string =>
  new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(toDate(value));

const ruRelativeTimeFormatter = new Intl.RelativeTimeFormat("ru-RU", {
  numeric: "always",
});

const getRelativeTimeValue = (amount: number, differenceMs: number): number =>
  differenceMs > 0 ? amount : -amount;

export const formatRuRelativeTime = (
  value: Date | string,
  relativeTo: Date | string = new Date(),
): string => {
  const differenceMs = toDate(value).getTime() - toDate(relativeTo).getTime();
  const seconds = Math.floor(Math.abs(differenceMs) / 1_000);

  if (seconds < 60) {
    return ruRelativeTimeFormatter.format(
      getRelativeTimeValue(seconds, differenceMs),
      "second",
    );
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return ruRelativeTimeFormatter.format(
      getRelativeTimeValue(minutes, differenceMs),
      "minute",
    );
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return ruRelativeTimeFormatter.format(
      getRelativeTimeValue(hours, differenceMs),
      "hour",
    );
  }

  const days = Math.floor(hours / 24);
  if (differenceMs < 0 && days === 1) {
    return "Вчера";
  }

  if (days < 7) {
    return ruRelativeTimeFormatter.format(
      getRelativeTimeValue(days, differenceMs),
      "day",
    );
  }

  const weeks = Math.floor(days / 7);
  if (days < 30) {
    return ruRelativeTimeFormatter.format(
      getRelativeTimeValue(weeks, differenceMs),
      "week",
    );
  }

  const months = Math.floor(days / 30);
  if (days < 365) {
    return ruRelativeTimeFormatter.format(
      getRelativeTimeValue(months, differenceMs),
      "month",
    );
  }

  const years = Math.floor(days / 365);
  return ruRelativeTimeFormatter.format(
    getRelativeTimeValue(years, differenceMs),
    "year",
  );
};
