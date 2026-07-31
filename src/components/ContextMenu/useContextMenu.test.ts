import { flushPromises, mount } from "@vue/test-utils";
import { defineAsyncComponent, defineComponent, h, nextTick, ref } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import { useContextMenu } from "./useContextMenu";

const wrappers: ReturnType<typeof mount>[] = [];

const mountContextMenuTarget = (initiallyRendered = true) => {
  const isRendered = ref(initiallyRendered);
  const enabled = ref(true);
  let contextMenu!: ReturnType<typeof useContextMenu>;

  const wrapper = mount(
    defineComponent({
      setup() {
        contextMenu = useContextMenu({ enabled });

        return () =>
          isRendered.value
            ? h("div", { class: "target", ref: contextMenu.setTargetRef })
            : null;
      },
    }),
  );

  wrappers.push(wrapper);
  return { contextMenu, enabled, isRendered, wrapper };
};

afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
});

describe("useContextMenu", () => {
  it("binds a target that appears after the composable is mounted", async () => {
    const { contextMenu, isRendered, wrapper } = mountContextMenuTarget(false);

    isRendered.value = true;
    await nextTick();
    await wrapper
      .get(".target")
      .trigger("contextmenu", { clientX: 10, clientY: 20 });

    expect(contextMenu.contextMenuData.isContextMenuVisible.value).toBe(true);
    expect(contextMenu.contextMenuData.position.value).toEqual({
      x: 10,
      y: 20,
    });
  });

  it("resolves the DOM target of an async Vue component", async () => {
    let contextMenu!: ReturnType<typeof useContextMenu>;
    const AsyncTarget = defineAsyncComponent(async () =>
      defineComponent({
        setup: () => () => h("div", { class: "async-target" }),
      }),
    );
    const wrapper = mount(
      defineComponent({
        setup() {
          contextMenu = useContextMenu();
          return () => h(AsyncTarget, { ref: contextMenu.setTargetRef });
        },
      }),
    );
    wrappers.push(wrapper);

    await flushPromises();
    await wrapper.get(".async-target").trigger("contextmenu");

    expect(contextMenu.contextMenuData.isContextMenuVisible.value).toBe(true);
  });

  it("keeps only the last opened context menu visible", async () => {
    const first = mountContextMenuTarget();
    const second = mountContextMenuTarget();

    await first.wrapper.get(".target").trigger("contextmenu");
    await second.wrapper.get(".target").trigger("contextmenu");

    expect(first.contextMenu.contextMenuData.isContextMenuVisible.value).toBe(
      false,
    );
    expect(second.contextMenu.contextMenuData.isContextMenuVisible.value).toBe(
      true,
    );
  });

  it("does not open and closes the menu when disabled", async () => {
    const { contextMenu, enabled, wrapper } = mountContextMenuTarget();

    await wrapper.get(".target").trigger("contextmenu");
    enabled.value = false;
    await nextTick();

    expect(contextMenu.contextMenuData.isContextMenuVisible.value).toBe(false);

    await wrapper.get(".target").trigger("contextmenu");
    expect(contextMenu.contextMenuData.isContextMenuVisible.value).toBe(false);
  });
});
