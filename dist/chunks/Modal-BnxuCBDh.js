import { defineComponent as k, getCurrentInstance as v, computed as C, openBlock as t, createBlock as l, Transition as g, withCtx as r, createElementBlock as i, createElementVNode as a, normalizeClass as c, normalizeStyle as B, createTextVNode as p, toDisplayString as m, createCommentVNode as o, createVNode as u, unref as w, renderSlot as f } from "vue";
import z from "./Button-DBIwBw8Q.js";
import T from "./Gap-DQv4R87n.js";
import { d as $ } from "./IconXOutline-COEdos3u.js";
import _ from "./Text-Cd35JtZQ.js";
import { _ as N } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Modal-BuCGxG6q.css';const V = {
  key: 0,
  class: "modal-wrapper"
}, x = {
  key: 0,
  class: "modal-title"
}, S = {
  key: 1,
  class: "modal-close"
}, b = { class: "modal-content" }, A = {
  key: 2,
  class: "modal-footer"
}, E = /* @__PURE__ */ k({
  __name: "Modal",
  props: {
    isOpened: { type: Boolean },
    onClose: {},
    showCloseButton: { type: Boolean },
    title: {},
    description: {},
    size: { default: "medium" }
  },
  setup(y) {
    const e = y, n = v(), h = C(() => {
      const s = n != null && n.slots.footer ? '"footer footer"' : "";
      return e.title || e.description ? `
      "title close"
      "content content"
      ${s}
    ` : `
     "content close"
      ${s}
  `;
    });
    return (s, d) => (t(), l(g, { name: "fade" }, {
      default: r(() => [
        e.isOpened ? (t(), i("div", V, [
          d[0] || (d[0] = a("div", { class: "modal-bg" }, null, -1)),
          a("div", {
            class: c(["modal", e.size]),
            role: "dialog"
          }, [
            a("div", {
              style: B({ gridTemplateAreas: h.value }),
              class: c([
                "modal-layout",
                {
                  "with-title": !!(e.title || e.description),
                  "with-close": !!e.showCloseButton
                }
              ])
            }, [
              e.title || e.description ? (t(), i("div", x, [
                e.title ? (t(), l(_, {
                  key: 0,
                  typography: "title-3"
                }, {
                  default: r(() => [
                    p(m(e.title), 1)
                  ]),
                  _: 1
                })) : o("", !0),
                e.title && e.description ? (t(), l(T, {
                  key: 1,
                  size: 1
                })) : o("", !0),
                e.description ? (t(), l(_, {
                  key: 2,
                  typography: "paragraph-1",
                  color: "secondary"
                }, {
                  default: r(() => [
                    p(m(e.description), 1)
                  ]),
                  _: 1
                })) : o("", !0)
              ])) : o("", !0),
              e.showCloseButton ? (t(), i("div", S, [
                u(z, {
                  mode: "ghost",
                  size: "small",
                  squared: "",
                  "aria-label": "Закрыть",
                  onClick: e.onClose
                }, {
                  default: r(() => [
                    u(w($))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : o("", !0),
              a("div", b, [
                f(s.$slots, "default", {}, void 0, !0)
              ]),
              s.$slots.footer ? (t(), i("div", A, [
                f(s.$slots, "footer", {}, void 0, !0)
              ])) : o("", !0)
            ], 6)
          ], 2)
        ])) : o("", !0)
      ]),
      _: 3
    }));
  }
}), j = /* @__PURE__ */ N(E, [["__scopeId", "data-v-e319e56e"]]);
export {
  j as default
};
