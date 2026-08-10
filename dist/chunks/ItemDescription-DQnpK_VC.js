import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { createBlock as n, defineComponent as r, openBlock as i, renderSlot as a, withCtx as o } from "vue";
import '../assets/ItemDescription-C7CZF4cn.css';//#endregion
//#region src/components/Item/ItemDescription.vue
var s = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "ItemDescription",
	props: {
		Element: { default: "div" },
		ellipsis: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let r = e;
		return (e, s) => (i(), n(t, {
			Element: r.Element,
			typography: "label-3",
			color: "secondary",
			ellipsis: r.ellipsis,
			class: "item-description"
		}, {
			default: o(() => [a(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["Element", "ellipsis"]));
	}
}), [["__scopeId", "data-v-dc232c37"]]);
//#endregion
export { s as default };
