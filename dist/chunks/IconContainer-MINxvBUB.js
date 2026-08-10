import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, defineComponent as r, mergeProps as i, openBlock as a, renderSlot as o } from "vue";
import '../assets/IconContainer-QpwIZOz4.css';//#endregion
//#region src/components/IconContainer/IconContainer.vue
var s = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "IconContainer",
	props: {
		size: { default: "40px" },
		mode: { default: "square" },
		color: {}
	},
	setup(e) {
		let r = e, s = t(() => {
			let e = r.color === void 0 ? void 0 : `var(--color-${r.color}-500)`;
			return {
				"--icon-container-size": r.size,
				"--icon-container-background": e === void 0 ? "hsl(var(--secondary))" : `color-mix(in oklab, ${e} 20%, transparent)`,
				"--icon-container-color": e ?? "hsl(var(--secondary-foreground))"
			};
		});
		return (e, t) => (a(), n("span", i(e.$attrs, {
			class: ["IconContainer", r.mode],
			style: s.value
		}), [o(e.$slots, "default", {}, void 0, !0)], 16));
	}
}), [["__scopeId", "data-v-0ec32381"]]);
//#endregion
export { s as default };
