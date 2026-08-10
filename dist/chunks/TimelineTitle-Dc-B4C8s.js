import { defineComponent as n, openBlock as l, createBlock as r, resolveDynamicComponent as i, withCtx as s, renderSlot as a } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/TimelineTitle-BIZgumI6.css';const m = /* @__PURE__ */ n({
  __name: "TimelineTitle",
  props: {
    Element: { default: "h3" }
  },
  setup(e) {
    const t = e;
    return (o, p) => (l(), r(i(t.Element), { class: "timeline-title" }, {
      default: s(() => [
        a(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
}), f = /* @__PURE__ */ c(m, [["__scopeId", "data-v-2657c8a7"]]);
export {
  f as default
};
