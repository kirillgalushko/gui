import { defineComponent as D, ref as v, computed as s, openBlock as h, createBlock as x, withCtx as o, createVNode as d, unref as g, createTextVNode as C, toDisplayString as b } from "vue";
import { a as y } from "./IconCalendarOutline-xorZt9yb.js";
import { C as w } from "./Calendar-CTqUF14l.js";
import _ from "./Dropdown-BzAtxMa0.js";
import k from "./Picker-dM7Z2qxR.js";
import { m as i, v as B, q as S, r as N } from "./index-D5rI4VW1.js";
const F = /* @__PURE__ */ D({
  __name: "DatePicker",
  props: {
    value: { default: null },
    onChange: {},
    minDate: {},
    maxDate: {},
    placeholder: { default: "Выберите дату" },
    stretched: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(u) {
    const e = u, a = v(!1), l = s(() => e.value ? i(e.value) : null), c = s(() => l.value ? `${B(l.value)} ${l.value.getFullYear()}` : e.placeholder), m = (t) => !!(e.minDate && S(t, e.minDate) || e.maxDate && N(t, e.maxDate)), p = () => {
      e.disabled || (a.value = !a.value);
    }, f = ({ date: t }) => {
      var n;
      const r = i(t);
      m(r) || ((n = e.onChange) == null || n.call(e, { value: r }), a.value = !1);
    };
    return (t, r) => (h(), x(_, {
      shown: a.value,
      "onUpdate:shown": r[0] || (r[0] = (n) => a.value = n),
      triggers: [],
      placement: "bottom-end",
      distance: 8,
      stretched: e.stretched,
      "popper-class": "calendar-dropdown"
    }, {
      popper: o(() => [
        d(w, {
          "model-value": l.value,
          "min-date": e.minDate,
          "max-date": e.maxDate,
          onSelect: f
        }, null, 8, ["model-value", "min-date", "max-date"])
      ]),
      default: o(() => [
        d(k, {
          stretched: e.stretched,
          disabled: e.disabled,
          "aria-haspopup": "dialog",
          "aria-expanded": a.value,
          onClick: p
        }, {
          icon: o(() => [
            d(g(y))
          ]),
          default: o(() => [
            C(b(c.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["stretched", "disabled", "aria-expanded"])
      ]),
      _: 1
    }, 8, ["shown", "stretched"]));
  }
});
export {
  F as default
};
