import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, defineComponent as r, normalizeClass as i, normalizeStyle as a, openBlock as o, renderSlot as s, toRef as c, toValue as l, unref as u } from "vue";
import '../assets/FadeMask-BPbR0JdG.css';//#region src/components/FadeMask/useFadeMask.ts
var d = 8, f = {
	top: "to top",
	right: "to right",
	bottom: "to bottom",
	left: "to left"
}, p = (e) => Math.min(100, Math.max(0, e)), m = (e) => Number(e.toFixed(3)), h = ({ direction: e, easing: t, end: n, start: r }) => {
	let i = p(Math.min(r, n)), a = p(Math.max(r, n)), o = a - i;
	if (t === "linear" || o === 0) return `linear-gradient(${f[e]}, black ${i}%, transparent ${a}%)`;
	let s = Array.from({ length: 9 }, (e, t) => {
		let n = t / d;
		return `rgb(0 0 0 / ${m(1 - n * n * (3 - 2 * n))}) ${m(i + o * n)}%`;
	});
	return `linear-gradient(${f[e]}, black 0%, ${s.join(", ")}, transparent 100%)`;
}, g = (e = {}) => ({ style: t(() => {
	let t = e.aspectRatio === void 0 ? void 0 : l(e.aspectRatio);
	if (e.disabled && l(e.disabled)) return { aspectRatio: t };
	let n = h({
		direction: e.direction === void 0 ? "bottom" : l(e.direction),
		easing: e.easing === void 0 ? "smooth" : l(e.easing),
		end: e.end === void 0 ? 90 : l(e.end),
		start: e.start === void 0 ? 40 : l(e.start)
	});
	return {
		aspectRatio: t,
		maskImage: n,
		WebkitMaskImage: n
	};
}) }), _ = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "FadeMask",
	props: {
		aspectRatio: {},
		direction: { default: "bottom" },
		disabled: {
			type: Boolean,
			default: !1
		},
		easing: { default: "smooth" },
		end: { default: 90 },
		inline: {
			type: Boolean,
			default: !1
		},
		overflow: {
			type: Boolean,
			default: !0
		},
		start: { default: 40 }
	},
	setup(e) {
		let t = e, { style: r } = g({
			aspectRatio: c(t, "aspectRatio"),
			direction: c(t, "direction"),
			disabled: c(t, "disabled"),
			easing: c(t, "easing"),
			end: c(t, "end"),
			start: c(t, "start")
		});
		return (e, c) => (o(), n("div", {
			class: i(["FadeMask", {
				"FadeMask--inline": t.inline,
				"FadeMask--overflow-hidden": t.overflow
			}]),
			style: a(u(r))
		}, [s(e.$slots, "default", {}, void 0, !0)], 6));
	}
}), [["__scopeId", "data-v-f1e34e4f"]]);
//#endregion
export { _ as default };
