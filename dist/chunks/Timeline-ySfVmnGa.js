import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./types-CV60nIuO.js";
import { computed as n, createElementBlock as r, defineComponent as i, normalizeClass as a, normalizeStyle as o, openBlock as s, provide as c, renderSlot as l } from "vue";
import '../assets/Timeline-Cb5A75Ww.css';//#region src/components/Timeline/Timeline.vue?vue&type=script&setup=true&lang.ts
var u = [
	"data-orientation",
	"data-direction",
	"data-date-position"
], d = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "Timeline",
	props: {
		orientation: { default: "vertical" },
		direction: { default: "forward" },
		datePosition: { default: "top" },
		activeStep: {},
		railSize: { default: "40px" }
	},
	setup(e) {
		let i = e, d = n(() => ({ "--timeline-rail-size": i.railSize }));
		return c(t, {
			orientation: n(() => i.orientation),
			direction: n(() => i.direction),
			datePosition: n(() => i.datePosition),
			activeStep: n(() => i.activeStep)
		}), (e, t) => (s(), r("div", {
			class: a([
				"timeline",
				i.orientation,
				i.direction
			]),
			style: o(d.value),
			"data-orientation": i.orientation,
			"data-direction": i.direction,
			"data-date-position": i.datePosition,
			role: "list"
		}, [l(e.$slots, "default", {}, void 0, !0)], 14, u));
	}
}), [["__scopeId", "data-v-503eae87"]]);
//#endregion
export { d as default };
