import { openBlock as t, createElementBlock as s, createElementVNode as l, mergeProps as f, renderSlot as c, defineComponent as _, getCurrentInstance as h, computed as v, createBlock as w, Transition as g, withCtx as a, normalizeStyle as y, normalizeClass as k, createVNode as d, createTextVNode as C, toDisplayString as B, createCommentVNode as r, unref as $ } from "vue";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { i as T } from "./IconAccessibleFilled-DFPdopZN.js";
import x from "./Text-Bybrs1QB.js";
import '../assets/Modal-1t4knaTD.css';const M = {}, N = {
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
function V(n, e) {
  return t(), s("svg", N, e[0] || (e[0] = [
    l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
  ]));
}
const b = /* @__PURE__ */ T(M, [["render", V]]), A = {};
function I(n, e) {
  return t(), s("button", f(n.$attrs, { class: ["action"] }), [
    c(n.$slots, "default", {}, void 0, !0)
  ], 16);
}
const S = /* @__PURE__ */ u(A, [["render", I], ["__scopeId", "data-v-2e1d95af"]]), z = {
  key: 0,
  class: "modal-wrapper"
}, E = {
  class: "modal",
  role: "dialog"
}, O = {
  key: 0,
  class: "modal-title"
}, j = {
  key: 1,
  class: "modal-close"
}, D = { class: "modal-content" }, F = {
  key: 2,
  class: "modal-footer"
}, P = /* @__PURE__ */ _({
  __name: "Modal",
  props: {
    isOpened: { type: Boolean },
    onClose: { type: Function },
    showCloseButton: { type: Boolean },
    title: {}
  },
  setup(n) {
    const e = n, i = h(), p = v(() => {
      const o = i != null && i.slots.footer ? '"footer footer"' : "";
      return e.title ? `
      "title close"
      "content content"
      ${o}
    ` : `
     "content close"
      ${o}
  `;
    });
    return (o, m) => (t(), w(g, { name: "fade" }, {
      default: a(() => [
        e.isOpened ? (t(), s("div", z, [
          m[0] || (m[0] = l("div", { class: "modal-bg" }, null, -1)),
          l("div", E, [
            l("div", {
              style: y({ gridTemplateAreas: p.value }),
              class: k(["modal-layout", { "with-title": !!e.title, "with-close": !!e.showCloseButton }])
            }, [
              e.title ? (t(), s("div", O, [
                d(x, { typography: "title-3-semibold" }, {
                  default: a(() => [
                    C(B(e.title), 1)
                  ]),
                  _: 1
                })
              ])) : r("", !0),
              e.showCloseButton ? (t(), s("div", j, [
                d(S, {
                  onClick: e.onClose
                }, {
                  default: a(() => [
                    d($(b))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : r("", !0),
              l("div", D, [
                c(o.$slots, "default", {}, void 0, !0)
              ]),
              o.$slots.footer ? (t(), s("div", F, [
                c(o.$slots, "footer", {}, void 0, !0)
              ])) : r("", !0)
            ], 6)
          ])
        ])) : r("", !0)
      ]),
      _: 3
    }));
  }
}), K = /* @__PURE__ */ u(P, [["__scopeId", "data-v-e8390ca1"]]);
export {
  K as default
};
