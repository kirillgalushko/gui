import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { n as t } from "./context-Djnh7ZxD.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as r } from "./Skeleton-273enNa5.js";
import { Fragment as i, computed as a, createBlock as o, createElementBlock as s, defineComponent as c, openBlock as l, renderList as u, renderSlot as d, unref as f } from "vue";
import '../assets/TextSkeleton-B_1BW8tx.css';//#region src/components/Skeleton/TextSkeleton.vue?vue&type=script&setup=true&lang.ts
var p = {
	key: 0,
	class: "text-skeleton",
	"aria-hidden": "true"
}, m = /*@__PURE__*/ c({
	__name: "TextSkeleton",
	props: {
		loading: { type: Boolean },
		lines: { default: 1 },
		width: { default: "100%" },
		lastLineWidth: { default: "75%" },
		typography: { default: "paragraph-1" }
	},
	setup(e) {
		let n = e, c = t(() => n.loading), m = {
			"title-1": "18px",
			"title-2": "24px",
			"title-3": "28px",
			"title-4": "32px",
			"title-5": "36px",
			"title-6": "40px",
			"title-7": "48px",
			"title-8": "64px",
			"title-9": "96px",
			"title-10": "132px",
			"subtitle-1": "20px",
			"subtitle-2": "16px",
			"subtitle-3": "22px",
			"subtitle-4": "36px",
			"paragraph-1": "24px",
			"paragraph-2": "24px",
			"label-1": "14px",
			"label-2": "16px",
			"label-3": "18px",
			inherit: "1em"
		}, h = a(() => Array.from({ length: n.lines }, (e, t) => t)), g = a(() => m[n.typography]);
		function _(e) {
			return Array.isArray(n.width) ? n.width[e] ?? n.width[n.width.length - 1] ?? "100%" : n.lines > 1 && e === n.lines - 1 ? n.lastLineWidth : n.width;
		}
		return (e, t) => f(c) ? (l(), s("div", p, [(l(!0), s(i, null, u(h.value, (e) => (l(), o(r, {
			key: e,
			loading: !0,
			width: _(e),
			height: g.value,
			radius: "6px"
		}, null, 8, ["width", "height"]))), 128))])) : d(e.$slots, "default", {}, void 0, !0, 1);
	}
}), h = /* @__PURE__ */ e({ default: () => g }), g = /*#__PURE__*/ n(m, [["__scopeId", "data-v-6f7eaa15"]]);
//#endregion
export { h as n, g as t };
