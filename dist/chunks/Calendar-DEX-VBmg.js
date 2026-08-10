import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { S as t, f as n, m as r, o as i, p as a, t as o, v as s } from "./date-jkaNgQxT.js";
import { t as c } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { E as l, T as u } from "./gui-icons.es-5O8QlDZJ.js";
import { t as d } from "./Button-CeAG6Psa.js";
import { Fragment as f, computed as p, createElementBlock as m, createElementVNode as h, createVNode as g, defineComponent as _, normalizeClass as v, onBeforeUnmount as y, openBlock as b, ref as x, renderList as S, renderSlot as C, toDisplayString as w, unref as T, watch as E, withCtx as D } from "vue";
import '../assets/Calendar-CVHkQuEI.css';//#region src/components/Calendar/Calendar.vue?vue&type=script&setup=true&lang.ts
var ee = { class: "calendar__header" }, te = { class: "calendar__title" }, ne = { class: "calendar__weekdays" }, re = { class: "calendar__days" }, O = [
	"disabled",
	"onClick",
	"onPointerenter",
	"onPointerdown"
], ie = { class: "calendar__day-number" }, k = /*@__PURE__*/ _({
	__name: "Calendar",
	props: {
		mode: { default: "single" },
		modelValue: { default: null },
		rangeValue: { default: () => ({
			start: null,
			end: null
		}) },
		month: { default: void 0 },
		minDate: { default: null },
		maxDate: { default: null },
		disabledDates: {
			type: Function,
			default: void 0
		},
		showOutsideDays: {
			type: Boolean,
			default: !0
		},
		fixedWeeks: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		size: { default: "medium" }
	},
	emits: [
		"update:modelValue",
		"update:rangeValue",
		"update:month",
		"select",
		"range-select",
		"range-drag-start",
		"range-drag",
		"range-drag-end",
		"month-change",
		"day-hover"
	],
	setup(e, { emit: c }) {
		let _ = e, k = c, A = [
			"пн",
			"вт",
			"ср",
			"чт",
			"пт",
			"сб",
			"вс"
		], j = (e) => e ? s(t(e)) : null, M = (e) => s(new Date(e.getFullYear(), e.getMonth(), 1)), N = (e, t) => {
			let n = new Date(e);
			return n.setMonth(n.getMonth() + t, 1), M(n);
		}, P = p(() => j(_.modelValue)), F = p(() => ({
			start: j(_.rangeValue.start),
			end: j(_.rangeValue.end)
		})), I = x(_.month ? M(t(_.month)) : _.mode === "range" && F.value.start ? M(F.value.start) : P.value ? M(P.value) : M(/* @__PURE__ */ new Date())), L = x(F.value.start && !F.value.end ? F.value.start : null), R = x(null), z = x(null), B = x(null), V = x(!1);
		E(() => _.month, (e) => {
			e && (I.value = M(t(e)));
		}), E(() => _.mode, () => {
			L.value = null, R.value = null, z.value = null, B.value = null;
		});
		let ae = p(() => new Intl.DateTimeFormat("ru-RU", {
			month: "long",
			year: "numeric"
		}).format(I.value).replace(" г.", "")), H = p(() => {
			let e = M(I.value), t = e.getDay(), n = t === 0 ? -6 : 1 - t;
			return o(e, n);
		}), U = p(() => {
			if (_.fixedWeeks) return i(o(H.value, 41));
			let e = i(new Date(I.value.getFullYear(), I.value.getMonth() + 1, 0)), t = e.getDay(), n = t === 0 ? 0 : 7 - t;
			return i(o(e, n));
		}), W = (e) => {
			let t = j(_.minDate ?? null), r = j(_.maxDate ?? null);
			return t && a(e, t) || r && n(e, r) ? !0 : _.disabledDates?.(e) ?? !1;
		}, G = () => _.mode === "range" ? z.value ? B.value ?? F.value : L.value && R.value ? n(L.value, R.value) ? {
			start: R.value,
			end: L.value
		} : {
			start: L.value,
			end: R.value
		} : L.value ? {
			start: L.value,
			end: L.value
		} : F.value : {
			start: null,
			end: null
		}, K = p(() => {
			let e = [], t = /* @__PURE__ */ new Date(), n = G(), i = s(H.value);
			for (; i <= U.value;) {
				let a = new Date(i), s = a.getMonth() === I.value.getMonth(), c = a.getDay(), l = n.start, u = n.end, d = !!(l && u && !r(l, u)), f = !!(l && r(a, l)), p = !!(u && r(a, u)), m = !!(l && u && a > l && a < u), h = _.mode === "single" ? !!(P.value && r(a, P.value)) : f || p;
				e.push({
					date: a,
					id: a.toISOString(),
					isCurrentMonth: s,
					isToday: r(a, t),
					isWeekend: c === 0 || c === 6,
					isSelected: h,
					isRangeStart: f,
					isRangeEnd: p,
					isInRange: m,
					hasRangeBackground: d,
					isDisabled: W(a)
				}), i = o(i, 1);
			}
			return e;
		}), q = p(() => _.showOutsideDays ? K.value : K.value.filter((e) => e.isCurrentMonth)), J = (e, t) => {
			I.value = M(e), k("update:month", I.value), k("month-change", {
				month: I.value,
				direction: t
			});
		}, oe = () => {
			J(N(I.value, -1), "previous");
		}, se = () => {
			J(N(I.value, 1), "next");
		}, ce = (e) => {
			k("update:modelValue", e.date), k("select", {
				date: e.date,
				day: e
			});
		}, le = (e) => {
			if (!L.value || F.value.start && F.value.end) {
				L.value = e.date, R.value = e.date;
				let t = {
					start: e.date,
					end: null
				};
				k("update:rangeValue", t), k("range-select", t);
				return;
			}
			let t = {
				start: n(L.value, e.date) ? e.date : L.value,
				end: n(L.value, e.date) ? L.value : e.date
			};
			L.value = null, R.value = null, k("update:rangeValue", t), k("range-select", t);
		}, Y = (e) => {
			if (V.value) {
				V.value = !1;
				return;
			}
			if (!(_.readonly || e.isDisabled)) {
				if (_.mode === "single") {
					ce(e);
					return;
				}
				le(e);
			}
		}, ue = (e) => {
			_.mode === "range" && L.value && !z.value && !e.isDisabled && (R.value = e.date), z.value && !e.isDisabled && Z(e.date), k("day-hover", {
				date: e.date,
				day: e
			});
		}, X = (e, t) => n(e, t) ? {
			start: t,
			end: e
		} : {
			start: e,
			end: t
		}, Z = (e, t = !0) => {
			if (!z.value || !F.value.start || !F.value.end) return;
			let n = z.value === "start" ? X(e, F.value.end) : X(F.value.start, e);
			B.value = n, k("update:rangeValue", n), t && k("range-drag", n);
		}, Q = () => {
			let e = B.value ?? F.value;
			e.start && e.end && k("range-drag-end", e), z.value = null, B.value = null, V.value = !0, window.removeEventListener("pointerup", Q), window.removeEventListener("pointercancel", Q);
		}, $ = (e, t, n) => {
			_.readonly || _.mode !== "range" || e.isDisabled || !F.value.start || !F.value.end || (n.preventDefault(), n.stopPropagation(), z.value = t, Z(e.date, !1), k("range-drag-start", {
				start: F.value.start,
				end: F.value.end
			}), window.addEventListener("pointerup", Q), window.addEventListener("pointercancel", Q));
		};
		return y(() => {
			window.removeEventListener("pointerup", Q), window.removeEventListener("pointercancel", Q);
		}), (t, n) => (b(), m("section", { class: v(["calendar", _.size]) }, [
			h("header", ee, [
				g(d, {
					mode: "ghost",
					size: _.size,
					squared: "",
					type: "button",
					"aria-label": "Предыдущий месяц",
					onClick: oe
				}, {
					default: D(() => [g(T(l))]),
					_: 1
				}, 8, ["size"]),
				C(t.$slots, "title", { month: I.value }, () => [h("span", te, w(ae.value), 1)], !0),
				g(d, {
					mode: "ghost",
					size: _.size,
					squared: "",
					type: "button",
					"aria-label": "Следующий месяц",
					onClick: se
				}, {
					default: D(() => [g(T(u))]),
					_: 1
				}, 8, ["size"])
			]),
			h("div", ne, [(b(), m(f, null, S(A, (e, t) => h("div", {
				key: e,
				class: v(["calendar__weekday", { calendar__weekday_weekend: t >= 5 }])
			}, w(e), 3)), 64))]),
			h("div", re, [(b(!0), m(f, null, S(q.value, (n) => (b(), m("button", {
				key: n.id,
				class: v(["calendar__day", {
					calendar__day_outside: !n.isCurrentMonth,
					calendar__day_today: n.isToday,
					calendar__day_weekend: n.isWeekend,
					calendar__day_selected: n.isSelected,
					"calendar__day_range-start": n.isRangeStart,
					"calendar__day_range-end": n.isRangeEnd,
					"calendar__day_in-range": n.isInRange,
					"calendar__day_range-background": n.hasRangeBackground && (n.isInRange || n.isRangeStart || n.isRangeEnd),
					calendar__day_disabled: n.isDisabled,
					calendar__day_draggable: e.mode === "range" && (n.isRangeStart || n.isRangeEnd) && !n.isDisabled,
					calendar__day_dragging: z.value && (n.isRangeStart || n.isRangeEnd)
				}]),
				type: "button",
				disabled: n.isDisabled,
				onClick: (e) => Y(n),
				onPointerenter: (e) => ue(n),
				onPointerdown: (e) => n.isRangeStart ? $(n, "start", e) : n.isRangeEnd ? $(n, "end", e) : void 0
			}, [C(t.$slots, "day", { day: n }, () => [h("span", ie, w(n.date.getDate()), 1)], !0)], 42, O))), 128))]),
			C(t.$slots, "footer", {
				mode: e.mode,
				month: I.value
			}, void 0, !0)
		], 2));
	}
}), A = /* @__PURE__ */ e({ default: () => j }), j = /*#__PURE__*/ c(k, [["__scopeId", "data-v-43be9276"]]);
//#endregion
export { A as n, j as t };
