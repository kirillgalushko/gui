import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, mergeProps as r, openBlock as i, renderSlot as a } from "vue";
import '../assets/Bubble-C7CZpsZT.css';//#region src/components/Bubble/Bubble.vue?vue&type=script&setup=true&lang.ts
var o = [
	"data-align",
	"data-mode",
	"data-size"
], s = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "Bubble",
	props: {
		mode: { default: "default" },
		align: { default: "start" },
		size: { default: "medium" }
	},
	setup(e) {
		let n = e;
		return (e, s) => (i(), t("div", r(e.$attrs, {
			class: ["bubble", `bubble--align-${n.align}`],
			"data-align": n.align,
			"data-mode": n.mode,
			"data-size": n.size
		}), [a(e.$slots, "default", {}, void 0, !0)], 16, o));
	}
}), [["__scopeId", "data-v-fa44dea8"]]);
//#endregion
export { s as default };
