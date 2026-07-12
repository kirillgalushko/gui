import { openBlock as i, createElementBlock as m, createElementVNode as n, defineComponent as v, ref as b, computed as d, createBlock as a, mergeProps as k, withCtx as l, createVNode as x, withModifiers as y, unref as u } from "vue";
import { i as p } from "./IconAccessibleFilled-DFPdopZN.js";
import _ from "./Action-BU2zTSfG.js";
import V from "./Input-DGngOTDn.js";
import { _ as M } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PasswordInput-B2mv937a.css';const B = {}, I = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function C(r, t) {
  return i(), m("svg", I, t[0] || (t[0] = [
    n("path", { d: "M21 9q-3.6 4-9 4T3 9m0 6 2.5-3.8M21 14.976 18.508 11.2M9 17l.5-4m5.5 4-.5-4" }, null, -1)
  ]));
}
const P = /* @__PURE__ */ p(B, [["render", C]]), $ = {}, q = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function A(r, t) {
  return i(), m("svg", q, t[0] || (t[0] = [
    n("path", { d: "M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }, null, -1),
    n("path", { d: "M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" }, null, -1)
  ]));
}
const j = /* @__PURE__ */ p($, [["render", A]]), E = /* @__PURE__ */ v({
  inheritAttrs: !1,
  __name: "PasswordInput",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    maxWidth: { default: "100%" },
    disabled: { type: Boolean },
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    descriptionId: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: t }) {
    const e = r, c = t, o = b(!1), h = d(() => o.value ? "text" : "password"), w = d(() => o.value ? "Скрыть пароль" : "Показать пароль"), g = () => {
      e.disabled || (o.value = !o.value);
    }, f = (s) => {
      c("update:modelValue", String(s ?? ""));
    };
    return (s, F) => (i(), a(V, k(s.$attrs, {
      "model-value": e.modelValue,
      type: h.value,
      "max-width": e.maxWidth,
      "auto-focus": e.autoFocus,
      disabled: e.disabled,
      description: e.description,
      "error-message": e.errorMessage,
      invalid: e.invalid,
      "description-id": e.descriptionId,
      "onUpdate:modelValue": f
    }), {
      rightAdornment: l(() => [
        x(_, {
          type: "button",
          "aria-label": w.value,
          "aria-pressed": o.value,
          disabled: e.disabled,
          class: "password-toggle",
          onClick: y(g, ["prevent"])
        }, {
          default: l(() => [
            o.value ? (i(), a(u(j), { key: 0 })) : (i(), a(u(P), { key: 1 }))
          ]),
          _: 1
        }, 8, ["aria-label", "aria-pressed", "disabled"])
      ]),
      _: 1
    }, 16, ["model-value", "type", "max-width", "auto-focus", "disabled", "description", "error-message", "invalid", "description-id"]));
  }
}), U = /* @__PURE__ */ M(E, [["__scopeId", "data-v-e142298c"]]);
export {
  U as default
};
