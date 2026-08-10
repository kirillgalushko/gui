import { defineComponent as O, ref as h, computed as g, watch as R, openBlock as U, createElementBlock as W, normalizeClass as j, createVNode as f, withCtx as D, mergeProps as G, withKeys as J, withModifiers as $, unref as L } from "vue";
import { a as q } from "./IconCalendarOutline-xorZt9yb.js";
import Q from "./Action-fWvLOvMq.js";
import X from "./Calendar-CCGXg07r.js";
import Z from "./Dropdown-BtaoLYy0.js";
import ee from "./Input-BLQK2c0I.js";
import { G as y, J as N, I as V, M as te } from "./index-BQgYVE5h.js";
import { _ as ae } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/DateInput-CscOKtbH.css';const S = 1900, _ = 2099, ne = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "DateInput",
  props: {
    value: { default: null },
    onChange: {},
    minDate: {},
    maxDate: {},
    disabledDates: {},
    onMonthChange: {},
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    description: {},
    errorMessage: {},
    maxWidth: { default: "100%" },
    placeholder: { default: "дд.мм.гггг" },
    stretched: { type: Boolean }
  },
  setup(B) {
    const n = B, b = h(null), c = h(!1), u = h(""), m = h(!1), v = (e) => {
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
      const o = l[0], i = l[1];
      if (!i) {
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
          month: Number(i) > 0 ? `0${i}` : o,
          year: Number(i) > 0 ? l.slice(2, 6) : l.slice(1, 5)
        };
      if (o === "1") {
        const d = Number(i) <= 2;
        return {
          day: s,
          month: d ? `${o}${i}` : `0${o}`,
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
      const {
        day: t,
        month: a,
        year: r
      } = x(e), s = /* @__PURE__ */ new Date();
      if (!t)
        return null;
      const l = Number(t), o = a ? Number(a) : s.getMonth() + 1;
      if (r.length === 3 || r.length > 4)
        return null;
      const i = r.length === 0 ? s.getFullYear() : r.length <= 2 ? 2e3 + Number(r) : Number(r);
      if (i < S || i > _ || o < 1 || o > 12 || l < 1)
        return null;
      const d = y(new Date(i, o - 1, l));
      return d.getFullYear() !== i || d.getMonth() !== o - 1 || d.getDate() !== l ? null : d;
    }, M = (e) => {
      var t;
      return n.minDate && V(e, n.minDate) || n.maxDate && N(e, n.maxDate) ? !1 : !(((t = n.disabledDates) == null ? void 0 : t.call(n, e)) ?? !1);
    }, k = (e, t) => !e || !t ? e === t : te(e, t), A = g(
      () => n.value ? y(n.value) : null
    ), P = g(() => {
      const e = new Date(S, 0, 1);
      return !n.minDate || N(e, n.minDate) ? e : n.minDate;
    }), Y = g(() => {
      const e = new Date(_, 11, 31);
      return !n.maxDate || V(e, n.maxDate) ? e : n.maxDate;
    }), p = (e, t, a) => {
      var r;
      (r = n.onChange) == null || r.call(n, {
        value: e,
        inputValue: t,
        isValid: a
      });
    }, C = () => {
      if (!u.value) {
        m.value = !1, p(null, "", !0);
        return;
      }
      const e = I(u.value), t = !!(e && M(e));
      if (m.value = !t, !e || !t) {
        p(null, u.value, !1);
        return;
      }
      const a = v(e);
      u.value = a, p(e, a, !0);
    }, F = (e) => {
      u.value = w(String(e ?? "")), m.value = !1;
    }, T = (e) => {
      const t = e.target;
      if (!(t instanceof HTMLInputElement))
        return;
      const a = w(t.value);
      t.value = a, u.value = a, m.value = !1;
    }, K = () => {
      n.disabled || (c.value = !0);
    }, z = () => {
      n.disabled || (c.value = !c.value);
    }, E = (e) => {
      var a;
      const t = e.target;
      return !(t instanceof Node && ((a = b.value) != null && a.contains(t)));
    }, H = ({ date: e }) => {
      const t = y(e);
      if (!M(t))
        return;
      const a = v(t);
      u.value = a, m.value = !1, p(t, a, !0), c.value = !1;
    };
    return R(
      () => n.value,
      (e) => {
        k(e ?? null, I(u.value)) || (u.value = v(e ?? null), m.value = !1);
      },
      { immediate: !0 }
    ), (e, t) => (U(), W("div", {
      ref_key: "dateInputRef",
      ref: b,
      class: j(["date-input", { stretched: n.stretched }])
    }, [
      f(Z, {
        shown: c.value,
        "onUpdate:shown": t[1] || (t[1] = (a) => c.value = a),
        triggers: [],
        placement: "bottom-end",
        distance: 8,
        stretched: n.stretched,
        "auto-hide": E,
        "popper-class": "calendar-dropdown",
        "no-auto-focus": ""
      }, {
        popper: D(() => [
          f(X, {
            "model-value": A.value,
            "min-date": P.value,
            "max-date": Y.value,
            "disabled-dates": n.disabledDates,
            onSelect: H,
            onMonthChange: t[0] || (t[0] = (a) => {
              var r;
              return (r = n.onMonthChange) == null ? void 0 : r.call(n, a.month);
            }),
            size: "small"
          }, null, 8, ["model-value", "min-date", "max-date", "disabled-dates"])
        ]),
        default: D(() => [
          f(ee, G(e.$attrs, {
            "model-value": u.value,
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
            onBlur: C,
            onInput: T,
            onKeydown: J($(C, ["prevent"]), ["enter"])
          }), {
            rightAdornment: D(() => [
              f(Q, {
                type: "button",
                "aria-label": "Открыть календарь",
                "aria-expanded": c.value,
                disabled: n.disabled,
                onClick: $(z, ["prevent"])
              }, {
                default: D(() => [
                  f(L(q))
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
}), me = /* @__PURE__ */ ae(ne, [["__scopeId", "data-v-22335bd8"]]);
export {
  me as default
};
