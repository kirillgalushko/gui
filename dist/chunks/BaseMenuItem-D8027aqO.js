import { openBlock as t, createElementBlock as n, createElementVNode as r, defineComponent as i, renderSlot as m, createBlock as c, unref as a, createCommentVNode as l, normalizeClass as d } from "vue";
import { i as h } from "./IconAccessibleFilled-DFPdopZN.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BaseMenuItem-C3AcB1e0.css';const p = {}, _ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function w(o, e) {
  return t(), n("svg", _, e[0] || (e[0] = [
    r("path", { d: "m9 6 6 6-6 6" }, null, -1)
  ]));
}
const f = /* @__PURE__ */ h(p, [["render", w]]), k = {
  class: /* @__PURE__ */ d(["base-menu-item"])
}, B = { class: "base-menu-item-content" }, g = /* @__PURE__ */ i({
  __name: "BaseMenuItem",
  props: {
    showArrow: { type: Boolean }
  },
  setup(o) {
    const e = o;
    return (s, v) => (t(), n("button", k, [
      r("div", B, [
        m(s.$slots, "default", {}, void 0, !0)
      ]),
      e.showArrow ? (t(), c(a(f), { key: 0 })) : l("", !0)
    ]));
  }
}), y = /* @__PURE__ */ u(g, [["__scopeId", "data-v-308c3c29"]]);
export {
  y as B
};
