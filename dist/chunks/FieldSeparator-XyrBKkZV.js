import { defineComponent as r, openBlock as a, createElementBlock as s, createElementVNode as o, createBlock as n, withCtx as p, createTextVNode as d, toDisplayString as i, createCommentVNode as c } from "vue";
import m from "./Text-Cd35JtZQ.js";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldSeparator-pYbBMccc.css';const _ = { class: "field-separator" }, u = /* @__PURE__ */ r({
  __name: "FieldSeparator",
  props: {
    label: {}
  },
  setup(l) {
    const t = l;
    return (x, e) => (a(), s("div", _, [
      e[0] || (e[0] = o("span", { class: "field-separator-line" }, null, -1)),
      t.label ? (a(), n(m, {
        key: 0,
        Element: "span",
        typography: "label-3",
        color: "secondary",
        class: "field-separator-label"
      }, {
        default: p(() => [
          d(i(t.label), 1)
        ]),
        _: 1
      })) : c("", !0),
      e[1] || (e[1] = o("span", { class: "field-separator-line" }, null, -1))
    ]));
  }
}), B = /* @__PURE__ */ f(u, [["__scopeId", "data-v-7397d226"]]);
export {
  B as default
};
