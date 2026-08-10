import { defineComponent as e, provide as n, openBlock as p, createElementBlock as s, mergeProps as a, renderSlot as u } from "vue";
import { b as i } from "./context-DwmrHjvl.js";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ButtonGroup-DWk-1vRF.css';const l = /* @__PURE__ */ e({
  __name: "ButtonGroup",
  props: {
    orientation: { default: "horizontal" }
  },
  setup(r) {
    const o = r;
    return n(i, o), (t, m) => (p(), s("div", a(t.$attrs, {
      class: ["button-group", o.orientation],
      role: "group"
    }), [
      u(t.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), v = /* @__PURE__ */ c(l, [["__scopeId", "data-v-19c65847"]]);
export {
  v as default
};
