import { defineComponent as i, computed as u, openBlock as e, createElementBlock as n, normalizeClass as b, normalizeStyle as m, createElementVNode as t, renderSlot as a, createCommentVNode as s } from "vue";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AnnouncementBar-Chjmwm1B.css';const h = ["role"], g = { class: "announcement-bar__inner" }, k = {
  key: 0,
  class: "announcement-bar__icon",
  "aria-hidden": "true"
}, _ = { class: "announcement-bar__content" }, f = {
  key: 1,
  class: "announcement-bar__actions"
}, p = /* @__PURE__ */ i({
  __name: "AnnouncementBar",
  props: {
    mode: { default: "default" },
    size: { default: "medium" },
    role: { default: "status" },
    backgroundColor: {},
    textColor: {},
    borderColor: {}
  },
  setup(l) {
    const r = l, c = {
      default: {
        background: "hsl(var(--background))",
        text: "hsl(var(--foreground))",
        border: "hsl(var(--border))"
      },
      contrast: {
        background: "hsl(var(--background))",
        text: "hsl(var(--foreground))",
        border: "hsl(var(--border))"
      },
      accent: {
        background: "hsl(var(--accent))",
        text: "hsl(0 0% 98%)",
        border: "hsl(var(--accent))"
      },
      positive: {
        background: "color-mix(in oklab, hsl(var(--positive)) 16%, hsl(var(--background)))",
        text: "hsl(var(--foreground))",
        border: "color-mix(in oklab, hsl(var(--positive)) 35%, hsl(var(--border)))"
      },
      warning: {
        background: "color-mix(in oklab, hsl(var(--warning)) 20%, hsl(var(--background)))",
        text: "hsl(var(--foreground))",
        border: "color-mix(in oklab, hsl(var(--warning)) 40%, hsl(var(--border)))"
      },
      negative: {
        background: "color-mix(in oklab, hsl(var(--negative)) 16%, hsl(var(--background)))",
        text: "hsl(var(--foreground))",
        border: "color-mix(in oklab, hsl(var(--negative)) 35%, hsl(var(--border)))"
      }
    }, d = u(() => {
      const o = c[r.mode];
      return {
        "--announcement-bar-background": r.backgroundColor ?? o.background,
        "--announcement-bar-text": r.textColor ?? o.text,
        "--announcement-bar-border": r.borderColor ?? o.border
      };
    });
    return (o, x) => (e(), n("aside", {
      class: b([
        "announcement-bar",
        `announcement-bar--${r.size}`,
        `announcement-bar--${r.mode}`,
        { "inverted-colors": r.mode === "contrast" }
      ]),
      style: m(d.value),
      role: r.role
    }, [
      t("div", g, [
        o.$slots.icon ? (e(), n("div", k, [
          a(o.$slots, "icon", {}, void 0, !0)
        ])) : s("", !0),
        t("div", _, [
          a(o.$slots, "default", {}, void 0, !0)
        ]),
        o.$slots.actions ? (e(), n("div", f, [
          a(o.$slots, "actions", {}, void 0, !0)
        ])) : s("", !0)
      ])
    ], 14, h));
  }
}), y = /* @__PURE__ */ v(p, [["__scopeId", "data-v-8f264f77"]]);
export {
  y as default
};
