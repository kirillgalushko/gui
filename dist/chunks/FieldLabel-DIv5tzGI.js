import { defineComponent as r, inject as d, computed as a, openBlock as n, createBlock as c, mergeProps as p, withCtx as f, renderSlot as m } from "vue";
import u from "./Text-0p81GmwH.js";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldLabel-CmzbPU-D.css';const b = /* @__PURE__ */ r({
  inheritAttrs: !1,
  __name: "FieldLabel",
  props: {
    htmlFor: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const l = t, e = d("field-state", void 0), s = a(() => l.invalid ?? (e == null ? void 0 : e.value.invalid) ?? !1), i = a(() => l.disabled ?? (e == null ? void 0 : e.value.disabled) ?? !1);
    return (o, _) => (n(), c(u, p(o.$attrs, {
      for: l.htmlFor,
      Element: "label",
      typography: "label-2",
      color: "inherit",
      class: ["field-label", { invalid: s.value, disabled: i.value }]
    }), {
      default: f(() => [
        m(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["for", "class"]));
  }
}), F = /* @__PURE__ */ v(b, [["__scopeId", "data-v-c746d4f5"]]);
export {
  F as default
};
