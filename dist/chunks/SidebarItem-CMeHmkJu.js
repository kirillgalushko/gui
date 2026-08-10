import { defineComponent as h, ref as n, inject as v, openBlock as s, createBlock as b, unref as l, withCtx as m, renderSlot as t, createElementVNode as k, mergeProps as _, createElementBlock as r, createCommentVNode as i } from "vue";
import $ from "./Tooltip-oaSJGnmj.js";
import { u as y } from "./index-BQgYVE5h.js";
import { _ as E } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SidebarItem-DaxKpWdT.css';const g = ["aria-current"], B = {
  key: 0,
  class: "left"
}, C = {
  key: 2,
  class: "right"
}, I = {
  key: 3,
  class: "compact-content"
}, S = {
  key: 0,
  class: "compact-indicator"
}, D = /* @__PURE__ */ h({
  inheritAttrs: !1,
  __name: "SidebarItem",
  props: {
    selected: { type: Boolean },
    tooltipDisabled: { type: Boolean }
  },
  setup(f) {
    const a = f, c = n(null), d = n(null), p = n(!1), o = v("sidebar-is-compact");
    return y(d, () => {
      if (c.value) {
        const { scrollWidth: e, clientWidth: u } = c.value;
        p.value = e > u;
      }
    }), (e, u) => (s(), b($, {
      stretched: "",
      delay: 0,
      disabled: a.tooltipDisabled || !(p.value || l(o)),
      placement: "right"
    }, {
      popper: m(() => [
        t(e.$slots, "tooltip", {}, () => [
          t(e.$slots, "default", {}, void 0, !0)
        ], !0)
      ]),
      default: m(() => [
        k("button", _(e.$attrs, {
          ref_key: "buttonElement",
          ref: d,
          class: ["SidebarItem", { selected: a.selected, compact: l(o) }],
          "aria-current": a.selected ? "page" : void 0,
          type: "button"
        }), [
          e.$slots.left && !l(o) ? (s(), r("div", B, [
            t(e.$slots, "left", {}, void 0, !0)
          ])) : i("", !0),
          l(o) ? i("", !0) : (s(), r("div", {
            key: 1,
            ref_key: "centerElement",
            ref: c,
            class: "center"
          }, [
            t(e.$slots, "default", {}, void 0, !0)
          ], 512)),
          e.$slots.right && !l(o) ? (s(), r("div", C, [
            t(e.$slots, "right", {}, void 0, !0)
          ])) : i("", !0),
          l(o) ? (s(), r("div", I, [
            t(e.$slots, "compact", {}, () => [
              t(e.$slots, "left", {}, void 0, !0)
            ], !0),
            e.$slots["compact-indicator"] ? (s(), r("span", S, [
              t(e.$slots, "compact-indicator", {}, void 0, !0)
            ])) : i("", !0)
          ])) : i("", !0)
        ], 16, g)
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
}), z = /* @__PURE__ */ E(D, [["__scopeId", "data-v-3af3a21b"]]);
export {
  z as default
};
