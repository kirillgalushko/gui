import { openBlock as t, createElementBlock as s, mergeProps as f, renderSlot as c, createElementVNode as n, defineComponent as h, getCurrentInstance as _, computed as v, createBlock as w, Transition as g, withCtx as a, normalizeStyle as y, normalizeClass as k, createVNode as d, createTextVNode as C, toDisplayString as B, createCommentVNode as r, unref as $ } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import T from "./Text-Bybrs1QB.js";
import '../assets/Modal-DCwGWxno.css';const x = {};
function M(l, e) {
  return t(), s("button", f(l.$attrs, { class: ["action"] }), [
    c(l.$slots, "default", {}, void 0, !0)
  ], 16);
}
const N = /* @__PURE__ */ m(x, [["render", M], ["__scopeId", "data-v-2e1d95af"]]), V = {
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
function b(l, e) {
  return t(), s("svg", V, e[0] || (e[0] = [
    n("path", { d: "M18 6l-12 12" }, null, -1),
    n("path", { d: "M6 6l12 12" }, null, -1)
  ]));
}
const A = { render: b }, I = {
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
}, O = { class: "modal-content" }, j = {
  key: 2,
  class: "modal-footer"
}, D = /* @__PURE__ */ h({
  __name: "Modal",
  props: {
    isOpened: { type: Boolean },
    onClose: { type: Function },
    showCloseButton: { type: Boolean },
    title: {}
  },
  setup(l) {
    const e = l, i = _(), p = v(() => {
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
    return (o, u) => (t(), w(g, { name: "fade" }, {
      default: a(() => [
        e.isOpened ? (t(), s("div", I, [
          u[0] || (u[0] = n("div", { class: "modal-bg" }, null, -1)),
          n("div", S, [
            n("div", {
              style: y({ gridTemplateAreas: p.value }),
              class: k(["modal-layout", { "with-title": !!e.title, "with-close": !!e.showCloseButton }])
            }, [
              e.title ? (t(), s("div", z, [
                d(T, { typography: "title-3-semibold" }, {
                  default: a(() => [
                    C(B(e.title), 1)
                  ]),
                  _: 1
                })
              ])) : r("", !0),
              e.showCloseButton ? (t(), s("div", E, [
                d(N, {
                  onClick: e.onClose
                }, {
                  default: a(() => [
                    d($(A))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : r("", !0),
              n("div", O, [
                c(o.$slots, "default", {}, void 0, !0)
              ]),
              o.$slots.footer ? (t(), s("div", j, [
                c(o.$slots, "footer", {}, void 0, !0)
              ])) : r("", !0)
            ], 6)
          ])
        ])) : r("", !0)
      ]),
      _: 3
    }));
  }
}), G = /* @__PURE__ */ m(D, [["__scopeId", "data-v-57ca531e"]]);
export {
  G as default
};
