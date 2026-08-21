import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { n as t, t as n } from "./useSize-YwgUaSDa.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { E as i } from "./gui-icons.es-B9g1VPOq.js";
import { t as a } from "./Dropdown-C01ij_R6.js";
import { t as o } from "./Picker-DB1ngwmW.js";
import { computed as s, createBlock as c, createElementVNode as l, createTextVNode as u, createVNode as d, defineComponent as f, normalizeStyle as p, openBlock as m, provide as h, ref as g, renderSlot as _, toDisplayString as v, unref as y, watch as b, withCtx as x } from "vue";
import '../assets/Select-bg51JdOK.css';//#region src/components/Select/Select.vue?vue&type=script&setup=true&lang.ts
var S = ["name", "value"], C = { class: "hidden-options" }, w = /*@__PURE__*/ f({
	__name: "Select",
	props: {
		stretched: { type: Boolean },
		label: {},
		size: { default: "large" },
		mode: { default: "default" },
		value: {},
		name: {},
		onChange: {}
	},
	setup(e) {
		let r = e, f = t(r.value, r.onChange);
		h("select", f);
		let w = g(), { elementRef: T, width: E } = n(), D = s(() => ({ minWidth: `${Math.max((E.value ?? 0) - 8, 0)}px` }));
		return b(w, () => {
			T.value = w.value?.elementRef ?? null;
		}, { flush: "post" }), b(() => r.value, () => {
			if (r.value !== void 0) {
				let e = f.options.value.get(r.value);
				f.selectedOption.value = {
					value: r.value,
					label: e
				};
			} else f.selectedOption.value = void 0;
		}), (e, t) => (m(), c(a, {
			popperHideTriggers: ["click"],
			placement: "bottom-start",
			class: "select",
			stretched: r.stretched
		}, {
			popper: x(() => [l("div", { style: p(D.value) }, [_(e.$slots, "default", {}, void 0, !0)], 4)]),
			default: x(() => [
				d(o, {
					ref_key: "pickerRef",
					ref: w,
					size: r.size,
					mode: r.mode,
					stretched: r.stretched
				}, {
					icon: x(() => [d(y(i))]),
					default: x(() => [u(v(y(f)?.selectedOption?.value?.label || r.label) + " ", 1)]),
					_: 1
				}, 8, [
					"size",
					"mode",
					"stretched"
				]),
				l("input", {
					hidden: "",
					name: r.name,
					value: r.value || y(f).selectedOption?.value?.value
				}, null, 8, S),
				l("div", C, [_(e.$slots, "default", {}, void 0, !0)])
			]),
			_: 3
		}, 8, ["stretched"]));
	}
}), T = /* @__PURE__ */ e({ default: () => E }), E = /*#__PURE__*/ r(w, [["__scopeId", "data-v-284e0e98"]]);
//#endregion
export { T as n, E as t };
