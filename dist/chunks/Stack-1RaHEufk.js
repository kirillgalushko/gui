import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as n, createElementBlock as r, defineComponent as i, normalizeClass as a, normalizeStyle as o, openBlock as s, renderSlot as c } from "vue";
import '../assets/Stack-RPHgmzY8.css';//#region src/components/Stack/Stack.vue?vue&type=script&setup=true&lang.ts
var l = /*@__PURE__*/ i({
	__name: "Stack",
	props: {
		direction: {},
		gap: {},
		fullHeight: { type: Boolean },
		alignItems: {},
		justifyContent: {},
		stretched: { type: Boolean },
		wrap: { type: Boolean },
		grow: { type: Boolean },
		shrink: {
			type: Boolean,
			default: !0
		},
		minWidth: {},
		maxWidth: {}
	},
	setup(e) {
		let t = e, i = n(() => ({
			"--stack-gap-size": t.gap ? `var(--gap-${t.gap})` : void 0,
			minWidth: t.minWidth,
			maxWidth: t.maxWidth
		}));
		return (e, n) => (s(), r("div", {
			class: a([
				"stack",
				t.direction,
				t.alignItems,
				t.justifyContent ? `justify-${t.justifyContent}` : void 0,
				{
					"with-gap": !!t.gap,
					fullHeight: t.fullHeight,
					stretched: t.stretched,
					wrap: t.wrap,
					grow: t.grow,
					"no-shrink": !t.shrink
				}
			]),
			style: o(i.value)
		}, [c(e.$slots, "default", {}, void 0, !0)], 6));
	}
}), u = /* @__PURE__ */ e({ default: () => d }), d = /*#__PURE__*/ t(l, [["__scopeId", "data-v-c6a6653e"]]);
//#endregion
export { u as n, d as t };
