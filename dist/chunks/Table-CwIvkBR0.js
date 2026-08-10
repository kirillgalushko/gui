import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, mergeProps as a, normalizeClass as o, normalizeStyle as s, openBlock as c, renderSlot as l } from "vue";
import '../assets/Table-Dbe3RsJe.css';//#endregion
//#region src/components/Table/Table.vue
var u = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "Table",
	props: {
		border: {
			type: Boolean,
			default: !1
		},
		layout: {
			type: String,
			default: "auto"
		},
		minWidth: {
			type: [String, Number],
			default: void 0
		},
		maxHeight: {
			type: [String, Number],
			default: void 0
		},
		stickyHeader: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let i = e, u = (e) => typeof e == "number" || typeof e == "string" && /^\d+(\.\d+)?$/.test(e) ? `${e}px` : e, d = t(() => u(i.minWidth)), f = t(() => u(i.maxHeight));
		return (e, t) => (c(), n("div", {
			class: o(["table-container", {
				border: i.border,
				"sticky-header": i.stickyHeader
			}]),
			style: s({ maxHeight: f.value })
		}, [r("table", a(e.$attrs, {
			class: "table",
			style: {
				minWidth: d.value,
				tableLayout: i.layout
			}
		}), [l(e.$slots, "default", {}, void 0, !0)], 16)], 6));
	}
}), [["__scopeId", "data-v-e6d04fb1"]]);
//#endregion
export { u as default };
