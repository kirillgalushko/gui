import { defineComponent as R, ref as h, computed as g, watch as U, openBlock as W, createElementBlock as j, normalizeClass as q, createVNode as p, withCtx as D, mergeProps as z, withKeys as L, withModifiers as $, unref as G } from "vue";
import { a as J } from "./IconCalendarOutline-xorZt9yb.js";
import Q from "./Action-BU2zTSfG.js";
import { C as X } from "./Calendar-CTqUF14l.js";
import Z from "./Dropdown-BzAtxMa0.js";
import ee from "./Input-DGngOTDn.js";
import { m as y, r as C, q as N, n as te } from "./index-D5rI4VW1.js";
import { _ as ae } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/DateInput-CdeAGiiv.css';const V = 1900, _ = 2099, ne = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "DateInput",
  props: {
    value: { default: null },
    onChange: {},
    minDate: {},
    maxDate: {},
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    description: {},
    errorMessage: {},
    maxWidth: { default: "100%" },
    placeholder: { default: "дд.мм.гггг" },
    stretched: { type: Boolean }
  },
  setup(S) {
    const n = S, b = h(null), c = h(!1), i = h(""), m = h(!1), v = (e) => {
      if (!e)
        return "";
      const t = String(e.getDate()).padStart(2, "0"), a = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getFullYear()).padStart(4, "0");
      return `${t}.${a}.${r}`;
    }, x = (e) => {
      const t = e.replace(/\D/g, "").slice(0, 8), a = t[0], r = t[1];
      if (!a)
        return {
          day: "",
          month: "",
          year: ""
        };
      let s = a, l = t.slice(1);
      if (r ? (a === "0" ? Number(r) > 0 : a === "1" || a === "2" ? !0 : a === "3" ? Number(r) <= 1 : !1) ? (s = `${a}${r}`, l = t.slice(2)) : (s = `0${a}`, l = t.slice(1)) : Number(a) > 3 && (s = `0${a}`, l = ""), !l)
        return {
          day: s,
          month: "",
          year: ""
        };
      const o = l[0], u = l[1];
      if (!u) {
        const d = Number(o) > 1;
        return {
          day: s,
          month: d ? `0${o}` : o,
          year: ""
        };
      }
      if (o === "0")
        return {
          day: s,
          month: Number(u) > 0 ? `0${u}` : o,
          year: Number(u) > 0 ? l.slice(2, 6) : l.slice(1, 5)
        };
      if (o === "1") {
        const d = Number(u) <= 2;
        return {
          day: s,
          month: d ? `${o}${u}` : `0${o}`,
          year: d ? l.slice(2, 6) : l.slice(1, 5)
        };
      }
      return {
        day: s,
        month: `0${o}`,
        year: l.slice(1, 5)
      };
    }, w = (e) => {
      const { day: t, month: a, year: r } = x(e);
      return [t, a, r].filter(Boolean).join(".");
    }, I = (e) => {
      const { day: t, month: a, year: r } = x(e), s = /* @__PURE__ */ new Date();
      if (!t)
        return null;
      const l = Number(t), o = a ? Number(a) : s.getMonth() + 1;
      if (r.length === 3 || r.length > 4)
        return null;
      const u = r.length === 0 ? s.getFullYear() : r.length <= 2 ? 2e3 + Number(r) : Number(r);
      if (u < V || u > _ || o < 1 || o > 12 || l < 1)
        return null;
      const d = y(new Date(u, o - 1, l));
      return d.getFullYear() !== u || d.getMonth() !== o - 1 || d.getDate() !== l ? null : d;
    }, B = (e) => !(n.minDate && N(e, n.minDate) || n.maxDate && C(e, n.maxDate)), k = (e, t) => !e || !t ? e === t : te(e, t), A = g(() => n.value ? y(n.value) : null), P = g(() => {
      const e = new Date(V, 0, 1);
      return !n.minDate || C(e, n.minDate) ? e : n.minDate;
    }), Y = g(() => {
      const e = new Date(_, 11, 31);
      return !n.maxDate || N(e, n.maxDate) ? e : n.maxDate;
    }), f = (e, t, a) => {
      var r;
      (r = n.onChange) == null || r.call(n, {
        value: e,
        inputValue: t,
        isValid: a
      });
    }, M = () => {
      if (!i.value) {
        m.value = !1, f(null, "", !0);
        return;
      }
      const e = I(i.value), t = !!(e && B(e));
      if (m.value = !t, !e || !t) {
        f(null, i.value, !1);
        return;
      }
      const a = v(e);
      i.value = a, f(e, a, !0);
    }, F = (e) => {
      i.value = w(String(e ?? "")), m.value = !1;
    }, T = (e) => {
      const t = e.target;
      if (!(t instanceof HTMLInputElement))
        return;
      const a = w(t.value);
      t.value = a, i.value = a, m.value = !1;
    }, K = () => {
      n.disabled || (c.value = !0);
    }, E = () => {
      n.disabled || (c.value = !c.value);
    }, H = (e) => {
      var a;
      const t = e.target;
      return !(t instanceof Node && ((a = b.value) != null && a.contains(t)));
    }, O = ({ date: e }) => {
      const t = y(e), a = v(t);
      i.value = a, m.value = !1, f(t, a, !0), c.value = !1;
    };
    return U(
      () => n.value,
      (e) => {
        k(e ?? null, I(i.value)) || (i.value = v(e ?? null), m.value = !1);
      },
      { immediate: !0 }
    ), (e, t) => (W(), j("div", {
      ref_key: "dateInputRef",
      ref: b,
      class: q(["date-input", { stretched: n.stretched }])
    }, [
      p(Z, {
        shown: c.value,
        "onUpdate:shown": t[0] || (t[0] = (a) => c.value = a),
        triggers: [],
        placement: "bottom-end",
        distance: 8,
        stretched: n.stretched,
        "auto-hide": H,
        "popper-class": "calendar-dropdown",
        "no-auto-focus": ""
      }, {
        popper: D(() => [
          p(X, {
            "model-value": A.value,
            "min-date": P.value,
            "max-date": Y.value,
            onSelect: O
          }, null, 8, ["model-value", "min-date", "max-date"])
        ]),
        default: D(() => [
          p(ee, z(e.$attrs, {
            "model-value": i.value,
            type: "text",
            inputmode: "numeric",
            autocomplete: "off",
            placeholder: n.placeholder,
            "max-width": n.maxWidth,
            disabled: n.disabled,
            description: n.description,
            "error-message": n.errorMessage,
            invalid: n.invalid || m.value,
            "onUpdate:modelValue": F,
            onFocus: K,
            onBlur: M,
            onInput: T,
            onKeydown: L($(M, ["prevent"]), ["enter"])
          }), {
            rightAdornment: D(() => [
              p(Q, {
                type: "button",
                "aria-label": "Открыть календарь",
                "aria-expanded": c.value,
                disabled: n.disabled,
                onClick: $(E, ["prevent"])
              }, {
                default: D(() => [
                  p(G(J))
                ]),
                _: 1
              }, 8, ["aria-expanded", "disabled"])
            ]),
            _: 1
          }, 16, ["model-value", "placeholder", "max-width", "disabled", "description", "error-message", "invalid", "onKeydown"])
        ]),
        _: 1
      }, 8, ["shown", "stretched"])
    ], 2));
  }
}), me = /* @__PURE__ */ ae(ne, [["__scopeId", "data-v-7f0b82a2"]]);
export {
  me as default
};
