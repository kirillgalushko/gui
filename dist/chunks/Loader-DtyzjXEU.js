import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as n, createElementVNode as r, defineComponent as i, normalizeStyle as a, openBlock as o, unref as s } from "vue";
import '../assets/Loader-Iu8d5zL1.css';//#region src/components/Loader/Loader.vue?vue&type=script&setup=true&lang.ts
var c = ["width", "height"], l = /*@__PURE__*/ i({
	__name: "Loader",
	props: { size: {} },
	setup(e) {
		let t = e, i = typeof t.size == "number" ? `${t.size}px` : t.size || "1em";
		return (e, t) => (o(), n("div", {
			style: a({
				width: s(i),
				height: s(i)
			}),
			class: "loader"
		}, [(o(), n("svg", {
			width: s(i),
			height: s(i),
			viewBox: "0 0 50 50",
			xmlns: "http://www.w3.org/2000/svg"
		}, [...t[0] ||= [r("circle", {
			cx: "25",
			cy: "25",
			r: "20",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "4",
			"stroke-linecap": "round",
			class: "loader__circle"
		}, null, -1)]], 8, c))], 4));
	}
}), u = /* @__PURE__ */ e({ default: () => d }), d = /*#__PURE__*/ t(l, [["__scopeId", "data-v-040d7221"]]);
//#endregion
export { u as n, d as t };
