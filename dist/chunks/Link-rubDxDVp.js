import { defineComponent as m, computed as s, openBlock as n, createBlock as i, unref as f, mergeProps as r, withCtx as d, renderSlot as o, createElementBlock as p, createCommentVNode as u, createElementVNode as h } from "vue";
import { A as y } from "./AsChild-C67btACu.js";
import k from "./Text-Cd35JtZQ.js";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Link-C6xK_Zr-.css';const b = {
  key: 0,
  class: "link-icon"
}, _ = { class: "link-content" }, B = {
  key: 1,
  class: "link-icon"
}, $ = /* @__PURE__ */ m({
  inheritAttrs: !1,
  __name: "Link",
  props: {
    typography: { default: "inherit" },
    asChild: { type: Boolean },
    inline: { type: Boolean, default: !0 },
    wrap: { type: Boolean },
    underlined: { type: Boolean },
    underlineOnHover: { type: Boolean },
    disabled: { type: Boolean },
    enableVisited: { type: Boolean },
    mode: { default: "accent" },
    Element: { default: "a" }
  },
  setup(c) {
    const e = c, l = s(() => e.disabled ? {
      "aria-disabled": "true",
      tabindex: -1,
      disabled: e.Element === "button" || e.asChild ? !0 : void 0
    } : {}), a = s(() => [
      "link",
      `mode-${e.mode}`,
      {
        inline: e.inline,
        wrap: e.wrap,
        underlined: e.underlined,
        "underline-on-hover": e.underlineOnHover,
        disabled: e.disabled,
        "enable-visited": e.enableVisited
      }
    ]);
    return (t, C) => e.asChild ? (n(), i(f(y), r({ key: 0 }, { ...t.$attrs, ...l.value }, { class: a.value }), {
      default: d(() => [
        o(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16, ["class"])) : (n(), i(k, r({ key: 1 }, { ...t.$attrs, ...l.value }, {
      Element: e.Element,
      typography: e.typography,
      color: "inherit",
      class: a.value
    }), {
      default: d(() => [
        t.$slots.iconLeft ? (n(), p("span", b, [
          o(t.$slots, "iconLeft", {}, void 0, !0)
        ])) : u("", !0),
        h("span", _, [
          o(t.$slots, "default", {}, void 0, !0)
        ]),
        t.$slots.iconRight ? (n(), p("span", B, [
          o(t.$slots, "iconRight", {}, void 0, !0)
        ])) : u("", !0)
      ]),
      _: 3
    }, 16, ["Element", "typography", "class"]));
  }
}), L = /* @__PURE__ */ v($, [["__scopeId", "data-v-eb40ebc6"]]);
export {
  L as default
};
