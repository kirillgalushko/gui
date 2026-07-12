import { defineComponent as o, openBlock as n, createBlock as a, resolveDynamicComponent as s, mergeProps as c, withCtx as m, renderSlot as l } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BreadcrumbLink-CgjNS8tt.css';const d = /* @__PURE__ */ o({
  inheritAttrs: !1,
  __name: "BreadcrumbLink",
  props: {
    Element: { default: "a" }
  },
  setup(t) {
    const r = t;
    return (e, i) => (n(), a(s(r.Element), c(e.$attrs, { class: "breadcrumb-link" }), {
      default: m(() => [
        l(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
}), _ = /* @__PURE__ */ p(d, [["__scopeId", "data-v-be3bef24"]]);
export {
  _ as default
};
