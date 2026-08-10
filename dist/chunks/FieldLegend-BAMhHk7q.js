import { defineComponent as s, openBlock as t, createElementBlock as a, createElementVNode as c, createVNode as l, withCtx as o, renderSlot as p, createBlock as i, createTextVNode as _, toDisplayString as m, createCommentVNode as f } from "vue";
import n from "./Text-Cd35JtZQ.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldLegend-B5hiTNH0.css';const g = { class: "field-legend" }, h = { class: "field-legend-content" }, x = /* @__PURE__ */ s({
  __name: "FieldLegend",
  props: {
    description: {}
  },
  setup(r) {
    const e = r;
    return (d, y) => (t(), a("legend", g, [
      c("span", h, [
        l(n, {
          Element: "span",
          typography: "label-3",
          color: "default"
        }, {
          default: o(() => [
            p(d.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }),
        e.description ? (t(), i(n, {
          key: 0,
          Element: "span",
          color: "secondary"
        }, {
          default: o(() => [
            _(m(e.description), 1)
          ]),
          _: 1
        })) : f("", !0)
      ])
    ]));
  }
}), V = /* @__PURE__ */ u(x, [["__scopeId", "data-v-15a7591b"]]);
export {
  V as default
};
