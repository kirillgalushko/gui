import { defineComponent as V, mergeModels as m, useModel as S, ref as k, computed as f, onBeforeUnmount as I, openBlock as M, createBlock as C, withCtx as c, createElementVNode as g, normalizeStyle as U, renderSlot as A, createVNode as E } from "vue";
import F from "./Dropdown-BzAtxMa0.js";
import N from "./Input-DGngOTDn.js";
import { _ as R } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SuggestInput-D5CiNlTy.css';const $ = /* @__PURE__ */ V({
  __name: "SuggestInput",
  props: /* @__PURE__ */ m({
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    errorMessage: {},
    description: {},
    shown: { type: Boolean }
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ m(["blur", "focus", "input", "keydown", "update:shown"], ["update:modelValue"]),
  setup(n, { emit: v }) {
    const d = n, l = v, u = S(n, "modelValue"), a = k();
    let r, t;
    const i = f({
      get: () => d.shown ?? !1,
      set: (e) => l("update:shown", e)
    }), w = f(() => {
      var e;
      return {
        width: `${((e = a.value) == null ? void 0 : e.offsetWidth) ?? 0}px`
      };
    }), h = () => {
      d.disabled || (i.value = !0);
    }, p = () => {
      i.value = !1;
    }, y = () => {
      r !== void 0 && clearTimeout(r), r = setTimeout(h, 0);
    }, b = () => {
      t !== void 0 && clearTimeout(t), t = setTimeout(p, 120);
    }, B = (e) => {
      t !== void 0 && clearTimeout(t), y(), l("focus", e);
    }, T = (e) => {
      b(), l("blur", e);
    };
    return I(() => {
      r !== void 0 && clearTimeout(r), t !== void 0 && clearTimeout(t);
    }), (e, o) => (M(), C(F, {
      shown: i.value,
      "onUpdate:shown": o[3] || (o[3] = (s) => i.value = s),
      triggers: [],
      "popper-hide-triggers": [],
      placement: "bottom-start",
      distance: 6,
      stretched: "",
      "auto-hide": !1,
      "no-auto-focus": ""
    }, {
      popper: c(() => [
        g("div", {
          class: "suggest-input__popper",
          style: U(w.value)
        }, [
          A(e.$slots, "default", { close: p }, void 0, !0)
        ], 4)
      ]),
      default: c(() => [
        g("div", {
          ref_key: "triggerRef",
          ref: a,
          class: "suggest-input__trigger"
        }, [
          E(N, {
            id: e.id,
            modelValue: u.value,
            "onUpdate:modelValue": o[0] || (o[0] = (s) => u.value = s),
            placeholder: e.placeholder,
            disabled: e.disabled,
            invalid: e.invalid,
            "error-message": e.errorMessage,
            description: e.description,
            autocomplete: "off",
            onFocus: B,
            onBlur: T,
            onInput: o[1] || (o[1] = (s) => l("input", s)),
            onKeydown: o[2] || (o[2] = (s) => l("keydown", s))
          }, null, 8, ["id", "modelValue", "placeholder", "disabled", "invalid", "error-message", "description"])
        ], 512)
      ]),
      _: 3
    }, 8, ["shown"]));
  }
}), W = /* @__PURE__ */ R($, [["__scopeId", "data-v-dc9098e3"]]);
export {
  W as default
};
