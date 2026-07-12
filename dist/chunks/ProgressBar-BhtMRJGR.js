import { defineComponent as b, computed as s, ref as f, watch as D, openBlock as i, createElementBlock as u, normalizeStyle as d, Fragment as $, renderList as C, createElementVNode as W } from "vue";
import { _ as w } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ProgressBar-CJnjD67s.css';const B = ["aria-valuenow", "aria-valuemax"], c = 450, k = /* @__PURE__ */ b({
  __name: "ProgressBar",
  props: {
    progress: { default: 0 },
    max: { default: 100 },
    color: { default: "accent" },
    segments: { default: 1 },
    height: { default: "8px" },
    gap: { default: "var(--gap-1)" }
  },
  setup(M) {
    const a = M, l = s(() => Math.max(1, a.max)), m = s(() => Math.min(l.value, Math.max(0, a.progress))), o = s(() => Math.max(1, Math.floor(a.segments))), n = s(() => m.value / l.value * o.value), g = f(!0), h = f(n.value);
    D(n, (e, r) => {
      g.value = e >= r, h.value = r;
    });
    const _ = s(() => a.color.startsWith("--") ? `hsl(var(${a.color}))` : a.color.startsWith("#") || a.color.startsWith("rgb") || a.color.startsWith("hsl") || a.color.startsWith("var(") ? a.color : `hsl(var(--${a.color}))`), x = (e) => {
      const r = h.value, t = n.value;
      if (r === t)
        return "0ms";
      const v = Math.min(r, t), p = Math.max(r, t);
      return e < p && e + 1 > v ? g.value ? `${Math.max(0, e - Math.floor(v)) * c / o.value}ms` : `${Math.max(0, Math.ceil(p) - 1 - e) * c / o.value}ms` : "0ms";
    }, y = s(() => Array.from({ length: o.value }, (e, r) => {
      const t = Math.min(100, Math.max(0, (n.value - r) * 100));
      return {
        id: r,
        fill: t,
        transitionDuration: `${c / o.value}ms`,
        transitionDelay: x(r)
      };
    }));
    return (e, r) => (i(), u("div", {
      class: "progress-bar",
      role: "progressbar",
      "aria-valuenow": m.value,
      "aria-valuemin": "0",
      "aria-valuemax": l.value,
      style: d({
        "--progress-bar-color": _.value,
        "--progress-bar-height": a.height,
        "--progress-bar-gap": a.gap
      })
    }, [
      (i(!0), u($, null, C(y.value, (t) => (i(), u("div", {
        key: t.id,
        class: "progress-bar-segment"
      }, [
        W("div", {
          class: "progress-bar-fill",
          style: d({
            width: `${t.fill}%`,
            transitionDuration: `${t.transitionDuration}, 0.25s`,
            transitionDelay: `${t.transitionDelay}, 0s`
          })
        }, null, 4)
      ]))), 128))
    ], 12, B));
  }
}), E = /* @__PURE__ */ w(k, [["__scopeId", "data-v-79f2813d"]]);
export {
  E as default
};
