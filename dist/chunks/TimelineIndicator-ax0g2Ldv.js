import { defineComponent as v, inject as s, computed as o, openBlock as f, createElementBlock as p, normalizeClass as g, unref as l, normalizeStyle as h, renderSlot as _ } from "vue";
import { t as z, a as x } from "./types-GWw4JXek.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/TimelineIndicator-n5bPyNu8.css';const I = ["data-state"], C = /* @__PURE__ */ v({
  __name: "TimelineIndicator",
  props: {
    variant: { default: "solid" },
    size: { default: "medium" },
    mode: { default: "auto" },
    color: {}
  },
  setup(c) {
    const e = c, a = s(z), t = s(x);
    if (!a || !t)
      throw new Error("TimelineIndicator must be used inside TimelineItem");
    const i = o(() => e.mode !== "auto" ? e.mode : t.state.value === "completed" ? "default" : t.state.value === "current" ? "accent" : t.state.value === "pending" ? "muted" : "default"), d = o(() => {
      const r = {
        small: "12px",
        medium: "24px",
        large: "40px"
      };
      return e.size === "small" || e.size === "medium" || e.size === "large" ? r[e.size] : e.size;
    }), m = o(() => {
      const r = {
        default: "hsl(var(--primary))",
        muted: "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        positive: "hsl(var(--positive))",
        negative: "hsl(var(--negative))",
        danger: "hsl(var(--danger))",
        warning: "hsl(var(--warning))"
      }, n = e.color ? `var(--color-${e.color}-500)` : r[i.value], u = i.value === "default" && !e.color ? "hsl(var(--primary-foreground))" : "hsl(0 0% 98%)";
      return {
        "--timeline-indicator-size": d.value,
        "--timeline-indicator-color": n,
        "--timeline-indicator-foreground": u
      };
    });
    return (r, n) => (f(), p("span", {
      class: g(["timeline-indicator", l(a).orientation.value, e.variant]),
      style: h(m.value),
      "data-state": l(t).state.value
    }, [
      _(r.$slots, "default", {}, void 0, !0)
    ], 14, I));
  }
}), B = /* @__PURE__ */ y(C, [["__scopeId", "data-v-21702622"]]);
export {
  B as default
};
