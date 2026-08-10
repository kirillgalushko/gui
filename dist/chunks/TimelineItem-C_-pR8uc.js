import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as t, t as n } from "./types-CV60nIuO.js";
import { computed as r, createElementBlock as i, defineComponent as a, inject as o, normalizeClass as s, openBlock as c, provide as l, renderSlot as u, unref as d } from "vue";
import '../assets/TimelineItem-ccDOJB8Q.css';//#region src/components/Timeline/TimelineItem.vue?vue&type=script&setup=true&lang.ts
var f = [
	"data-orientation",
	"data-direction",
	"data-date-position",
	"data-state",
	"data-step",
	"aria-current"
], p = /*#__PURE__*/ e(/* @__PURE__ */ a({
	__name: "TimelineItem",
	props: {
		step: {},
		state: {}
	},
	setup(e) {
		let a = e, p = o(n);
		if (!p) throw Error("TimelineItem must be used inside Timeline");
		let m = r(() => {
			if (a.state) return a.state;
			let e = p.activeStep.value;
			return e === void 0 || a.step === void 0 ? "default" : a.step === e ? "current" : typeof a.step == "number" && typeof e == "number" ? a.step < e ? "completed" : "pending" : "default";
		});
		return l(t, { state: m }), (e, t) => (c(), i("div", {
			class: s([
				"timeline-item",
				d(p).orientation.value,
				d(p).direction.value,
				`date-${d(p).datePosition.value}`
			]),
			"data-orientation": d(p).orientation.value,
			"data-direction": d(p).direction.value,
			"data-date-position": d(p).datePosition.value,
			"data-state": m.value,
			"data-step": a.step,
			"aria-current": m.value === "current" ? "step" : void 0,
			role: "listitem"
		}, [u(e.$slots, "default", {}, void 0, !0)], 10, f));
	}
}), [["__scopeId", "data-v-eb9ce8fd"]]);
//#endregion
export { p as default };
