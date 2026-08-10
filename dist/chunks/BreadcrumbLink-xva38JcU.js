import { defineComponent as o, openBlock as a, createBlock as n, resolveDynamicComponent as s, mergeProps as c, withCtx as m, renderSlot as l } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BreadcrumbLink-BXglpzrZ.css';const d = /* @__PURE__ */ o({
  inheritAttrs: !1,
  __name: "BreadcrumbLink",
  props: {
    Element: { default: "a" }
  },
  setup(t) {
    const r = t;
    return (e, i) => (a(), n(s(r.Element), c(e.$attrs, { class: "breadcrumb-link" }), {
      default: m(() => [
        l(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
}), _ = /* @__PURE__ */ p(d, [["__scopeId", "data-v-c4a5ba29"]]);
export {
  _ as default
};
