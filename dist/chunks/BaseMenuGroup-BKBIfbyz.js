import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, openBlock as r, renderSlot as i } from "vue";
import '../assets/BaseMenuGroup-CHmeMAFQ.css';//#region src/components/BaseMenu/BaseMenuGroup.vue?vue&type=script&setup=true&lang.ts
var a = ["role"], o = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "BaseMenuGroup",
	props: { role: { default: "group" } },
	setup(e) {
		let n = e;
		return (e, o) => (r(), t("div", {
			class: "base-menu-group",
			role: n.role
		}, [i(e.$slots, "default", {}, void 0, !0)], 8, a));
	}
}), [["__scopeId", "data-v-1d36ef69"]]);
//#endregion
export { o as t };
