import { defineComponent as s, openBlock as c, createElementBlock as p, mergeProps as a, renderSlot as u } from "vue";
const _ = /* @__PURE__ */ s({
  __name: "Button",
  props: {
    mode: {}
  },
  setup(o) {
    const e = o;
    return (t, n) => (c(), p("button", a(t.$attrs, {
      class: ["button", e.mode]
    }), [
      u(t.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), m = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, l = /* @__PURE__ */ m(_, [["__scopeId", "data-v-b58f2e67"]]);
export {
  l as Button
};
