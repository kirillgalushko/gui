import { defineComponent as l, computed as n, openBlock as d, createBlock as u, unref as c, mergeProps as s, withCtx as p, renderSlot as t, createElementBlock as i, createVNode as b, createCommentVNode as m } from "vue";
import f from "./Loader-CKtxu-pF.js";
import { A as h } from "./AsChild-C67btACu.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Button-BuVw1LzZ.css';const v = ["disabled", "aria-busy"], B = {
  key: 0,
  class: "button-loader"
}, _ = /* @__PURE__ */ l({
  inheritAttrs: !1,
  __name: "Button",
  props: {
    asChild: { type: Boolean },
    mode: { default: "default" },
    size: { default: "medium" },
    stretched: { type: Boolean },
    squared: { type: Boolean },
    rounded: { type: Boolean },
    isLoading: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(r) {
    const e = r, o = n(() => [
      "button",
      e.mode,
      e.size,
      {
        stretched: e.stretched,
        squared: e.squared,
        rounded: e.rounded,
        "with-loader": e.isLoading,
        "as-child": e.asChild,
        disabled: e.disabled
      }
    ]);
    return (a, C) => e.asChild ? (d(), u(c(h), s({ key: 0 }, a.$attrs, {
      class: o.value,
      disabled: e.disabled || void 0,
      "aria-disabled": e.disabled || void 0,
      "aria-busy": e.isLoading || void 0
    }), {
      default: p(() => [
        t(a.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled", "aria-busy"])) : (d(), i("button", s({ key: 1 }, a.$attrs, {
      disabled: e.disabled,
      "aria-busy": e.isLoading || void 0,
      class: o.value
    }), [
      t(a.$slots, "default", {}, void 0, !0),
      a.isLoading ? (d(), i("div", B, [
        b(f, { size: "var(--button-loader-size)" })
      ])) : m("", !0)
    ], 16, v));
  }
}), $ = /* @__PURE__ */ y(_, [["__scopeId", "data-v-4c016703"]]);
export {
  $ as default
};
