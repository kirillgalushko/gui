import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./floating-vue-CLsj-sZ0.js";
import { createBlock as r, defineComponent as i, mergeProps as a, openBlock as o, renderSlot as s, unref as c, withCtx as l } from "vue";
import '../assets/Tooltip-DqxLyBP3.css';//#region src/components/Tooltip/Tooltip.vue?vue&type=script&setup=true&lang.ts
var u = /*@__PURE__*/ i({
	__name: "Tooltip",
	props: {
		mode: { default: "default" },
		delay: { default: () => ({
			show: 0,
			hide: 0
		}) },
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, i) => (o(), r(c(n), a(e.$attrs, {
			delay: t.delay,
			arrowOverflow: !1,
			popperClass: t.mode === "contrast" ? "tooltip-contrast" : "tooltip-default",
			class: [
				"tooltip",
				t.mode,
				{ "tooltip--stretched": t.stretched }
			]
		}), {
			default: l(() => [s(e.$slots, "default", {}, void 0, !0)]),
			popper: l(() => [s(e.$slots, "popper", {}, void 0, !0)]),
			_: 3
		}, 16, [
			"delay",
			"popperClass",
			"class"
		]));
	}
}), d = /* @__PURE__ */ e({ default: () => f }), f = /*#__PURE__*/ t(u, [["__scopeId", "data-v-07d03cc5"]]);
//#endregion
export { d as n, f as t };
