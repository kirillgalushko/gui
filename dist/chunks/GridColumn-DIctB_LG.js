import { n as e, t } from "./breakpoints-DUuhBvFs.js";
import { t as n } from "./context-oUjTdI9d.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as i, createElementBlock as a, defineComponent as o, inject as s, normalizeStyle as c, openBlock as l, renderSlot as u } from "vue";
import '../assets/GridColumn-DCNz_OWn.css';//#region src/components/Grid/GridColumn.vue?vue&type=script&setup=true&lang.ts
var d = "xxl", f = /*#__PURE__*/ r(/* @__PURE__ */ o({
	__name: "GridColumn",
	props: {
		xs: {},
		s: {},
		m: {},
		l: {},
		xl: {},
		xxl: {}
	},
	setup(r) {
		let o = r, f = s(n), p = i(() => f?.breakpoint.value ?? d), m = i(() => f?.columns.value ?? t[p.value]), h = i(() => {
			let t = e.indexOf(p.value);
			for (let n = t; n >= 0; --n) {
				let t = e[n];
				if (t === void 0) continue;
				let r = o[t];
				if (typeof r == "number") return Math.min(Math.max(r, 1), m.value);
			}
			return m.value;
		}), g = i(() => ({ "--grid-column-span": String(h.value) }));
		return (e, t) => (l(), a("div", {
			class: "grid-column",
			style: c(g.value)
		}, [u(e.$slots, "default", {}, void 0, !0)], 4));
	}
}), [["__scopeId", "data-v-74aaeef3"]]);
//#endregion
export { f as default };
