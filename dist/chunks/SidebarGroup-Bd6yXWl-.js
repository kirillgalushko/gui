import { defineComponent as n, inject as i, ref as l, openBlock as t, createElementBlock as r, normalizeClass as p, unref as s, toDisplayString as d, createCommentVNode as _, createElementVNode as m, renderSlot as u } from "vue";
import { _ as b } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SidebarGroup-CMhax3y8.css';const f = {
  key: 0,
  class: "sidebar-group__label"
}, g = { class: "sidebar-group__content" }, v = /* @__PURE__ */ n({
  __name: "SidebarGroup",
  props: {
    label: {}
  },
  setup(a) {
    const e = a, o = i("sidebar-is-compact", l(!1));
    return (c, C) => (t(), r("section", {
      class: p(["sidebar-group", { "sidebar-group--compact": s(o) }])
    }, [
      e.label && !s(o) ? (t(), r("div", f, d(e.label), 1)) : _("", !0),
      m("div", g, [
        u(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), k = /* @__PURE__ */ b(v, [["__scopeId", "data-v-3c603e53"]]);
export {
  k as default
};
