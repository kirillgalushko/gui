import { openBlock as s, createElementBlock as l, createElementVNode as n, defineComponent as T, ref as b, computed as a, normalizeStyle as h, createVNode as d, mergeProps as I, Transition as S, withCtx as f, Fragment as P, renderList as $, normalizeClass as N, createBlock as v, unref as w, createTextVNode as E, toDisplayString as W, createCommentVNode as H } from "vue";
import { i as _ } from "./IconAccessibleFilled-DFPdopZN.js";
import R from "./PasswordInput-DOVLZtoA.js";
import j from "./ProgressBar-CdTuLZI-.js";
import z from "./Text-Cd35JtZQ.js";
import { _ as G } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PasswordStrengthInput-DdRtyj1_.css';const L = {}, A = {
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
function D(u, r) {
  return s(), l("svg", A, r[0] || (r[0] = [
    n("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    n("path", { d: "m9 12 2 2 4-4" }, null, -1)
  ]));
}
const O = /* @__PURE__ */ _(L, [["render", D]]), U = {}, q = {
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
function J(u, r) {
  return s(), l("svg", q, r[0] || (r[0] = [
    n("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m7-2 4 4m0-4-4 4" }, null, -1)
  ]));
}
const K = /* @__PURE__ */ _(U, [["render", J]]), Q = {
  key: 0,
  class: "password-strength-details"
}, X = { class: "password-strength-details-content" }, Y = { class: "password-strength-progress" }, Z = { class: "password-strength-rules" }, ee = { class: "password-strength-rule-icon" }, te = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PasswordStrengthInput",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    rules: { default: () => [] },
    progress: {},
    progressSegments: { default: 4 },
    progressHeight: { default: "8px" },
    progressGap: { default: "var(--gap-1)" },
    maxWidth: { default: "100%" },
    disabled: { type: Boolean },
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    descriptionId: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: r }) {
    const e = u, x = r, c = b(!1), y = a(
      () => e.rules.filter((t) => t.valid).length
    ), i = a(() => e.rules.length), k = a(() => (e.modelValue ?? "").length > 0), V = a(
      () => e.rules.length > 0 && (c.value || k.value)
    ), m = a(() => typeof e.progress == "number" ? Math.min(i.value, Math.max(0, e.progress)) : i.value ? y.value : 0), B = a(() => {
      const t = i.value ? m.value / i.value : 0;
      return t > 0.75 ? "positive" : t > 0.5 ? "warning" : t > 0.25 ? "danger" : "negative";
    }), M = (t) => {
      x("update:modelValue", t);
    }, C = () => {
      c.value = !0;
    }, F = (t) => {
      const p = t.currentTarget, o = t.relatedTarget;
      p instanceof HTMLElement && o instanceof Node && p.contains(o) || (c.value = !1);
    };
    return (t, p) => (s(), l("div", {
      style: h({ maxWidth: e.maxWidth }),
      class: "password-strength",
      onFocusin: C,
      onFocusout: F
    }, [
      d(R, I(t.$attrs, {
        "model-value": e.modelValue,
        "max-width": e.maxWidth,
        "auto-focus": e.autoFocus,
        disabled: e.disabled,
        description: e.description,
        "error-message": e.errorMessage,
        invalid: e.invalid,
        "description-id": e.descriptionId,
        "onUpdate:modelValue": M
      }), null, 16, ["model-value", "max-width", "auto-focus", "disabled", "description", "error-message", "invalid", "description-id"]),
      d(S, { name: "password-strength-details" }, {
        default: f(() => [
          V.value ? (s(), l("div", Q, [
            n("div", X, [
              n("div", Y, [
                d(j, {
                  progress: m.value,
                  color: B.value,
                  segments: e.progressSegments,
                  height: e.progressHeight,
                  gap: e.progressGap,
                  max: i.value
                }, null, 8, ["progress", "color", "segments", "height", "gap", "max"])
              ]),
              n("ul", Z, [
                (s(!0), l(P, null, $(e.rules, (o, g) => (s(), l("li", {
                  key: o.id ?? g,
                  class: N(["password-strength-rule", { valid: o.valid }]),
                  style: h({ "--rule-enter-delay": `${g * 34}ms` })
                }, [
                  n("span", ee, [
                    o.valid ? (s(), v(w(O), { key: 0 })) : (s(), v(w(K), { key: 1 }))
                  ]),
                  d(z, {
                    Element: "span",
                    typography: "label-1",
                    color: "inherit"
                  }, {
                    default: f(() => [
                      E(W(o.label), 1)
                    ]),
                    _: 2
                  }, 1024)
                ], 6))), 128))
              ])
            ])
          ])) : H("", !0)
        ]),
        _: 1
      })
    ], 36));
  }
}), ie = /* @__PURE__ */ G(te, [["__scopeId", "data-v-ea368072"]]);
export {
  ie as default
};
