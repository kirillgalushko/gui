import { defineComponent as l, openBlock as o, createElementBlock as s, normalizeClass as c, createElementVNode as i, renderSlot as r, createBlock as m, unref as d, createCommentVNode as n } from "vue";
import { d as u } from "./IconChevronRightOutline-B9UH_Yk2.js";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BaseMenuItem-6NU6AVyI.css';const _ = ["role"], f = { class: "base-menu-item-content" }, h = {
  key: 0,
  class: "base-menu-item-trailing",
  "aria-hidden": "true"
}, B = /* @__PURE__ */ l({
  __name: "BaseMenuItem",
  props: {
    showArrow: { type: Boolean },
    selected: { type: Boolean },
    role: {}
  },
  setup(a) {
    const e = a;
    return (t, w) => (o(), s("button", {
      type: "button",
      class: c(["base-menu-item", { selected: e.selected }]),
      role: e.role ?? "menuitem"
    }, [
      i("div", f, [
        r(t.$slots, "default", {}, void 0, !0)
      ]),
      t.$slots.trailing || e.showArrow ? (o(), s("div", h, [
        r(t.$slots, "trailing", {}, () => [
          e.showArrow ? (o(), m(d(u), { key: 0 })) : n("", !0)
        ], !0)
      ])) : n("", !0)
    ], 10, _));
  }
}), v = /* @__PURE__ */ p(B, [["__scopeId", "data-v-5943ca8f"]]);
export {
  v as B
};
