import { defineComponent as v, ref as c, inject as h, openBlock as l, createBlock as k, unref as o, withCtx as m, renderSlot as t, createElementVNode as b, normalizeClass as E, createElementBlock as n, createCommentVNode as r } from "vue";
import _ from "./Tooltip-BeKcV1f3.js";
import { a as $ } from "./index-CAcsj2N5.js";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SidebarItem-BFIyb84T.css';const C = {
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
    const f = p, i = c(null), a = c(null), d = c(!1), s = h("sidebar-is-compact");
    return $(a, () => {
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
          ref: a,
          class: E(["SidebarItem", { selected: f.selected, compact: o(s) }])
        }, [
          e.$slots.left && !o(s) ? (l(), n("div", C, [
            t(e.$slots, "left", {}, void 0, !0)
          ])) : r("", !0),
          o(s) ? r("", !0) : (l(), n("div", {
            key: 1,
            ref_key: "centerElement",
            ref: i,
            class: "center"
          }, [
            t(e.$slots, "default", {}, void 0, !0)
          ], 512)),
          e.$slots.right && !o(s) ? (l(), n("div", g, [
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
}), W = /* @__PURE__ */ y(B, [["__scopeId", "data-v-c523ff7b"]]);
export {
  W as default
};
