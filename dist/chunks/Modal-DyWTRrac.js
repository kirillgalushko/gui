import { openBlock as e, createElementBlock as s, createElementVNode as l, mergeProps as f, renderSlot as c, defineComponent as _, getCurrentInstance as h, computed as v, createBlock as w, Transition as g, withCtx as a, normalizeStyle as y, normalizeClass as k, createVNode as d, createTextVNode as C, toDisplayString as B, createCommentVNode as r, unref as $ } from "vue";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { i as T } from "./IconAccessibleFilled-DFPdopZN.js";
import x from "./Text-CUYuNdJR.js";
import '../assets/Modal-BOHAuV9u.css';const M = {}, N = {
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
function V(n, t) {
  return e(), s("svg", N, t[0] || (t[0] = [
    l("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
  ]));
}
const A = /* @__PURE__ */ T(M, [["render", V]]), I = {};
function S(n, t) {
  return e(), s("button", f(n.$attrs, { class: ["action"] }), [
    c(n.$slots, "default", {}, void 0, !0)
  ], 16);
}
const b = /* @__PURE__ */ u(I, [["render", S], ["__scopeId", "data-v-d9072866"]]), z = {
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
    const t = n, i = h(), p = v(() => {
      const o = i != null && i.slots.footer ? '"footer footer"' : "";
      return t.title ? `
      "title close"
      "content content"
      ${o}
    ` : `
     "content close"
      ${o}
  `;
    });
    return (o, m) => (e(), w(g, { name: "fade" }, {
      default: a(() => [
        t.isOpened ? (e(), s("div", z, [
          m[0] || (m[0] = l("div", { class: "modal-bg" }, null, -1)),
          l("div", E, [
            l("div", {
              style: y({ gridTemplateAreas: p.value }),
              class: k(["modal-layout", { "with-title": !!t.title, "with-close": !!t.showCloseButton }])
            }, [
              t.title ? (e(), s("div", O, [
                d(x, { typography: "title-3" }, {
                  default: a(() => [
                    C(B(t.title), 1)
                  ]),
                  _: 1
                })
              ])) : r("", !0),
              t.showCloseButton ? (e(), s("div", j, [
                d(b, {
                  onClick: t.onClose
                }, {
                  default: a(() => [
                    d($(A))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : r("", !0),
              l("div", D, [
                c(o.$slots, "default", {}, void 0, !0)
              ]),
              o.$slots.footer ? (e(), s("div", F, [
                c(o.$slots, "footer", {}, void 0, !0)
              ])) : r("", !0)
            ], 6)
          ])
        ])) : r("", !0)
      ]),
      _: 3
    }));
  }
}), K = /* @__PURE__ */ u(P, [["__scopeId", "data-v-9a4409af"]]);
export {
  K as default
};
