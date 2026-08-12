import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Modal from "./Modal.vue";

describe("Modal", () => {
  it("renders a secondary description below the title", () => {
    const host = document.createElement("div");
    document.body.append(host);

    const modal = mount(Modal, {
      attachTo: host,
      props: {
        description: "Короткое пояснение",
        isOpened: true,
        title: "Заголовок",
      },
    });
    const modalElement = document.body.querySelector(".modal-wrapper");

    expect(modalElement?.textContent).toContain("Заголовок");
    expect(modalElement?.textContent).toContain("Короткое пояснение");
    expect(
      modalElement?.querySelector(".modal-title .secondary"),
    ).not.toBeNull();

    modal.unmount();
    host.remove();
  });

  it("teleports the overlay to body", () => {
    const host = document.createElement("div");
    document.body.append(host);

    const modal = mount(Modal, {
      attachTo: host,
      props: {
        isOpened: true,
        title: "Подтверждение",
      },
    });

    expect(document.body.querySelector(".modal-wrapper")).not.toBeNull();
    expect(host.querySelector(".modal-wrapper")).toBeNull();

    modal.unmount();
    host.remove();
  });
});
