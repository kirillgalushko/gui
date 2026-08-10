import { defineComponent as t, inject as a, ref as o, openBlock as r, createElementBlock as c, normalizeClass as i, unref as n, renderSlot as d } from "vue";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SidebarSubList-Cb6UsEeP.css';const p = /* @__PURE__ */ t({
  __name: "SidebarSubList",
  setup(m) {
    const e = a("sidebar-is-compact", o(!1));
    return (s, _) => (r(), c("div", {
      class: i(["sidebar-sub-list", { "sidebar-sub-list--compact": n(e) }])
    }, [
      d(s.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), b = /* @__PURE__ */ l(p, [["__scopeId", "data-v-70ae982c"]]);
export {
  b as default
};
