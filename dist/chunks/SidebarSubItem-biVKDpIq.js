import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createCommentVNode as t, createElementBlock as n, createElementVNode as r, defineComponent as i, mergeProps as a, openBlock as o, renderSlot as s } from "vue";
import '../assets/SidebarSubItem-BZYUsWVA.css';//#region src/components/Sidebar/SidebarSubItem.vue?vue&type=script&setup=true&lang.ts
var c = ["aria-current"], l = {
	key: 0,
	class: "sidebar-sub-item__icon",
	"aria-hidden": "true"
}, u = { class: "sidebar-sub-item__label" }, d = /*#__PURE__*/ e(/* @__PURE__ */ i({
	inheritAttrs: !1,
	__name: "SidebarSubItem",
	props: { selected: { type: Boolean } },
	setup(e) {
		let i = e;
		return (e, d) => (o(), n("button", a(e.$attrs, {
			class: ["sidebar-sub-item", { "sidebar-sub-item--selected": i.selected }],
			"aria-current": i.selected ? "page" : void 0,
			type: "button"
		}), [e.$slots.icon ? (o(), n("span", l, [s(e.$slots, "icon", {}, void 0, !0)])) : t("", !0), r("span", u, [s(e.$slots, "default", {}, void 0, !0)])], 16, c));
	}
}), [["__scopeId", "data-v-4b010588"]]);
//#endregion
export { d as default };
