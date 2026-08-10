import { defineComponent as v, ref as x, computed as s, openBlock as b, createBlock as g, withCtx as o, createVNode as d, unref as C, createTextVNode as z, toDisplayString as y } from "vue";
import { a as w } from "./IconCalendarOutline-xorZt9yb.js";
import k from "./Calendar-CCGXg07r.js";
import B from "./Dropdown-BtaoLYy0.js";
import _ from "./Picker-oSyTHuoR.js";
import { G as u, H as M, I as S, J as N } from "./index-BQgYVE5h.js";
const G = /* @__PURE__ */ v({
  __name: "DatePicker",
  props: {
    value: { default: null },
    onChange: {},
    minDate: {},
    maxDate: {},
    disabledDates: {},
    onMonthChange: {},
    placeholder: { default: "Выберите дату" },
    size: { default: "large" },
    stretched: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(m) {
    const e = m, t = x(!1), r = s(
      () => e.value ? u(e.value) : null
    ), c = s(
      () => e.size === "extra-small" ? "small" : e.size
    ), f = s(() => r.value ? `${M(r.value)} ${r.value.getFullYear()}` : e.placeholder), p = (l) => {
      var a;
      return e.minDate && S(l, e.minDate) || e.maxDate && N(l, e.maxDate) ? !0 : ((a = e.disabledDates) == null ? void 0 : a.call(e, l)) ?? !1;
    }, D = () => {
      e.disabled || (t.value = !t.value);
    }, h = ({ date: l }) => {
      var n;
      const a = u(l);
      p(a) || ((n = e.onChange) == null || n.call(e, { value: a }), t.value = !1);
    };
    return (l, a) => (b(), g(B, {
      shown: t.value,
      "onUpdate:shown": a[1] || (a[1] = (n) => t.value = n),
      triggers: [],
      placement: "bottom-end",
      distance: 8,
      stretched: e.stretched,
      "popper-class": "calendar-dropdown"
    }, {
      popper: o(() => [
        d(k, {
          size: c.value,
          "model-value": r.value,
          "min-date": e.minDate,
          "max-date": e.maxDate,
          "disabled-dates": e.disabledDates,
          onSelect: h,
          onMonthChange: a[0] || (a[0] = (n) => {
            var i;
            return (i = e.onMonthChange) == null ? void 0 : i.call(e, n.month);
          })
        }, null, 8, ["size", "model-value", "min-date", "max-date", "disabled-dates"])
      ]),
      default: o(() => [
        d(_, {
          size: e.size,
          stretched: e.stretched,
          disabled: e.disabled,
          "aria-haspopup": "dialog",
          "aria-expanded": t.value,
          onClick: D
        }, {
          icon: o(() => [
            d(C(w))
          ]),
          default: o(() => [
            z(y(f.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["size", "stretched", "disabled", "aria-expanded"])
      ]),
      _: 1
    }, 8, ["shown", "stretched"]));
  }
});
export {
  G as _
};
