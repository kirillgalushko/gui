import { defineComponent as o, openBlock as a, createElementBlock as n, normalizeClass as p } from "vue";
import { _ as r } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Gap-CybweH_b.css';const c = /* @__PURE__ */ o({
  __name: "Gap",
  props: {
    direction: {},
    default: {}
  },
  setup(t) {
    const e = t;
    return (s, l) => (a(), n("div", {
      class: p(["gap", e.direction, { [`gap-${e.default}`]: !!e.default }])
    }, null, 2));
  }
}), i = /* @__PURE__ */ r(c, [["__scopeId", "data-v-123b2524"]]);
export {
  i as default
};
