import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, normalizeStyle as r, openBlock as i, renderSlot as a } from "vue";
import '../assets/GridRow-D6NsT3lf.css';//#endregion
//#region src/components/Grid/GridRow.vue
var o = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "GridRow",
	props: { rowGap: { default: "0" } },
	setup(e) {
		let n = e;
		return (e, o) => (i(), t("div", {
			class: "grid-row",
			style: r({ "--grid-row-gap": n.rowGap })
		}, [a(e.$slots, "default", {}, void 0, !0)], 4));
	}
}), [["__scopeId", "data-v-8bd73c52"]]);
//#endregion
export { o as default };
