import { defineComponent as m, ref as _, computed as a, provide as f, openBlock as o, createElementBlock as r, normalizeStyle as y, toDisplayString as v, createCommentVNode as l, Fragment as k, renderList as x, renderSlot as B } from "vue";
import { G as C, u as b, H as w, I as G } from "./index-D5rI4VW1.js";
import { _ as I } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/GridLayout-CM_7pNhD.css';const L = { key: 0 }, S = {
  key: 1,
  class: "grid-layout__highlight",
  "aria-hidden": "true"
}, D = "1728px", R = /* @__PURE__ */ m({
  __name: "GridLayout",
  props: {
    mode: { default: "container" },
    gutter: { default: "var(--gap-4, 16px)" },
    highlight: { type: Boolean, default: !1 },
    stretched: { type: Boolean, default: !1 }
  },
  setup(s) {
    const e = s, i = _(null), u = C(i), d = b(), t = a(
      () => e.mode === "viewport" ? d.breakpoint : u.breakpoint
    ), n = a(() => w[t.value]), p = a(() => t.value === "xs" || t.value === "s" ? "12px" : "24px"), c = a(() => ({
      "--grid-columns": String(n.value),
      "--grid-gutter": e.gutter,
      "--grid-layout-padding": p.value,
      "--grid-layout-max-width": e.stretched ? "none" : D
    }));
    return f(G, {
      breakpoint: t,
      columns: n
    }), (g, A) => (o(), r("div", {
      ref_key: "rootRef",
      ref: i,
      class: "grid-layout",
      style: y(c.value)
    }, [
      e.highlight ? (o(), r("div", L, v(t.value), 1)) : l("", !0),
      e.highlight ? (o(), r("div", S, [
        (o(!0), r(k, null, x(n.value, (h) => (o(), r("div", {
          key: h,
          class: "grid-layout__highlight-column"
        }))), 128))
      ])) : l("", !0),
      B(g.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), z = /* @__PURE__ */ I(R, [["__scopeId", "data-v-3a0fe633"]]);
export {
  z as default
};
