import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Dot from "./Dot.vue";

describe("Dot", () => {
  it("uses the requested palette shade", () => {
    const wrapper = mount(Dot, {
      props: { color: "gray", shade: 300 },
    });

    expect(wrapper.attributes("style")).toContain(
      "--dot-color: var(--color-gray-300);",
    );
  });
});
