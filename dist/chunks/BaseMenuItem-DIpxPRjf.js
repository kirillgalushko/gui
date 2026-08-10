import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { T as t } from "./gui-icons.es-5O8QlDZJ.js";
import { createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, defineComponent as o, normalizeClass as s, openBlock as c, renderSlot as l, unref as u } from "vue";
import '../assets/BaseMenuItem-NNosYv2W.css';//#region src/components/BaseMenu/BaseMenuItem.vue?vue&type=script&setup=true&lang.ts
var d = ["role"], f = { class: "base-menu-item-content" }, p = {
	key: 0,
	class: "base-menu-item-trailing",
	"aria-hidden": "true"
}, m = /*#__PURE__*/ e(/* @__PURE__ */ o({
	__name: "BaseMenuItem",
	props: {
		showArrow: { type: Boolean },
		selected: { type: Boolean },
		role: {}
	},
	setup(e) {
		let o = e;
		return (e, m) => (c(), i("button", {
			type: "button",
			class: s(["base-menu-item", { selected: o.selected }]),
			role: o.role ?? "menuitem"
		}, [a("div", f, [l(e.$slots, "default", {}, void 0, !0)]), e.$slots.trailing || o.showArrow ? (c(), i("div", p, [l(e.$slots, "trailing", {}, () => [o.showArrow ? (c(), n(u(t), { key: 0 })) : r("", !0)], !0)])) : r("", !0)], 10, d));
	}
}), [["__scopeId", "data-v-5943ca8f"]]);
//#endregion
export { m as t };
