import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./context-CW9BV7Nt.js";
import { computed as n, createElementBlock as r, defineComponent as i, inject as a, normalizeClass as o, openBlock as s } from "vue";
import '../assets/ButtonGroupSeparator-n5cfzY5P.css';//#region src/components/ButtonGroup/ButtonGroupSeparator.vue?vue&type=script&setup=true&lang.ts
var c = ["aria-orientation"], l = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "ButtonGroupSeparator",
	props: { orientation: {} },
	setup(e) {
		let i = e, l = a(t, { orientation: "horizontal" }), u = n(() => i.orientation ? i.orientation : l.orientation === "horizontal" ? "vertical" : "horizontal");
		return (e, t) => (s(), r("div", {
			class: o(["button-group-separator", u.value]),
			role: "separator",
			"aria-orientation": u.value
		}, null, 10, c));
	}
}), [["__scopeId", "data-v-ea7ae8e9"]]);
//#endregion
export { l as default };
