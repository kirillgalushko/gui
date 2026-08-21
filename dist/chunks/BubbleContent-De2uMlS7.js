import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createBlock as n, defineComponent as r, mergeProps as i, openBlock as a, renderSlot as o, resolveDynamicComponent as s, useAttrs as c, withCtx as l } from "vue";
import '../assets/BubbleContent-QLPeRcdb.css';//#endregion
//#region src/components/Bubble/BubbleContent.vue
var u = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "BubbleContent",
	props: { as: { default: "div" } },
	setup(e) {
		let r = e, u = c(), d = t(() => r.as === "button" ? u.type ?? "button" : void 0);
		return (e, t) => (a(), n(s(r.as), i(e.$attrs, {
			class: "bubble-content",
			type: d.value
		}), {
			default: l(() => [o(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, ["type"]));
	}
}), [["__scopeId", "data-v-dfe5db63"]]);
//#endregion
export { u as default };
