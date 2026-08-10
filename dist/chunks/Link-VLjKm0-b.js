import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./AsChild-CshKkIhp.js";
import { t as n } from "./Text-BiA0aMEo.js";
import { computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, defineComponent as c, mergeProps as l, openBlock as u, renderSlot as d, unref as f, withCtx as p } from "vue";
import '../assets/Link-CAjSJQCe.css';//#region src/components/Link/Link.vue?vue&type=script&setup=true&lang.ts
var m = {
	key: 0,
	class: "link-icon"
}, h = { class: "link-content" }, g = {
	key: 1,
	class: "link-icon"
}, _ = /*#__PURE__*/ e(/* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "Link",
	props: {
		typography: { default: "inherit" },
		asChild: { type: Boolean },
		inline: {
			type: Boolean,
			default: !0
		},
		wrap: { type: Boolean },
		underlined: { type: Boolean },
		underlineOnHover: { type: Boolean },
		disabled: { type: Boolean },
		enableVisited: { type: Boolean },
		mode: { default: "accent" },
		Element: { default: "a" }
	},
	setup(e) {
		let c = e, _ = r(() => c.disabled ? {
			"aria-disabled": "true",
			tabindex: -1,
			disabled: c.Element === "button" || c.asChild ? !0 : void 0
		} : {}), v = r(() => [
			"link",
			`mode-${c.mode}`,
			{
				inline: c.inline,
				wrap: c.wrap,
				underlined: c.underlined,
				"underline-on-hover": c.underlineOnHover,
				disabled: c.disabled,
				"enable-visited": c.enableVisited
			}
		]);
		return (e, r) => c.asChild ? (u(), i(f(t), l({ key: 0 }, {
			...e.$attrs,
			..._.value
		}, { class: v.value }), {
			default: p(() => [d(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, ["class"])) : (u(), i(n, l({ key: 1 }, {
			...e.$attrs,
			..._.value
		}, {
			Element: c.Element,
			typography: c.typography,
			color: "inherit",
			class: v.value
		}), {
			default: p(() => [
				e.$slots.iconLeft ? (u(), o("span", m, [d(e.$slots, "iconLeft", {}, void 0, !0)])) : a("", !0),
				s("span", h, [d(e.$slots, "default", {}, void 0, !0)]),
				e.$slots.iconRight ? (u(), o("span", g, [d(e.$slots, "iconRight", {}, void 0, !0)])) : a("", !0)
			]),
			_: 3
		}, 16, [
			"Element",
			"typography",
			"class"
		]));
	}
}), [["__scopeId", "data-v-eb40ebc6"]]);
//#endregion
export { _ as default };
