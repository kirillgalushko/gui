import { defineComponent as a, openBlock as s, createElementBlock as r, normalizeClass as c, renderSlot as l } from "vue";
import { _ as n } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Stack-BVl4yIbi.css';const p = /* @__PURE__ */ a({
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
      class: c([
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
      l(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), f = /* @__PURE__ */ n(p, [["__scopeId", "data-v-9c2a4164"]]);
export {
  f as default
};
