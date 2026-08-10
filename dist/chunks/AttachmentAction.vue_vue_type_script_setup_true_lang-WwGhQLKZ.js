import { defineComponent as a, useAttrs as d, inject as i, computed as n, openBlock as u, createBlock as m, mergeProps as p, unref as c, withCtx as f, renderSlot as z } from "vue";
import _ from "./Button-DBIwBw8Q.js";
import { a as b } from "./context-B9i5CnhF.js";
const g = /* @__PURE__ */ a({
  inheritAttrs: !1,
  __name: "AttachmentAction",
  props: {
    disabled: { type: Boolean, default: !1 },
    mode: { default: "ghost" },
    size: { default: void 0 }
  },
  setup(o) {
    const t = o, s = d(), e = i(b, null), l = n(
      () => t.size ?? ((e == null ? void 0 : e.size.value) === "large" || (e == null ? void 0 : e.size.value) === "medium" ? "small" : "extra-small")
    );
    return (r, v) => (u(), m(_, p(c(s), {
      type: "button",
      squared: "",
      mode: t.mode,
      size: l.value,
      disabled: t.disabled
    }), {
      default: f(() => [
        z(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["mode", "size", "disabled"]));
  }
});
export {
  g as _
};
