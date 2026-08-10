import { defineComponent as r, inject as t, openBlock as i, createElementBlock as s, normalizeClass as m, unref as l } from "vue";
import { t as p, a as c } from "./types-GWw4JXek.js";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/TimelineSeparator-BvJ70DVc.css';const f = /* @__PURE__ */ r({
  __name: "TimelineSeparator",
  props: {
    dashed: { type: Boolean, default: !1 }
  },
  setup(a) {
    const n = a, e = t(p), o = t(c);
    if (!e || !o)
      throw new Error("TimelineSeparator must be used inside TimelineItem");
    return (u, _) => (i(), s("span", {
      class: m([
        "timeline-separator",
        l(e).orientation.value,
        { dashed: n.dashed }
      ]),
      "aria-hidden": "true"
    }, null, 2));
  }
}), T = /* @__PURE__ */ d(f, [["__scopeId", "data-v-ea56cc1a"]]);
export {
  T as default
};
