import { t as e } from "./Text-BiA0aMEo.js";
import { computed as t, createBlock as n, createTextVNode as r, defineComponent as i, openBlock as a, toDisplayString as o, withCtx as s } from "vue";
//#endregion
//#region src/components/Pagination/PaginationSummary.vue
var c = /* @__PURE__ */ i({
	__name: "PaginationSummary",
	props: {
		from: {},
		to: {},
		total: {}
	},
	setup(i) {
		let c = i, l = t(() => c.total > 0 ? `${c.from}–${c.to} из ${c.total}` : "0 из 0"), u = t(() => c.total > 0 ? `Показаны строки с ${c.from} по ${c.to} из ${c.total}` : "Нет строк");
		return (t, i) => (a(), n(e, {
			Element: "span",
			typography: "subtitle-1",
			color: "secondary",
			"aria-live": "polite",
			"aria-label": u.value
		}, {
			default: s(() => [r(o(l.value), 1)]),
			_: 1
		}, 8, ["aria-label"]));
	}
});
//#endregion
export { c as default };
