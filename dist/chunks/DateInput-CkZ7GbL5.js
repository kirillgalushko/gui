import { f as e, m as t, p as n, v as r } from "./date-jkaNgQxT.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { O as a } from "./gui-icons.es-B9g1VPOq.js";
import { t as o } from "./Action-CF1Ttgrt.js";
import { t as s } from "./Calendar-C9YOkhu7.js";
import { t as c } from "./Dropdown-C01ij_R6.js";
import { t as l } from "./Input-DDpZC86_.js";
import { computed as u, createElementBlock as d, createVNode as f, defineComponent as p, mergeProps as m, normalizeClass as h, openBlock as g, ref as _, unref as v, watch as y, withCtx as b, withKeys as x, withModifiers as S } from "vue";
import '../assets/DateInput-CjBnt9ho.css';//#region src/components/DateInput/DateInput.vue?vue&type=script&setup=true&lang.ts
var C = 1900, w = 2099, T = /*#__PURE__*/ i(/* @__PURE__ */ p({
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
	setup(i) {
		let p = i, T = _(null), E = _(!1), D = _(""), O = _(!1), k = (e) => e ? `${String(e.getDate()).padStart(2, "0")}.${String(e.getMonth() + 1).padStart(2, "0")}.${String(e.getFullYear()).padStart(4, "0")}` : "", A = (e) => {
			let t = e.replace(/\D/g, "").slice(0, 8), n = t[0], r = t[1];
			if (!n) return {
				day: "",
				month: "",
				year: ""
			};
			let i = n, a = t.slice(1);
			if (r ? (n === "0" ? Number(r) > 0 : n === "1" || n === "2" || n === "3" && Number(r) <= 1) ? (i = `${n}${r}`, a = t.slice(2)) : (i = `0${n}`, a = t.slice(1)) : Number(n) > 3 && (i = `0${n}`, a = ""), !a) return {
				day: i,
				month: "",
				year: ""
			};
			let o = a[0], s = a[1];
			if (!s) {
				let e = Number(o) > 1;
				return {
					day: i,
					month: e ? `0${o}` : o,
					year: ""
				};
			}
			if (o === "0") return {
				day: i,
				month: Number(s) > 0 ? `0${s}` : o,
				year: Number(s) > 0 ? a.slice(2, 6) : a.slice(1, 5)
			};
			if (o === "1") {
				let e = Number(s) <= 2;
				return {
					day: i,
					month: e ? `${o}${s}` : `0${o}`,
					year: e ? a.slice(2, 6) : a.slice(1, 5)
				};
			}
			return {
				day: i,
				month: `0${o}`,
				year: a.slice(1, 5)
			};
		}, j = (e) => {
			let { day: t, month: n, year: r } = A(e);
			return [
				t,
				n,
				r
			].filter(Boolean).join(".");
		}, M = (e) => {
			let { day: t, month: n, year: i } = A(e), a = /* @__PURE__ */ new Date();
			if (!t) return null;
			let o = Number(t), s = n ? Number(n) : a.getMonth() + 1;
			if (i.length === 3 || i.length > 4) return null;
			let c = i.length === 0 ? a.getFullYear() : i.length <= 2 ? 2e3 + Number(i) : Number(i);
			if (c < C || c > w || s < 1 || s > 12 || o < 1) return null;
			let l = r(new Date(c, s - 1, o));
			return l.getFullYear() !== c || l.getMonth() !== s - 1 || l.getDate() !== o ? null : l;
		}, N = (t) => p.minDate && n(t, p.minDate) || p.maxDate && e(t, p.maxDate) ? !1 : !(p.disabledDates?.(t) ?? !1), P = (e, n) => !e || !n ? e === n : t(e, n), F = u(() => p.value ? r(p.value) : null), I = u(() => {
			let t = new Date(C, 0, 1);
			return !p.minDate || e(t, p.minDate) ? t : p.minDate;
		}), L = u(() => {
			let e = new Date(w, 11, 31);
			return !p.maxDate || n(e, p.maxDate) ? e : p.maxDate;
		}), R = (e, t, n) => {
			p.onChange?.({
				value: e,
				inputValue: t,
				isValid: n
			});
		}, z = () => {
			if (!D.value) {
				O.value = !1, R(null, "", !0);
				return;
			}
			let e = M(D.value), t = !!(e && N(e));
			if (O.value = !t, !e || !t) {
				R(null, D.value, !1);
				return;
			}
			let n = k(e);
			D.value = n, R(e, n, !0);
		}, B = (e) => {
			D.value = j(String(e ?? "")), O.value = !1;
		}, V = (e) => {
			let t = e.target;
			if (!(t instanceof HTMLInputElement)) return;
			let n = j(t.value);
			t.value = n, D.value = n, O.value = !1;
		}, H = () => {
			p.disabled || (E.value = !0);
		}, U = () => {
			p.disabled || (E.value = !E.value);
		}, W = (e) => {
			let t = e.target;
			return !(t instanceof Node && T.value?.contains(t));
		}, G = ({ date: e }) => {
			let t = r(e);
			if (!N(t)) return;
			let n = k(t);
			D.value = n, O.value = !1, R(t, n, !0), E.value = !1;
		};
		return y(() => p.value, (e) => {
			P(e ?? null, M(D.value)) || (D.value = k(e ?? null), O.value = !1);
		}, { immediate: !0 }), (e, t) => (g(), d("div", {
			ref_key: "dateInputRef",
			ref: T,
			class: h(["date-input", { stretched: p.stretched }])
		}, [f(c, {
			shown: E.value,
			"onUpdate:shown": t[1] ||= (e) => E.value = e,
			triggers: [],
			placement: "bottom-end",
			distance: 8,
			stretched: p.stretched,
			"auto-hide": W,
			"popper-class": "calendar-dropdown",
			"no-auto-focus": ""
		}, {
			popper: b(() => [f(s, {
				"model-value": F.value,
				"min-date": I.value,
				"max-date": L.value,
				"disabled-dates": p.disabledDates,
				onSelect: G,
				onMonthChange: t[0] ||= (e) => p.onMonthChange?.(e.month),
				size: "small"
			}, null, 8, [
				"model-value",
				"min-date",
				"max-date",
				"disabled-dates"
			])]),
			default: b(() => [f(l, m(e.$attrs, {
				"model-value": D.value,
				type: "text",
				inputmode: "numeric",
				autocomplete: "off",
				placeholder: p.placeholder,
				"max-width": p.maxWidth,
				disabled: p.disabled,
				description: p.description,
				"error-message": p.errorMessage,
				invalid: p.invalid || O.value,
				"onUpdate:modelValue": B,
				onFocus: H,
				onBlur: z,
				onInput: V,
				onKeydown: x(S(z, ["prevent"]), ["enter"])
			}), {
				rightAdornment: b(() => [f(o, {
					type: "button",
					"aria-label": "Открыть календарь",
					"aria-expanded": E.value,
					disabled: p.disabled,
					onClick: S(U, ["prevent"])
				}, {
					default: b(() => [f(v(a))]),
					_: 1
				}, 8, ["aria-expanded", "disabled"])]),
				_: 1
			}, 16, [
				"model-value",
				"placeholder",
				"max-width",
				"disabled",
				"description",
				"error-message",
				"invalid",
				"onKeydown"
			])]),
			_: 1
		}, 8, ["shown", "stretched"])], 2));
	}
}), [["__scopeId", "data-v-22335bd8"]]);
//#endregion
export { T as default };
