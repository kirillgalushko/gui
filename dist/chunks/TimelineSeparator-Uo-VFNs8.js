import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as t, t as n } from "./types-CV60nIuO.js";
import { createElementBlock as r, defineComponent as i, inject as a, normalizeClass as o, openBlock as s, unref as c } from "vue";
import '../assets/TimelineSeparator-BJTcJQ8b.css';//#endregion
//#region src/components/Timeline/TimelineSeparator.vue
var l = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "TimelineSeparator",
	props: { dashed: {
		type: Boolean,
		default: !1
	} },
	setup(e) {
		let i = e, l = a(n), u = a(t);
		if (!l || !u) throw Error("TimelineSeparator must be used inside TimelineItem");
		return (e, t) => (s(), r("span", {
			class: o([
				"timeline-separator",
				c(l).orientation.value,
				{ dashed: i.dashed }
			]),
			"aria-hidden": "true"
		}, null, 2));
	}
}), [["__scopeId", "data-v-ea56cc1a"]]);
//#endregion
export { l as default };
