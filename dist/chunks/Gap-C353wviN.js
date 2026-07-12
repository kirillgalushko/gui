import { defineComponent as n, computed as t, openBlock as s, createElementBlock as c, normalizeClass as i, normalizeStyle as p } from "vue";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Gap-CSOZCq_I.css';const d = /* @__PURE__ */ n({
  __name: "Gap",
  props: {
    direction: {},
    size: {},
    default: {}
  },
  setup(a) {
    const e = a, o = t(() => e.direction ?? "vertical"), r = t(() => e.size ?? e.default ?? 1);
    return (m, u) => (s(), c("div", {
      "aria-hidden": "true",
      class: i(["gap", o.value]),
      style: p({ "--gap-size": `var(--gap-${r.value})` })
    }, null, 6));
  }
}), v = /* @__PURE__ */ l(d, [["__scopeId", "data-v-103ffd4b"]]);
export {
  v as default
};
