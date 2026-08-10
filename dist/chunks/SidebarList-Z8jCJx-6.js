import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, normalizeClass as r, openBlock as i, renderSlot as a } from "vue";
import '../assets/SidebarList-CEA68Hec.css';//#endregion
//#region src/components/Sidebar/SidebarList.vue
var o = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "SidebarList",
	props: { scrollable: {
		type: Boolean,
		default: !1
	} },
	setup(e) {
		let n = e;
		return (e, o) => (i(), t("div", { class: r(["SidebarList", { "SidebarList--scrollable": n.scrollable }]) }, [a(e.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-54f2f365"]]);
//#endregion
export { o as default };
