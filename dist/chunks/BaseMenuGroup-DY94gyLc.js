import { defineComponent as t, openBlock as s, createElementBlock as n, renderSlot as p } from "vue";
import { _ as a } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BaseMenuGroup-B5oSXtUP.css';const c = ["role"], u = /* @__PURE__ */ t({
  __name: "BaseMenuGroup",
  props: {
    role: { default: "group" }
  },
  setup(e) {
    const o = e;
    return (r, l) => (s(), n("div", {
      class: "base-menu-group",
      role: o.role
    }, [
      p(r.$slots, "default", {}, void 0, !0)
    ], 8, c));
  }
}), m = /* @__PURE__ */ a(u, [["__scopeId", "data-v-1d36ef69"]]);
export {
  m as B
};
