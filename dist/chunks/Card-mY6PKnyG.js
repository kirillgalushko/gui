import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as n, createBlock as r, defineComponent as i, mergeProps as a, openBlock as o, ref as s, renderSlot as c, resolveDynamicComponent as l, withCtx as u } from "vue";
import '../assets/Card-D3A4_9aB.css';//#region src/components/Card/Card.vue?vue&type=script&setup=true&lang.ts
var d = /*@__PURE__*/ i({
	inheritAttrs: !1,
	__name: "Card",
	props: {
		interactive: {
			type: Boolean,
			default: !1
		},
		onClick: {},
		Element: {},
		background: { default: "default" },
		blur: {
			type: Boolean,
			default: !1
		},
		fullHeight: { type: Boolean },
		stretched: { type: Boolean },
		padding: { default: 8 },
		borderRadius: { default: 16 }
	},
	setup(e, { expose: t }) {
		let i = e, d = n(() => i.Element ?? (i.interactive ? "button" : "div")), f = s(null);
		return t({ element: f }), (t, n) => (o(), r(l(d.value), a({
			ref_key: "cardRef",
			ref: f
		}, t.$attrs, {
			type: d.value === "button" ? "button" : void 0,
			class: [
				"card",
				i.background,
				{
					"full-height": i.fullHeight,
					interactive: i.interactive,
					stretched: i.stretched,
					blur: i.blur
				}
			],
			style: {
				"--gui-card-padding": `${i.padding}px`,
				"--gui-card-border-radius": `${i.borderRadius}px`,
				padding: `${i.padding}px`,
				borderRadius: `${i.borderRadius}px`
			},
			onClick: e.onClick
		}), {
			default: u(() => [c(t.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, [
			"type",
			"class",
			"style",
			"onClick"
		]));
	}
}), f = /* @__PURE__ */ e({ default: () => p }), p = /*#__PURE__*/ t(d, [["__scopeId", "data-v-807274f4"]]);
//#endregion
export { f as n, p as t };
