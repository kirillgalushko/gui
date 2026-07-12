import { defineComponent as f, computed as u, openBlock as l, createBlock as n, mergeProps as r, createSlots as i, withCtx as t, renderSlot as s } from "vue";
import { u as m } from "./index-D5rI4VW1.js";
import C from "./Modal-C1Ac9sgl.js";
import h from "./Sheet-CUlMGjQo.js";
const y = /* @__PURE__ */ f({
  __name: "AdaptiveModal",
  props: {
    isOpened: { type: Boolean },
    onClose: {},
    showCloseButton: { type: Boolean, default: !1 },
    title: {},
    modalProps: {},
    sheetProps: {}
  },
  setup(p) {
    const o = p, a = m(), d = u(() => a.isMobile);
    return (e, B) => d.value ? (l(), n(h, r({ key: 0 }, o.sheetProps, {
      isOpened: o.isOpened,
      onClose: o.onClose,
      showCloseButton: o.showCloseButton,
      title: o.title,
      side: "bottom"
    }), i({
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
    ]), 1040, ["isOpened", "onClose", "showCloseButton", "title"])) : (l(), n(C, r({ key: 1 }, o.modalProps, {
      isOpened: o.isOpened,
      onClose: o.onClose,
      showCloseButton: o.showCloseButton,
      title: o.title
    }), i({
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
    ]), 1040, ["isOpened", "onClose", "showCloseButton", "title"]));
  }
});
export {
  y as _
};
