import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as t, t as n } from "./types-CV60nIuO.js";
import { computed as r, createElementBlock as i, defineComponent as a, inject as o, normalizeClass as s, normalizeStyle as c, openBlock as l, renderSlot as u, unref as d } from "vue";
import '../assets/TimelineIndicator-BfzHjsdF.css';//#region src/components/Timeline/TimelineIndicator.vue?vue&type=script&setup=true&lang.ts
var f = ["data-state"], p = /*#__PURE__*/ e(/* @__PURE__ */ a({
	__name: "TimelineIndicator",
	props: {
		variant: { default: "solid" },
		size: { default: "medium" },
		mode: { default: "auto" },
		color: {}
	},
	setup(e) {
		let a = e, p = o(n), m = o(t);
		if (!p || !m) throw Error("TimelineIndicator must be used inside TimelineItem");
		let h = r(() => a.mode === "auto" ? m.state.value === "completed" ? "default" : m.state.value === "current" ? "accent" : m.state.value === "pending" ? "muted" : "default" : a.mode), g = r(() => a.size === "small" || a.size === "medium" || a.size === "large" ? {
			small: "12px",
			medium: "24px",
			large: "40px"
		}[a.size] : a.size), _ = r(() => {
			let e = a.color ? `var(--color-${a.color}-500)` : {
				default: "hsl(var(--primary))",
				muted: "hsl(var(--muted-foreground))",
				accent: "hsl(var(--accent))",
				positive: "hsl(var(--positive))",
				negative: "hsl(var(--negative))",
				danger: "hsl(var(--danger))",
				warning: "hsl(var(--warning))"
			}[h.value], t = h.value === "default" && !a.color ? "hsl(var(--primary-foreground))" : "hsl(0 0% 98%)";
			return {
				"--timeline-indicator-size": g.value,
				"--timeline-indicator-color": e,
				"--timeline-indicator-foreground": t
			};
		});
		return (e, t) => (l(), i("span", {
			class: s([
				"timeline-indicator",
				d(p).orientation.value,
				a.variant
			]),
			style: c(_.value),
			"data-state": d(m).state.value
		}, [u(e.$slots, "default", {}, void 0, !0)], 14, f));
	}
}), [["__scopeId", "data-v-21702622"]]);
//#endregion
export { p as default };
