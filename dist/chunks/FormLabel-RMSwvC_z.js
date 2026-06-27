import { defineComponent as r, openBlock as l, createBlock as a, mergeProps as s, withCtx as i, renderSlot as n } from "vue";
import p from "./Text-D1KvsXGq.js";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FormLabel-Dy5VFafe.css';const m = /* @__PURE__ */ r({
  inheritAttrs: !1,
  __name: "FormLabel",
  props: {
    htmlFor: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (o, c) => (l(), a(p, s(o.$attrs, {
      for: e.htmlFor,
      Element: "label",
      typography: "label-2",
      color: "inherit",
      class: ["form-label", { invalid: e.invalid, disabled: e.disabled }]
    }), {
      default: i(() => [
        n(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["for", "class"]));
  }
}), h = /* @__PURE__ */ d(m, [["__scopeId", "data-v-e961be31"]]);
export {
  h as default
};
