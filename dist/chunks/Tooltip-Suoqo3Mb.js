import { defineComponent as s, openBlock as a, createBlock as l, unref as d, mergeProps as f, withCtx as t, renderSlot as r } from "vue";
import { V as n } from "./floating-vue-ORJ9AWNM.js";
import { _ as i } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tooltip-DuMFj_9Q.css';const c = /* @__PURE__ */ s({
  __name: "Tooltip",
  props: {
    mode: { default: "default" },
    delay: { default: () => ({ show: 0, hide: 0 }) }
  },
  setup(p) {
    const o = p;
    return (e, m) => (a(), l(d(n), f(e.$attrs, {
      delay: o.delay,
      arrowOverflow: !1,
      popperClass: o.mode === "contrast" ? "tooltip-contrast" : "tooltip-default",
      class: ["tooltip", o.mode]
    }), {
      default: t(() => [
        r(e.$slots, "default", {}, void 0, !0)
      ]),
      popper: t(() => [
        r(e.$slots, "popper", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["delay", "popperClass", "class"]));
  }
}), v = /* @__PURE__ */ i(c, [["__scopeId", "data-v-b085d1f8"]]);
export {
  v as default
};
