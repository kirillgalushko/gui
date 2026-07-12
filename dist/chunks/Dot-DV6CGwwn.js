import { defineComponent as r, computed as c, openBlock as n, createElementBlock as a, normalizeStyle as l } from "vue";
import { _ as s } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Dot-CBEM6rLk.css';const p = /* @__PURE__ */ r({
  __name: "Dot",
  props: {
    color: {}
  },
  setup(o) {
    const t = o, e = c(() => ({
      "--dot-color": `var(--color-${t.color}-500)`
    }));
    return (_, d) => (n(), a("span", {
      class: "dot",
      style: l(e.value),
      "aria-hidden": "true"
    }, null, 4));
  }
}), f = /* @__PURE__ */ s(p, [["__scopeId", "data-v-1001f803"]]);
export {
  f as default
};
