import { defineComponent as r, openBlock as e, createElementBlock as n, createElementVNode as a, renderSlot as c, createBlock as m, unref as p, createCommentVNode as _, normalizeClass as l } from "vue";
import { d } from "./IconChevronRightOutline-B9UH_Yk2.js";
import { _ as i } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BaseMenuItem-DhZ3-P40.css';const u = {
  class: /* @__PURE__ */ l(["base-menu-item"])
}, f = { class: "base-menu-item-content" }, B = /* @__PURE__ */ r({
  __name: "BaseMenuItem",
  props: {
    showArrow: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (s, b) => (e(), n("button", u, [
      a("div", f, [
        c(s.$slots, "default", {}, void 0, !0)
      ]),
      t.showArrow ? (e(), m(p(d), { key: 0 })) : _("", !0)
    ]));
  }
}), v = /* @__PURE__ */ i(B, [["__scopeId", "data-v-97b5e76b"]]);
export {
  v as B
};
