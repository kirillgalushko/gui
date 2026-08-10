import { defineComponent as i, mergeModels as n, useModel as r, openBlock as c, createElementBlock as m, normalizeClass as u, withDirectives as p, createElementVNode as t, mergeProps as f, vModelCheckbox as b } from "vue";
import { _ as h } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Switch-ChR03JTH.css';const w = ["disabled"], _ = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "Switch",
  props: /* @__PURE__ */ n({
    disabled: { type: Boolean, default: !1 },
    size: { default: "medium" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const s = l, a = r(l, "modelValue");
    return (o, e) => (c(), m("label", {
      class: u(["switch", s.size, { disabled: s.disabled }])
    }, [
      p(t("input", f(o.$attrs, {
        "onUpdate:modelValue": e[0] || (e[0] = (d) => a.value = d),
        class: "switch-input",
        type: "checkbox",
        role: "switch",
        disabled: s.disabled
      }), null, 16, w), [
        [b, a.value]
      ]),
      e[1] || (e[1] = t("span", {
        class: "switch-track",
        "aria-hidden": "true"
      }, [
        t("span", { class: "switch-thumb" })
      ], -1))
    ], 2));
  }
}), V = /* @__PURE__ */ h(_, [["__scopeId", "data-v-ee901b2d"]]);
export {
  V as default
};
