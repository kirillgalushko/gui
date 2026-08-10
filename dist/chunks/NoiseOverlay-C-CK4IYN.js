import { defineComponent as y, computed as n, openBlock as r, createElementBlock as l, createElementVNode as d, normalizeClass as c, normalizeStyle as u, renderSlot as m } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/NoiseOverlay-mQB-USwG.css';const p = (t) => {
  const e = Math.min(8, Math.max(0.5, t));
  return Number((1 / e).toFixed(3));
}, h = ({
  grainSize: t,
  octaves: e,
  seed: s
}) => {
  const o = p(t), a = Math.min(6, Math.max(1, Math.round(e))), i = Math.round(s), v = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><filter id="noise" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="${o}" numOctaves="${a}" seed="${i}" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#noise)"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(v)}`;
}, g = {
  key: 0,
  class: "NoiseOverlaySurface"
}, _ = { class: "NoiseOverlaySurface__content" }, N = /* @__PURE__ */ y({
  __name: "NoiseOverlay",
  props: {
    blendMode: { default: "soft-light" },
    grainSize: { default: 1.25 },
    octaves: { default: 4 },
    opacity: { default: 0.08 },
    position: { default: "absolute" },
    seed: { default: 7 },
    zIndex: { default: 1 }
  },
  setup(t) {
    const e = t, s = n(
      () => h({
        grainSize: e.grainSize,
        octaves: e.octaves,
        seed: e.seed
      })
    ), o = n(() => ({
      "--noise-overlay-blend-mode": e.blendMode,
      "--noise-overlay-opacity": e.opacity,
      "--noise-overlay-z-index": e.zIndex,
      backgroundImage: `url("${s.value}")`
    }));
    return (a, i) => a.$slots.default ? (r(), l("div", g, [
      d("div", {
        class: c(["NoiseOverlay", `NoiseOverlay--${e.position}`]),
        style: u(o.value),
        "aria-hidden": "true"
      }, null, 6),
      d("div", _, [
        m(a.$slots, "default", {}, void 0, !0)
      ])
    ])) : (r(), l("div", {
      key: 1,
      class: c(["NoiseOverlay", `NoiseOverlay--${e.position}`]),
      style: u(o.value),
      "aria-hidden": "true"
    }, null, 6));
  }
}), O = /* @__PURE__ */ f(N, [["__scopeId", "data-v-1915625b"]]);
export {
  O as default
};
