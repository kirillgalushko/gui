import { defineComponent as x, computed as n, unref as c, openBlock as i, createElementBlock as a, Fragment as g, renderList as f, createBlock as m, renderSlot as y } from "vue";
import _ from "./Skeleton-C0X3Bx_u.js";
import { g as k } from "./index-D5rI4VW1.js";
import { _ as w } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/TextSkeleton-21BvHv2q.css';const b = {
  key: 0,
  class: "text-skeleton",
  "aria-hidden": "true"
}, L = /* @__PURE__ */ x({
  __name: "TextSkeleton",
  props: {
    loading: { type: Boolean },
    lines: { default: 1 },
    width: { default: "100%" },
    lastLineWidth: { default: "75%" },
    typography: { default: "paragraph-1" }
  },
  setup(o) {
    const t = o, p = k(() => t.loading), s = {
      "title-1": "18px",
      "title-2": "24px",
      "title-3": "28px",
      "title-4": "32px",
      "title-5": "36px",
      "title-6": "40px",
      "title-7": "48px",
      "title-8": "64px",
      "title-9": "96px",
      "title-10": "132px",
      "subtitle-1": "20px",
      "subtitle-2": "16px",
      "subtitle-3": "22px",
      "subtitle-4": "36px",
      "paragraph-1": "24px",
      "paragraph-2": "24px",
      "label-1": "14px",
      "label-2": "16px",
      "label-3": "18px",
      inherit: "1em"
    }, d = n(() => Array.from({ length: t.lines }, (e, l) => l)), u = n(() => s[t.typography]);
    function h(e) {
      return Array.isArray(t.width) ? t.width[e] ?? t.width[t.width.length - 1] ?? "100%" : t.lines > 1 && e === t.lines - 1 ? t.lastLineWidth : t.width;
    }
    return (e, l) => c(p) ? (i(), a("div", b, [
      (i(!0), a(g, null, f(d.value, (r) => (i(), m(_, {
        key: r,
        loading: !0,
        width: h(r),
        height: u.value,
        radius: "6px"
      }, null, 8, ["width", "height"]))), 128))
    ])) : y(e.$slots, "default", { key: 1 }, void 0, !0);
  }
}), W = /* @__PURE__ */ w(L, [["__scopeId", "data-v-fc41d49e"]]);
export {
  W as default
};
