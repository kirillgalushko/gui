import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as n, createBlock as r, defineComponent as i, mergeProps as a, openBlock as o, renderSlot as s, resolveDynamicComponent as c, withCtx as l } from "vue";
import '../assets/Text-BjLcvbh-.css';//#region src/components/Text/Text.vue?vue&type=script&setup=true&lang.ts
var u = /*@__PURE__*/ i({
	__name: "Text",
	props: {
		Element: { default: "div" },
		typography: {},
		clamp: {},
		ellipsis: { type: Boolean },
		color: { default: "default" },
		textAlign: { default: "inherit" }
	},
	setup(e) {
		let t = e, i = n(() => ({
			...t.clamp ? {
				"-webkit-line-clamp": t.clamp,
				"line-clamp": t.clamp
			} : {},
			textAlign: t.textAlign
		}));
		return (n, u) => (o(), r(c(t.Element), a(n.$attrs, {
			class: [
				t.typography,
				t.color,
				{
					ellipsis: e.ellipsis,
					clamp: e.clamp,
					[`clamp-${e.clamp}`]: !!e.clamp
				}
			],
			style: i.value
		}), {
			default: l(() => [s(n.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, ["class", "style"]));
	}
}), d = /* @__PURE__ */ e({ default: () => f }), f = /*#__PURE__*/ t(u, [["__scopeId", "data-v-5362ff8b"]]);
//#endregion
export { d as n, f as t };
