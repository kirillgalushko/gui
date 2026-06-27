import { defineComponent as B, mergeModels as I, ref as v, useModel as _, useAttrs as M, useId as V, computed as r, openBlock as $, createElementBlock as x, normalizeStyle as D, createElementVNode as d, normalizeClass as W, renderSlot as f, withDirectives as k, mergeProps as S, vModelDynamic as z, createVNode as C } from "vue";
import E from "./FormHelper-DVhnI1v7.js";
import { _ as H } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Input-CFMmfN3q.css';const N = ["disabled", "aria-invalid", "aria-describedby"], P = /* @__PURE__ */ B({
  inheritAttrs: !1,
  __name: "Input",
  props: /* @__PURE__ */ I({
    maxWidth: { default: "100%" },
    disabled: { type: Boolean },
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    descriptionId: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const a = v(), l = v(), c = _(s, "modelValue"), e = s, g = M(), b = V(), h = r(() => {
      const i = (p) => {
        var u, m;
        return (u = p.value) != null && u.clientWidth ? ((m = p.value) == null ? void 0 : m.clientWidth) + 20 : 12;
      }, t = i(a), o = i(l);
      return `padding-left: ${t}px; padding-right: ${o}px;`;
    }), y = r(() => e.invalid ? !!e.errorMessage : !!e.description), n = r(() => {
      if (y.value)
        return e.descriptionId ?? `${b}-helper`;
    }), A = r(() => {
      const i = g["aria-describedby"], t = typeof i == "string" ? i : void 0;
      return n.value ? [t, n.value].filter(Boolean).join(" ") : t;
    });
    return (i, t) => ($(), x("div", {
      style: D({ maxWidth: e.maxWidth }),
      class: "input-field"
    }, [
      d("div", {
        class: W(["input-container", { disabled: e.disabled }])
      }, [
        d("div", {
          ref_key: "leftAdornment",
          ref: a,
          class: "adornment left-adornment"
        }, [
          f(i.$slots, "leftAdornment", {}, void 0, !0)
        ], 512),
        k(d("input", S(i.$attrs, {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => c.value = o),
          disabled: e.disabled,
          style: h.value,
          class: ["input", { invalid: e.invalid }],
          "aria-invalid": e.invalid || void 0,
          "aria-describedby": A.value
        }), null, 16, N), [
          [z, c.value]
        ]),
        d("div", {
          ref_key: "rightAdornment",
          ref: l,
          class: "adornment right-adornment"
        }, [
          f(i.$slots, "rightAdornment", {}, void 0, !0)
        ], 512)
      ], 2),
      C(E, {
        description: e.description,
        "error-message": e.errorMessage,
        invalid: e.invalid,
        disabled: e.disabled,
        "description-id": n.value
      }, null, 8, ["description", "error-message", "invalid", "disabled", "description-id"])
    ], 4));
  }
}), F = /* @__PURE__ */ H(P, [["__scopeId", "data-v-7fbc6fe6"]]);
export {
  F as default
};
