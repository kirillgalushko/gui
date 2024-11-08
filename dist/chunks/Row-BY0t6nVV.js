import { defineComponent as l, openBlock as s, createElementBlock as r, normalizeClass as n, renderSlot as a } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Row-BHXQ3eCP.css';const c = /* @__PURE__ */ l({
  __name: "Row",
  props: {
    fullHeight: { type: Boolean },
    alignItems: {}
  },
  setup(o) {
    const e = o;
    return (t, i) => (s(), r("div", {
      class: n(["row", e.alignItems, { fullHeight: e.fullHeight }])
    }, [
      a(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _ = /* @__PURE__ */ p(c, [["__scopeId", "data-v-2955d817"]]);
export {
  _ as default
};
