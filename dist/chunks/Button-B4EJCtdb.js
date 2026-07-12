import { defineComponent as a, openBlock as t, createElementBlock as d, mergeProps as r, renderSlot as n, createVNode as l, createCommentVNode as i } from "vue";
import u from "./Loader-DEKZZM6p.js";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Button-DprtXeHp.css';const c = ["disabled"], m = {
  key: 0,
  class: "button-loader"
}, f = /* @__PURE__ */ a({
  __name: "Button",
  props: {
    mode: { default: "default" },
    size: { default: "large" },
    stretched: { type: Boolean },
    squared: { type: Boolean },
    rounded: { type: Boolean },
    isLoading: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(s) {
    const e = s;
    return (o, _) => (t(), d("button", r(o.$attrs, {
      disabled: e.disabled,
      class: ["button", e.mode, e.size, {
        stretched: e.stretched,
        squared: e.squared,
        rounded: e.rounded,
        "with-loader": e.isLoading,
        disabled: e.disabled
      }]
    }), [
      n(o.$slots, "default", {}, void 0, !0),
      o.isLoading ? (t(), d("div", m, [
        l(u, { size: "var(--button-loader-size)" })
      ])) : i("", !0)
    ], 16, c));
  }
}), y = /* @__PURE__ */ p(f, [["__scopeId", "data-v-d038f751"]]);
export {
  y as default
};
