import { defineComponent as m, ref as g, computed as a, provide as f, openBlock as e, createElementBlock as t, normalizeStyle as _, Fragment as h, renderList as k, createCommentVNode as v, renderSlot as y } from "vue";
import { i as B, j as b, k as C } from "./index-CAcsj2N5.js";
import { g as x } from "./context-BN9FvkeW.js";
import { _ as w } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/GridLayout-CUEPPMKU.css';const L = {
  key: 0,
  class: "grid-layout__highlight",
  "aria-hidden": "true"
}, S = /* @__PURE__ */ m({
  __name: "GridLayout",
  props: {
    mode: { default: "container" },
    gutter: { default: "var(--gap-4, 16px)" },
    highlight: { type: Boolean, default: !1 }
  },
  setup(s) {
    const o = s, n = g(null), l = B(n), u = b(), i = a(
      () => o.mode === "viewport" ? u.breakpoint : l.breakpoint
    ), r = a(() => C[i.value]), d = a(() => ({
      "--grid-columns": String(r.value),
      "--grid-gutter": o.gutter
    }));
    return f(x, {
      breakpoint: i,
      columns: r
    }), (p, G) => (e(), t("div", {
      ref_key: "rootRef",
      ref: n,
      class: "grid-layout",
      style: _(d.value)
    }, [
      o.highlight ? (e(), t("div", L, [
        (e(!0), t(h, null, k(r.value, (c) => (e(), t("div", {
          key: c,
          class: "grid-layout__highlight-column"
        }))), 128))
      ])) : v("", !0),
      y(p.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), E = /* @__PURE__ */ w(S, [["__scopeId", "data-v-49b26742"]]);
export {
  E as default
};
