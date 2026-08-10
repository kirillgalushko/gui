import { defineComponent as f, mergeModels as y, ref as g, useModel as x, useAttrs as H, useId as b, computed as i, onMounted as _, nextTick as d, watch as M, openBlock as w, createElementBlock as B, Fragment as I, withDirectives as V, createElementVNode as k, mergeProps as z, vModelText as D, createVNode as R } from "vue";
import T from "./FieldHelper-C_7J0GKU.js";
import { _ as E } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Textarea-y2z9vDvs.css';const P = ["placeholder", "aria-invalid", "aria-describedby"], $ = /* @__PURE__ */ f({
  inheritAttrs: !1,
  __name: "Textarea",
  props: /* @__PURE__ */ y({
    resize: { default: "none" },
    layout: { default: "fixed" },
    placeholder: {},
    invalid: { type: Boolean },
    errorMessage: {},
    descriptionId: {},
    minHeight: {},
    maxHeight: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const e = s, n = g(null), a = x(s, "modelValue"), c = H(), u = b(), p = i(() => ({
      resize: e.resize,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight
    })), m = i(() => e.invalid && !!e.errorMessage), o = i(() => {
      if (m.value)
        return e.descriptionId ?? `${u}-helper`;
    }), h = i(() => {
      const t = c["aria-describedby"], r = typeof t == "string" ? t : void 0;
      return o.value ? [r, o.value].filter(Boolean).join(" ") : r;
    }), l = () => {
      const t = n.value;
      if (t) {
        if (e.layout !== "hug") {
          t.style.removeProperty("height"), t.style.removeProperty("overflow-y");
          return;
        }
        t.style.height = "auto", t.style.overflowY = "hidden", t.style.height = `${t.scrollHeight + 2}px`, t.style.overflowY = t.scrollHeight > t.clientHeight ? "auto" : "hidden";
      }
    };
    return _(async () => {
      await d(), l();
    }), M(
      [a, () => e.layout, () => e.minHeight, () => e.maxHeight],
      async () => {
        await d(), l();
      },
      { flush: "post" }
    ), (t, r) => (w(), B(I, null, [
      V(k("textarea", z({
        ref_key: "textareaRef",
        ref: n
      }, t.$attrs, {
        "onUpdate:modelValue": r[0] || (r[0] = (v) => a.value = v),
        placeholder: e.placeholder,
        style: p.value,
        class: ["textarea", e.layout, { invalid: e.invalid }],
        "aria-invalid": e.invalid || void 0,
        "aria-describedby": h.value,
        onInput: l
      }), null, 16, P), [
        [D, a.value]
      ]),
      R(T, {
        "error-message": e.errorMessage,
        invalid: e.invalid,
        "description-id": o.value
      }, null, 8, ["error-message", "invalid", "description-id"])
    ], 64));
  }
}), Y = /* @__PURE__ */ E($, [["__scopeId", "data-v-e4409639"]]);
export {
  Y as default
};
