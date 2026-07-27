import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Modal from "./Modal.vue";

describe("Modal", () => {
  it("renders a secondary description below the title", () => {
    const modal = mount(Modal, {
      props: {
        description: "Короткое пояснение",
        isOpened: true,
        title: "Заголовок",
      },
    });

    expect(modal.text()).toContain("Заголовок");
    expect(modal.text()).toContain("Короткое пояснение");
    expect(modal.find(".modal-title .secondary").exists()).toBe(true);
  });
});
