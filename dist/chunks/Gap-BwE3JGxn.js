import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as n, createElementBlock as r, defineComponent as i, normalizeClass as a, normalizeStyle as o, openBlock as s } from "vue";
import '../assets/Gap-rzBlyd0L.css';//#region src/components/Gap/Gap.vue?vue&type=script&setup=true&lang.ts
var c = /*@__PURE__*/ i({
	__name: "Gap",
	props: {
		direction: {},
		size: {},
		default: {}
	},
	setup(e) {
		let t = e, i = n(() => t.direction ?? "vertical"), c = n(() => t.size ?? t.default ?? 1);
		return (e, t) => (s(), r("div", {
			"aria-hidden": "true",
			class: a(["gap", i.value]),
			style: o({ "--gap-size": `var(--gap-${c.value})` })
		}, null, 6));
	}
}), l = /* @__PURE__ */ e({ default: () => u }), u = /*#__PURE__*/ t(c, [["__scopeId", "data-v-b358b76a"]]);
//#endregion
export { l as n, u as t };
