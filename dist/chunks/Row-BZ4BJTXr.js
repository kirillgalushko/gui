import { defineComponent as l, openBlock as s, createElementBlock as r, normalizeClass as a, renderSlot as n } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Row-CoHcL3rY.css';const c = /* @__PURE__ */ l({
  __name: "Row",
  props: {
    fullHeight: { type: Boolean },
    alignItems: {}
  },
  setup(o) {
    const e = o;
    return (t, i) => (s(), r("div", {
      class: a(["row", e.alignItems, { fullHeight: e.fullHeight }])
    }, [
      n(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _ = /* @__PURE__ */ p(c, [["__scopeId", "data-v-59f0ba93"]]);
export {
  _ as default
};
