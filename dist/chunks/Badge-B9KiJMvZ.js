import { defineComponent as a, openBlock as r, createElementBlock as s, normalizeClass as d, renderSlot as n } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Badge-Wjlg6Gkb.css';const l = /* @__PURE__ */ a({
  __name: "Badge",
  props: {
    mode: { default: "default" }
  },
  setup(e) {
    const o = e;
    return (t, p) => (r(), s("div", {
      class: d(["Badge", o.mode])
    }, [
      n(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _ = /* @__PURE__ */ c(l, [["__scopeId", "data-v-39d2bfca"]]);
export {
  _ as default
};
