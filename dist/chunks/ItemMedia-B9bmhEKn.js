import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, defineComponent as r, normalizeStyle as i, openBlock as a, renderSlot as o } from "vue";
import '../assets/ItemMedia-x8CQETkQ.css';//#endregion
//#region src/components/Item/ItemMedia.vue
var s = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "ItemMedia",
	props: { color: {} },
	setup(e) {
		let r = e, s = t(() => r.color === void 0 ? void 0 : { "--item-media-color": `var(--color-${r.color}-500)` });
		return (e, t) => (a(), n("div", {
			class: "item-media",
			style: i(s.value)
		}, [o(e.$slots, "default", {}, void 0, !0)], 4));
	}
}), [["__scopeId", "data-v-7737ba99"]]);
//#endregion
export { s as default };
