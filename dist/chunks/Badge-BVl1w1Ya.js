import { defineComponent as d, computed as a, openBlock as i, createBlock as u, resolveDynamicComponent as g, mergeProps as b, withCtx as p, renderSlot as l } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Badge-DvIPN0CZ.css';const v = /* @__PURE__ */ d({
  __name: "Badge",
  props: {
    mode: { default: "default" },
    size: { default: "medium" },
    color: {},
    Element: { default: "div" }
  },
  setup(n) {
    const r = n, t = {
      default: {
        backgroundColor: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))"
      },
      accent: {
        backgroundColor: "hsl(var(--accent))",
        color: "hsl(0 0% 98%)"
      },
      secondary: {
        backgroundColor: "hsl(var(--input))",
        color: "hsl(var(--secondary-foreground))",
        borderColor: "hsl(var(--border))"
      },
      ghost: {
        backgroundColor: "transparent"
      },
      negative: {
        backgroundColor: "color-mix(in oklab, hsl(var(--negative)) 20%, transparent)",
        color: "hsl(var(--negative))"
      },
      positive: {
        backgroundColor: "color-mix(in oklab, hsl(var(--positive)) 20%, transparent)",
        color: "hsl(var(--positive))"
      },
      danger: {
        backgroundColor: "color-mix(in oklab, hsl(var(--danger)) 20%, transparent)",
        color: "hsl(var(--danger))"
      },
      warning: {
        backgroundColor: "color-mix(in oklab, hsl(var(--warning)) 20%, transparent)",
        color: "hsl(var(--warning))"
      }
    }, c = a(() => {
      if (r.color) {
        const e = `var(--color-${r.color}-500)`;
        return {
          "--badge-background": `color-mix(in oklab, ${e} 20%, transparent)`,
          "--badge-color": e,
          "--badge-border-color": `color-mix(in oklab, ${e} 15%, transparent)`
        };
      }
      const o = t[r.mode];
      return {
        "--badge-background": o.backgroundColor,
        "--badge-color": o.color ?? "inherit",
        "--badge-border-color": o.borderColor ?? (o.color ? `color-mix(in oklab, ${o.color} 15%, transparent)` : "inherit")
      };
    }), s = a(
      () => !!r.color || !["default", "ghost", "accent"].includes(r.mode)
    );
    return (o, e) => (i(), u(g(r.Element), b(o.$attrs, {
      class: ["Badge", r.size, { "with-border": s.value }],
      style: c.value,
      type: r.Element === "button" ? "button" : void 0
    }), {
      default: p(() => [
        l(o.$slots, "default", {}, void 0, !0),
        l(o.$slots, "right", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class", "style", "type"]));
  }
}), f = /* @__PURE__ */ m(v, [["__scopeId", "data-v-1c929355"]]);
export {
  f as default
};
