import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, normalizeClass as r, openBlock as i } from "vue";
import '../assets/Separator-D48u0qfn.css';//#endregion
//#region src/components/Separator/Separator.vue
var a = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "Separator",
	props: {
		direction: {},
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let n = e;
		return (e, a) => (i(), t("div", { class: r([
			"separator",
			n.direction,
			{ stretched: n.stretched }
		]) }, null, 2));
	}
}), [["__scopeId", "data-v-dfa93762"]]);
//#endregion
export { a as default };
