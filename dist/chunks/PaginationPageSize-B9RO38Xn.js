import { defineComponent as p, computed as f, openBlock as o, createElementBlock as r, createVNode as n, withCtx as i, createTextVNode as g, toDisplayString as _, Fragment as v, renderList as b, createBlock as h } from "vue";
import S from "./Select-CqhuFd5o.js";
import { _ as z } from "./SelectOption.vue_vue_type_script_setup_true_lang-D4f4BsRf.js";
import x from "./Text-Cd35JtZQ.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PaginationPageSize-BUPSsH5N.css';const N = ["aria-label"], k = /* @__PURE__ */ p({
  __name: "PaginationPageSize",
  props: {
    value: {},
    options: { default: () => [5, 10] },
    label: { default: "Строк на странице" },
    size: { default: "small" },
    mode: { default: "default" }
  },
  emits: ["change"],
  setup(s, { emit: u }) {
    const e = s, c = u, m = f(
      () => [.../* @__PURE__ */ new Set([...e.options, e.value])].filter((a) => Number.isInteger(a) && a > 0).sort((a, t) => a - t)
    ), d = (a) => {
      const t = Number(a.value);
      Number.isInteger(t) && t > 0 && t !== e.value && c("change", t);
    };
    return (a, t) => (o(), r("div", {
      class: "pagination-page-size",
      role: "group",
      "aria-label": e.label
    }, [
      n(x, {
        Element: "span",
        typography: "subtitle-1",
        color: "secondary"
      }, {
        default: i(() => [
          g(_(e.label), 1)
        ]),
        _: 1
      }),
      n(S, {
        value: String(e.value),
        label: String(e.value),
        size: e.size,
        mode: e.mode,
        onChange: d
      }, {
        default: i(() => [
          (o(!0), r(v, null, b(m.value, (l) => (o(), h(z, {
            key: l,
            value: String(l),
            label: String(l)
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["value", "label", "size", "mode"])
    ], 8, N));
  }
}), E = /* @__PURE__ */ y(k, [["__scopeId", "data-v-1f2e3574"]]);
export {
  E as default
};
