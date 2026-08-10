import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as n, defineComponent as r, normalizeClass as i, normalizeStyle as a, openBlock as o, renderSlot as s } from "vue";
import '../assets/Stack-DXr1kBsj.css';//#region src/components/Stack/Stack.vue?vue&type=script&setup=true&lang.ts
var c = /*@__PURE__*/ r({
	__name: "Stack",
	props: {
		direction: {},
		gap: {},
		fullHeight: { type: Boolean },
		alignItems: {},
		justifyContent: {},
		stretched: { type: Boolean },
		wrap: { type: Boolean }
	},
	setup(e) {
		let t = e;
		return (e, r) => (o(), n("div", {
			class: i([
				"stack",
				t.direction,
				t.alignItems,
				t.justifyContent ? `justify-${t.justifyContent}` : void 0,
				{
					"with-gap": !!t.gap,
					fullHeight: t.fullHeight,
					stretched: t.stretched,
					wrap: t.wrap
				}
			]),
			style: a(t.gap ? { "--stack-gap-size": `var(--gap-${t.gap})` } : void 0)
		}, [s(e.$slots, "default", {}, void 0, !0)], 6));
	}
}), l = /* @__PURE__ */ e({ default: () => u }), u = /*#__PURE__*/ t(c, [["__scopeId", "data-v-e69988f9"]]);
//#endregion
export { l as n, u as t };
