import { defineComponent as o, openBlock as r, createElementBlock as a, normalizeClass as s } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Separator-DT8im6DD.css';const n = /* @__PURE__ */ o({
  __name: "Separator",
  props: {
    direction: {},
    stretched: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t;
    return (p, l) => (r(), a("div", {
      class: s(["separator", e.direction, { stretched: e.stretched }])
    }, null, 2));
  }
}), i = /* @__PURE__ */ c(n, [["__scopeId", "data-v-135cb924"]]);
export {
  i as default
};
