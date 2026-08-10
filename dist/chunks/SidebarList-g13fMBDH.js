import { defineComponent as t, openBlock as r, createElementBlock as a, normalizeClass as l, renderSlot as c } from "vue";
import { _ as i } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SidebarList-DY7bTHBh.css';const n = /* @__PURE__ */ t({
  __name: "SidebarList",
  props: {
    scrollable: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    return (s, d) => (r(), a("div", {
      class: l(["SidebarList", { "SidebarList--scrollable": o.scrollable }])
    }, [
      c(s.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _ = /* @__PURE__ */ i(n, [["__scopeId", "data-v-54f2f365"]]);
export {
  _ as default
};
