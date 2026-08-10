import { defineComponent as r, inject as i, computed as l, openBlock as d, createBlock as n, mergeProps as p, withCtx as c, renderSlot as f } from "vue";
import m from "./Text-Cd35JtZQ.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldDescription-Bu9Ufw7a.css';const _ = /* @__PURE__ */ r({
  inheritAttrs: !1,
  __name: "FieldDescription",
  props: {
    disabled: { type: Boolean }
  },
  setup(o) {
    const s = o, e = i(
      "field-state",
      void 0
    ), a = l(
      () => s.disabled ?? (e == null ? void 0 : e.value.disabled) ?? !1
    );
    return (t, b) => (d(), n(m, p(t.$attrs, {
      Element: "p",
      typography: "label-1",
      color: "secondary",
      class: ["field-description", { disabled: a.value }]
    }), {
      default: c(() => [
        f(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x = /* @__PURE__ */ u(_, [["__scopeId", "data-v-ea96270a"]]);
export {
  x as default
};
