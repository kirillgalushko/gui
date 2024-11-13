import { defineComponent as a, openBlock as d, createElementBlock as r, normalizeClass as s, renderSlot as n } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Badge-DjTpf00o.css';const l = /* @__PURE__ */ a({
  __name: "Badge",
  props: {
    mode: { default: "default" }
  },
  setup(e) {
    const o = e;
    return (t, p) => (d(), r("div", {
      class: s(["Badge", o.mode])
    }, [
      n(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), f = /* @__PURE__ */ c(l, [["__scopeId", "data-v-b4dd4370"]]);
export {
  f as default
};
