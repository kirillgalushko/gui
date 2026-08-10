import { defineComponent as v, mergeModels as m, useModel as p, inject as f, useId as _, computed as o, provide as b, openBlock as g, createElementBlock as h, mergeProps as B, renderSlot as q } from "vue";
import { r as y } from "./radioGroup-CQ7xOI09.js";
import { _ as G } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/RadioGroup-C7Xlqiy5.css';const M = ["aria-orientation", "aria-invalid", "aria-required", "data-disabled", "data-invalid"], V = /* @__PURE__ */ v({
  inheritAttrs: !1,
  __name: "RadioGroup",
  props: /* @__PURE__ */ m({
    name: {},
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    required: { type: Boolean },
    orientation: { default: "vertical" },
    mode: { default: "default" },
    stretched: { type: Boolean, default: !1 }
  }, {
    modelValue: { default: null },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const e = r, l = p(r, "modelValue"), a = f(
      "field-state",
      void 0
    ), s = _(), u = o(() => e.name ?? `radio-group-${s}`), d = o(
      () => !!e.disabled || !!(a != null && a.value.disabled)
    ), i = o(() => !!e.invalid || !!(a != null && a.value.invalid)), n = o(() => !!e.required), c = o(() => e.mode);
    return b(y, {
      model: l,
      name: u,
      disabled: d,
      invalid: i,
      required: n,
      mode: c,
      select: (t) => {
        d.value || (l.value = t);
      }
    }), (t, k) => (g(), h("div", B(t.$attrs, {
      class: [
        "radio-group",
        e.orientation,
        e.mode,
        {
          disabled: d.value,
          invalid: i.value,
          stretched: e.stretched
        }
      ],
      role: "radiogroup",
      "aria-orientation": e.orientation,
      "aria-invalid": i.value || void 0,
      "aria-required": n.value || void 0,
      "data-disabled": d.value || void 0,
      "data-invalid": i.value || void 0
    }), [
      q(t.$slots, "default", {}, void 0, !0)
    ], 16, M));
  }
}), R = /* @__PURE__ */ G(V, [["__scopeId", "data-v-c5e52ea1"]]);
export {
  R as default
};
