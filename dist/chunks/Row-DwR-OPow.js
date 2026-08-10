import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, normalizeClass as r, openBlock as i, renderSlot as a } from "vue";
import '../assets/Row-BGhfWqij.css';//#endregion
//#region src/components/Row/Row.vue
var o = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "Row",
	props: {
		fullHeight: { type: Boolean },
		alignItems: {}
	},
	setup(e) {
		let n = e;
		return (e, o) => (i(), t("div", { class: r([
			"row",
			n.alignItems,
			{ fullHeight: n.fullHeight }
		]) }, [a(e.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-eb50a26e"]]);
//#endregion
export { o as default };
