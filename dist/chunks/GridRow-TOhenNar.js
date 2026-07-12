import { defineComponent as t, openBlock as a, createElementBlock as s, normalizeStyle as p, renderSlot as n } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/GridRow-4IdfZk84.css';const c = /* @__PURE__ */ t({
  __name: "GridRow",
  props: {
    rowGap: { default: "0" }
  },
  setup(o) {
    const e = o;
    return (r, l) => (a(), s("div", {
      class: "grid-row",
      style: p({ "--grid-row-gap": e.rowGap })
    }, [
      n(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), m = /* @__PURE__ */ d(c, [["__scopeId", "data-v-a0901134"]]);
export {
  m as default
};
