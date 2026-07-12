import { defineComponent as s, computed as c, openBlock as d, createBlock as i, resolveDynamicComponent as g, mergeProps as u, withCtx as p, renderSlot as a } from "vue";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Badge-NXiiLjoO.css';const m = /* @__PURE__ */ s({
  __name: "Badge",
  props: {
    mode: { default: "default" },
    color: {},
    Element: { default: "div" }
  },
  setup(n) {
    const r = n, t = {
      default: {
        backgroundColor: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))"
      },
      secondary: {
        backgroundColor: "hsl(var(--secondary))",
        color: "hsl(var(--secondary-foreground))"
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
    }, l = c(() => {
      if (r.color) {
        const e = `var(--color-${r.color}-500)`;
        return {
          "--badge-background": `color-mix(in oklab, ${e} 20%, transparent)`,
          "--badge-color": e
        };
      }
      const o = t[r.mode];
      return {
        "--badge-background": o.backgroundColor,
        "--badge-color": o.color ?? "inherit"
      };
    });
    return (o, e) => (d(), i(g(r.Element), u(o.$attrs, {
      class: "Badge",
      style: l.value,
      type: r.Element === "button" ? "button" : void 0
    }), {
      default: p(() => [
        a(o.$slots, "default", {}, void 0, !0),
        a(o.$slots, "right", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["style", "type"]));
  }
}), k = /* @__PURE__ */ v(m, [["__scopeId", "data-v-9ee61ac4"]]);
export {
  k as default
};
