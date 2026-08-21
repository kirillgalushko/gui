import { b as e, c as t, d as n, f as r, i, p as a, r as o, s, t as c, v as l, x as u, y as d } from "./date-jkaNgQxT.js";
import { t as f } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { T as p, w as m } from "./gui-icons.es-B9g1VPOq.js";
import { t as h } from "./Button-CeAG6Psa.js";
import { t as g } from "./Gap-BwE3JGxn.js";
import { t as _ } from "./ButtonGroup-DH8-TnEU.js";
import { t as v } from "./Calendar-C9YOkhu7.js";
import { t as y } from "./Dropdown-C01ij_R6.js";
import { computed as b, createBlock as x, createCommentVNode as S, createElementVNode as C, createTextVNode as w, createVNode as T, defineComponent as E, openBlock as D, ref as O, toDisplayString as k, unref as A, withCtx as j } from "vue";
import '../assets/DateNavigator-C4pssX3a.css';//#region src/components/DateNavigator/DateNavigator.vue?vue&type=script&setup=true&lang.ts
var M = { class: "date-navigator" }, N = /*#__PURE__*/ f(/* @__PURE__ */ E({
	__name: "DateNavigator",
	props: {
		value: {},
		mode: { default: "day" },
		buttonMode: { default: "outline" },
		size: { default: "large" },
		onChange: {},
		minDate: {},
		maxDate: {}
	},
	setup(f) {
		let E = f, N = O(!1), P = (t, n) => n === "week" ? e(t) : n === "month" ? d(t) : n === "year" ? u(t) : l(t), F = (e, t, n) => t === "threeDays" ? c(e, n * 3) : t === "week" ? c(e, n * 7) : t === "twoWeeks" ? c(e, n * 14) : t === "month" ? o(e, n) : t === "year" ? i(e, n) : c(e, n), I = (e, t) => {
			let n = P(e, t);
			return {
				start: n,
				end: F(n, t, 1)
			};
		}, L = b(() => P(E.value, E.mode)), R = b(() => I(L.value, E.mode)), z = b(() => F(L.value, E.mode, -1)), B = b(() => F(L.value, E.mode, 1)), V = b(() => I(z.value, E.mode)), H = b(() => I(B.value, E.mode)), U = (e) => E.minDate ? !r(e.end, E.minDate) : !1, W = (e) => E.maxDate ? r(e.start, E.maxDate) : !1, G = (e, t) => !a(e, t.start) && a(e, t.end), K = b(() => U(V.value)), q = b(() => W(H.value)), J = b(() => I(/* @__PURE__ */ new Date(), E.mode)), Y = b(() => U(J.value) || W(J.value)), X = b(() => !G(/* @__PURE__ */ new Date(), R.value) && !Y.value), Z = b(() => E.mode === "threeDays" || E.mode === "week" || E.mode === "twoWeeks" ? `${s(R.value.start)} - ${s(c(R.value.end, -1))}` : E.mode === "month" ? t(L.value) : E.mode === "year" ? String(L.value.getFullYear()) : n(L.value)), Q = (e) => {
			let t = P(e, E.mode);
			E.onChange({
				value: t,
				mode: E.mode,
				range: I(t, E.mode)
			});
		}, $ = () => {
			N.value = !N.value;
		}, ee = () => {
			K.value || Q(V.value.start);
		}, te = () => {
			q.value || Q(H.value.start);
		}, ne = () => {
			Y.value || Q(/* @__PURE__ */ new Date());
		}, re = ({ date: e }) => {
			Q(e), N.value = !1;
		};
		return (e, t) => (D(), x(y, {
			shown: N.value,
			"onUpdate:shown": t[0] ||= (e) => N.value = e,
			triggers: [],
			placement: "bottom",
			distance: 8
		}, {
			popper: j(() => [T(v, {
				"model-value": L.value,
				"min-date": E.minDate,
				"max-date": E.maxDate,
				onSelect: re,
				size: "small"
			}, null, 8, [
				"model-value",
				"min-date",
				"max-date"
			])]),
			default: j(() => [C("div", M, [
				T(_, { "aria-label": "Выбор даты" }, {
					default: j(() => [
						T(h, {
							mode: E.buttonMode,
							size: E.size,
							squared: "",
							type: "button",
							"aria-label": "Предыдущий день",
							disabled: K.value,
							onClick: ee
						}, {
							default: j(() => [T(A(p))]),
							_: 1
						}, 8, [
							"mode",
							"size",
							"disabled"
						]),
						T(h, {
							mode: E.buttonMode,
							size: E.size,
							type: "button",
							"aria-haspopup": "dialog",
							"aria-expanded": N.value,
							onClick: $
						}, {
							default: j(() => [w(k(Z.value), 1)]),
							_: 1
						}, 8, [
							"mode",
							"size",
							"aria-expanded"
						]),
						T(h, {
							mode: E.buttonMode,
							size: E.size,
							squared: "",
							type: "button",
							"aria-label": "Следующий день",
							disabled: q.value,
							onClick: te
						}, {
							default: j(() => [T(A(m))]),
							_: 1
						}, 8, [
							"mode",
							"size",
							"disabled"
						])
					]),
					_: 1
				}),
				X.value ? (D(), x(g, {
					key: 0,
					direction: "horizontal",
					size: 2
				})) : S("", !0),
				X.value ? (D(), x(h, {
					key: 1,
					mode: E.buttonMode,
					size: E.size,
					type: "button",
					onClick: ne
				}, {
					default: j(() => [...t[1] ||= [w(" Сегодня ", -1)]]),
					_: 1
				}, 8, ["mode", "size"])) : S("", !0)
			])]),
			_: 1
		}, 8, ["shown"]));
	}
}), [["__scopeId", "data-v-24fe2f18"]]);
//#endregion
export { N as default };
