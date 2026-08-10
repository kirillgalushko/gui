import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { createBlock as n, defineComponent as r, openBlock as i, renderSlot as a, withCtx as o } from "vue";
import '../assets/ItemTitle-DgtNSqZY.css';//#endregion
//#region src/components/Item/ItemTitle.vue
var s = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "ItemTitle",
	props: {
		Element: { default: "div" },
		ellipsis: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let r = e;
		return (s, c) => (i(), n(t, {
			Element: r.Element,
			typography: "label-2",
			color: "default",
			ellipsis: e.ellipsis,
			class: "item-title"
		}, {
			default: o(() => [a(s.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["Element", "ellipsis"]));
	}
}), [["__scopeId", "data-v-152143f0"]]);
//#endregion
export { s as default };
