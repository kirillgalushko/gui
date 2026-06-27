import { openBlock as o, createElementBlock as p, createElementVNode as d, defineComponent as f, ref as b, computed as n, createBlock as a, mergeProps as k, withCtx as l, createVNode as x, withModifiers as _, unref as m } from "vue";
import { i as u } from "./IconAccessibleFilled-DFPdopZN.js";
import y from "./Action-fDi_LsEN.js";
import V from "./Input-F-KMt0Co.js";
import { _ as M } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PasswordInput-DVVSU3pE.css';const B = {}, I = {
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
  return o(), p("svg", I, t[0] || (t[0] = [
    d("path", { d: "M21 9q-3.6 4-9 4T3 9m0 6 2.5-3.8M21 14.976 18.508 11.2M9 17l.5-4m5.5 4-.5-4" }, null, -1)
  ]));
}
const P = /* @__PURE__ */ u(B, [["render", C]]), $ = {}, q = {
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
  return o(), p("svg", q, t[0] || (t[0] = [
    d("path", { d: "M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }, null, -1),
    d("path", { d: "M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" }, null, -1)
  ]));
}
const j = /* @__PURE__ */ u($, [["render", A]]), E = /* @__PURE__ */ f({
  inheritAttrs: !1,
  __name: "PasswordInput",
  props: {
    modelValue: {},
    maxWidth: { default: "100%" },
    disabled: { type: Boolean },
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    descriptionId: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: t }) {
    const e = r, c = t, i = b(!1), h = n(() => i.value ? "text" : "password"), w = n(() => i.value ? "Скрыть пароль" : "Показать пароль"), g = () => {
      e.disabled || (i.value = !i.value);
    }, v = (s) => {
      c("update:modelValue", String(s ?? ""));
    };
    return (s, N) => (o(), a(V, k(s.$attrs, {
      "model-value": e.modelValue,
      type: h.value,
      "max-width": e.maxWidth,
      disabled: e.disabled,
      description: e.description,
      "error-message": e.errorMessage,
      invalid: e.invalid,
      "description-id": e.descriptionId,
      "onUpdate:modelValue": v
    }), {
      rightAdornment: l(() => [
        x(y, {
          type: "button",
          "aria-label": w.value,
          "aria-pressed": i.value,
          disabled: e.disabled,
          class: "password-toggle",
          onClick: _(g, ["prevent"])
        }, {
          default: l(() => [
            i.value ? (o(), a(m(j), { key: 0 })) : (o(), a(m(P), { key: 1 }))
          ]),
          _: 1
        }, 8, ["aria-label", "aria-pressed", "disabled"])
      ]),
      _: 1
    }, 16, ["model-value", "type", "max-width", "disabled", "description", "error-message", "invalid", "description-id"]));
  }
}), z = /* @__PURE__ */ M(E, [["__scopeId", "data-v-aaa98e25"]]);
export {
  z as default
};
