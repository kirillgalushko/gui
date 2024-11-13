import { defineComponent as t, openBlock as p, createBlock as s, unref as a, mergeProps as n, withCtx as e, renderSlot as r } from "vue";
import { k as d } from "./floating-vue-BjNiP6LF.js";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Dropdown-DBQj9CtI.css';const l = /* @__PURE__ */ t({
  __name: "Dropdown",
  setup(_) {
    return (o, m) => (p(), s(a(d), n(o.$attrs, {
      arrowOverflow: !1,
      class: ["dropdown"]
    }), {
      default: e(() => [
        r(o.$slots, "default", {}, void 0, !0)
      ]),
      popper: e(() => [
        r(o.$slots, "popper", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
}), w = /* @__PURE__ */ f(l, [["__scopeId", "data-v-4bbe819e"]]);
export {
  w as default
};
