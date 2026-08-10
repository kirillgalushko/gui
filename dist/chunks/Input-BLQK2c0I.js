import { defineComponent as E, mergeModels as F, ref as o, useModel as O, useAttrs as H, useId as K, computed as i, onMounted as L, nextTick as U, onBeforeUnmount as j, openBlock as I, createElementBlock as V, normalizeStyle as p, createElementVNode as s, normalizeClass as T, renderSlot as X, withDirectives as q, mergeProps as G, vModelDynamic as J, toDisplayString as k, createCommentVNode as Q, createVNode as Y } from "vue";
import Z from "./FieldHelper-C_7J0GKU.js";
import { _ as ee } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Input-CfseyBXO.css';const te = ["disabled", "aria-invalid", "aria-describedby"], ne = { class: "input-postfix-value" }, ie = { class: "input-postfix" }, de = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "Input",
  props: /* @__PURE__ */ F({
    autoFocus: { type: Boolean },
    maxWidth: { default: "100%" },
    disabled: { type: Boolean },
    postfix: {},
    description: {},
    errorMessage: {},
    invalid: { type: Boolean },
    descriptionId: {},
    size: { default: "large" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(c) {
    const v = {
      "extra-small": { paddingX: 8 },
      small: { paddingX: 12 },
      medium: { paddingX: 14 },
      large: { paddingX: 16 }
    }, a = o(), r = o(), f = o(0), m = o(0), g = o(), l = O(c, "modelValue"), t = c, y = H(), z = K();
    let d;
    const b = (e) => {
      const n = v[t.size].paddingX;
      return e > 0 ? e + n + 8 : n;
    }, h = i(() => b(f.value)), D = i(() => b(m.value)), x = i(() => String(l.value ?? "")), M = i(() => ({
      paddingLeft: `${h.value}px`,
      paddingRight: `${D.value}px`
    })), R = i(() => ({
      "--input-padding-x": `${v[t.size].paddingX}px`
    })), S = i(() => ({
      left: `${h.value}px`
    })), $ = i(() => t.invalid ? !!t.errorMessage : !!t.description), u = i(() => {
      if ($.value)
        return t.descriptionId ?? `${z}-helper`;
    }), W = i(() => {
      const e = y["aria-describedby"], n = typeof e == "string" ? e : void 0;
      return u.value ? [n, u.value].filter(Boolean).join(" ") : n;
    }), _ = i(() => y.type === "number"), w = i(() => t.postfix !== void 0 && t.postfix.length > 0 && x.value.length > 0), B = (e) => e === "e" || e === "E", A = () => {
      var e, n;
      f.value = ((e = a.value) == null ? void 0 : e.clientWidth) ?? 0, m.value = ((n = r.value) == null ? void 0 : n.clientWidth) ?? 0;
    }, N = (e) => {
      _.value && B(e.key) && e.preventDefault();
    }, P = (e) => {
      const n = e;
      _.value && B(n.data) && e.preventDefault();
    };
    return L(async () => {
      var e;
      await U(), A(), typeof ResizeObserver < "u" && (d = new ResizeObserver(A), a.value && d.observe(a.value), r.value && d.observe(r.value)), !(!t.autoFocus || t.disabled) && ((e = g.value) == null || e.focus());
    }), j(() => {
      d == null || d.disconnect();
    }), (e, n) => (I(), V("div", {
      style: p({ maxWidth: t.maxWidth }),
      class: "input-field"
    }, [
      s("div", {
        class: T(["input-container", t.size, { disabled: t.disabled }]),
        style: p(R.value)
      }, [
        s("div", {
          ref_key: "leftAdornment",
          ref: a,
          class: "adornment left-adornment"
        }, [
          X(e.$slots, "leftAdornment", {}, void 0, !0)
        ], 512),
        q(s("input", G({
          ref_key: "inputRef",
          ref: g
        }, e.$attrs, {
          "onUpdate:modelValue": n[0] || (n[0] = (C) => l.value = C),
          disabled: t.disabled,
          style: M.value,
          class: ["input", { invalid: t.invalid }],
          "aria-invalid": t.invalid || void 0,
          "aria-describedby": W.value,
          onKeydown: N,
          onBeforeinput: P
        }), null, 16, te), [
          [J, l.value]
        ]),
        w.value ? (I(), V("span", {
          key: 0,
          class: "input-postfix-overlay",
          style: p(S.value),
          "aria-hidden": "true"
        }, [
          s("span", ne, k(x.value), 1),
          s("span", ie, k(t.postfix), 1)
        ], 4)) : Q("", !0),
        s("div", {
          ref_key: "rightAdornment",
          ref: r,
          class: "adornment right-adornment"
        }, [
          X(e.$slots, "rightAdornment", {}, void 0, !0)
        ], 512)
      ], 6),
      Y(Z, {
        description: t.description,
        "error-message": t.errorMessage,
        invalid: t.invalid,
        disabled: t.disabled,
        "description-id": u.value
      }, null, 8, ["description", "error-message", "invalid", "disabled", "description-id"])
    ], 4));
  }
}), re = /* @__PURE__ */ ee(de, [["__scopeId", "data-v-b27085c5"]]);
export {
  re as default
};
