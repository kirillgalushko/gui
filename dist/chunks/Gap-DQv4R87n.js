import { defineComponent as n, computed as a, openBlock as s, createElementBlock as c, normalizeClass as i, normalizeStyle as p } from "vue";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Gap-CBVFpAvV.css';const d = /* @__PURE__ */ n({
  __name: "Gap",
  props: {
    direction: {},
    size: {},
    default: {}
  },
  setup(t) {
    const e = t, o = a(() => e.direction ?? "vertical"), r = a(() => e.size ?? e.default ?? 1);
    return (m, u) => (s(), c("div", {
      "aria-hidden": "true",
      class: i(["gap", o.value]),
      style: p({ "--gap-size": `var(--gap-${r.value})` })
    }, null, 6));
  }
}), v = /* @__PURE__ */ l(d, [["__scopeId", "data-v-b358b76a"]]);
export {
  v as default
};
