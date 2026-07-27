import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Dropdown from "./Dropdown.vue";

describe("Dropdown", () => {
  it("passes content width and padding variants to the teleported popper", () => {
    const wrapper = mount(Dropdown, {
      props: {
        contentWidth: "medium",
        contentPadding: "comfortable",
      },
      attrs: {
        popperClass: "custom-dropdown",
      },
      slots: {
        default: "<button>Открыть</button>",
        popper: "<div>Содержимое</div>",
      },
    });
    const popper = wrapper.findComponent({ name: "VDropdown" });

    expect(popper.props("popperClass")).toEqual([
      "custom-dropdown",
      "dropdown-content-width-medium",
      "dropdown-content-padding-comfortable",
    ]);
  });
});
