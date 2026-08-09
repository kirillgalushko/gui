import { effectScope } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useDropdownSubmenu } from "./useDropdownSubmenu";

describe("useDropdownSubmenu", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("не закрывает submenu при переходе с trigger на content", () => {
    vi.useFakeTimers();
    const scope = effectScope();
    const submenu = scope.run(() => useDropdownSubmenu(100));

    submenu?.setHovered("trigger", true);
    submenu?.setHovered("trigger", false);
    vi.advanceTimersByTime(50);
    submenu?.setHovered("content", true);
    vi.advanceTimersByTime(100);

    expect(submenu?.shown.value).toBe(true);
    scope.stop();
  });

  it("закрывает submenu после задержки, если указатель ушёл", () => {
    vi.useFakeTimers();
    const scope = effectScope();
    const submenu = scope.run(() => useDropdownSubmenu(100));

    submenu?.show();
    submenu?.scheduleHide();
    vi.advanceTimersByTime(99);
    expect(submenu?.shown.value).toBe(true);

    vi.advanceTimersByTime(1);
    expect(submenu?.shown.value).toBe(false);
    scope.stop();
  });

  it("не закрывает submenu, пока trigger остаётся в focus", () => {
    vi.useFakeTimers();
    const scope = effectScope();
    const submenu = scope.run(() => useDropdownSubmenu(100));

    submenu?.setFocused("trigger", true);
    submenu?.setHovered("trigger", true);
    submenu?.setHovered("trigger", false);
    vi.advanceTimersByTime(100);

    expect(submenu?.shown.value).toBe(true);

    submenu?.setFocused("trigger", false);
    vi.advanceTimersByTime(100);

    expect(submenu?.shown.value).toBe(false);
    scope.stop();
  });

  it("очищает активные области при принудительном закрытии", () => {
    vi.useFakeTimers();
    const scope = effectScope();
    const submenu = scope.run(() => useDropdownSubmenu(100));

    submenu?.setHovered("content", true);
    submenu?.hide();
    submenu?.setHovered("trigger", true);
    submenu?.setHovered("trigger", false);
    vi.advanceTimersByTime(100);

    expect(submenu?.shown.value).toBe(false);
    scope.stop();
  });
});
