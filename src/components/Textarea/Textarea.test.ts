import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Textarea from "./Textarea.vue";

describe("Textarea", () => {
  it("renders an accessible error message", () => {
    const wrapper = mount(Textarea, {
      props: {
        invalid: true,
        errorMessage: "Проверьте введённый текст",
      },
      attrs: {
        "aria-describedby": "external-description",
      },
    });
    const textarea = wrapper.get("textarea");

    expect(textarea.classes()).toContain("invalid");
    expect(textarea.attributes("aria-invalid")).toBe("true");
    expect(textarea.attributes("aria-describedby")).toContain(
      "external-description",
    );
    expect(wrapper.text()).toContain("Проверьте введённый текст");
  });

  it("applies minimum and maximum height constraints", () => {
    const wrapper = mount(Textarea, {
      props: {
        layout: "hug",
        minHeight: "40px",
        maxHeight: "160px",
      },
    });

    expect(wrapper.get("textarea").attributes("style")).toContain(
      "min-height: 40px",
    );
    expect(wrapper.get("textarea").attributes("style")).toContain(
      "max-height: 160px",
    );
  });

  it("enables scrolling when auto-resized content exceeds the height", async () => {
    const wrapper = mount(Textarea, {
      props: {
        layout: "hug",
        maxHeight: "160px",
      },
    });
    const textarea = wrapper.get("textarea");

    Object.defineProperties(textarea.element, {
      scrollHeight: {
        configurable: true,
        value: 200,
      },
      clientHeight: {
        configurable: true,
        value: 160,
      },
    });

    await textarea.trigger("input");

    expect(textarea.element.style.height).toBe("202px");
    expect(textarea.element.style.overflowY).toBe("auto");
  });
});
