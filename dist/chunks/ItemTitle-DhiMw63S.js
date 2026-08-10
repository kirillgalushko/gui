import { defineComponent as o, openBlock as s, createBlock as r, withCtx as i, renderSlot as p } from "vue";
import a from "./Text-Cd35JtZQ.js";
import { _ as n } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ItemTitle-Lpfi245H.css';const m = /* @__PURE__ */ o({
  __name: "ItemTitle",
  props: {
    Element: { default: "div" },
    ellipsis: { type: Boolean, default: !0 }
  },
  setup(t) {
    const l = t;
    return (e, f) => (s(), r(a, {
      Element: l.Element,
      typography: "label-2",
      color: "default",
      ellipsis: e.ellipsis,
      class: "item-title"
    }, {
      default: i(() => [
        p(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["Element", "ellipsis"]));
  }
}), _ = /* @__PURE__ */ n(m, [["__scopeId", "data-v-152143f0"]]);
export {
  _ as default
};
