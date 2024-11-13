import { defineComponent as a, openBlock as s, createElementBlock as r, normalizeClass as l, renderSlot as n } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Stack-D_1nuBzW.css';const p = /* @__PURE__ */ a({
  __name: "Stack",
  props: {
    direction: {},
    gap: {},
    fullHeight: { type: Boolean },
    alignItems: {},
    stretched: { type: Boolean }
  },
  setup(o) {
    const e = o;
    return (t, i) => (s(), r("div", {
      class: l([
        "stack",
        e.direction,
        e.alignItems,
        {
          [`gap-${e.gap}`]: !!t.gap,
          fullHeight: e.fullHeight,
          stretched: e.stretched
        }
      ])
    }, [
      n(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), m = /* @__PURE__ */ c(p, [["__scopeId", "data-v-9bfafded"]]);
export {
  m as default
};
