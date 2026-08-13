import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, defineComponent as a, normalizeClass as o, normalizeStyle as s, openBlock as c, renderSlot as l } from "vue";
import '../assets/AnnouncementBar-DpAW-lUB.css';//#region src/components/AnnouncementBar/AnnouncementBar.vue?vue&type=script&setup=true&lang.ts
var u = ["role"], d = {
	key: 0,
	class: "announcement-bar__icon",
	"aria-hidden": "true"
}, f = { class: "announcement-bar__content" }, p = {
	key: 1,
	class: "announcement-bar__actions"
}, m = /*#__PURE__*/ e(/* @__PURE__ */ a({
	__name: "AnnouncementBar",
	props: {
		mode: { default: "default" },
		size: { default: "medium" },
		role: { default: "status" },
		backgroundColor: {},
		textColor: {},
		borderColor: {}
	},
	setup(e) {
		let a = e, m = {
			default: {
				background: "hsl(var(--background))",
				text: "hsl(var(--foreground))",
				border: "hsl(var(--border))"
			},
			contrast: {
				background: "hsl(var(--background))",
				text: "hsl(var(--foreground))",
				border: "hsl(var(--border))"
			},
			accent: {
				background: "hsl(var(--accent))",
				text: "hsl(0 0% 98%)",
				border: "hsl(var(--accent))"
			},
			positive: {
				background: "color-mix(in oklab, hsl(var(--positive)) 16%, hsl(var(--background)))",
				text: "hsl(var(--foreground))",
				border: "color-mix(in oklab, hsl(var(--positive)) 35%, hsl(var(--border)))"
			},
			warning: {
				background: "color-mix(in oklab, hsl(var(--warning)) 20%, hsl(var(--background)))",
				text: "hsl(var(--foreground))",
				border: "color-mix(in oklab, hsl(var(--warning)) 40%, hsl(var(--border)))"
			},
			negative: {
				background: "color-mix(in oklab, hsl(var(--negative)) 16%, hsl(var(--background)))",
				text: "hsl(var(--foreground))",
				border: "color-mix(in oklab, hsl(var(--negative)) 35%, hsl(var(--border)))"
			}
		}, h = t(() => {
			let e = m[a.mode];
			return {
				"--announcement-bar-background": a.backgroundColor ?? e.background,
				"--announcement-bar-text": a.textColor ?? e.text,
				"--announcement-bar-border": a.borderColor ?? e.border
			};
		});
		return (e, t) => (c(), r("aside", {
			class: o([
				"announcement-bar",
				`announcement-bar--${a.size}`,
				`announcement-bar--${a.mode}`,
				{ "inverted-colors": a.mode === "contrast" }
			]),
			style: s(h.value),
			role: a.role
		}, [i("div", { class: o(["announcement-bar__inner", { "announcement-bar__inner--with-icon": e.$slots.icon }]) }, [
			e.$slots.icon ? (c(), r("div", d, [l(e.$slots, "icon", {}, void 0, !0)])) : n("", !0),
			i("div", f, [l(e.$slots, "default", {}, void 0, !0)]),
			e.$slots.actions ? (c(), r("div", p, [l(e.$slots, "actions", {}, void 0, !0)])) : n("", !0)
		], 2)], 14, u));
	}
}), [["__scopeId", "data-v-eea7b149"]]);
//#endregion
export { m as default };
