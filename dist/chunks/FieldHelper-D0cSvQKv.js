import { defineComponent as p, computed as l, openBlock as t, createBlock as i, Transition as s, withCtx as o, createElementBlock as c, normalizeClass as m, normalizeStyle as f, createElementVNode as d, createVNode as _, createTextVNode as u, toDisplayString as g, createCommentVNode as h } from "vue";
import v from "./Text-0p81GmwH.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FieldHelper-D215TmLG.css';const b = { class: "field-helper-content" }, x = { class: "field-helper-message-box" }, k = /* @__PURE__ */ p({
  __name: "FieldHelper",
  props: {
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    gap: { default: "var(--gap-1)" },
    disabled: { type: Boolean },
    descriptionId: {}
  },
  setup(n) {
    const e = n, r = l(() => e.invalid ? e.errorMessage : e.description), a = l(() => e.invalid ? "error" : "description");
    return (B, C) => (t(), i(s, { name: "field-helper" }, {
      default: o(() => [
        r.value ? (t(), c("div", {
          key: 0,
          class: m(["field-helper", a.value, { disabled: e.disabled }]),
          style: f({ "--field-helper-gap": e.gap })
        }, [
          d("div", b, [
            d("div", x, [
              _(s, {
                name: "field-helper-message",
                mode: "out-in"
              }, {
                default: o(() => [
                  (t(), i(v, {
                    id: e.descriptionId,
                    key: a.value,
                    Element: "p",
                    typography: "label-1",
                    color: "inherit"
                  }, {
                    default: o(() => [
                      u(g(r.value), 1)
                    ]),
                    _: 1
                  }, 8, ["id"]))
                ]),
                _: 1
              })
            ])
          ])
        ], 6)) : h("", !0)
      ]),
      _: 1
    }));
  }
}), I = /* @__PURE__ */ y(k, [["__scopeId", "data-v-5bef2a2b"]]);
export {
  I as default
};
