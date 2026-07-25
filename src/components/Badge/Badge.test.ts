import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Badge from "./Badge.vue";

describe("Badge", () => {
  it("uses medium size by default", () => {
    expect(mount(Badge).classes()).toContain("medium");
  });

  it.each(["small", "medium", "large"] as const)("supports %s size", (size) => {
    expect(
      mount(Badge, {
        props: { size },
      }).classes(),
    ).toContain(size);
  });

  it("supports accent mode", () => {
    const badge = mount(Badge, {
      props: { mode: "accent" },
    });

    expect(badge.attributes("style")).toContain(
      "--badge-background: hsl(var(--accent))",
    );
    expect(badge.attributes("style")).toContain("--badge-color: hsl(0 0% 98%)");
  });
});
