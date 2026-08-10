import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as n, createElementVNode as r, defineComponent as i, mergeProps as a, openBlock as o, ref as s, renderSlot as c } from "vue";
import '../assets/Picker-BKCjSFTO.css';//#region src/components/Picker/Picker.vue?vue&type=script&setup=true&lang.ts
var l = { class: "picker-text" }, u = { class: "picker-icon" }, d = /*@__PURE__*/ i({
	__name: "Picker",
	props: {
		size: { default: "large" },
		mode: { default: "default" },
		stretched: { type: Boolean }
	},
	setup(e, { expose: t }) {
		let i = e, d = s(null);
		return t({ elementRef: d }), (e, t) => (o(), n("button", a({
			ref_key: "elementRef",
			ref: d
		}, e.$attrs, {
			type: "button",
			class: [
				"picker",
				i.mode,
				i.size,
				{ stretched: i.stretched }
			]
		}), [r("span", l, [c(e.$slots, "default", {}, void 0, !0)]), r("span", u, [c(e.$slots, "icon", {}, void 0, !0)])], 16));
	}
}), f = /* @__PURE__ */ e({ default: () => p }), p = /*#__PURE__*/ t(d, [["__scopeId", "data-v-c6eb59e8"]]);
//#endregion
export { f as n, p as t };
