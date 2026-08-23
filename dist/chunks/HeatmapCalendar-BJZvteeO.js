import { a as e, i as t, n, r, t as i } from "./floating-ui.vue-CE68TKCX.js";
import { S as a, b as o, f as s, t as c, v as l } from "./date-jkaNgQxT.js";
import { t as u } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as d } from "./ScrollArea-CwBCd0yG.js";
import { Fragment as f, Teleport as p, Transition as ee, computed as m, createBlock as te, createCommentVNode as h, createElementBlock as g, createElementVNode as _, createTextVNode as v, createVNode as y, defineComponent as b, nextTick as ne, normalizeClass as x, normalizeStyle as S, onBeforeUnmount as re, openBlock as C, ref as w, renderList as T, renderSlot as E, shallowRef as D, toDisplayString as O, unref as k, useId as ie, watch as ae, withCtx as A } from "vue";
import '../assets/HeatmapCalendar-BU4YviBw.css';//#region src/components/HeatmapCalendar/heatmapCalendar.ts
var j = /^(\d{4})-(\d{2})-(\d{2})$/, M = (e) => {
	if (typeof e == "string") {
		let t = j.exec(e);
		if (t) {
			let [, e = "", n = "", r = ""] = t;
			return l(new Date(Number(e), Number(n) - 1, Number(r)));
		}
	}
	return l(a(e));
}, N = (e) => `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`, P = (e, t) => {
	let n = o(e), r = c(n, t === 0 ? -1 : t - 1);
	return s(r, e) ? c(r, -7) : r;
}, F = (e, t) => Number.isFinite(e) ? Math.min(t - 1, Math.max(0, Math.round(e))) : 0, I = (e, t) => e.length === 0 ? 0 : e[Math.min(e.length - 1, Math.max(0, Math.ceil(e.length * t) - 1))] ?? 0, L = (e, t) => Array.from({ length: Math.max(0, t - 1) }, (n, r) => I(e, (r + 1) / t)), R = (e, t, n) => {
	let r = t.findIndex((t) => e <= t);
	return F(r === -1 ? t.length + 1 : r + 1, n);
}, z = (e, t, n) => {
	let r = Math.max(1, t - 1), i = e[e.length - 1] ?? 0, a = {
		levelCount: t,
		maxValue: i,
		positiveValues: e
	}, o = n.thresholds ? [...n.thresholds].filter(Number.isFinite).sort((e, t) => e - t) : void 0, s = L(e, r);
	return (e) => n.getLevel ? F(n.getLevel(e, a), t) : e <= 0 || i <= 0 ? 0 : o?.length ? R(e, o, t) : n.scale === "linear" ? F(Math.max(1, Math.ceil(e / i * r)), t) : R(e, s, t);
}, B = (e, t, n) => {
	let r = t ? M(t) : l(/* @__PURE__ */ new Date()), i = e ? M(e) : c(r, -((Number.isFinite(n) ? Math.max(1, Math.floor(n)) : 365) - 1));
	return s(i, r) ? {
		startDate: r,
		endDate: i
	} : {
		startDate: i,
		endDate: r
	};
}, oe = (e) => {
	let { startDate: t, endDate: n } = B(e.startDate, e.endDate, e.rangeDays), r = /* @__PURE__ */ new Map(), i = N(t), a = N(n);
	for (let t of e.data) {
		let e = M(t.date);
		if (Number.isNaN(e.getTime()) || !Number.isFinite(t.value)) continue;
		let n = N(e), i = r.get(n);
		r.set(n, {
			value: (i?.value ?? 0) + t.value,
			meta: t.meta ?? i?.meta
		});
	}
	let o = Array.from(r, ([e, t]) => ({
		dateKey: e,
		...t
	})).filter(({ dateKey: e }) => e >= i && e <= a).map(({ value: e }) => e).filter((e) => e > 0).sort((e, t) => e - t), s = z(o, Math.max(2, Math.floor(e.levelCount)), e), l = P(t, e.weekStartsOn), u = c(P(n, e.weekStartsOn), 6), d = [];
	for (let i = l; i <= u; i = c(i, 7)) {
		let a = [];
		for (let o = 0; o < 7; o += 1) {
			let l = c(i, o), u = N(l), d = r.get(u), f = l >= t && l <= n, p = {
				date: l,
				dateKey: u,
				value: d?.value ?? 0,
				level: s(d?.value ?? 0),
				meta: d?.meta,
				hasData: d !== void 0,
				isInRange: f,
				isDisabled: !1
			};
			p.isDisabled = !f || e.disabled === !0 || typeof e.disabled == "function" && e.disabled(p), a.push(p);
		}
		d.push({
			key: N(i),
			cells: a
		});
	}
	return {
		startDate: t,
		endDate: n,
		weeks: d,
		positiveValues: o,
		maxValue: o[o.length - 1] ?? 0
	};
}, se = (e, t) => t === "reverse" ? [...e].reverse() : [...e], ce = (e, t) => {
	let n = [];
	return e.forEach((e, r) => {
		let i = e.cells.filter((e) => e.isInRange), a = i.find((e) => t === "reverse" ? c(e.date, 1).getDate() === 1 : e.date.getDate() === 1) ?? (t === "reverse" ? i[i.length - 1] : i[0]);
		if (!a) return;
		let o = `${a.date.getFullYear()}-${a.date.getMonth()}`, s = n[n.length - 1];
		if (s?.key === o) {
			s.span += 1;
			return;
		}
		n.push({
			key: o,
			date: a.date,
			start: r,
			span: 1
		});
	}), n;
}, le = ["aria-label", "aria-busy"], ue = {
	key: 0,
	class: "heatmap-calendar__legend",
	"aria-label": "Шкала интенсивности"
}, de = { class: "heatmap-calendar__plot" }, fe = {
	key: 0,
	class: "heatmap-calendar__month-labels",
	"aria-hidden": "true"
}, pe = {
	key: 1,
	class: "heatmap-calendar__weekday-labels",
	"aria-hidden": "true"
}, me = [
	"aria-label",
	"aria-rowcount",
	"aria-colcount"
], he = [
	"aria-hidden",
	"onMouseenter",
	"onMouseleave",
	"onFocusin",
	"onFocusout"
], ge = [
	"disabled",
	"aria-label",
	"aria-describedby",
	"onClick"
], _e = ["aria-label", "aria-describedby"], ve = {
	key: 1,
	class: "heatmap-calendar__legend",
	"aria-label": "Шкала интенсивности"
}, ye = [
	"id",
	"role",
	"aria-label"
], be = { class: "heatmap-calendar-overlay__value" }, xe = { class: "heatmap-calendar-overlay__date" }, V = /*#__PURE__*/ u(/* @__PURE__ */ b({
	__name: "HeatmapCalendar",
	props: {
		data: { default: () => [] },
		startDate: { default: void 0 },
		endDate: { default: void 0 },
		rangeDays: { default: 365 },
		weekStartsOn: { default: 1 },
		orientation: { default: "horizontal" },
		direction: { default: "forward" },
		cellSize: { default: "medium" },
		cellGap: { default: void 0 },
		cellRadius: { default: void 0 },
		locale: { default: "ru-RU" },
		labels: {
			type: [Boolean, Object],
			default: !0
		},
		legend: {
			type: [Boolean, Object],
			default: !1
		},
		overlay: {
			type: [Boolean, Object],
			default: !0
		},
		palette: { default: void 0 },
		scale: { default: "quantile" },
		thresholds: { default: void 0 },
		getLevel: {
			type: Function,
			default: void 0
		},
		clickable: {
			type: [Boolean, Function],
			default: !1
		},
		disabled: {
			type: [Boolean, Function],
			default: !1
		},
		getCellLabel: {
			type: Function,
			default: void 0
		},
		loading: {
			type: Boolean,
			default: !1
		},
		ariaLabel: { default: "Календарь активности" }
	},
	emits: [
		"cell-click",
		"cell-focus",
		"cell-blur",
		"cell-enter",
		"cell-leave"
	],
	setup(a, { emit: o }) {
		let s = [
			"var(--heatmap-calendar-level-0)",
			"var(--heatmap-calendar-level-1)",
			"var(--heatmap-calendar-level-2)",
			"var(--heatmap-calendar-level-3)",
			"var(--heatmap-calendar-level-4)"
		], c = {
			"extra-small": {
				size: 8,
				gap: 2,
				radius: 2
			},
			small: {
				size: 10,
				gap: 3,
				radius: 3
			},
			medium: {
				size: 14,
				gap: 4,
				radius: 4
			},
			large: {
				size: 18,
				gap: 5,
				radius: 5
			}
		}, l = {
			showMonths: !0,
			showWeekdays: !0,
			weekdays: [
				2,
				4,
				6
			],
			monthFormat: "short",
			weekdayFormat: "short"
		}, u = {
			position: "bottom",
			lowLabel: "Меньше",
			highLabel: "Больше"
		}, b = a, j = o, M = m(() => b.palette && b.palette.length >= 2 ? b.palette : s), N = m(() => oe({
			data: b.data,
			startDate: b.startDate,
			endDate: b.endDate,
			rangeDays: b.rangeDays,
			weekStartsOn: b.weekStartsOn,
			levelCount: M.value.length,
			scale: b.scale,
			thresholds: b.thresholds,
			getLevel: b.getLevel,
			disabled: b.disabled
		})), P = m(() => se(N.value.weeks, b.direction)), F = m(() => ce(P.value, b.direction)), I = m(() => b.labels === !1 ? {
			...l,
			showMonths: !1,
			showWeekdays: !1
		} : b.labels === !0 ? l : {
			...l,
			...b.labels
		}), L = m(() => b.legend === !1 ? null : b.legend === !0 ? u : {
			...u,
			...b.legend
		}), R = m(() => {
			if (b.overlay === !1) return null;
			let e = b.overlay === !0 ? {} : b.overlay, t = e.type ?? "tooltip";
			return {
				type: t,
				placement: e.placement ?? "top",
				openDelay: e.openDelay ?? 80,
				closeDelay: e.closeDelay ?? (t === "hover-card" ? 120 : 0),
				offset: e.offset ?? 8
			};
		}), z = D(null), B = ie(), V = D(null), H = w(null), U = w(!1), W, Se = m(() => [
			t(R.value?.offset ?? 8),
			r(),
			e({ padding: 8 })
		]), { floatingStyles: Ce, update: we } = i(V, H, {
			placement: m(() => R.value?.placement ?? "top"),
			middleware: Se,
			whileElementsMounted: n
		}), G = () => {
			W &&= (clearTimeout(W), void 0);
		}, K = (e, t) => {
			if (!R.value || b.loading || !e.isInRange) return;
			G(), z.value = e, V.value = t instanceof HTMLElement ? t : null;
			let n = () => {
				U.value = !0, ne(we);
			};
			R.value.openDelay > 0 ? W = setTimeout(n, R.value.openDelay) : n();
		}, q = () => {
			G();
			let e = () => {
				U.value = !1;
			};
			(R.value?.closeDelay ?? 0) > 0 ? W = setTimeout(e, R.value?.closeDelay) : e();
		}, Te = (e, t) => {
			j("cell-enter", e, t), K(e, t.currentTarget);
		}, Ee = (e, t) => {
			j("cell-leave", e, t), q();
		}, De = (e, t) => {
			j("cell-focus", e, t), K(e, t.currentTarget);
		}, Oe = (e, t) => {
			let n = t.currentTarget;
			n instanceof HTMLElement && t.relatedTarget instanceof Node && n.contains(t.relatedTarget) || (j("cell-blur", e, t), q());
		}, ke = (e) => e.isInRange && (b.clickable === !0 || typeof b.clickable == "function" && b.clickable(e)), Ae = (e, t) => {
			!e.isDisabled && !b.loading && j("cell-click", e, t);
		}, J = (e) => new Intl.DateTimeFormat(b.locale, {
			day: "numeric",
			month: "short",
			year: "numeric"
		}).format(e), Y = (e) => e.hasData ? new Intl.NumberFormat(b.locale).format(e.value) : "Нет данных", X = (e) => b.getCellLabel?.(e) ?? `${Y(e)}, ${J(e.date)}`, je = (e) => new Intl.DateTimeFormat(b.locale, { month: I.value.monthFormat }).format(e), Me = (e) => new Intl.DateTimeFormat(b.locale, { weekday: I.value.weekdayFormat }).format(e), Ne = (e) => I.value.weekdays.includes(e.getDay()), Z = (e) => typeof e == "number" ? `${e}px` : e, Q = m(() => typeof b.cellSize == "string" && b.cellSize in c ? c[b.cellSize] : void 0), Pe = m(() => ({
			"--heatmap-calendar-cell-size": Z(Q.value?.size ?? b.cellSize),
			"--heatmap-calendar-cell-gap": Z(b.cellGap ?? Q.value?.gap ?? 4),
			"--heatmap-calendar-cell-radius": Z(b.cellRadius ?? Q.value?.radius ?? 4),
			"--heatmap-calendar-week-count": P.value.length
		})), $ = m(() => Array.from({ length: M.value.length }, (e, t) => t)), Fe = (e) => ({ "--heatmap-calendar-cell-color": M.value[e.level] ?? M.value[M.value.length - 1] }), Ie = (e) => b.orientation === "horizontal" ? { gridColumn: `${e.start + 1} / span ${e.span}` } : { gridRow: `${e.start + 1} / span ${e.span}` };
		return ae(() => [
			b.overlay,
			b.loading,
			N.value.startDate,
			N.value.endDate
		], q), re(G), (e, t) => (C(), g(f, null, [_("section", {
			class: x([
				"heatmap-calendar",
				`heatmap-calendar--${b.orientation}`,
				`heatmap-calendar--${b.direction}`,
				{ "heatmap-calendar--loading": b.loading }
			]),
			style: S(Pe.value),
			"aria-label": b.ariaLabel,
			"aria-busy": b.loading || void 0
		}, [
			L.value?.position === "top" ? (C(), g("div", ue, [E(e.$slots, "legend", {
				levels: $.value,
				palette: M.value
			}, () => [
				_("span", null, O(L.value.lowLabel), 1),
				(C(!0), g(f, null, T($.value, (e) => (C(), g("span", {
					key: e,
					class: "heatmap-calendar__legend-cell",
					style: S({ "--heatmap-calendar-cell-color": M.value[e] }),
					"aria-hidden": "true"
				}, null, 4))), 128)),
				_("span", null, O(L.value.highLabel), 1)
			], !0)])) : h("", !0),
			y(d, {
				orientation: "horizontal",
				"keyboard-focusable": !1,
				"stable-scrollbar": !1
			}, {
				default: A(() => [_("div", de, [
					I.value.showMonths ? (C(), g("div", fe, [(C(!0), g(f, null, T(F.value, (t) => (C(), g("span", {
						key: t.key,
						class: "heatmap-calendar__month-label",
						style: S(Ie(t))
					}, [E(e.$slots, "month-label", {
						label: je(t.date),
						segment: t
					}, () => [v(O(je(t.date)), 1)], !0)], 4))), 128))])) : h("", !0),
					I.value.showWeekdays ? (C(), g("div", pe, [(C(!0), g(f, null, T(P.value[0]?.cells ?? [], (t) => (C(), g("span", {
						key: t.date.getDay(),
						class: "heatmap-calendar__weekday-label"
					}, [Ne(t.date) ? E(e.$slots, "weekday-label", {
						label: Me(t.date),
						date: t.date
					}, () => [v(O(Me(t.date)), 1)], !0, 0) : h("", !0)]))), 128))])) : h("", !0),
					_("div", {
						class: "heatmap-calendar__grid",
						role: "grid",
						"aria-label": b.ariaLabel,
						"aria-rowcount": b.orientation === "horizontal" ? 7 : P.value.length,
						"aria-colcount": b.orientation === "horizontal" ? P.value.length : 7
					}, [(C(!0), g(f, null, T(P.value, (t) => (C(), g(f, { key: t.key }, [(C(!0), g(f, null, T(t.cells, (t) => (C(), g("div", {
						key: t.dateKey,
						class: x(["heatmap-calendar__grid-cell", {
							"heatmap-calendar__grid-cell--outside": !t.isInRange,
							"heatmap-calendar__grid-cell--disabled": t.isDisabled
						}]),
						role: "gridcell",
						"aria-hidden": !t.isInRange || void 0,
						onMouseenter: (e) => Te(t, e),
						onMouseleave: (e) => Ee(t, e),
						onFocusin: (e) => De(t, e),
						onFocusout: (e) => Oe(t, e)
					}, [ke(t) ? (C(), g("button", {
						key: 0,
						class: "heatmap-calendar__cell heatmap-calendar__cell--clickable",
						type: "button",
						style: S(Fe(t)),
						disabled: t.isDisabled || b.loading,
						"aria-label": X(t),
						"aria-describedby": U.value && z.value?.dateKey === t.dateKey ? k(B) : void 0,
						onClick: (e) => Ae(t, e)
					}, [E(e.$slots, "cell", { cell: t }, void 0, !0)], 12, ge)) : (C(), g("span", {
						key: 1,
						class: "heatmap-calendar__cell",
						style: S(Fe(t)),
						"aria-label": t.isInRange ? X(t) : void 0,
						"aria-describedby": U.value && z.value?.dateKey === t.dateKey ? k(B) : void 0
					}, [E(e.$slots, "cell", { cell: t }, void 0, !0)], 12, _e))], 42, he))), 128))], 64))), 128))], 8, me)
				])]),
				_: 3
			}),
			L.value?.position === "bottom" ? (C(), g("div", ve, [E(e.$slots, "legend", {
				levels: $.value,
				palette: M.value
			}, () => [
				_("span", null, O(L.value.lowLabel), 1),
				(C(!0), g(f, null, T($.value, (e) => (C(), g("span", {
					key: e,
					class: "heatmap-calendar__legend-cell",
					style: S({ "--heatmap-calendar-cell-color": M.value[e] }),
					"aria-hidden": "true"
				}, null, 4))), 128)),
				_("span", null, O(L.value.highLabel), 1)
			], !0)])) : h("", !0)
		], 14, le), (C(), te(p, { to: "body" }, [y(ee, { name: "heatmap-calendar-overlay" }, {
			default: A(() => [U.value && z.value && R.value ? (C(), g("div", {
				key: 0,
				id: k(B),
				ref_key: "overlayRef",
				ref: H,
				class: x(["heatmap-calendar-overlay", `heatmap-calendar-overlay--${R.value.type}`]),
				style: S(k(Ce)),
				role: R.value.type === "tooltip" ? "tooltip" : "dialog",
				"aria-label": R.value.type === "hover-card" ? X(z.value) : void 0,
				onMouseenter: t[0] ||= (e) => R.value.type === "hover-card" && G(),
				onMouseleave: t[1] ||= (e) => R.value.type === "hover-card" && q(),
				onFocusin: t[2] ||= (e) => R.value.type === "hover-card" && G(),
				onFocusout: t[3] ||= (e) => R.value.type === "hover-card" && q()
			}, [E(e.$slots, "overlay", { cell: z.value }, () => [_("div", be, O(Y(z.value)), 1), _("div", xe, O(J(z.value.date)), 1)], !0)], 46, ye)) : h("", !0)]),
			_: 3
		})]))], 64));
	}
}), [["__scopeId", "data-v-eb3f1075"]]);
//#endregion
export { V as default };
