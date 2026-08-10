import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, openBlock as l, renderSlot as u, toDisplayString as d, withCtx as f } from "vue";
import '../assets/FieldLegend-D7_E7ST9.css';//#region src/components/Field/FieldLegend.vue?vue&type=script&setup=true&lang.ts
var p = { class: "field-legend" }, m = { class: "field-legend-content" }, h = /*#__PURE__*/ e(/* @__PURE__ */ c({
	__name: "FieldLegend",
	props: { description: {} },
	setup(e) {
		let c = e;
		return (e, h) => (l(), i("legend", p, [a("span", m, [s(t, {
			Element: "span",
			typography: "label-3",
			color: "default"
		}, {
			default: f(() => [u(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}), c.description ? (l(), n(t, {
			key: 0,
			Element: "span",
			color: "secondary"
		}, {
			default: f(() => [o(d(c.description), 1)]),
			_: 1
		})) : r("", !0)])]));
	}
}), [["__scopeId", "data-v-15a7591b"]]);
//#endregion
export { h as default };
