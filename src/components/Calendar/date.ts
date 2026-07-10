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

export const isSameDay = (firstDate: Date, secondDate: Date): boolean =>
  firstDate.getFullYear() === secondDate.getFullYear() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getDate() === secondDate.getDate();
