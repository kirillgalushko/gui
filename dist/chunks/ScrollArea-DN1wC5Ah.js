import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, defineComponent as r, mergeProps as i, openBlock as a, renderSlot as o } from "vue";
import '../assets/ScrollArea-CiWe9z3v.css';//#region src/components/ScrollArea/ScrollArea.vue?vue&type=script&setup=true&lang.ts
var s = ["tabindex"], c = /*#__PURE__*/ e(/* @__PURE__ */ r({
	inheritAttrs: !1,
	__name: "ScrollArea",
	props: {
		maxHeight: {
			type: [String, Number],
			default: void 0
		},
		orientation: {
			type: String,
			default: "vertical"
		},
		keyboardFocusable: {
			type: Boolean,
			default: !0
		},
		stableScrollbar: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let r = e, c = t(() => typeof r.maxHeight == "number" ? `${r.maxHeight}px` : r.maxHeight);
		return (e, t) => (a(), n("div", i(e.$attrs, {
			class: [
				"scroll-area",
				r.orientation,
				{ "stable-scrollbar": r.stableScrollbar }
			],
			style: { maxHeight: c.value },
			tabindex: r.keyboardFocusable ? 0 : void 0
		}), [o(e.$slots, "default", {}, void 0, !0)], 16, s));
	}
}), [["__scopeId", "data-v-81938977"]]);
//#endregion
export { c as default };
