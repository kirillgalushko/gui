import { defineComponent as g, mergeModels as v, ref as u, useModel as h, computed as y, openBlock as A, createElementBlock as _, normalizeStyle as x, createElementVNode as o, renderSlot as p, withDirectives as V, mergeProps as W, vModelDynamic as $ } from "vue";
import { _ as k } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Input-DdND52XA.css';const M = /* @__PURE__ */ g({
  __name: "Input",
  props: /* @__PURE__ */ v({
    maxWidth: { default: "100%" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(r) {
    const d = u(), l = u(), a = h(r, "modelValue"), c = r, f = y(() => {
      const e = (i) => {
        var s, m;
        return (s = i.value) != null && s.clientWidth ? ((m = i.value) == null ? void 0 : m.clientWidth) + 20 : 12;
      }, t = e(d), n = e(l);
      return `padding-left: ${t}px; padding-right: ${n}px;`;
    });
    return (e, t) => (A(), _("div", {
      style: x({ maxWidth: c.maxWidth }),
      class: "input-container"
    }, [
      o("div", {
        ref_key: "leftAdornment",
        ref: d,
        class: "adornment left-adornment"
      }, [
        p(e.$slots, "leftAdornment", {}, void 0, !0)
      ], 512),
      V(o("input", W(e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (n) => a.value = n),
        style: f.value,
        class: ["input"]
      }), null, 16), [
        [$, a.value]
      ]),
      o("div", {
        ref_key: "rightAdornment",
        ref: l,
        class: "adornment right-adornment"
      }, [
        p(e.$slots, "rightAdornment", {}, void 0, !0)
      ], 512)
    ], 4));
  }
}), B = /* @__PURE__ */ k(M, [["__scopeId", "data-v-a8f03210"]]);
export {
  B as default
};
