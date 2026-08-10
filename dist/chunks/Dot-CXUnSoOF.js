import { defineComponent as c, computed as r, openBlock as a, createElementBlock as n, normalizeStyle as l } from "vue";
import { _ as s } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Dot-CXgiQSF8.css';const p = /* @__PURE__ */ c({
  __name: "Dot",
  props: {
    color: {}
  },
  setup(t) {
    const o = t, e = r(() => ({
      "--dot-color": o.color === "accent" ? "hsl(var(--accent))" : `var(--color-${o.color}-500)`
    }));
    return (d, _) => (a(), n("span", {
      class: "dot",
      style: l(e.value),
      "aria-hidden": "true"
    }, null, 4));
  }
}), i = /* @__PURE__ */ s(p, [["__scopeId", "data-v-42e0722d"]]);
export {
  i as default
};
