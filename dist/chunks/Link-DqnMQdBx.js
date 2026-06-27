import { defineComponent as r, computed as d, openBlock as n, createBlock as c, mergeProps as p, withCtx as u, createElementBlock as i, renderSlot as o, createCommentVNode as l, createElementVNode as m } from "vue";
import f from "./Text-D1KvsXGq.js";
import { _ as h } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Link-DiZlL3Ej.css';const y = {
  key: 0,
  class: "link-icon"
}, b = { class: "link-content" }, k = {
  key: 1,
  class: "link-icon"
}, _ = /* @__PURE__ */ r({
  inheritAttrs: !1,
  __name: "Link",
  props: {
    typography: { default: "inherit" },
    inline: { type: Boolean, default: !0 },
    underlined: { type: Boolean },
    disabled: { type: Boolean },
    enableVisited: { type: Boolean },
    mode: { default: "accent" },
    Element: { default: "a" }
  },
  setup(s) {
    const e = s, a = d(() => e.disabled ? {
      "aria-disabled": "true",
      tabindex: -1,
      disabled: e.Element === "button" ? !0 : void 0
    } : {});
    return (t, g) => (n(), c(f, p({ ...t.$attrs, ...a.value }, {
      Element: e.Element,
      typography: e.typography,
      color: "inherit",
      class: [
        "link",
        `mode-${e.mode}`,
        {
          inline: e.inline,
          underlined: e.underlined,
          disabled: e.disabled,
          "enable-visited": e.enableVisited
        }
      ]
    }), {
      default: u(() => [
        t.$slots.iconLeft ? (n(), i("span", y, [
          o(t.$slots, "iconLeft", {}, void 0, !0)
        ])) : l("", !0),
        m("span", b, [
          o(t.$slots, "default", {}, void 0, !0)
        ]),
        t.$slots.iconRight ? (n(), i("span", k, [
          o(t.$slots, "iconRight", {}, void 0, !0)
        ])) : l("", !0)
      ]),
      _: 3
    }, 16, ["Element", "typography", "class"]));
  }
}), $ = /* @__PURE__ */ h(_, [["__scopeId", "data-v-dc75b493"]]);
export {
  $ as default
};
