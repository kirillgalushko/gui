import { defineComponent as f, getCurrentInstance as _, computed as h, openBlock as o, createBlock as v, Transition as y, withCtx as n, createElementBlock as s, createElementVNode as l, normalizeClass as c, normalizeStyle as C, createVNode as i, createTextVNode as k, toDisplayString as B, createCommentVNode as r, unref as g, renderSlot as m } from "vue";
import w from "./Button-B4EJCtdb.js";
import { d as z } from "./IconXOutline-COEdos3u.js";
import T from "./Text-0p81GmwH.js";
import { _ as $ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Modal-DNdHomSE.css';const N = {
  key: 0,
  class: "modal-wrapper"
}, V = {
  key: 0,
  class: "modal-title"
}, b = {
  key: 1,
  class: "modal-close"
}, x = { class: "modal-content" }, S = {
  key: 2,
  class: "modal-footer"
}, A = /* @__PURE__ */ f({
  __name: "Modal",
  props: {
    isOpened: { type: Boolean },
    onClose: {},
    showCloseButton: { type: Boolean },
    title: {},
    size: { default: "medium" }
  },
  setup(u) {
    const e = u, a = _(), p = h(() => {
      const t = a != null && a.slots.footer ? '"footer footer"' : "";
      return e.title ? `
      "title close"
      "content content"
      ${t}
    ` : `
     "content close"
      ${t}
  `;
    });
    return (t, d) => (o(), v(y, { name: "fade" }, {
      default: n(() => [
        e.isOpened ? (o(), s("div", N, [
          d[0] || (d[0] = l("div", { class: "modal-bg" }, null, -1)),
          l("div", {
            class: c(["modal", e.size]),
            role: "dialog"
          }, [
            l("div", {
              style: C({ gridTemplateAreas: p.value }),
              class: c(["modal-layout", { "with-title": !!e.title, "with-close": !!e.showCloseButton }])
            }, [
              e.title ? (o(), s("div", V, [
                i(T, { typography: "title-3" }, {
                  default: n(() => [
                    k(B(e.title), 1)
                  ]),
                  _: 1
                })
              ])) : r("", !0),
              e.showCloseButton ? (o(), s("div", b, [
                i(w, {
                  mode: "ghost",
                  size: "small",
                  squared: "",
                  "aria-label": "Закрыть",
                  onClick: e.onClose
                }, {
                  default: n(() => [
                    i(g(z))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : r("", !0),
              l("div", x, [
                m(t.$slots, "default", {}, void 0, !0)
              ]),
              t.$slots.footer ? (o(), s("div", S, [
                m(t.$slots, "footer", {}, void 0, !0)
              ])) : r("", !0)
            ], 6)
          ], 2)
        ])) : r("", !0)
      ]),
      _: 3
    }));
  }
}), D = /* @__PURE__ */ $(A, [["__scopeId", "data-v-5dc6b67f"]]);
export {
  D as default
};
