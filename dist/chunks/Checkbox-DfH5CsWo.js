import { defineComponent as f, mergeModels as k, useModel as x, useAttrs as y, useId as B, ref as g, computed as r, onMounted as M, watch as _, openBlock as c, createElementBlock as p, normalizeStyle as V, createElementVNode as d, normalizeClass as I, withDirectives as C, mergeProps as D, vModelCheckbox as $, renderSlot as w, createCommentVNode as A, createVNode as N } from "vue";
import R from "./FieldHelper-D0cSvQKv.js";
import { _ as W } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Checkbox-DyUoPogY.css';const z = { class: "checkbox-box" }, E = ["disabled", "aria-invalid", "aria-describedby", "aria-checked"], H = {
  key: 0,
  class: "checkbox-label"
}, L = /* @__PURE__ */ f({
  inheritAttrs: !1,
  __name: "Checkbox",
  props: /* @__PURE__ */ k({
    disabled: { type: Boolean },
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    indeterminate: { type: Boolean },
    descriptionId: {},
    maxWidth: { default: "100%" }
  }, {
    modelValue: { type: [Boolean, Array] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = s, n = x(s, "modelValue"), u = y(), m = B(), o = g(), b = r(() => e.invalid ? !!e.errorMessage : !!e.description), a = r(() => {
      if (b.value)
        return e.descriptionId ?? `${m}-helper`;
    }), v = r(() => {
      const t = u["aria-describedby"], i = typeof t == "string" ? t : void 0;
      return a.value ? [i, a.value].filter(Boolean).join(" ") : i;
    }), l = () => {
      o.value && (o.value.indeterminate = !!e.indeterminate);
    };
    return M(l), _(() => e.indeterminate, l), (t, i) => (c(), p("div", {
      style: V({ maxWidth: e.maxWidth }),
      class: "checkbox-field"
    }, [
      d("label", {
        class: I(["checkbox", { disabled: e.disabled, invalid: e.invalid }])
      }, [
        d("span", z, [
          C(d("input", D(t.$attrs, {
            ref_key: "inputRef",
            ref: o,
            "onUpdate:modelValue": i[0] || (i[0] = (h) => n.value = h),
            class: "checkbox-input",
            type: "checkbox",
            disabled: e.disabled,
            "aria-invalid": e.invalid || void 0,
            "aria-describedby": v.value,
            "aria-checked": e.indeterminate ? "mixed" : void 0
          }), null, 16, E), [
            [$, n.value]
          ]),
          i[1] || (i[1] = d("span", {
            class: "checkbox-control",
            "aria-hidden": "true"
          }, [
            d("svg", {
              class: "checkbox-check",
              viewBox: "0 0 14 14",
              fill: "none"
            }, [
              d("path", { d: "M3 7.2L5.7 9.8L11 4.2" })
            ]),
            d("span", { class: "checkbox-minus" })
          ], -1))
        ]),
        t.$slots.default ? (c(), p("span", H, [
          w(t.$slots, "default", {}, void 0, !0)
        ])) : A("", !0)
      ], 2),
      N(R, {
        description: e.description,
        "error-message": e.errorMessage,
        invalid: e.invalid,
        disabled: e.disabled,
        "description-id": a.value
      }, null, 8, ["description", "error-message", "invalid", "disabled", "description-id"])
    ], 4));
  }
}), P = /* @__PURE__ */ W(L, [["__scopeId", "data-v-0dbcdd62"]]);
export {
  P as default
};
