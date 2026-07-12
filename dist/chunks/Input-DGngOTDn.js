import { defineComponent as F, mergeModels as z, ref as s, useModel as C, useAttrs as H, useId as K, computed as i, onMounted as L, nextTick as O, onBeforeUnmount as U, openBlock as B, createElementBlock as A, normalizeStyle as I, createElementVNode as r, normalizeClass as j, renderSlot as V, withDirectives as T, mergeProps as q, vModelDynamic as G, toDisplayString as k, createCommentVNode as J, createVNode as Q } from "vue";
import X from "./FieldHelper-D0cSvQKv.js";
import { _ as Y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Input-BwEJCpqh.css';const Z = ["disabled", "aria-invalid", "aria-describedby"], ee = { class: "input-postfix-value" }, te = { class: "input-postfix" }, ne = /* @__PURE__ */ F({
  inheritAttrs: !1,
  __name: "Input",
  props: /* @__PURE__ */ z({
    autoFocus: { type: Boolean },
    maxWidth: { default: "100%" },
    disabled: { type: Boolean },
    postfix: {},
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    descriptionId: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(p) {
    const d = s(), a = s(), c = s(0), v = s(0), f = s(), l = C(p, "modelValue"), t = p, m = H(), D = K();
    let o;
    const y = (e) => e > 0 ? e + 20 : 12, h = i(() => y(c.value)), M = i(() => y(v.value)), b = i(() => String(l.value ?? "")), R = i(() => ({
      paddingLeft: `${h.value}px`,
      paddingRight: `${M.value}px`
    })), W = i(() => ({
      left: `${h.value}px`
    })), $ = i(() => t.invalid ? !!t.errorMessage : !!t.description), u = i(() => {
      if ($.value)
        return t.descriptionId ?? `${D}-helper`;
    }), S = i(() => {
      const e = m["aria-describedby"], n = typeof e == "string" ? e : void 0;
      return u.value ? [n, u.value].filter(Boolean).join(" ") : n;
    }), g = i(() => m.type === "number"), w = i(() => t.postfix !== void 0 && t.postfix.length > 0 && b.value.length > 0), x = (e) => e === "e" || e === "E", _ = () => {
      var e, n;
      c.value = ((e = d.value) == null ? void 0 : e.clientWidth) ?? 0, v.value = ((n = a.value) == null ? void 0 : n.clientWidth) ?? 0;
    }, N = (e) => {
      g.value && x(e.key) && e.preventDefault();
    }, P = (e) => {
      const n = e;
      g.value && x(n.data) && e.preventDefault();
    };
    return L(async () => {
      var e;
      await O(), _(), typeof ResizeObserver < "u" && (o = new ResizeObserver(_), d.value && o.observe(d.value), a.value && o.observe(a.value)), !(!t.autoFocus || t.disabled) && ((e = f.value) == null || e.focus());
    }), U(() => {
      o == null || o.disconnect();
    }), (e, n) => (B(), A("div", {
      style: I({ maxWidth: t.maxWidth }),
      class: "input-field"
    }, [
      r("div", {
        class: j(["input-container", { disabled: t.disabled }])
      }, [
        r("div", {
          ref_key: "leftAdornment",
          ref: d,
          class: "adornment left-adornment"
        }, [
          V(e.$slots, "leftAdornment", {}, void 0, !0)
        ], 512),
        T(r("input", q({
          ref_key: "inputRef",
          ref: f
        }, e.$attrs, {
          "onUpdate:modelValue": n[0] || (n[0] = (E) => l.value = E),
          disabled: t.disabled,
          style: R.value,
          class: ["input", { invalid: t.invalid }],
          "aria-invalid": t.invalid || void 0,
          "aria-describedby": S.value,
          onKeydown: N,
          onBeforeinput: P
        }), null, 16, Z), [
          [G, l.value]
        ]),
        w.value ? (B(), A("span", {
          key: 0,
          class: "input-postfix-overlay",
          style: I(W.value),
          "aria-hidden": "true"
        }, [
          r("span", ee, k(b.value), 1),
          r("span", te, k(t.postfix), 1)
        ], 4)) : J("", !0),
        r("div", {
          ref_key: "rightAdornment",
          ref: a,
          class: "adornment right-adornment"
        }, [
          V(e.$slots, "rightAdornment", {}, void 0, !0)
        ], 512)
      ], 2),
      Q(X, {
        description: t.description,
        "error-message": t.errorMessage,
        invalid: t.invalid,
        disabled: t.disabled,
        "description-id": u.value
      }, null, 8, ["description", "error-message", "invalid", "disabled", "description-id"])
    ], 4));
  }
}), se = /* @__PURE__ */ Y(ne, [["__scopeId", "data-v-77e292a8"]]);
export {
  se as default
};
