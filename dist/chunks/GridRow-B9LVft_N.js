import { defineComponent as t, openBlock as a, createElementBlock as s, normalizeStyle as p, renderSlot as d } from "vue";
import { _ as n } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/GridRow-BxZJpU7C.css';const c = /* @__PURE__ */ t({
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
      d(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), m = /* @__PURE__ */ n(c, [["__scopeId", "data-v-8bd73c52"]]);
export {
  m as default
};
