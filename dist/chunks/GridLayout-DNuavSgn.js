import { defineComponent as h, ref as m, computed as a, provide as f, openBlock as t, createElementBlock as o, normalizeStyle as y, toDisplayString as v, createCommentVNode as l, Fragment as k, renderList as x, renderSlot as B } from "vue";
import { Y as C, a as b, Z as w, _ as L } from "./index-BQgYVE5h.js";
import { _ as S } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/GridLayout-BWVhrkin.css';const D = { key: 0 }, G = {
  key: 1,
  class: "grid-layout__highlight",
  "aria-hidden": "true"
}, I = "1728px", R = /* @__PURE__ */ h({
  __name: "GridLayout",
  props: {
    mode: { default: "container" },
    gutter: { default: "var(--gap-4, 16px)" },
    highlight: { type: Boolean, default: !1 },
    stretched: { type: Boolean, default: !1 }
  },
  setup(s) {
    const e = s, i = m(null), d = C(i), u = b(), r = a(
      () => e.mode === "viewport" ? u.breakpoint : d.breakpoint
    ), n = a(() => w[r.value]), p = a(
      () => r.value === "xs" ? "12px" : "24px"
    ), c = a(() => ({
      "--grid-columns": String(n.value),
      "--grid-gutter": e.gutter,
      "--grid-layout-padding": p.value,
      "--grid-layout-max-width": e.stretched ? "none" : I
    }));
    return f(L, {
      breakpoint: r,
      columns: n
    }), (g, A) => (t(), o("div", {
      ref_key: "rootRef",
      ref: i,
      class: "grid-layout",
      style: y(c.value)
    }, [
      e.highlight ? (t(), o("div", D, v(r.value), 1)) : l("", !0),
      e.highlight ? (t(), o("div", G, [
        (t(!0), o(k, null, x(n.value, (_) => (t(), o("div", {
          key: _,
          class: "grid-layout__highlight-column"
        }))), 128))
      ])) : l("", !0),
      B(g.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), z = /* @__PURE__ */ S(R, [["__scopeId", "data-v-771d7030"]]);
export {
  z as default
};
