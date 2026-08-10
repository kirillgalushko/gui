import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createCommentVNode as t, createElementBlock as n, createElementVNode as r, defineComponent as i, inject as a, normalizeClass as o, openBlock as s, ref as c, renderSlot as l, toDisplayString as u, unref as d } from "vue";
import '../assets/SidebarGroup-CGABGaoV.css';//#region src/components/Sidebar/SidebarGroup.vue?vue&type=script&setup=true&lang.ts
var f = {
	key: 0,
	class: "sidebar-group__label"
}, p = { class: "sidebar-group__content" }, m = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "SidebarGroup",
	props: { label: {} },
	setup(e) {
		let i = e, m = a("sidebar-is-compact", c(!1));
		return (e, a) => (s(), n("section", { class: o(["sidebar-group", { "sidebar-group--compact": d(m) }]) }, [i.label && !d(m) ? (s(), n("div", f, u(i.label), 1)) : t("", !0), r("div", p, [l(e.$slots, "default", {}, void 0, !0)])], 2));
	}
}), [["__scopeId", "data-v-3c603e53"]]);
//#endregion
export { m as default };
