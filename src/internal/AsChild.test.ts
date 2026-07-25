import { h } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Button from "../components/Button/Button.vue";
import Link from "../components/Link/Link.vue";

describe("asChild", () => {
  it("applies Link styles to a child button without a wrapper", () => {
    const wrapper = mount(Link, {
      props: {
        asChild: true,
        underlineOnHover: true,
      },
      slots: {
        default: () =>
          h("button", { class: "table-link", type: "button" }, "Открыть"),
      },
    });

    const button = wrapper.get("button");

    expect(wrapper.element).toBe(button.element);
    expect(button.classes()).toEqual(
      expect.arrayContaining(["link", "table-link", "underline-on-hover"]),
    );
  });

  it("applies Button styles to a child link without a wrapper", () => {
    const wrapper = mount(Button, {
      props: {
        asChild: true,
        mode: "contrast",
        size: "small",
      },
      slots: {
        default: () => h("a", { href: "/tasks" }, "Задачи"),
      },
    });

    const link = wrapper.get("a");

    expect(wrapper.element).toBe(link.element);
    expect(link.classes()).toEqual(
      expect.arrayContaining(["button", "contrast", "small", "as-child"]),
    );
  });
});
