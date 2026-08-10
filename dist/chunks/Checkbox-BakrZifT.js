import { defineComponent as f, mergeModels as k, useModel as x, useAttrs as y, useId as B, ref as g, computed as r, onMounted as M, watch as _, openBlock as c, createElementBlock as p, normalizeStyle as V, createElementVNode as t, normalizeClass as I, withDirectives as C, mergeProps as D, vModelCheckbox as $, renderSlot as w, createCommentVNode as A, createVNode as N } from "vue";
import R from "./FieldHelper-C_7J0GKU.js";
import { _ as W } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Checkbox-V17NjE51.css';const z = { class: "checkbox-box" }, E = ["disabled", "aria-invalid", "aria-describedby", "aria-checked"], H = {
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
      const d = u["aria-describedby"], i = typeof d == "string" ? d : void 0;
      return a.value ? [i, a.value].filter(Boolean).join(" ") : i;
    }), l = () => {
      o.value && (o.value.indeterminate = !!e.indeterminate);
    };
    return M(l), _(() => e.indeterminate, l), (d, i) => (c(), p("div", {
      style: V({ maxWidth: e.maxWidth }),
      class: "checkbox-field"
    }, [
      t("label", {
        class: I([
          "checkbox",
          { disabled: e.disabled, invalid: e.invalid }
        ])
      }, [
        t("span", z, [
          C(t("input", D(d.$attrs, {
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
          i[1] || (i[1] = t("span", {
            class: "checkbox-control",
            "aria-hidden": "true"
          }, [
            t("svg", {
              class: "checkbox-check",
              viewBox: "0 0 14 14",
              fill: "none"
            }, [
              t("path", { d: "M3 7.2L5.7 9.8L11 4.2" })
            ]),
            t("span", { class: "checkbox-minus" })
          ], -1))
        ]),
        d.$slots.default ? (c(), p("span", H, [
          w(d.$slots, "default", {}, void 0, !0)
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
}), P = /* @__PURE__ */ W(L, [["__scopeId", "data-v-231b2b75"]]);
export {
  P as default
};
