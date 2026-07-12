import { defineComponent as e, inject as a, computed as i, openBlock as p, createElementBlock as s, normalizeClass as c } from "vue";
import { b as u } from "./context-DwmrHjvl.js";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ButtonGroupSeparator-C0Bf9KKS.css';const _ = ["aria-orientation"], m = /* @__PURE__ */ e({
  __name: "ButtonGroupSeparator",
  props: {
    orientation: {}
  },
  setup(r) {
    const o = r, n = a(u, { orientation: "horizontal" }), t = i(() => o.orientation ? o.orientation : n.orientation === "horizontal" ? "vertical" : "horizontal");
    return (d, f) => (p(), s("div", {
      class: c(["button-group-separator", t.value]),
      role: "separator",
      "aria-orientation": t.value
    }, null, 10, _));
  }
}), z = /* @__PURE__ */ l(m, [["__scopeId", "data-v-22dea69c"]]);
export {
  z as default
};
