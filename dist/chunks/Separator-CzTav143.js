import { defineComponent as r, openBlock as t, createElementBlock as a, normalizeClass as n } from "vue";
import { _ as s } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Separator-CLcmW-0Q.css';const c = /* @__PURE__ */ r({
  __name: "Separator",
  props: {
    direction: {}
  },
  setup(e) {
    const o = e;
    return (p, _) => (t(), a("div", {
      class: n(["separator", o.direction])
    }, null, 2));
  }
}), m = /* @__PURE__ */ s(c, [["__scopeId", "data-v-f210564b"]]);
export {
  m as default
};
