import { openBlock as t, createElementBlock as s, createElementVNode as n, defineComponent as k, computed as d, normalizeStyle as x, createVNode as m, mergeProps as _, Fragment as y, renderList as C, normalizeClass as V, createBlock as p, unref as u, withCtx as b, createTextVNode as B, toDisplayString as M, createCommentVNode as I } from "vue";
import { i as g } from "./IconAccessibleFilled-DFPdopZN.js";
import P from "./PasswordInput-BqMVvnxc.js";
import S from "./ProgressBar-Db8ln7iU.js";
import $ from "./Text-D1KvsXGq.js";
import { _ as N } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PasswordStrengthInput-CwgL7aYN.css';const W = {}, E = {
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
function j(i, r) {
  return t(), s("svg", E, r[0] || (r[0] = [
    n("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    n("path", { d: "m9 12 2 2 4-4" }, null, -1)
  ]));
}
const z = /* @__PURE__ */ g(W, [["render", j]]), G = {}, H = {
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
function T(i, r) {
  return t(), s("svg", H, r[0] || (r[0] = [
    n("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m7-2 4 4m0-4-4 4" }, null, -1)
  ]));
}
const A = /* @__PURE__ */ g(G, [["render", T]]), D = {
  key: 0,
  class: "password-strength-details"
}, F = { class: "password-strength-rules" }, L = { class: "password-strength-rule-icon" }, R = /* @__PURE__ */ k({
  inheritAttrs: !1,
  __name: "PasswordStrengthInput",
  props: {
    modelValue: {},
    rules: { default: () => [] },
    progress: {},
    progressSegments: { default: 4 },
    progressHeight: { default: "8px" },
    progressGap: { default: "var(--gap-1)" },
    weakColor: { default: "negative" },
    mediumColor: { default: "warning" },
    strongColor: { default: "positive" },
    maxWidth: { default: "100%" },
    disabled: { type: Boolean },
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    descriptionId: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: r }) {
    const e = i, h = r, c = d(() => e.rules.filter((o) => o.valid).length), a = d(() => typeof e.progress == "number" ? Math.min(100, Math.max(0, e.progress)) : e.rules.length ? c.value / e.rules.length * 100 : 0), f = d(() => a.value >= 75 ? e.strongColor : a.value >= 40 ? e.mediumColor : e.weakColor), w = (o) => {
      h("update:modelValue", o);
    };
    return (o, U) => (t(), s("div", {
      style: x({ maxWidth: e.maxWidth }),
      class: "password-strength"
    }, [
      m(P, _(o.$attrs, {
        "model-value": e.modelValue,
        "max-width": e.maxWidth,
        disabled: e.disabled,
        description: e.description,
        "error-message": e.errorMessage,
        invalid: e.invalid,
        "description-id": e.descriptionId,
        "onUpdate:modelValue": w
      }), null, 16, ["model-value", "max-width", "disabled", "description", "error-message", "invalid", "description-id"]),
      e.rules.length ? (t(), s("div", D, [
        m(S, {
          progress: a.value,
          color: f.value,
          segments: e.progressSegments,
          height: e.progressHeight,
          gap: e.progressGap
        }, null, 8, ["progress", "color", "segments", "height", "gap"]),
        n("ul", F, [
          (t(!0), s(y, null, C(e.rules, (l, v) => (t(), s("li", {
            key: l.id ?? v,
            class: V(["password-strength-rule", { valid: l.valid }])
          }, [
            n("span", L, [
              l.valid ? (t(), p(u(z), { key: 0 })) : (t(), p(u(A), { key: 1 }))
            ]),
            m($, {
              Element: "span",
              typography: "label-3",
              color: "inherit"
            }, {
              default: b(() => [
                B(M(l.label), 1)
              ]),
              _: 2
            }, 1024)
          ], 2))), 128))
        ])
      ])) : I("", !0)
    ], 4));
  }
}), Y = /* @__PURE__ */ N(R, [["__scopeId", "data-v-92ddbf13"]]);
export {
  Y as default
};
