import { defineComponent as a, mergeModels as d, useModel as n, computed as r, provide as u, openBlock as m, createElementBlock as i, renderSlot as c } from "vue";
import { b as p } from "./baseMenuRadioGroup-3n2s4QQe.js";
import { s as f } from "./menuSelection-Btvx5qA4.js";
const M = { role: "group" }, R = /* @__PURE__ */ a({
  __name: "BaseMenuRadioGroup",
  props: /* @__PURE__ */ d({
    disabled: { type: Boolean }
  }, {
    modelValue: { default: null },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const s = l, e = n(l, "modelValue"), t = r(() => !!s.disabled);
    return u(p, {
      model: e,
      disabled: t,
      select: (o) => {
        e.value = f(e.value, o, t.value);
      }
    }), (o, b) => (m(), i("div", M, [
      c(o.$slots, "default")
    ]));
  }
});
export {
  R as _
};
