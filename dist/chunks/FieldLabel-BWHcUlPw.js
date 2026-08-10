import { defineComponent as r, inject as n, computed as a, openBlock as d, createBlock as c, mergeProps as p, withCtx as m, renderSlot as f } from "vue";
import b from "./Text-Cd35JtZQ.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldLabel-q5H-1FV9.css';const v = /* @__PURE__ */ r({
  inheritAttrs: !1,
  __name: "FieldLabel",
  props: {
    htmlFor: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const l = t, e = n(
      "field-state",
      void 0
    ), s = a(
      () => l.invalid ?? (e == null ? void 0 : e.value.invalid) ?? !1
    ), i = a(
      () => l.disabled ?? (e == null ? void 0 : e.value.disabled) ?? !1
    );
    return (o, _) => (d(), c(b, p(o.$attrs, {
      for: l.htmlFor,
      Element: "label",
      typography: "label-2",
      color: "inherit",
      class: ["field-label", { invalid: s.value, disabled: i.value }]
    }), {
      default: m(() => [
        f(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["for", "class"]));
  }
}), F = /* @__PURE__ */ u(v, [["__scopeId", "data-v-07ebbca4"]]);
export {
  F as default
};
