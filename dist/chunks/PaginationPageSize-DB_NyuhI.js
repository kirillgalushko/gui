import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { t as n } from "./Select-B7cmsDkk.js";
import { t as r } from "./SelectOption-JPMmZ8GQ.js";
import { Fragment as i, computed as a, createBlock as o, createElementBlock as s, createTextVNode as c, createVNode as l, defineComponent as u, openBlock as d, renderList as f, toDisplayString as p, withCtx as m } from "vue";
import '../assets/PaginationPageSize-sLe0nc-6.css';//#region src/components/Pagination/PaginationPageSize.vue?vue&type=script&setup=true&lang.ts
var h = ["aria-label"], g = /*#__PURE__*/ e(/* @__PURE__ */ u({
	__name: "PaginationPageSize",
	props: {
		value: {},
		options: { default: () => [5, 10] },
		label: { default: "Строк на странице" },
		size: { default: "small" },
		mode: { default: "default" }
	},
	emits: ["change"],
	setup(e, { emit: u }) {
		let g = e, _ = u, v = a(() => [.../* @__PURE__ */ new Set([...g.options, g.value])].filter((e) => Number.isInteger(e) && e > 0).sort((e, t) => e - t)), y = (e) => {
			let t = Number(e.value);
			Number.isInteger(t) && t > 0 && t !== g.value && _("change", t);
		};
		return (e, a) => (d(), s("div", {
			class: "pagination-page-size",
			role: "group",
			"aria-label": g.label
		}, [l(t, {
			Element: "span",
			typography: "subtitle-1",
			color: "secondary"
		}, {
			default: m(() => [c(p(g.label), 1)]),
			_: 1
		}), l(n, {
			value: String(g.value),
			label: String(g.value),
			size: g.size,
			mode: g.mode,
			onChange: y
		}, {
			default: m(() => [(d(!0), s(i, null, f(v.value, (e) => (d(), o(r, {
				key: e,
				value: String(e),
				label: String(e)
			}, null, 8, ["value", "label"]))), 128))]),
			_: 1
		}, 8, [
			"value",
			"label",
			"size",
			"mode"
		])], 8, h));
	}
}), [["__scopeId", "data-v-1f2e3574"]]);
//#endregion
export { g as default };
