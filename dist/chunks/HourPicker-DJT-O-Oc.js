import { t as e } from "./Select-B7cmsDkk.js";
import { t } from "./SelectOption-JPMmZ8GQ.js";
import { Fragment as n, createBlock as r, createElementBlock as i, defineComponent as a, openBlock as o, renderList as s, unref as c, withCtx as l } from "vue";
//#endregion
//#region src/components/HourPicker/HourPicker.vue
var u = /* @__PURE__ */ a({
	__name: "HourPicker",
	props: {
		value: {},
		onChange: {},
		label: { default: "Время" },
		name: {},
		stretched: { type: Boolean }
	},
	setup(a) {
		let u = a, d = Array.from({ length: 24 }, (e, t) => `${String(t).padStart(2, "0")}:00`), f = (e) => {
			u.onChange?.({ value: e.value });
		};
		return (a, p) => (o(), r(e, {
			value: u.value,
			label: u.label,
			name: u.name,
			stretched: u.stretched,
			"on-change": f
		}, {
			default: l(() => [(o(!0), i(n, null, s(c(d), (e) => (o(), r(t, {
				key: e,
				value: e,
				label: e
			}, null, 8, ["value", "label"]))), 128))]),
			_: 1
		}, 8, [
			"value",
			"label",
			"name",
			"stretched"
		]));
	}
});
//#endregion
export { u as default };
