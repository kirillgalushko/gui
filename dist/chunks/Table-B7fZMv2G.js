import { defineComponent as t, openBlock as a, createElementBlock as s, normalizeClass as l, createElementVNode as n, mergeProps as c, renderSlot as p } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Table-Ds0TaJkL.css';const m = /* @__PURE__ */ t({
  __name: "Table",
  props: {
    border: { type: Boolean }
  },
  setup(o) {
    const r = o;
    return (e, _) => (a(), s("div", {
      class: l(["table-container", { border: r.border }])
    }, [
      n("table", c(e.$attrs, { class: "table" }), [
        p(e.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 2));
  }
}), f = /* @__PURE__ */ d(m, [["__scopeId", "data-v-d812aa0a"]]);
export {
  f as default
};
