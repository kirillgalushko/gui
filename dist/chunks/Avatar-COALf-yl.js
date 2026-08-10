import { defineComponent as k, inject as C, ref as y, computed as n, openBlock as u, createElementBlock as p, mergeProps as _, withDirectives as x, vShow as $, createCommentVNode as w, renderSlot as S, createTextVNode as z, toDisplayString as B } from "vue";
import { a as L } from "./context-JWFXgx6K.js";
import { _ as A } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Avatar-JYSeWMcO.css';const D = ["src"], I = /* @__PURE__ */ k({
  __name: "Avatar",
  props: {
    shape: {},
    mode: { default: "default" },
    color: {},
    src: {},
    name: {},
    size: {}
  },
  setup(m) {
    const o = m, a = C(L, null), s = y(!1), c = n(() => o.shape ?? (a == null ? void 0 : a.shape.value) ?? "circle"), t = n(() => o.size ?? (a == null ? void 0 : a.size.value) ?? "40px"), h = {
      default: {
        backgroundColor: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))"
      },
      accent: {
        backgroundColor: "hsl(var(--accent))",
        color: "hsl(0 0% 98%)"
      },
      secondary: {
        backgroundColor: "hsl(var(--secondary))",
        color: "hsl(var(--secondary-foreground))"
      },
      ghost: {
        backgroundColor: "transparent"
      },
      outlined: {
        backgroundColor: "transparent",
        color: "hsl(var(--foreground))"
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
    }, g = n(() => {
      var i, d, v;
      const r = ((i = o.name) == null ? void 0 : i.trim().split(/\s+/).filter(Boolean)) ?? [], e = ((d = r[0]) == null ? void 0 : d[0]) ?? "", l = ((v = r[1]) == null ? void 0 : v[0]) ?? "";
      return `${e}${l}`.toUpperCase();
    });
    function f() {
      s.value = !0;
    }
    const b = n(() => {
      const r = c.value === "square" ? {
        borderRadius: `calc(${t.value} / 4)`
      } : {}, e = o.color === void 0 ? void 0 : `var(--color-${o.color}-500)`, l = h[o.mode];
      return {
        width: t.value,
        height: t.value,
        fontSize: `calc(${t.value} / 2.5)`,
        "--avatar-bg": e === void 0 ? l.backgroundColor : `color-mix(in oklab, ${e} 20%, transparent)`,
        "--avatar-color": e ?? l.color ?? "inherit",
        ...r
      };
    });
    return (r, e) => (u(), p("div", _({
      style: b.value,
      class: ["avatar", c.value, o.mode]
    }, r.$attrs), [
      o.src ? x((u(), p("img", {
        key: 0,
        onLoad: f,
        class: "avatar-image",
        src: o.src
      }, null, 40, D)), [
        [$, s.value]
      ]) : w("", !0),
      S(r.$slots, "default", {}, () => [
        z(B(g.value), 1)
      ], !0)
    ], 16));
  }
}), j = /* @__PURE__ */ A(I, [["__scopeId", "data-v-48f475c1"]]);
export {
  j as default
};
