import { defineComponent as g, mergeModels as v, ref as p, useModel as h, computed as y, openBlock as _, createElementBlock as b, normalizeStyle as A, normalizeClass as x, createElementVNode as o, renderSlot as c, withDirectives as V, mergeProps as W, vModelDynamic as $ } from "vue";
import { _ as k } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Input-BuvP6aox.css';const M = ["disabled"], B = /* @__PURE__ */ g({
  __name: "Input",
  props: /* @__PURE__ */ v({
    maxWidth: { default: "100%" },
    disabled: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const r = p(), a = p(), i = h(l, "modelValue"), n = l, f = y(() => {
      const e = (s) => {
        var m, u;
        return (m = s.value) != null && m.clientWidth ? ((u = s.value) == null ? void 0 : u.clientWidth) + 20 : 12;
      }, t = e(r), d = e(a);
      return `padding-left: ${t}px; padding-right: ${d}px;`;
    });
    return (e, t) => (_(), b("div", {
      style: A({ maxWidth: n.maxWidth }),
      class: x(["input-container", { disabled: n.disabled }])
    }, [
      o("div", {
        ref_key: "leftAdornment",
        ref: r,
        class: "adornment left-adornment"
      }, [
        c(e.$slots, "leftAdornment", {}, void 0, !0)
      ], 512),
      V(o("input", W(e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (d) => i.value = d),
        disabled: n.disabled,
        style: f.value,
        class: ["input"]
      }), null, 16, M), [
        [$, i.value]
      ]),
      o("div", {
        ref_key: "rightAdornment",
        ref: a,
        class: "adornment right-adornment"
      }, [
        c(e.$slots, "rightAdornment", {}, void 0, !0)
      ], 512)
    ], 6));
  }
}), z = /* @__PURE__ */ k(B, [["__scopeId", "data-v-702c678b"]]);
export {
  z as default
};
