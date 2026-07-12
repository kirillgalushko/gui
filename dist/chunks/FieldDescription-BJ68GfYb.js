import { defineComponent as a, inject as i, computed as l, openBlock as d, createBlock as c, mergeProps as n, withCtx as p, renderSlot as f } from "vue";
import m from "./Text-0p81GmwH.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldDescription-B1xRiGEn.css';const _ = /* @__PURE__ */ a({
  inheritAttrs: !1,
  __name: "FieldDescription",
  props: {
    disabled: { type: Boolean }
  },
  setup(o) {
    const s = o, e = i("field-state", void 0), r = l(() => s.disabled ?? (e == null ? void 0 : e.value.disabled) ?? !1);
    return (t, b) => (d(), c(m, n(t.$attrs, {
      Element: "p",
      typography: "label-1",
      color: "secondary",
      class: ["field-description", { disabled: r.value }]
    }), {
      default: p(() => [
        f(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x = /* @__PURE__ */ u(_, [["__scopeId", "data-v-f55c26d3"]]);
export {
  x as default
};
