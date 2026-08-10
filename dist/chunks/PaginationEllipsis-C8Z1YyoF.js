import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { y as t } from "./gui-icons.es-5O8QlDZJ.js";
import { t as n } from "./context-sz1msvET.js";
import { computed as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, inject as c, normalizeClass as l, openBlock as u, renderSlot as d, toDisplayString as f, unref as p } from "vue";
import '../assets/PaginationEllipsis-AT3E6xeP.css';//#region src/components/Pagination/PaginationEllipsis.vue?vue&type=script&setup=true&lang.ts
var m = { class: "pagination-ellipsis-label" }, h = /*#__PURE__*/ e(/* @__PURE__ */ s({
	__name: "PaginationEllipsis",
	props: {
		label: { default: "Больше страниц" },
		size: {}
	},
	setup(e) {
		let s = e, h = c(n, void 0), g = r(() => s.size ?? h?.size.value ?? "large");
		return (e, n) => (u(), i("span", { class: l(["pagination-ellipsis", g.value]) }, [d(e.$slots, "default", {}, () => [o(p(t), { "aria-hidden": "true" })], !0), a("span", m, f(s.label), 1)], 2));
	}
}), [["__scopeId", "data-v-2214bdc6"]]);
//#endregion
export { h as default };
