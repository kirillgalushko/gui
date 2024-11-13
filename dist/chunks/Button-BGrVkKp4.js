import { defineComponent as a, openBlock as t, createElementBlock as d, mergeProps as r, renderSlot as n, createVNode as l, createCommentVNode as i } from "vue";
import c from "./Loader-DEKZZM6p.js";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Button-C7Htgx2_.css';const u = ["disabled"], m = {
  key: 0,
  class: "button-loader"
}, _ = /* @__PURE__ */ a({
  __name: "Button",
  props: {
    mode: { default: "default" },
    stretched: { type: Boolean },
    squared: { type: Boolean },
    isLoading: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(s) {
    const e = s;
    return (o, f) => (t(), d("button", r(o.$attrs, {
      disabled: e.disabled,
      class: ["button", e.mode, {
        stretched: e.stretched,
        squared: e.squared,
        "with-loader": e.isLoading,
        disabled: e.disabled
      }]
    }), [
      n(o.$slots, "default", {}, void 0, !0),
      o.isLoading ? (t(), d("div", m, [
        l(c)
      ])) : i("", !0)
    ], 16, u));
  }
}), y = /* @__PURE__ */ p(_, [["__scopeId", "data-v-c63ee874"]]);
export {
  y as default
};
