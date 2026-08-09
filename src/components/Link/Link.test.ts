import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Link from "./Link.vue";

describe("Link", () => {
  it("keeps the inherited color when disabled", () => {
    const wrapper = mount({
      components: { Link },
      template: `
        <div style="color: rgb(12, 140, 90)">
          <Link mode="inherit" disabled>Недоступная ссылка</Link>
        </div>
      `,
    });
    const link = wrapper.get(".link");

    expect(getComputedStyle(link.element).color).toBe("rgb(12, 140, 90)");
    expect(link.classes()).toEqual(
      expect.arrayContaining(["mode-inherit", "disabled"]),
    );
    expect(link.attributes("aria-disabled")).toBe("true");
  });

  it("allows long content to wrap inside its container", () => {
    const wrapper = mount(Link, {
      props: {
        wrap: true,
      },
      slots: {
        default: "Публичная оферта и Пользовательское соглашение",
      },
    });
    const link = wrapper.get(".link");

    expect(link.classes()).toContain("wrap");
    expect(link.get(".link-content").text()).toBe(
      "Публичная оферта и Пользовательское соглашение",
    );
  });
});
