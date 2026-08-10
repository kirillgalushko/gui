import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, normalizeClass as a, normalizeStyle as o, openBlock as s, renderSlot as c } from "vue";
import '../assets/NoiseOverlay-D8e5KXCe.css';//#region src/components/NoiseOverlay/noiseOverlay.ts
var l = (e) => Number((1 / Math.min(8, Math.max(.5, e))).toFixed(3)), u = ({ grainSize: e, octaves: t, seed: n }) => {
	let r = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><filter id="noise" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="${l(e)}" numOctaves="${Math.min(6, Math.max(1, Math.round(t)))}" seed="${Math.round(n)}" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#noise)"/></svg>`;
	return `data:image/svg+xml,${encodeURIComponent(r)}`;
}, d = {
	key: 0,
	class: "NoiseOverlaySurface"
}, f = { class: "NoiseOverlaySurface__content" }, p = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "NoiseOverlay",
	props: {
		blendMode: { default: "soft-light" },
		grainSize: { default: 1.25 },
		octaves: { default: 4 },
		opacity: { default: .08 },
		position: { default: "absolute" },
		seed: { default: 7 },
		zIndex: { default: 1 }
	},
	setup(e) {
		let i = e, l = t(() => u({
			grainSize: i.grainSize,
			octaves: i.octaves,
			seed: i.seed
		})), p = t(() => ({
			"--noise-overlay-blend-mode": i.blendMode,
			"--noise-overlay-opacity": i.opacity,
			"--noise-overlay-z-index": i.zIndex,
			backgroundImage: `url("${l.value}")`
		}));
		return (e, t) => e.$slots.default ? (s(), n("div", d, [r("div", {
			class: a(["NoiseOverlay", `NoiseOverlay--${i.position}`]),
			style: o(p.value),
			"aria-hidden": "true"
		}, null, 6), r("div", f, [c(e.$slots, "default", {}, void 0, !0)])])) : (s(), n("div", {
			key: 1,
			class: a(["NoiseOverlay", `NoiseOverlay--${i.position}`]),
			style: o(p.value),
			"aria-hidden": "true"
		}, null, 6));
	}
}), [["__scopeId", "data-v-1915625b"]]);
//#endregion
export { p as default };
