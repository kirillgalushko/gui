import { n as e } from "./context-Djnh7ZxD.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./Skeleton-273enNa5.js";
import { t as r } from "./AvatarSkeleton-DPS2jx03.js";
import { t as i } from "./TextSkeleton-CMUCBRBx.js";
import { computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createVNode as u, defineComponent as d, normalizeStyle as f, openBlock as p, renderSlot as m, unref as h } from "vue";
import '../assets/CardSkeleton-CK6FPZQ0.css';//#region src/components/Skeleton/CardSkeleton.vue?vue&type=script&setup=true&lang.ts
var g = { class: "card-skeleton-header" }, _ = /*#__PURE__*/ t(/* @__PURE__ */ d({
	__name: "CardSkeleton",
	props: {
		loading: { type: Boolean },
		width: { default: "320px" },
		padding: { default: 8 },
		borderRadius: { default: 16 },
		withAvatar: {
			type: Boolean,
			default: !0
		}
	},
	setup(t) {
		let d = t, _ = e(() => d.loading), v = a(() => ({
			width: d.width,
			padding: `${d.padding}px`,
			borderRadius: `${d.borderRadius}px`
		}));
		return (e, t) => h(_) ? (p(), c("div", {
			key: 0,
			class: "card-skeleton",
			style: f(v.value),
			"aria-hidden": "true"
		}, [
			l("div", g, [d.withAvatar ? (p(), o(r, { key: 0 })) : s("", !0), u(i, {
				lines: 2,
				width: ["60%", "42%"],
				typography: "label-2"
			})]),
			u(n, {
				height: "120px",
				radius: "12px"
			}),
			u(i, {
				lines: 3,
				"last-line-width": "64%"
			})
		], 4)) : m(e.$slots, "default", {}, void 0, !0, 1);
	}
}), [["__scopeId", "data-v-c50f1b3f"]]);
//#endregion
export { _ as default };
