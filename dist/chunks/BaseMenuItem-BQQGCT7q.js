import { openBlock as t, createElementBlock as n, createElementVNode as r, defineComponent as i, renderSlot as c, createBlock as l, unref as m, createCommentVNode as a, normalizeClass as d } from "vue";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/BaseMenuItem-N4pp2_pD.css';const h = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function p(o, e) {
  return t(), n("svg", h, e[0] || (e[0] = [
    r("path", { d: "M9 6l6 6l-6 6" }, null, -1)
  ]));
}
const _ = { render: p }, w = {
  class: /* @__PURE__ */ d(["base-menu-item"])
}, f = { class: "base-menu-item-content" }, k = /* @__PURE__ */ i({
  __name: "BaseMenuItem",
  props: {
    showArrow: { type: Boolean }
  },
  setup(o) {
    const e = o;
    return (s, B) => (t(), n("button", w, [
      r("div", f, [
        c(s.$slots, "default", {}, void 0, !0)
      ]),
      e.showArrow ? (t(), l(m(_), { key: 0 })) : a("", !0)
    ]));
  }
}), b = /* @__PURE__ */ u(k, [["__scopeId", "data-v-a02b998f"]]);
export {
  b as B
};
