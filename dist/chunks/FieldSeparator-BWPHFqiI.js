import { defineComponent as r, openBlock as a, createElementBlock as s, createElementVNode as o, createBlock as n, withCtx as p, createTextVNode as i, toDisplayString as d, createCommentVNode as c } from "vue";
import f from "./Text-0p81GmwH.js";
import { _ as m } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldSeparator-DqMwLfnc.css';const _ = { class: "field-separator" }, u = /* @__PURE__ */ r({
  __name: "FieldSeparator",
  props: {
    label: {}
  },
  setup(l) {
    const t = l;
    return (b, e) => (a(), s("div", _, [
      e[0] || (e[0] = o("span", { class: "field-separator-line" }, null, -1)),
      t.label ? (a(), n(f, {
        key: 0,
        Element: "span",
        typography: "label-3",
        color: "secondary",
        class: "field-separator-label"
      }, {
        default: p(() => [
          i(d(t.label), 1)
        ]),
        _: 1
      })) : c("", !0),
      e[1] || (e[1] = o("span", { class: "field-separator-line" }, null, -1))
    ]));
  }
}), B = /* @__PURE__ */ m(u, [["__scopeId", "data-v-69bf6a7f"]]);
export {
  B as default
};
