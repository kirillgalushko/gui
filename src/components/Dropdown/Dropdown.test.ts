import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Dropdown from "./Dropdown.vue";

describe("Dropdown", () => {
  it("passes content width and padding variants to the teleported popper", () => {
    const wrapper = mount(Dropdown, {
      props: {
        contentWidth: "medium",
        contentMaxWidth: "28rem",
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

  it("uses automatic content width by default", () => {
    const wrapper = mount(Dropdown, {
      slots: {
        default: "<button>Открыть</button>",
        popper: "<div>Содержимое</div>",
      },
    });
    const popper = wrapper.findComponent({ name: "VDropdown" });

    expect(popper.props("popperClass")).toEqual([
      undefined,
      "dropdown-content-width-auto",
      "dropdown-content-padding-default",
    ]);
  });
});
