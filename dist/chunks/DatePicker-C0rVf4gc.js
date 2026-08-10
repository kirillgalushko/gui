import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { f as t, p as n, s as r, v as i } from "./date-jkaNgQxT.js";
import { k as a } from "./gui-icons.es-5O8QlDZJ.js";
import { t as o } from "./Calendar-DEX-VBmg.js";
import { t as s } from "./Dropdown-88Rw7P0I.js";
import { t as c } from "./Picker-DB1ngwmW.js";
import { computed as l, createBlock as u, createTextVNode as d, createVNode as f, defineComponent as p, openBlock as m, ref as h, toDisplayString as g, unref as _, withCtx as v } from "vue";
//#region src/components/DatePicker/DatePicker.vue?vue&type=script&setup=true&lang.ts
var y = /*@__PURE__*/ p({
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
	setup(e) {
		let p = e, y = h(!1), b = l(() => p.value ? i(p.value) : null), x = l(() => p.size === "extra-small" ? "small" : p.size), S = l(() => b.value ? `${r(b.value)} ${b.value.getFullYear()}` : p.placeholder), C = (e) => p.minDate && n(e, p.minDate) || p.maxDate && t(e, p.maxDate) ? !0 : p.disabledDates?.(e) ?? !1, w = () => {
			p.disabled || (y.value = !y.value);
		}, T = ({ date: e }) => {
			let t = i(e);
			C(t) || (p.onChange?.({ value: t }), y.value = !1);
		};
		return (e, t) => (m(), u(s, {
			shown: y.value,
			"onUpdate:shown": t[1] ||= (e) => y.value = e,
			triggers: [],
			placement: "bottom-end",
			distance: 8,
			stretched: p.stretched,
			"popper-class": "calendar-dropdown"
		}, {
			popper: v(() => [f(o, {
				size: x.value,
				"model-value": b.value,
				"min-date": p.minDate,
				"max-date": p.maxDate,
				"disabled-dates": p.disabledDates,
				onSelect: T,
				onMonthChange: t[0] ||= (e) => p.onMonthChange?.(e.month)
			}, null, 8, [
				"size",
				"model-value",
				"min-date",
				"max-date",
				"disabled-dates"
			])]),
			default: v(() => [f(c, {
				size: p.size,
				stretched: p.stretched,
				disabled: p.disabled,
				"aria-haspopup": "dialog",
				"aria-expanded": y.value,
				onClick: w
			}, {
				icon: v(() => [f(_(a))]),
				default: v(() => [d(g(S.value) + " ", 1)]),
				_: 1
			}, 8, [
				"size",
				"stretched",
				"disabled",
				"aria-expanded"
			])]),
			_: 1
		}, 8, ["shown", "stretched"]));
	}
}), b = /* @__PURE__ */ e({ default: () => x }), x = y;
//#endregion
export { b as n, x as t };
