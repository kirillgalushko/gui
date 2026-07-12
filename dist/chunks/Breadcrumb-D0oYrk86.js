import { defineComponent as t, openBlock as l, createElementBlock as o, mergeProps as n, renderSlot as s } from "vue";
const c = ["aria-label"], d = /* @__PURE__ */ t({
  inheritAttrs: !1,
  __name: "Breadcrumb",
  props: {
    label: { default: "breadcrumb" }
  },
  setup(r) {
    const a = r;
    return (e, p) => (l(), o("nav", n(e.$attrs, {
      "aria-label": a.label
    }), [
      s(e.$slots, "default")
    ], 16, c));
  }
});
export {
  d as default
};
