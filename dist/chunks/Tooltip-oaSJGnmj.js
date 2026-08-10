import { defineComponent as p, openBlock as a, createBlock as l, unref as d, mergeProps as c, withCtx as t, renderSlot as r } from "vue";
import { V as f } from "./floating-vue-CCtJ9iQJ.js";
import { _ as n } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tooltip-DZFTVgeJ.css';const i = /* @__PURE__ */ p({
  __name: "Tooltip",
  props: {
    mode: { default: "default" },
    delay: { default: () => ({ show: 0, hide: 0 }) },
    stretched: { type: Boolean, default: !1 }
  },
  setup(s) {
    const e = s;
    return (o, u) => (a(), l(d(f), c(o.$attrs, {
      delay: e.delay,
      arrowOverflow: !1,
      popperClass: e.mode === "contrast" ? "tooltip-contrast" : "tooltip-default",
      class: ["tooltip", e.mode, { "tooltip--stretched": e.stretched }]
    }), {
      default: t(() => [
        r(o.$slots, "default", {}, void 0, !0)
      ]),
      popper: t(() => [
        r(o.$slots, "popper", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["delay", "popperClass", "class"]));
  }
}), y = /* @__PURE__ */ n(i, [["__scopeId", "data-v-07d03cc5"]]);
export {
  y as default
};
