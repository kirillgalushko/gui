import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, normalizeClass as r, openBlock as i, renderSlot as a } from "vue";
import '../assets/ItemGroup-p0rDOj6v.css';//#endregion
//#region src/components/Item/ItemGroup.vue
var o = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "ItemGroup",
	props: {
		mode: { default: "outlined" },
		separated: {
			type: Boolean,
			default: !0
		},
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let n = e;
		return (e, o) => (i(), t("div", {
			class: r([
				"item-group",
				n.mode,
				{
					separated: n.separated,
					stretched: n.stretched
				}
			]),
			role: "list"
		}, [a(e.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-0ac6272a"]]);
//#endregion
export { o as default };
