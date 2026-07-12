import { defineComponent as t, openBlock as o, createElementBlock as r, createVNode as l, withCtx as n, renderSlot as d } from "vue";
import a from "./Text-0p81GmwH.js";
import { _ as s } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldLegend-D7YdrFRJ.css';const _ = { class: "field-legend" }, c = /* @__PURE__ */ t({
  __name: "FieldLegend",
  setup(p) {
    return (e, f) => (o(), r("legend", _, [
      l(a, {
        Element: "span",
        typography: "label-3",
        color: "default"
      }, {
        default: n(() => [
          d(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]));
  }
}), g = /* @__PURE__ */ s(c, [["__scopeId", "data-v-877526e1"]]);
export {
  g as default
};
