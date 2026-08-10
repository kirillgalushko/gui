import { defineComponent as o, provide as r, computed as s, openBlock as i, createElementBlock as n, mergeProps as l, renderSlot as p } from "vue";
import { p as d } from "./context-C9fgU0XA.js";
const m = ["aria-label", "data-size"], z = /* @__PURE__ */ o({
  inheritAttrs: !1,
  __name: "Pagination",
  props: {
    label: { default: "Пагинация" },
    size: { default: "medium" }
  },
  setup(a) {
    const e = a;
    return r(d, {
      size: s(() => e.size)
    }), (t, c) => (i(), n("nav", l(t.$attrs, {
      "aria-label": e.label,
      "data-size": e.size
    }), [
      p(t.$slots, "default")
    ], 16, m));
  }
});
export {
  z as default
};
