import { defineComponent as s, inject as p, onMounted as a, openBlock as c, createBlock as i, mergeProps as u, withCtx as m, renderSlot as d, createTextVNode as f, toDisplayString as B } from "vue";
import { B as _ } from "./BaseMenuItem-BgZg369U.js";
const C = /* @__PURE__ */ s({
  __name: "SelectOption",
  props: {
    showArrow: { type: Boolean },
    selected: { type: Boolean },
    role: {},
    label: {},
    value: {}
  },
  setup(l) {
    const e = p("select"), o = l, t = { label: o.label, value: o.value }, r = () => {
      e == null || e.selectOption(t);
    };
    return a(() => {
      e == null || e.registerOption(t);
    }), (n, b) => (c(), i(_, u(n.$attrs, { onClick: r }), {
      default: m(() => [
        d(n.$slots, "default", {}, () => [
          f(B(o.label), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
export {
  C as _
};
