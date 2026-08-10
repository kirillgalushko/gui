import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { E as t } from "./gui-icons.es-5O8QlDZJ.js";
import { t as n } from "./PaginationLink-DCMkmo-Y.js";
import { createBlock as r, createElementVNode as i, createVNode as a, defineComponent as o, mergeProps as s, openBlock as c, renderSlot as l, toDisplayString as u, unref as d, withCtx as f } from "vue";
import '../assets/PaginationPrevious-QGZQlCtP.css';//#endregion
//#region src/components/Pagination/PaginationPrevious.vue
var p = /*#__PURE__*/ e(/* @__PURE__ */ o({
	inheritAttrs: !1,
	__name: "PaginationPrevious",
	props: {
		Element: { default: "a" },
		disabled: { type: Boolean },
		size: {},
		label: { default: "Перейти на предыдущую страницу" },
		text: { default: "Назад" }
	},
	setup(e) {
		let o = e;
		return (e, p) => (c(), r(n, s(e.$attrs, {
			Element: o.Element,
			disabled: o.disabled,
			size: o.size,
			"aria-label": o.label,
			class: ["pagination-previous", { "pagination-previous-icon-only": !o.text }]
		}), {
			default: f(() => [l(e.$slots, "default", {}, () => [a(d(t)), i("span", null, u(o.text), 1)], !0)]),
			_: 3
		}, 16, [
			"Element",
			"disabled",
			"size",
			"aria-label",
			"class"
		]));
	}
}), [["__scopeId", "data-v-3ac9a030"]]);
//#endregion
export { p as default };
