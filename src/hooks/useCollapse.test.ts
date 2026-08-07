import { ref } from "vue";
import { describe, expect, it, vi } from "vitest";
import { useCollapse } from "./useCollapse";

describe("useCollapse", () => {
  it("provides synchronized props for an arbitrary trigger and Collapse", () => {
    const collapse = useCollapse({ id: "pricing-comparison" });

    expect(collapse.opened.value).toBe(false);
    expect(collapse.triggerProps).toMatchObject({
      id: "pricing-comparison-trigger",
      "aria-controls": "pricing-comparison-content",
      "aria-expanded": false,
    });
    expect(collapse.collapseProps).toMatchObject({
      id: "pricing-comparison-content",
      opened: false,
      labelledBy: "pricing-comparison-trigger",
      role: "region",
    });

    collapse.triggerProps.onClick();

    expect(collapse.opened.value).toBe(true);
    expect(collapse.triggerProps["aria-expanded"]).toBe(true);
    expect(collapse.collapseProps.opened).toBe(true);
  });

  it("supports programmatic state changes", () => {
    const onChange = vi.fn();
    const collapse = useCollapse({ defaultOpened: true, onChange });

    collapse.close();
    collapse.open();
    collapse.toggle();
    collapse.setOpened(true);

    expect(collapse.opened.value).toBe(true);
    expect(onChange.mock.calls).toEqual([[false], [true], [false], [true]]);
  });

  it("can use externally controlled state and disable only the trigger", () => {
    const opened = ref(false);
    const disabled = ref(true);
    const collapse = useCollapse({ opened, disabled });

    collapse.triggerProps.onClick();
    expect(opened.value).toBe(false);
    expect(collapse.triggerProps["aria-disabled"]).toBe(true);

    collapse.open();
    expect(opened.value).toBe(true);

    disabled.value = false;
    collapse.triggerProps.onClick();
    expect(opened.value).toBe(false);
  });
});
