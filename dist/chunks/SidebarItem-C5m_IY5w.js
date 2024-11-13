import { defineComponent as v, ref as n, inject as h, openBlock as l, createBlock as k, unref as o, withCtx as m, renderSlot as t, createElementVNode as b, normalizeClass as E, createElementBlock as a, createCommentVNode as r } from "vue";
import _ from "./Tooltip-CAPcgFmj.js";
import { a as $ } from "./index-BNmz8c4z.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SidebarItem-DngMUr0t.css';const C = {
  key: 0,
  class: "left"
}, g = {
  key: 2,
  class: "right"
}, B = /* @__PURE__ */ v({
  __name: "SidebarItem",
  props: {
    selected: { type: Boolean }
  },
  setup(p) {
    const f = p, i = n(null), c = n(null), d = n(!1), s = h("sidebar-is-compact");
    return $(c, () => {
      if (i.value) {
        const { scrollWidth: e, clientWidth: u } = i.value;
        d.value = e > u;
      }
    }), (e, u) => (l(), k(_, {
      disabled: !(d.value || o(s)),
      placement: "right"
    }, {
      popper: m(() => [
        t(e.$slots, "tooltip", {}, () => [
          t(e.$slots, "default", {}, void 0, !0)
        ], !0)
      ]),
      default: m(() => [
        b("button", {
          ref_key: "buttonElement",
          ref: c,
          class: E(["SidebarItem", { selected: f.selected, compact: o(s) }])
        }, [
          e.$slots.left && !o(s) ? (l(), a("div", C, [
            t(e.$slots, "left", {}, void 0, !0)
          ])) : r("", !0),
          o(s) ? r("", !0) : (l(), a("div", {
            key: 1,
            ref_key: "centerElement",
            ref: i,
            class: "center"
          }, [
            t(e.$slots, "default", {}, void 0, !0)
          ], 512)),
          e.$slots.right && !o(s) ? (l(), a("div", g, [
            t(e.$slots, "right", {}, void 0, !0)
          ])) : r("", !0),
          t(e.$slots, "compact", {}, () => [
            o(s) ? t(e.$slots, "left", { key: 0 }, void 0, !0) : r("", !0)
          ], !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
}), W = /* @__PURE__ */ y(B, [["__scopeId", "data-v-76f2723f"]]);
export {
  W as default
};
