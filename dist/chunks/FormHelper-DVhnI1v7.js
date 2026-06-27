import { defineComponent as n, computed as t, openBlock as a, createElementBlock as l, normalizeClass as p, normalizeStyle as d, createVNode as c, Transition as m, withCtx as i, createBlock as u, createTextVNode as f, toDisplayString as _, createCommentVNode as g } from "vue";
import v from "./Text-D1KvsXGq.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FormHelper--CVDJCF7.css';const b = /* @__PURE__ */ n({
  __name: "FormHelper",
  props: {
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    gap: { default: "var(--gap-1)" },
    disabled: { type: Boolean },
    descriptionId: {}
  },
  setup(s) {
    const e = s, r = t(() => e.invalid ? e.errorMessage : e.description), o = t(() => e.invalid ? "error" : "description");
    return (h, x) => r.value ? (a(), l("div", {
      key: 0,
      class: p(["form-helper", o.value, { disabled: e.disabled }]),
      style: d({ marginTop: e.gap })
    }, [
      c(m, {
        name: "form-helper-message",
        mode: "out-in"
      }, {
        default: i(() => [
          (a(), u(v, {
            id: e.descriptionId,
            key: o.value,
            Element: "p",
            typography: "label-3",
            color: "inherit"
          }, {
            default: i(() => [
              f(_(r.value), 1)
            ]),
            _: 1
          }, 8, ["id"]))
        ]),
        _: 1
      })
    ], 6)) : g("", !0);
  }
}), T = /* @__PURE__ */ y(b, [["__scopeId", "data-v-b874a5be"]]);
export {
  T as default
};
