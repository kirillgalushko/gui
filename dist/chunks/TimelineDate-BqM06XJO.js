import { defineComponent as a, openBlock as m, createBlock as n, resolveDynamicComponent as i, withCtx as d, renderSlot as r } from "vue";
import { _ as l } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/TimelineDate-DjJfyo57.css';const s = /* @__PURE__ */ a({
  __name: "TimelineDate",
  props: {
    datetime: {},
    Element: { default: "time" }
  },
  setup(t) {
    const e = t;
    return (o, c) => (m(), n(i(e.Element), {
      class: "timeline-date",
      datetime: e.Element === "time" ? e.datetime : void 0
    }, {
      default: d(() => [
        r(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["datetime"]));
  }
}), f = /* @__PURE__ */ l(s, [["__scopeId", "data-v-9dca09fd"]]);
export {
  f as default
};
