import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, mergeProps as r, openBlock as i, renderSlot as a } from "vue";
import '../assets/Kbd-eDsbLiQi.css';//#endregion
//#region src/components/Kbd/Kbd.vue
var o = /*#__PURE__*/ e(/* @__PURE__ */ n({
	inheritAttrs: !1,
	__name: "Kbd",
	props: {
		mode: { default: "default" },
		size: { default: "small" }
	},
	setup(e) {
		let n = e;
		return (e, o) => (i(), t("kbd", r(e.$attrs, {
			class: [
				"kbd",
				n.mode,
				n.size
			],
			"data-slot": "kbd"
		}), [a(e.$slots, "default", {}, void 0, !0)], 16));
	}
}), [["__scopeId", "data-v-5d3dfdc7"]]);
//#endregion
export { o as default };
