import { DOMWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ImageViewer from "./ImageViewer.vue";
import { normalizeImageViewerIndex } from "./useImageViewerNavigation";

const images = [
  { id: "one", src: "/one.jpg", title: "one.jpg" },
  { id: "two", src: "/two.jpg", title: "two.jpg" },
];

describe("ImageViewer", () => {
  it("normalizes an index to available images", () => {
    expect(normalizeImageViewerIndex(-1, 2)).toBe(0);
    expect(normalizeImageViewerIndex(5, 2)).toBe(1);
    expect(normalizeImageViewerIndex(2, 0)).toBe(0);
  });

  it("emits close state", async () => {
    const wrapper = mount(ImageViewer, {
      props: { images, isOpened: true },
      attachTo: document.body,
    });
    const body = new DOMWrapper(document.body);
    const close = body.get('button[aria-label="Закрыть"]');
    await close.trigger("click");
    expect(wrapper.emitted("update:isOpened")).toEqual([[false]]);
    expect(wrapper.emitted("close")).toHaveLength(1);
    wrapper.unmount();
  });

  it("respects finite navigation", async () => {
    const wrapper = mount(ImageViewer, {
      props: { images, isOpened: true, activeIndex: 0, loop: false },
      attachTo: document.body,
    });
    const body = new DOMWrapper(document.body);
    expect(
      body
        .get('button[aria-label="Предыдущее изображение"]')
        .attributes("disabled"),
    ).toBeDefined();
    await body
      .get('button[aria-label="Следующее изображение"]')
      .trigger("click");
    expect(wrapper.emitted("update:activeIndex")).toEqual([[1]]);
    wrapper.unmount();
  });
});
