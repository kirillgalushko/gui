import { defineComponent as s, ref as t, openBlock as n, createElementBlock as a, mergeProps as c, renderSlot as m } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BaseMenu-D5EOZw9l.css';const _ = /* @__PURE__ */ s({
  __name: "BaseMenu",
  setup(f, { expose: r }) {
    const e = t();
    return r({ menuRef: e }), (o, u) => (n(), a("div", c(o.$attrs, {
      ref_key: "menuRef",
      ref: e,
      class: "base-menu"
    }), [
      m(o.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), i = /* @__PURE__ */ p(_, [["__scopeId", "data-v-533c29da"]]);
export {
  i as B
};
