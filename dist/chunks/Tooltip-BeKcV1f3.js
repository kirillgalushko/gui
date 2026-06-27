import { defineComponent as s, openBlock as a, createBlock as l, unref as d, mergeProps as f, withCtx as e, renderSlot as r } from "vue";
import { V as n } from "./floating-vue-BeJTeIgr.js";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tooltip-B3PgH_nw.css';const i = /* @__PURE__ */ s({
  __name: "Tooltip",
  props: {
    mode: { default: "default" }
  },
  setup(p) {
    const t = p;
    return (o, m) => (a(), l(d(n), f(o.$attrs, {
      arrowOverflow: !1,
      popperClass: t.mode === "contrast" ? "tooltip-contrast" : "tooltip-default",
      class: ["tooltip", t.mode]
    }), {
      default: e(() => [
        r(o.$slots, "default", {}, void 0, !0)
      ]),
      popper: e(() => [
        r(o.$slots, "popper", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["popperClass", "class"]));
  }
}), C = /* @__PURE__ */ c(i, [["__scopeId", "data-v-ab9d9293"]]);
export {
  C as default
};
