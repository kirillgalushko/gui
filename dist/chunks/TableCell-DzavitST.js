import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, defineComponent as r, normalizeStyle as i, openBlock as a, renderSlot as o } from "vue";
import '../assets/TableCell-VAlUYyKi.css';//#endregion
//#region src/components/Table/TableCell.vue
var s = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "TableCell",
	props: {
		width: {
			type: [String, Number],
			required: !1
		},
		minWidth: {
			type: [String, Number],
			required: !1
		},
		maxWidth: {
			type: [String, Number],
			required: !1
		}
	},
	setup(e) {
		let r = e, s = (e) => typeof e == "number" || typeof e == "string" && /^\d+(\.\d+)?$/.test(e) ? `${e}px` : e, c = t(() => ({
			width: s(r.width),
			minWidth: s(r.minWidth),
			maxWidth: s(r.maxWidth)
		}));
		return (e, t) => (a(), n("td", {
			class: "table-cell",
			style: i(c.value)
		}, [o(e.$slots, "default", {}, void 0, !0)], 4));
	}
}), [["__scopeId", "data-v-9913f98d"]]);
//#endregion
export { s as default };
