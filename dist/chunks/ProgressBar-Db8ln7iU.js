import { defineComponent as d, computed as t, openBlock as a, createElementBlock as o, normalizeStyle as c, Fragment as f, renderList as v, createElementVNode as _ } from "vue";
import { _ as b } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ProgressBar-fW6LbpHq.css';const x = ["aria-valuenow"], M = /* @__PURE__ */ d({
  __name: "ProgressBar",
  props: {
    progress: { default: 0 },
    color: { default: "accent" },
    segments: { default: 1 },
    height: { default: "8px" },
    gap: { default: "var(--gap-1)" }
  },
  setup(i) {
    const r = i, l = t(() => Math.min(100, Math.max(0, r.progress))), n = t(() => Math.max(1, Math.floor(r.segments))), u = t(() => r.color.startsWith("--") ? `hsl(var(${r.color}))` : r.color.startsWith("#") || r.color.startsWith("rgb") || r.color.startsWith("hsl") || r.color.startsWith("var(") ? r.color : `hsl(var(--${r.color}))`), g = t(() => {
      const s = 100 / n.value;
      return Array.from({ length: n.value }, (p, e) => {
        const m = e * s, h = Math.min(100, Math.max(0, (l.value - m) / s * 100));
        return {
          id: e,
          fill: h
        };
      });
    });
    return (s, p) => (a(), o("div", {
      class: "progress-bar",
      role: "progressbar",
      "aria-valuenow": l.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      style: c({
        "--progress-bar-color": u.value,
        "--progress-bar-height": r.height,
        "--progress-bar-gap": r.gap
      })
    }, [
      (a(!0), o(f, null, v(g.value, (e) => (a(), o("div", {
        key: e.id,
        class: "progress-bar-segment"
      }, [
        _("div", {
          class: "progress-bar-fill",
          style: c({ width: `${e.fill}%` })
        }, null, 4)
      ]))), 128))
    ], 12, x));
  }
}), B = /* @__PURE__ */ b(M, [["__scopeId", "data-v-50b77edc"]]);
export {
  B as default
};
