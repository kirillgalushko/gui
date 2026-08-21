import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./BaseMenuItem-C7QoU1S6.js";
import { createBlock as n, createTextVNode as r, defineComponent as i, inject as a, mergeProps as o, onMounted as s, openBlock as c, renderSlot as l, toDisplayString as u, withCtx as d } from "vue";
//#region src/components/Select/SelectOption.vue?vue&type=script&setup=true&lang.ts
var f = /*@__PURE__*/ i({
	__name: "SelectOption",
	props: {
		showArrow: { type: Boolean },
		selected: { type: Boolean },
		role: {},
		label: {},
		value: {}
	},
	setup(e) {
		let i = a("select"), f = e, p = {
			label: f.label,
			value: f.value
		}, m = () => {
			i?.selectOption(p);
		};
		return s(() => {
			i?.registerOption(p);
		}), (e, i) => (c(), n(t, o(e.$attrs, { onClick: m }), {
			default: d(() => [l(e.$slots, "default", {}, () => [r(u(f.label), 1)])]),
			_: 3
		}, 16));
	}
}), p = /* @__PURE__ */ e({ default: () => m }), m = f;
//#endregion
export { p as n, m as t };
