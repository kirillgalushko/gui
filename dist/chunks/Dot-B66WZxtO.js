import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, defineComponent as r, normalizeStyle as i, openBlock as a } from "vue";
import '../assets/Dot-CGNZ5bsa.css';//#endregion
//#region src/components/Dot/Dot.vue
var o = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "Dot",
	props: { color: {} },
	setup(e) {
		let r = e, o = t(() => ({ "--dot-color": r.color === "accent" ? "hsl(var(--accent))" : `var(--color-${r.color}-500)` }));
		return (e, t) => (a(), n("span", {
			class: "dot",
			style: i(o.value),
			"aria-hidden": "true"
		}, null, 4));
	}
}), [["__scopeId", "data-v-42e0722d"]]);
//#endregion
export { o as default };
