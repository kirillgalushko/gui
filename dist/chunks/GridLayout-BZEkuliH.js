import { t as e } from "./breakpoints-DUuhBvFs.js";
import { t } from "./useViewportBreakpoint-tMpTVilx.js";
import { t as n } from "./useContainerBreakpoint-Dz9Y67a9.js";
import { t as r } from "./context-oUjTdI9d.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { Fragment as a, computed as o, createCommentVNode as s, createElementBlock as c, defineComponent as l, normalizeStyle as u, openBlock as d, provide as f, ref as p, renderList as m, renderSlot as h, toDisplayString as g } from "vue";
import '../assets/GridLayout-CE3f52ZU.css';//#region src/components/Grid/GridLayout.vue?vue&type=script&setup=true&lang.ts
var _ = { key: 0 }, v = {
	key: 1,
	class: "grid-layout__highlight",
	"aria-hidden": "true"
}, y = "1728px", b = /*#__PURE__*/ i(/* @__PURE__ */ l({
	__name: "GridLayout",
	props: {
		mode: { default: "container" },
		gutter: { default: "var(--gap-4, 16px)" },
		highlight: {
			type: Boolean,
			default: !1
		},
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(i) {
		let l = i, b = p(null), x = n(b), S = t(), C = o(() => l.mode === "viewport" ? S.breakpoint : x.breakpoint), w = o(() => e[C.value]), T = o(() => C.value === "xs" ? "12px" : "24px"), E = o(() => ({
			"--grid-columns": String(w.value),
			"--grid-gutter": l.gutter,
			"--grid-layout-padding": T.value,
			"--grid-layout-max-width": l.stretched ? "none" : y
		}));
		return f(r, {
			breakpoint: C,
			columns: w
		}), (e, t) => (d(), c("div", {
			ref_key: "rootRef",
			ref: b,
			class: "grid-layout",
			style: u(E.value)
		}, [
			l.highlight ? (d(), c("div", _, g(C.value), 1)) : s("", !0),
			l.highlight ? (d(), c("div", v, [(d(!0), c(a, null, m(w.value, (e) => (d(), c("div", {
				key: e,
				class: "grid-layout__highlight-column"
			}))), 128))])) : s("", !0),
			h(e.$slots, "default", {}, void 0, !0)
		], 4));
	}
}), [["__scopeId", "data-v-771d7030"]]);
//#endregion
export { b as default };
