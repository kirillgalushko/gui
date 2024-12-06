import { defineComponent as s, openBlock as a, createBlock as l, unref as f, mergeProps as d, withCtx as t, renderSlot as p } from "vue";
import { V as c } from "./floating-vue-DKQfbVsr.js";
import { _ as n } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tooltip-B3QxjEaO.css';const i = /* @__PURE__ */ s({
  __name: "Tooltip",
  props: {
    mode: { default: "default" }
  },
  setup(r) {
    const e = r;
    return (o, m) => (a(), l(f(c), d(o.$attrs, {
      arrowOverflow: !1,
      popperClass: e.mode === "accent" ? "tooltip-accent" : "tooltip-default",
      class: ["tooltip", e.mode]
    }), {
      default: t(() => [
        p(o.$slots, "default", {}, void 0, !0)
      ]),
      popper: t(() => [
        p(o.$slots, "popper", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["popperClass", "class"]));
  }
}), C = /* @__PURE__ */ n(i, [["__scopeId", "data-v-a363f9fd"]]);
export {
  C as default
};
