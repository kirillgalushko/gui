import { defineComponent as t, openBlock as p, createBlock as s, unref as a, mergeProps as n, withCtx as r, renderSlot as e } from "vue";
import { k as d } from "./floating-vue-DX5lYCEg.js";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Dropdown-ByuYqq5G.css';const l = /* @__PURE__ */ t({
  __name: "Dropdown",
  setup(_) {
    return (o, c) => (p(), s(a(d), n(o.$attrs, {
      arrowOverflow: !1,
      class: ["dropdown"]
    }), {
      default: r(() => [
        e(o.$slots, "default", {}, void 0, !0)
      ]),
      popper: r(() => [
        e(o.$slots, "popper", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
}), w = /* @__PURE__ */ f(l, [["__scopeId", "data-v-a7bc8501"]]);
export {
  w as default
};
