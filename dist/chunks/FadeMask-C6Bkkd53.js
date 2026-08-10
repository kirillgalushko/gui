import { computed as _, toValue as n, defineComponent as h, toRef as s, openBlock as v, createElementBlock as y, normalizeClass as F, normalizeStyle as $, unref as R, renderSlot as S } from "vue";
import { _ as x } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FadeMask-DQwq1O7S.css';const c = 8, m = {
  top: "to top",
  right: "to right",
  bottom: "to bottom",
  left: "to left"
}, f = (e) => Math.min(100, Math.max(0, e)), u = (e) => Number(e.toFixed(3)), B = ({
  direction: e,
  easing: t,
  end: a,
  start: o
}) => {
  const r = f(Math.min(o, a)), i = f(Math.max(o, a)), l = i - r;
  if (t === "linear" || l === 0)
    return `linear-gradient(${m[e]}, black ${r}%, transparent ${i}%)`;
  const p = Array.from(
    { length: c + 1 },
    (w, g) => {
      const d = g / c, b = d * d * (3 - 2 * d), k = u(1 - b), M = u(r + l * d);
      return `rgb(0 0 0 / ${k}) ${M}%`;
    }
  );
  return `linear-gradient(${m[e]}, black 0%, ${p.join(", ")}, transparent 100%)`;
}, z = (e = {}) => ({ style: _(() => {
  const a = e.aspectRatio === void 0 ? void 0 : n(e.aspectRatio);
  if (e.disabled && n(e.disabled))
    return { aspectRatio: a };
  const o = B({
    direction: e.direction === void 0 ? "bottom" : n(e.direction),
    easing: e.easing === void 0 ? "smooth" : n(e.easing),
    end: e.end === void 0 ? 90 : n(e.end),
    start: e.start === void 0 ? 40 : n(e.start)
  });
  return {
    aspectRatio: a,
    maskImage: o,
    WebkitMaskImage: o
  };
}) }), E = /* @__PURE__ */ h({
  __name: "FadeMask",
  props: {
    aspectRatio: {},
    direction: { default: "bottom" },
    disabled: { type: Boolean, default: !1 },
    easing: { default: "smooth" },
    end: { default: 90 },
    inline: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !0 },
    start: { default: 40 }
  },
  setup(e) {
    const t = e, { style: a } = z({
      aspectRatio: s(t, "aspectRatio"),
      direction: s(t, "direction"),
      disabled: s(t, "disabled"),
      easing: s(t, "easing"),
      end: s(t, "end"),
      start: s(t, "start")
    });
    return (o, r) => (v(), y("div", {
      class: F([
        "FadeMask",
        {
          "FadeMask--inline": t.inline,
          "FadeMask--overflow-hidden": t.overflow
        }
      ]),
      style: $(R(a))
    }, [
      S(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), P = /* @__PURE__ */ x(E, [["__scopeId", "data-v-f1e34e4f"]]);
export {
  P as default
};
