import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, defineComponent as a, normalizeClass as o, normalizeStyle as s, openBlock as c, renderSlot as l } from "vue";
import '../assets/AnnouncementBar-CWvsq5ho.css';//#region src/components/AnnouncementBar/AnnouncementBar.vue?vue&type=script&setup=true&lang.ts
var u = ["role"], d = { class: "announcement-bar__inner" }, f = {
	key: 0,
	class: "announcement-bar__icon",
	"aria-hidden": "true"
}, p = { class: "announcement-bar__content" }, m = {
	key: 1,
	class: "announcement-bar__actions"
}, h = /*#__PURE__*/ e(/* @__PURE__ */ a({
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
		let a = e, h = {
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
		}, g = t(() => {
			let e = h[a.mode];
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
			style: s(g.value),
			role: a.role
		}, [i("div", d, [
			e.$slots.icon ? (c(), r("div", f, [l(e.$slots, "icon", {}, void 0, !0)])) : n("", !0),
			i("div", p, [l(e.$slots, "default", {}, void 0, !0)]),
			e.$slots.actions ? (c(), r("div", m, [l(e.$slots, "actions", {}, void 0, !0)])) : n("", !0)
		])], 14, u));
	}
}), [["__scopeId", "data-v-8f264f77"]]);
//#endregion
export { h as default };
