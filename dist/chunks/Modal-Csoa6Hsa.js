import { openBlock as o, createElementBlock as s, createElementVNode as l, defineComponent as p, getCurrentInstance as f, computed as h, createBlock as _, Transition as w, withCtx as i, normalizeStyle as v, normalizeClass as y, createVNode as d, createTextVNode as g, toDisplayString as k, createCommentVNode as n, unref as C, renderSlot as m } from "vue";
import B from "./Action-C73aKuMV.js";
import { i as $ } from "./IconAccessibleFilled-DFPdopZN.js";
import x from "./Text-C9hD0RpH.js";
import { _ as T } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Modal-C6a4vUTu.css';const M = {}, N = {
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
function V(a, t) {
  return o(), s("svg", N, t[0] || (t[0] = [
    l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
  ]));
}
const b = /* @__PURE__ */ $(M, [["render", V]]), A = {
  key: 0,
  class: "modal-wrapper"
}, S = {
  class: "modal",
  role: "dialog"
}, z = {
  key: 0,
  class: "modal-title"
}, E = {
  key: 1,
  class: "modal-close"
}, I = { class: "modal-content" }, O = {
  key: 2,
  class: "modal-footer"
}, j = /* @__PURE__ */ p({
  __name: "Modal",
  props: {
    isOpened: { type: Boolean },
    onClose: { type: Function },
    showCloseButton: { type: Boolean },
    title: {}
  },
  setup(a) {
    const t = a, r = f(), u = h(() => {
      const e = r != null && r.slots.footer ? '"footer footer"' : "";
      return t.title ? `
      "title close"
      "content content"
      ${e}
    ` : `
     "content close"
      ${e}
  `;
    });
    return (e, c) => (o(), _(w, { name: "fade" }, {
      default: i(() => [
        t.isOpened ? (o(), s("div", A, [
          c[0] || (c[0] = l("div", { class: "modal-bg" }, null, -1)),
          l("div", S, [
            l("div", {
              style: v({ gridTemplateAreas: u.value }),
              class: y(["modal-layout", { "with-title": !!t.title, "with-close": !!t.showCloseButton }])
            }, [
              t.title ? (o(), s("div", z, [
                d(x, { typography: "title-3" }, {
                  default: i(() => [
                    g(k(t.title), 1)
                  ]),
                  _: 1
                })
              ])) : n("", !0),
              t.showCloseButton ? (o(), s("div", E, [
                d(B, {
                  onClick: t.onClose
                }, {
                  default: i(() => [
                    d(C(b))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : n("", !0),
              l("div", I, [
                m(e.$slots, "default", {}, void 0, !0)
              ]),
              e.$slots.footer ? (o(), s("div", O, [
                m(e.$slots, "footer", {}, void 0, !0)
              ])) : n("", !0)
            ], 6)
          ])
        ])) : n("", !0)
      ]),
      _: 3
    }));
  }
}), J = /* @__PURE__ */ T(j, [["__scopeId", "data-v-81ebcbd9"]]);
export {
  J as default
};
