import { defineComponent as p, ref as a, openBlock as l, createElementBlock as i, mergeProps as d, createElementVNode as s, renderSlot as r } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Picker-_OvMASSd.css';const _ = { class: "picker-text" }, m = { class: "picker-icon" }, u = /* @__PURE__ */ p({
  __name: "Picker",
  props: {
    size: { default: "large" },
    stretched: { type: Boolean }
  },
  setup(n, { expose: c }) {
    const t = n, o = a(null);
    return c({
      elementRef: o
    }), (e, k) => (l(), i("button", d({
      ref_key: "elementRef",
      ref: o
    }, e.$attrs, {
      type: "button",
      class: ["picker", t.size, { stretched: t.stretched }]
    }), [
      s("span", _, [
        r(e.$slots, "default", {}, void 0, !0)
      ]),
      s("span", m, [
        r(e.$slots, "icon", {}, void 0, !0)
      ])
    ], 16));
  }
}), v = /* @__PURE__ */ f(u, [["__scopeId", "data-v-4372befb"]]);
export {
  v as default
};
