import { defineComponent as ee, useAttrs as te, useId as le, ref as $, computed as o, watch as z, onMounted as ae, nextTick as A, openBlock as k, createElementBlock as w, normalizeClass as h, createElementVNode as m, normalizeStyle as ne, mergeProps as ue, Fragment as ie, renderList as re, withModifiers as oe, toDisplayString as se, createVNode as de } from "vue";
import ce from "./FieldHelper-D0cSvQKv.js";
import { _ as ve } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PincodeInput-BBBULxGX.css';const pe = ["value", "disabled", "readonly", "maxlength", "aria-invalid", "aria-describedby"], fe = {
  class: "pincode-grid",
  "aria-hidden": "true"
}, he = ["onMousedown"], me = /* @__PURE__ */ ee({
  inheritAttrs: !1,
  __name: "PincodeInput",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    stretched: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    length: { default: 6 },
    succeed: { type: Boolean },
    invalid: { type: Boolean },
    description: {},
    errorMessage: {},
    descriptionId: {}
  },
  emits: ["update:modelValue", "complete"],
  setup(R, { emit: P }) {
    const n = R, D = P, I = te(), T = le(), i = $(null), l = $(0), r = o(() => Math.max(1, Math.floor(Number(n.length) || 1))), v = (e) => String(e ?? "").replace(/\D/g, "").slice(0, r.value), N = (e, t) => t === null ? v(e).length : v(e.slice(0, t)).length, E = (e) => e === "" || e === !0 || e === "true", u = o(() => v(n.modelValue)), d = o(() => n.disabled || n.loading), c = o(() => n.succeed || E(I.readonly)), L = o(() => Array.from({ length: r.value }, (e, t) => u.value[t] ?? "")), C = o(() => Math.min(l.value, r.value - 1)), H = o(() => l.value < r.value), K = o(() => n.invalid ? !!n.errorMessage : !!n.description), b = o(() => {
      if (K.value)
        return n.descriptionId ?? `${T}-helper`;
    }), j = o(() => {
      const e = I["aria-describedby"], t = typeof e == "string" ? e : void 0;
      return b.value ? [t, b.value].filter(Boolean).join(" ") : t;
    }), q = o(() => {
      const e = { ...I };
      return delete e.class, delete e.style, delete e.readonly, delete e.disabled, delete e.maxlength, e;
    }), G = (e = u.value) => e.length === r.value ? r.value : e.length, p = (e, t = u.value) => Math.min(Math.max(e, 0), G(t)), g = async (e = u.value) => {
      await A(), i.value && (i.value.value = e, i.value.setSelectionRange(l.value, l.value));
    }, f = (e, t = u.value) => {
      l.value = p(e, t), g(t);
    }, x = (e, t) => {
      e.length === r.value && t >= r.value && D("complete", e);
    }, y = (e, t) => {
      const a = v(e);
      l.value = p(t, a), i.value && i.value.value !== a && (i.value.value = a), D("update:modelValue", a), x(a, t), g(a);
    }, _ = (e) => {
      if (c.value)
        return;
      const t = e.replace(/\D/g, "");
      if (!t || l.value >= r.value)
        return;
      const a = l.value, s = a + t.length, S = `${u.value.slice(0, a)}${t}${u.value.slice(s)}`;
      y(S, a + t.length);
    }, M = () => {
      if (c.value || !u.value)
        return;
      const e = l.value < u.value.length ? l.value : l.value - 1;
      if (e < 0)
        return;
      const t = `${u.value.slice(0, e)}${u.value.slice(e + 1)}`;
      y(t, e);
    }, V = () => {
      if (c.value || l.value >= u.value.length)
        return;
      const e = `${u.value.slice(0, l.value)}${u.value.slice(l.value + 1)}`;
      y(e, l.value);
    }, J = (e, t) => {
      if (c.value) {
        i.value && (i.value.value = u.value);
        return;
      }
      const a = v(e);
      i.value && i.value.value !== a && (i.value.value = a);
      const s = t ?? a.length;
      l.value = p(s, a), D("update:modelValue", a), x(a, s);
    }, O = (e) => {
      const t = e.target;
      J(t.value, N(t.value, t.selectionStart));
    }, B = () => !n.invalid || c.value ? !1 : (y("", 0), !0), Q = () => {
      B();
    }, U = () => {
      var e;
      d.value || ((e = i.value) == null || e.focus(), B());
    }, W = (e) => {
      const t = e;
      if (c.value) {
        e.preventDefault();
        return;
      }
      if (t.inputType === "insertText") {
        e.preventDefault(), _(t.data ?? "");
        return;
      }
      if (t.inputType === "insertFromPaste") {
        e.preventDefault(), _(t.data ?? "");
        return;
      }
      if (t.inputType === "deleteContentBackward") {
        e.preventDefault(), M();
        return;
      }
      t.inputType === "deleteContentForward" && (e.preventDefault(), V());
    }, X = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault(), f(l.value - 1);
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault(), f(l.value + 1);
        return;
      }
      if (e.key === "Home") {
        e.preventDefault(), f(0);
        return;
      }
      if (e.key === "End") {
        e.preventDefault(), f(u.value.length);
        return;
      }
      if (e.key === "Backspace") {
        e.preventDefault(), M();
        return;
      }
      e.key === "Delete" && (e.preventDefault(), V());
    }, Y = (e) => {
      var t;
      e.preventDefault(), _(((t = e.clipboardData) == null ? void 0 : t.getData("text")) ?? "");
    }, F = () => {
      var e;
      d.value || (e = i.value) == null || e.focus();
    }, Z = (e) => {
      d.value || (F(), !B() && f(e));
    };
    return z(u, (e) => {
      l.value = p(l.value, e), i.value && i.value.value !== e && (i.value.value = e), g(e);
    }), z(r, () => {
      l.value = p(l.value), g();
    }), ae(async () => {
      !n.autoFocus || d.value || (await A(), F());
    }), (e, t) => (k(), w("div", {
      class: h(["pincode-field", { stretched: n.stretched }])
    }, [
      m("div", {
        class: h([
          "pincode-shell",
          {
            disabled: d.value,
            loading: n.loading,
            succeed: n.succeed,
            invalid: n.invalid
          }
        ]),
        style: ne({ "--pincode-length": r.value }),
        onClick: U
      }, [
        m("input", ue({
          ref_key: "inputRef",
          ref: i
        }, q.value, {
          class: "pincode-input",
          value: u.value,
          disabled: d.value,
          readonly: c.value,
          maxlength: r.value,
          "aria-invalid": n.invalid || void 0,
          "aria-describedby": j.value,
          inputmode: "numeric",
          pattern: "[0-9]*",
          autocomplete: "one-time-code",
          onFocus: Q,
          onBeforeinput: W,
          onKeydown: X,
          onPaste: Y,
          onInput: O
        }), null, 16, pe),
        m("div", fe, [
          (k(!0), w(ie, null, re(L.value, (a, s) => (k(), w("div", {
            key: s,
            class: h(["pincode-cell", { filled: a, active: s === C.value, "with-caret": s === C.value && H.value }]),
            onMousedown: oe((S) => Z(s), ["prevent"])
          }, [
            m("span", {
              class: h(["pincode-dot", { hidden: a }])
            }, null, 2),
            m("span", {
              class: h(["pincode-digit", { visible: a }])
            }, se(a), 3)
          ], 42, he))), 128))
        ])
      ], 6),
      de(ce, {
        description: n.description,
        "error-message": n.errorMessage,
        invalid: n.invalid,
        disabled: d.value,
        "description-id": b.value
      }, null, 8, ["description", "error-message", "invalid", "disabled", "description-id"])
    ], 2));
  }
}), Ie = /* @__PURE__ */ ve(me, [["__scopeId", "data-v-537bd726"]]);
export {
  Ie as default
};
