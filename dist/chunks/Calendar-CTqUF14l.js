import { openBlock as k, createElementBlock as y, createElementVNode as m, defineComponent as _e, computed as v, ref as p, watch as A, onBeforeUnmount as he, createVNode as E, withCtx as H, unref as G, renderSlot as V, toDisplayString as P, Fragment as J, renderList as K, normalizeClass as Q } from "vue";
import { i as fe } from "./IconAccessibleFilled-DFPdopZN.js";
import { d as pe } from "./IconChevronRightOutline-B9UH_Yk2.js";
import X from "./Button-B4EJCtdb.js";
import { k as M, l as x, m as I, n as b, t as L, q as De, r as R } from "./index-D5rI4VW1.js";
import { _ as we } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Calendar-PFGUc-2U.css';const be = {}, Re = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function ke(O, S) {
  return k(), y("svg", Re, S[0] || (S[0] = [
    m("path", { d: "m15 6-6 6 6 6" }, null, -1)
  ]));
}
const ye = /* @__PURE__ */ fe(be, [["render", ke]]), Se = { class: "calendar" }, Be = { class: "calendar__header" }, Ee = { class: "calendar__title" }, Me = { class: "calendar__weekdays" }, Ce = { class: "calendar__days" }, Ve = ["disabled", "onClick", "onPointerenter", "onPointerdown"], Pe = { class: "calendar__day-number" }, xe = /* @__PURE__ */ _e({
  __name: "Calendar",
  props: {
    mode: { default: "single" },
    modelValue: { default: null },
    rangeValue: { default: () => ({ start: null, end: null }) },
    month: { default: void 0 },
    minDate: { default: null },
    maxDate: { default: null },
    disabledDates: { type: Function, default: void 0 },
    showOutsideDays: { type: Boolean, default: !0 },
    fixedWeeks: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:rangeValue", "update:month", "select", "range-select", "range-drag-start", "range-drag", "range-drag-end", "month-change", "day-hover"],
  setup(O, { emit: S }) {
    const n = O, u = S, Z = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"], D = (e) => e ? I(L(e)) : null, c = (e) => I(new Date(e.getFullYear(), e.getMonth(), 1)), $ = (e, a) => {
      const t = new Date(e);
      return t.setMonth(t.getMonth() + a, 1), c(t);
    }, B = v(() => D(n.modelValue)), l = v(() => ({
      start: D(n.rangeValue.start),
      end: D(n.rangeValue.end)
    })), d = p(n.month ? c(L(n.month)) : n.mode === "range" && l.value.start ? c(l.value.start) : B.value ? c(B.value) : c(/* @__PURE__ */ new Date())), s = p(l.value.start && !l.value.end ? l.value.start : null), g = p(null), i = p(null), w = p(null), C = p(!1);
    A(
      () => n.month,
      (e) => {
        e && (d.value = c(L(e)));
      }
    ), A(
      () => n.mode,
      () => {
        s.value = null, g.value = null, i.value = null, w.value = null;
      }
    );
    const ee = v(
      () => new Intl.DateTimeFormat("ru-RU", { month: "long", year: "numeric" }).format(d.value).replace(" г.", "")
    ), F = v(() => {
      const e = c(d.value), a = e.getDay(), t = a === 0 ? -6 : 1 - a;
      return M(e, t);
    }), te = v(() => {
      if (n.fixedWeeks)
        return x(M(F.value, 41));
      const e = x(new Date(d.value.getFullYear(), d.value.getMonth() + 1, 0)), a = e.getDay(), t = a === 0 ? 0 : 7 - a;
      return x(M(e, t));
    }), ae = (e) => {
      var r;
      const a = D(n.minDate ?? null), t = D(n.maxDate ?? null);
      return a && De(e, a) || t && R(e, t) ? !0 : ((r = n.disabledDates) == null ? void 0 : r.call(n, e)) ?? !1;
    }, ne = () => n.mode !== "range" ? { start: null, end: null } : i.value ? w.value ?? l.value : s.value && g.value ? R(s.value, g.value) ? {
      start: g.value,
      end: s.value
    } : {
      start: s.value,
      end: g.value
    } : s.value ? {
      start: s.value,
      end: s.value
    } : l.value, N = v(() => {
      const e = [], a = /* @__PURE__ */ new Date(), t = ne();
      let r = I(F.value);
      for (; r <= te.value; ) {
        const o = new Date(r), ce = o.getMonth() === d.value.getMonth(), z = o.getDay(), h = t.start, f = t.end, ge = !!(h && f && !b(h, f)), U = !!(h && b(o, h)), Y = !!(f && b(o, f)), ve = !!(h && f && o > h && o < f), me = n.mode === "single" ? !!(B.value && b(o, B.value)) : U || Y;
        e.push({
          date: o,
          id: o.toISOString(),
          isCurrentMonth: ce,
          isToday: b(o, a),
          isWeekend: z === 0 || z === 6,
          isSelected: me,
          isRangeStart: U,
          isRangeEnd: Y,
          isInRange: ve,
          hasRangeBackground: ge,
          isDisabled: ae(o)
        }), r = M(r, 1);
      }
      return e;
    }), le = v(
      () => n.showOutsideDays ? N.value : N.value.filter((e) => e.isCurrentMonth)
    ), T = (e, a) => {
      d.value = c(e), u("update:month", d.value), u("month-change", {
        month: d.value,
        direction: a
      });
    }, re = () => {
      T($(d.value, -1), "previous");
    }, se = () => {
      T($(d.value, 1), "next");
    }, oe = (e) => {
      u("update:modelValue", e.date), u("select", {
        date: e.date,
        day: e
      });
    }, ue = (e) => {
      if (!s.value || l.value.start && l.value.end) {
        s.value = e.date, g.value = e.date;
        const o = { start: e.date, end: null };
        u("update:rangeValue", o), u("range-select", o);
        return;
      }
      const a = R(s.value, e.date) ? e.date : s.value, t = R(s.value, e.date) ? s.value : e.date, r = { start: a, end: t };
      s.value = null, g.value = null, u("update:rangeValue", r), u("range-select", r);
    }, de = (e) => {
      if (C.value) {
        C.value = !1;
        return;
      }
      if (!(n.readonly || e.isDisabled)) {
        if (n.mode === "single") {
          oe(e);
          return;
        }
        ue(e);
      }
    }, ie = (e) => {
      n.mode === "range" && s.value && !i.value && !e.isDisabled && (g.value = e.date), i.value && !e.isDisabled && j(e.date), u("day-hover", {
        date: e.date,
        day: e
      });
    }, W = (e, a) => R(e, a) ? {
      start: a,
      end: e
    } : {
      start: e,
      end: a
    }, j = (e, a = !0) => {
      if (!i.value || !l.value.start || !l.value.end)
        return;
      const t = i.value === "start" ? W(e, l.value.end) : W(l.value.start, e);
      w.value = t, u("update:rangeValue", t), a && u("range-drag", t);
    }, _ = () => {
      const e = w.value ?? l.value;
      e.start && e.end && u("range-drag-end", e), i.value = null, w.value = null, C.value = !0, window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _);
    }, q = (e, a, t) => {
      n.readonly || n.mode !== "range" || e.isDisabled || !l.value.start || !l.value.end || (t.preventDefault(), t.stopPropagation(), i.value = a, j(e.date, !1), u("range-drag-start", {
        start: l.value.start,
        end: l.value.end
      }), window.addEventListener("pointerup", _), window.addEventListener("pointercancel", _));
    };
    return he(() => {
      window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _);
    }), (e, a) => (k(), y("section", Se, [
      m("header", Be, [
        E(X, {
          mode: "ghost",
          squared: "",
          type: "button",
          "aria-label": "Предыдущий месяц",
          onClick: re
        }, {
          default: H(() => [
            E(G(ye))
          ]),
          _: 1
        }),
        V(e.$slots, "title", { month: d.value }, () => [
          m("span", Ee, P(ee.value), 1)
        ], !0),
        E(X, {
          mode: "ghost",
          squared: "",
          type: "button",
          "aria-label": "Следующий месяц",
          onClick: se
        }, {
          default: H(() => [
            E(G(pe))
          ]),
          _: 1
        })
      ]),
      m("div", Me, [
        (k(), y(J, null, K(Z, (t, r) => m("div", {
          key: t,
          class: Q(["calendar__weekday", { calendar__weekday_weekend: r >= 5 }])
        }, P(t), 3)), 64))
      ]),
      m("div", Ce, [
        (k(!0), y(J, null, K(le.value, (t) => (k(), y("button", {
          key: t.id,
          class: Q(["calendar__day", {
            calendar__day_outside: !t.isCurrentMonth,
            calendar__day_today: t.isToday,
            calendar__day_weekend: t.isWeekend,
            calendar__day_selected: t.isSelected,
            "calendar__day_range-start": t.isRangeStart,
            "calendar__day_range-end": t.isRangeEnd,
            "calendar__day_in-range": t.isInRange,
            "calendar__day_range-background": t.hasRangeBackground && (t.isInRange || t.isRangeStart || t.isRangeEnd),
            calendar__day_disabled: t.isDisabled,
            calendar__day_draggable: e.mode === "range" && (t.isRangeStart || t.isRangeEnd) && !t.isDisabled,
            calendar__day_dragging: i.value && (t.isRangeStart || t.isRangeEnd)
          }]),
          type: "button",
          disabled: t.isDisabled,
          onClick: (r) => de(t),
          onPointerenter: (r) => ie(t),
          onPointerdown: (r) => t.isRangeStart ? q(t, "start", r) : t.isRangeEnd ? q(t, "end", r) : void 0
        }, [
          V(e.$slots, "day", { day: t }, () => [
            m("span", Pe, P(t.date.getDate()), 1)
          ], !0)
        ], 42, Ve))), 128))
      ]),
      V(e.$slots, "footer", {
        mode: e.mode,
        month: d.value
      }, void 0, !0)
    ]));
  }
}), Ie = /* @__PURE__ */ we(xe, [["__scopeId", "data-v-ac6dd76b"]]), je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ie as C,
  je as a,
  ye as d
};
