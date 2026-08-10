import { defineComponent as a, ref as l, openBlock as p, createElementBlock as d, mergeProps as i, createElementVNode as s, renderSlot as r } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Picker-CfQkgxUs.css';const m = { class: "picker-text" }, u = { class: "picker-icon" }, _ = /* @__PURE__ */ a({
  __name: "Picker",
  props: {
    size: { default: "large" },
    mode: { default: "default" },
    stretched: { type: Boolean }
  },
  setup(c, { expose: n }) {
    const e = c, o = l(null);
    return n({
      elementRef: o
    }), (t, k) => (p(), d("button", i({
      ref_key: "elementRef",
      ref: o
    }, t.$attrs, {
      type: "button",
      class: ["picker", e.mode, e.size, { stretched: e.stretched }]
    }), [
      s("span", m, [
        r(t.$slots, "default", {}, void 0, !0)
      ]),
      s("span", u, [
        r(t.$slots, "icon", {}, void 0, !0)
      ])
    ], 16));
  }
}), v = /* @__PURE__ */ f(_, [["__scopeId", "data-v-c6eb59e8"]]);
export {
  v as default
};
