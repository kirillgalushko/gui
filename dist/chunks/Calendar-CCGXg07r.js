import { defineComponent as _e, computed as g, ref as h, watch as A, onBeforeUnmount as fe, openBlock as k, createElementBlock as S, normalizeClass as V, createElementVNode as p, createVNode as E, withCtx as G, unref as H, renderSlot as C, toDisplayString as z, Fragment as J, renderList as K } from "vue";
import { d as he } from "./IconChevronLeftOutline-Dni7wod7.js";
import { d as pe } from "./IconChevronRightOutline-B9UH_Yk2.js";
import j from "./Button-DBIwBw8Q.js";
import { K as M, L as I, G as L, M as R, N as P, I as De, J as b } from "./index-BQgYVE5h.js";
import { _ as we } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Calendar-D6MklVDV.css';const Re = { class: "calendar__header" }, be = { class: "calendar__title" }, ye = { class: "calendar__weekdays" }, ke = { class: "calendar__days" }, Se = ["disabled", "onClick", "onPointerenter", "onPointerdown"], Ee = { class: "calendar__day-number" }, Me = /* @__PURE__ */ _e({
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
    readonly: { type: Boolean, default: !1 },
    size: { default: "medium" }
  },
  emits: ["update:modelValue", "update:rangeValue", "update:month", "select", "range-select", "range-drag-start", "range-drag", "range-drag-end", "month-change", "day-hover"],
  setup(Q, { emit: X }) {
    const t = Q, u = X, Z = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"], D = (e) => e ? L(P(e)) : null, c = (e) => L(new Date(e.getFullYear(), e.getMonth(), 1)), x = (e, n) => {
      const a = new Date(e);
      return a.setMonth(a.getMonth() + n, 1), c(a);
    }, y = g(
      () => D(t.modelValue)
    ), l = g(() => ({
      start: D(t.rangeValue.start),
      end: D(t.rangeValue.end)
    })), d = h(t.month ? c(P(t.month)) : t.mode === "range" && l.value.start ? c(l.value.start) : y.value ? c(y.value) : c(/* @__PURE__ */ new Date())), r = h(
      l.value.start && !l.value.end ? l.value.start : null
    ), v = h(null), i = h(null), w = h(null), B = h(!1);
    A(
      () => t.month,
      (e) => {
        e && (d.value = c(P(e)));
      }
    ), A(
      () => t.mode,
      () => {
        r.value = null, v.value = null, i.value = null, w.value = null;
      }
    );
    const ee = g(
      () => new Intl.DateTimeFormat("ru-RU", { month: "long", year: "numeric" }).format(d.value).replace(" г.", "")
    ), N = g(() => {
      const e = c(d.value), n = e.getDay(), a = n === 0 ? -6 : 1 - n;
      return M(e, a);
    }), ae = g(() => {
      if (t.fixedWeeks)
        return I(M(N.value, 41));
      const e = I(
        new Date(
          d.value.getFullYear(),
          d.value.getMonth() + 1,
          0
        )
      ), n = e.getDay(), a = n === 0 ? 0 : 7 - n;
      return I(M(e, a));
    }), te = (e) => {
      var s;
      const n = D(t.minDate ?? null), a = D(t.maxDate ?? null);
      return n && De(e, n) || a && b(e, a) ? !0 : ((s = t.disabledDates) == null ? void 0 : s.call(t, e)) ?? !1;
    }, ne = () => t.mode !== "range" ? { start: null, end: null } : i.value ? w.value ?? l.value : r.value && v.value ? b(r.value, v.value) ? {
      start: v.value,
      end: r.value
    } : {
      start: r.value,
      end: v.value
    } : r.value ? {
      start: r.value,
      end: r.value
    } : l.value, F = g(() => {
      const e = [], n = /* @__PURE__ */ new Date(), a = ne();
      let s = L(N.value);
      for (; s <= ae.value; ) {
        const o = new Date(s), ce = o.getMonth() === d.value.getMonth(), q = o.getDay(), _ = a.start, f = a.end, ve = !!(_ && f && !R(_, f)), U = !!(_ && R(o, _)), Y = !!(f && R(o, f)), ge = !!(_ && f && o > _ && o < f), me = t.mode === "single" ? !!(y.value && R(o, y.value)) : U || Y;
        e.push({
          date: o,
          id: o.toISOString(),
          isCurrentMonth: ce,
          isToday: R(o, n),
          isWeekend: q === 0 || q === 6,
          isSelected: me,
          isRangeStart: U,
          isRangeEnd: Y,
          isInRange: ge,
          hasRangeBackground: ve,
          isDisabled: te(o)
        }), s = M(s, 1);
      }
      return e;
    }), le = g(
      () => t.showOutsideDays ? F.value : F.value.filter((e) => e.isCurrentMonth)
    ), O = (e, n) => {
      d.value = c(e), u("update:month", d.value), u("month-change", {
        month: d.value,
        direction: n
      });
    }, se = () => {
      O(x(d.value, -1), "previous");
    }, re = () => {
      O(x(d.value, 1), "next");
    }, oe = (e) => {
      u("update:modelValue", e.date), u("select", {
        date: e.date,
        day: e
      });
    }, ue = (e) => {
      if (!r.value || l.value.start && l.value.end) {
        r.value = e.date, v.value = e.date;
        const o = { start: e.date, end: null };
        u("update:rangeValue", o), u("range-select", o);
        return;
      }
      const n = b(r.value, e.date) ? e.date : r.value, a = b(r.value, e.date) ? r.value : e.date, s = { start: n, end: a };
      r.value = null, v.value = null, u("update:rangeValue", s), u("range-select", s);
    }, de = (e) => {
      if (B.value) {
        B.value = !1;
        return;
      }
      if (!(t.readonly || e.isDisabled)) {
        if (t.mode === "single") {
          oe(e);
          return;
        }
        ue(e);
      }
    }, ie = (e) => {
      t.mode === "range" && r.value && !i.value && !e.isDisabled && (v.value = e.date), i.value && !e.isDisabled && T(e.date), u("day-hover", {
        date: e.date,
        day: e
      });
    }, $ = (e, n) => b(e, n) ? {
      start: n,
      end: e
    } : {
      start: e,
      end: n
    }, T = (e, n = !0) => {
      if (!i.value || !l.value.start || !l.value.end)
        return;
      const a = i.value === "start" ? $(e, l.value.end) : $(l.value.start, e);
      w.value = a, u("update:rangeValue", a), n && u("range-drag", a);
    }, m = () => {
      const e = w.value ?? l.value;
      e.start && e.end && u("range-drag-end", e), i.value = null, w.value = null, B.value = !0, window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m);
    }, W = (e, n, a) => {
      t.readonly || t.mode !== "range" || e.isDisabled || !l.value.start || !l.value.end || (a.preventDefault(), a.stopPropagation(), i.value = n, T(e.date, !1), u("range-drag-start", {
        start: l.value.start,
        end: l.value.end
      }), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m));
    };
    return fe(() => {
      window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m);
    }), (e, n) => (k(), S("section", {
      class: V(["calendar", t.size])
    }, [
      p("header", Re, [
        E(j, {
          mode: "ghost",
          size: t.size,
          squared: "",
          type: "button",
          "aria-label": "Предыдущий месяц",
          onClick: se
        }, {
          default: G(() => [
            E(H(he))
          ]),
          _: 1
        }, 8, ["size"]),
        C(e.$slots, "title", { month: d.value }, () => [
          p("span", be, z(ee.value), 1)
        ], !0),
        E(j, {
          mode: "ghost",
          size: t.size,
          squared: "",
          type: "button",
          "aria-label": "Следующий месяц",
          onClick: re
        }, {
          default: G(() => [
            E(H(pe))
          ]),
          _: 1
        }, 8, ["size"])
      ]),
      p("div", ye, [
        (k(), S(J, null, K(Z, (a, s) => p("div", {
          key: a,
          class: V(["calendar__weekday", { calendar__weekday_weekend: s >= 5 }])
        }, z(a), 3)), 64))
      ]),
      p("div", ke, [
        (k(!0), S(J, null, K(le.value, (a) => (k(), S("button", {
          key: a.id,
          class: V(["calendar__day", {
            calendar__day_outside: !a.isCurrentMonth,
            calendar__day_today: a.isToday,
            calendar__day_weekend: a.isWeekend,
            calendar__day_selected: a.isSelected,
            "calendar__day_range-start": a.isRangeStart,
            "calendar__day_range-end": a.isRangeEnd,
            "calendar__day_in-range": a.isInRange,
            "calendar__day_range-background": a.hasRangeBackground && (a.isInRange || a.isRangeStart || a.isRangeEnd),
            calendar__day_disabled: a.isDisabled,
            calendar__day_draggable: e.mode === "range" && (a.isRangeStart || a.isRangeEnd) && !a.isDisabled,
            calendar__day_dragging: i.value && (a.isRangeStart || a.isRangeEnd)
          }]),
          type: "button",
          disabled: a.isDisabled,
          onClick: (s) => de(a),
          onPointerenter: (s) => ie(a),
          onPointerdown: (s) => a.isRangeStart ? W(a, "start", s) : a.isRangeEnd ? W(a, "end", s) : void 0
        }, [
          C(e.$slots, "day", { day: a }, () => [
            p("span", Ee, z(a.date.getDate()), 1)
          ], !0)
        ], 42, Se))), 128))
      ]),
      C(e.$slots, "footer", {
        mode: e.mode,
        month: d.value
      }, void 0, !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ we(Me, [["__scopeId", "data-v-43be9276"]]);
export {
  xe as default
};
