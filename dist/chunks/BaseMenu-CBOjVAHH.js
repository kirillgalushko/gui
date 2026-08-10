import { defineComponent as n, ref as m, computed as u, openBlock as d, createElementBlock as c, mergeProps as p, renderSlot as f } from "vue";
import { D as i, r as l } from "./menuSizing-BRqr-zw7.js";
import { _ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BaseMenu-9Qc8tLyc.css';const h = /* @__PURE__ */ n({
  __name: "BaseMenu",
  props: {
    width: { default: "auto" },
    maxWidth: { default: i }
  },
  setup(s, { expose: r }) {
    const e = s, t = m(), a = u(() => ({
      width: l(e.width),
      maxWidth: e.maxWidth
    }));
    return r({ menuRef: t }), (o, v) => (d(), c("div", p(o.$attrs, {
      ref_key: "menuRef",
      ref: t,
      class: "base-menu",
      role: "menu",
      style: a.value
    }), [
      f(o.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), W = /* @__PURE__ */ _(h, [["__scopeId", "data-v-3c75c676"]]);
export {
  W as B
};
