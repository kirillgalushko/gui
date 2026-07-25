import { describe, expect, it } from "vitest";
import { formatRuRelativeTime } from "./date";

const now = new Date("2026-07-25T12:00:00.000Z");

const beforeNow = (milliseconds: number): Date =>
  new Date(now.getTime() - milliseconds);

describe("formatRuRelativeTime", () => {
  it.each([
    [10_000, "10 секунд назад"],
    [60_000, "1 минуту назад"],
    [2 * 60_000, "2 минуты назад"],
    [5 * 60_000, "5 минут назад"],
    [3 * 3_600_000, "3 часа назад"],
    [24 * 3_600_000, "Вчера"],
    [2 * 86_400_000, "2 дня назад"],
    [14 * 86_400_000, "2 недели назад"],
    [60 * 86_400_000, "2 месяца назад"],
    [730 * 86_400_000, "2 года назад"],
  ])("formats a past difference of %i ms", (difference, expected) => {
    expect(formatRuRelativeTime(beforeNow(difference), now)).toBe(expected);
  });

  it("supports future dates", () => {
    expect(
      formatRuRelativeTime(new Date(now.getTime() + 2 * 60_000), now),
    ).toBe("через 2 минуты");
  });
});
