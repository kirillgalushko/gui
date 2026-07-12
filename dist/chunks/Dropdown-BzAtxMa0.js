import { defineComponent as a, openBlock as p, createBlock as d, unref as n, mergeProps as f, withCtx as o, renderSlot as r } from "vue";
import { k as l } from "./floating-vue-ORJ9AWNM.js";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Dropdown-C01Fm0Qs.css';const u = /* @__PURE__ */ a({
  __name: "Dropdown",
  props: {
    stretched: { type: Boolean, default: !1 }
  },
  setup(t) {
    const s = t;
    return (e, i) => (p(), d(n(l), f(e.$attrs, {
      arrowOverflow: !1,
      autoBoundaryMaxSize: !0,
      overflowPadding: 8,
      class: ["dropdown", { stretched: s.stretched }]
    }), {
      default: o(() => [
        r(e.$slots, "default", {}, void 0, !0)
      ]),
      popper: o(() => [
        r(e.$slots, "popper", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h = /* @__PURE__ */ c(u, [["__scopeId", "data-v-f91594e4"]]);
export {
  h as default
};
