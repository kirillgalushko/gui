import { defineComponent as f, computed as m, openBlock as n, createBlock as i, mergeProps as l, createSlots as r, withCtx as t, renderSlot as s } from "vue";
import { a as u } from "./index-BQgYVE5h.js";
import C from "./Modal-BnxuCBDh.js";
import c from "./Sheet-CoI0nAox.js";
const y = /* @__PURE__ */ f({
  __name: "AdaptiveModal",
  props: {
    isOpened: { type: Boolean },
    onClose: {},
    showCloseButton: { type: Boolean, default: !1 },
    title: {},
    description: {},
    modalProps: {},
    sheetProps: {}
  },
  setup(p) {
    const o = p, d = u(), a = m(() => d.isMobile);
    return (e, h) => a.value ? (n(), i(c, l({ key: 0 }, o.sheetProps, {
      isOpened: o.isOpened,
      onClose: o.onClose,
      showCloseButton: o.showCloseButton,
      title: o.title,
      description: o.description,
      side: "bottom"
    }), r({
      default: t(() => [
        s(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.footer ? {
        name: "footer",
        fn: t(() => [
          s(e.$slots, "footer")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["isOpened", "onClose", "showCloseButton", "title", "description"])) : (n(), i(C, l({ key: 1 }, o.modalProps, {
      isOpened: o.isOpened,
      onClose: o.onClose,
      showCloseButton: o.showCloseButton,
      title: o.title,
      description: o.description
    }), r({
      default: t(() => [
        s(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.footer ? {
        name: "footer",
        fn: t(() => [
          s(e.$slots, "footer")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["isOpened", "onClose", "showCloseButton", "title", "description"]));
  }
});
export {
  y as _
};
