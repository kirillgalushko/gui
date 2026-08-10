import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createBlock as n, defineComponent as r, normalizeClass as i, normalizeStyle as a, openBlock as o, renderSlot as s, resolveDynamicComponent as c, withCtx as l } from "vue";
import '../assets/Card-VQUvU3Qv.css';//#region src/components/Card/Card.vue?vue&type=script&setup=true&lang.ts
var u = /*@__PURE__*/ r({
	__name: "Card",
	props: {
		interactive: {
			type: Boolean,
			default: !1
		},
		onClick: {},
		background: { default: "default" },
		fullHeight: { type: Boolean },
		stretched: { type: Boolean },
		padding: { default: 8 },
		borderRadius: { default: 16 }
	},
	setup(e) {
		let t = e;
		return (r, u) => (o(), n(c(t.interactive ? "button" : "div"), {
			class: i([
				"card",
				t.background,
				{
					"full-height": t.fullHeight,
					interactive: t.interactive,
					stretched: t.stretched
				}
			]),
			style: a({
				padding: `${t.padding}px`,
				borderRadius: `${t.borderRadius}px`
			}),
			onClick: e.onClick
		}, {
			default: l(() => [s(r.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, [
			"class",
			"style",
			"onClick"
		]));
	}
}), d = /* @__PURE__ */ e({ default: () => f }), f = /*#__PURE__*/ t(u, [["__scopeId", "data-v-a4be4752"]]);
//#endregion
export { d as n, f as t };
