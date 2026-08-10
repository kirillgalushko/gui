import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, defineComponent as r, normalizeClass as i, normalizeStyle as a, openBlock as o, renderSlot as s } from "vue";
import '../assets/Item-BVyjg_Kl.css';//#endregion
//#region src/components/Item/Item.vue
var c = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "Item",
	props: {
		interactive: {
			type: Boolean,
			default: !1
		},
		mode: { default: "card" },
		padding: {},
		selected: { type: Boolean },
		size: { default: "medium" },
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let r = e, c = t(() => r.padding === void 0 ? void 0 : { "--item-padding": `${r.padding}px` });
		return (e, t) => (o(), n("div", {
			class: i([
				"item",
				r.mode,
				r.size,
				{
					interactive: r.interactive,
					selected: r.selected,
					stretched: r.stretched
				}
			]),
			style: a(c.value)
		}, [s(e.$slots, "default", {}, void 0, !0)], 6));
	}
}), [["__scopeId", "data-v-83455dae"]]);
//#endregion
export { c as default };
