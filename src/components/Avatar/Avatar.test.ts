import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Avatar from "./Avatar.vue";

describe("Avatar", () => {
  it("supports semantic positive mode", () => {
    const avatar = mount(Avatar, {
      props: { mode: "positive" },
    });

    expect(avatar.classes()).toContain("positive");
    expect(avatar.attributes("style")).toContain(
      "--avatar-bg: color-mix(in oklab, hsl(var(--positive)) 20%, transparent)",
    );
    expect(avatar.attributes("style")).toContain(
      "--avatar-color: hsl(var(--positive))",
    );
  });

  it("supports palette colors", () => {
    const avatar = mount(Avatar, {
      props: { color: "violet" },
    });

    expect(avatar.attributes("style")).toContain(
      "--avatar-bg: color-mix(in oklab, var(--color-violet-500) 20%, transparent)",
    );
    expect(avatar.attributes("style")).toContain(
      "--avatar-color: var(--color-violet-500)",
    );
  });
});
