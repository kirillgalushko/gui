import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  useNavigationMenu,
  type UseNavigationMenuResult,
} from "./useNavigationMenu";

const createMenu = (options: Parameters<typeof useNavigationMenu>[0] = {}) => {
  let menu: UseNavigationMenuResult | undefined;
  const wrapper = mount(
    defineComponent({
      setup() {
        menu = useNavigationMenu(options);
        return () => null;
      },
    }),
  );

  if (!menu) {
    throw new Error("Navigation menu state was not initialized");
  }

  return { menu, wrapper };
};

describe("useNavigationMenu", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("supports uncontrolled open, toggle and close", () => {
    const onValueChange = vi.fn();
    const { menu } = createMenu({ defaultValue: "product", onValueChange });

    expect(menu.value.value).toBe("product");
    menu.toggle("features");
    expect(menu.value.value).toBe("features");
    menu.toggle("features");
    expect(menu.value.value).toBe("");
    expect(onValueChange).toHaveBeenLastCalledWith("");
  });

  it("delays hover open and close", () => {
    vi.useFakeTimers();
    const { menu } = createMenu({
      closeDelayDuration: 80,
      delayDuration: 50,
    });

    menu.scheduleOpen("product");
    vi.advanceTimersByTime(49);
    expect(menu.value.value).toBe("");
    vi.advanceTimersByTime(1);
    expect(menu.value.value).toBe("product");

    menu.scheduleClose();
    vi.advanceTimersByTime(80);
    expect(menu.value.value).toBe("");
  });

  it("cancels a scheduled state change", () => {
    vi.useFakeTimers();
    const { menu } = createMenu({ delayDuration: 50 });

    menu.scheduleOpen("product");
    menu.cancelScheduledChange();
    vi.runAllTimers();

    expect(menu.value.value).toBe("");
  });
});
