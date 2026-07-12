import { defineComponent as s, inject as p, onMounted as a, openBlock as i, createBlock as c, mergeProps as u, withCtx as m, renderSlot as d, createTextVNode as f, toDisplayString as _ } from "vue";
import { B } from "./BaseMenuItem-CPkHIYH3.js";
const C = /* @__PURE__ */ s({
  __name: "SelectOption",
  props: {
    showArrow: { type: Boolean },
    label: {},
    value: {}
  },
  setup(r) {
    const e = p("select"), o = r, t = { label: o.label, value: o.value }, l = () => {
      e == null || e.selectOption(t);
    };
    return a(() => {
      e == null || e.registerOption(t);
    }), (n, b) => (i(), c(B, u(n.$attrs, { onClick: l }), {
      default: m(() => [
        d(n.$slots, "default", {}, () => [
          f(_(o.label), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
export {
  C as _
};
