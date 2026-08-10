import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { Fragment as n, computed as r, createElementBlock as i, createElementVNode as a, defineComponent as o, normalizeStyle as s, openBlock as c, ref as l, renderList as u, watch as d } from "vue";
import '../assets/ProgressBar-B0fUH5gs.css';//#region src/components/ProgressBar/ProgressBar.vue?vue&type=script&setup=true&lang.ts
var f = ["aria-valuenow", "aria-valuemax"], p = 450, m = /*@__PURE__*/ o({
	__name: "ProgressBar",
	props: {
		progress: { default: 0 },
		max: { default: 100 },
		color: { default: "accent" },
		segments: { default: 1 },
		height: { default: "8px" },
		gap: { default: "var(--gap-1)" }
	},
	setup(e) {
		let t = e, o = r(() => Math.max(1, t.max)), m = r(() => Math.min(o.value, Math.max(0, t.progress))), h = r(() => Math.max(1, Math.floor(t.segments))), g = r(() => m.value / o.value * h.value), _ = l(!0), v = l(g.value);
		d(g, (e, t) => {
			_.value = e >= t, v.value = t;
		});
		let y = r(() => t.color.startsWith("--") ? `hsl(var(${t.color}))` : t.color.startsWith("#") || t.color.startsWith("rgb") || t.color.startsWith("hsl") || t.color.startsWith("var(") ? t.color : `hsl(var(--${t.color}))`), b = (e) => {
			let t = v.value, n = g.value;
			if (t === n) return "0ms";
			let r = Math.min(t, n), i = Math.max(t, n);
			return e < i && e + 1 > r ? _.value ? `${Math.max(0, e - Math.floor(r)) * p / h.value}ms` : `${Math.max(0, Math.ceil(i) - 1 - e) * p / h.value}ms` : "0ms";
		}, x = r(() => Array.from({ length: h.value }, (e, t) => ({
			id: t,
			fill: Math.min(100, Math.max(0, (g.value - t) * 100)),
			transitionDuration: `${p / h.value}ms`,
			transitionDelay: b(t)
		})));
		return (e, r) => (c(), i("div", {
			class: "progress-bar",
			role: "progressbar",
			"aria-valuenow": m.value,
			"aria-valuemin": "0",
			"aria-valuemax": o.value,
			style: s({
				"--progress-bar-color": y.value,
				"--progress-bar-height": t.height,
				"--progress-bar-gap": t.gap
			})
		}, [(c(!0), i(n, null, u(x.value, (e) => (c(), i("div", {
			key: e.id,
			class: "progress-bar-segment"
		}, [a("div", {
			class: "progress-bar-fill",
			style: s({
				width: `${e.fill}%`,
				transitionDuration: `${e.transitionDuration}, 0.25s`,
				transitionDelay: `${e.transitionDelay}, 0s`
			})
		}, null, 4)]))), 128))], 12, f));
	}
}), h = /* @__PURE__ */ e({ default: () => g }), g = /*#__PURE__*/ t(m, [["__scopeId", "data-v-93e2b4e6"]]);
//#endregion
export { h as n, g as t };
