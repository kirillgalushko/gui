import { ref } from "vue";
import { describe, expect, it, vi } from "vitest";
import { useSidebarCollapsible } from "./useSidebarCollapsible";

describe("useSidebarCollapsible", () => {
  it("toggles an uncontrolled disclosure", () => {
    const onChange = vi.fn();
    const disclosure = useSidebarCollapsible({ onChange });

    disclosure.toggle();

    expect(disclosure.opened.value).toBe(true);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("keeps controlled state until the model changes", () => {
    const modelValue = ref(false);
    const onChange = vi.fn();
    const disclosure = useSidebarCollapsible({ modelValue, onChange });

    disclosure.toggle();
    expect(disclosure.opened.value).toBe(false);
    expect(onChange).toHaveBeenCalledWith(true);

    modelValue.value = true;
    expect(disclosure.opened.value).toBe(true);
  });

  it("does not toggle while disabled", () => {
    const onChange = vi.fn();
    const disclosure = useSidebarCollapsible({ disabled: true, onChange });

    disclosure.toggle();

    expect(disclosure.opened.value).toBe(false);
    expect(onChange).not.toHaveBeenCalled();
  });
});
