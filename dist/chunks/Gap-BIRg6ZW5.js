import { defineComponent as a, openBlock as o, createElementBlock as n, normalizeClass as p } from "vue";
import { _ as r } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Gap-DNYkXNqo.css';const c = /* @__PURE__ */ a({
  __name: "Gap",
  props: {
    direction: {},
    default: {}
  },
  setup(t) {
    const e = t;
    return (s, l) => (o(), n("div", {
      class: p(["gap", e.direction, { [`gap-${e.default}`]: !!e.default }])
    }, null, 2));
  }
}), i = /* @__PURE__ */ r(c, [["__scopeId", "data-v-a2e764d3"]]);
export {
  i as default
};
