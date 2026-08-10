import { defineComponent as n, inject as a, computed as i, openBlock as p, createElementBlock as s, normalizeClass as c } from "vue";
import { b as u } from "./context-DwmrHjvl.js";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ButtonGroupSeparator-DOoEgClY.css';const _ = ["aria-orientation"], m = /* @__PURE__ */ n({
  __name: "ButtonGroupSeparator",
  props: {
    orientation: {}
  },
  setup(r) {
    const o = r, e = a(u, {
      orientation: "horizontal"
    }), t = i(() => o.orientation ? o.orientation : e.orientation === "horizontal" ? "vertical" : "horizontal");
    return (f, d) => (p(), s("div", {
      class: c(["button-group-separator", t.value]),
      role: "separator",
      "aria-orientation": t.value
    }, null, 10, _));
  }
}), z = /* @__PURE__ */ l(m, [["__scopeId", "data-v-ea7ae8e9"]]);
export {
  z as default
};
