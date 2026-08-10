import { defineComponent as n, openBlock as s, createElementBlock as o, mergeProps as i, renderSlot as r, createCommentVNode as d, createElementVNode as c } from "vue";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SidebarSubItem-kHVUeWg2.css';const u = ["aria-current"], m = {
  key: 0,
  class: "sidebar-sub-item__icon",
  "aria-hidden": "true"
}, p = { class: "sidebar-sub-item__label" }, _ = /* @__PURE__ */ n({
  inheritAttrs: !1,
  __name: "SidebarSubItem",
  props: {
    selected: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, b) => (s(), o("button", i(e.$attrs, {
      class: [
        "sidebar-sub-item",
        { "sidebar-sub-item--selected": t.selected }
      ],
      "aria-current": t.selected ? "page" : void 0,
      type: "button"
    }), [
      e.$slots.icon ? (s(), o("span", m, [
        r(e.$slots, "icon", {}, void 0, !0)
      ])) : d("", !0),
      c("span", p, [
        r(e.$slots, "default", {}, void 0, !0)
      ])
    ], 16, u));
  }
}), S = /* @__PURE__ */ l(_, [["__scopeId", "data-v-4b010588"]]);
export {
  S as default
};
