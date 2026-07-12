import { ref as v, watch as g, onMounted as b, onBeforeUnmount as S, defineComponent as $, computed as z, openBlock as o, createBlock as p, Transition as N, withCtx as y, createElementBlock as i, createCommentVNode as s, createElementVNode as m, normalizeClass as L, withModifiers as V, createTextVNode as O, toDisplayString as C, renderSlot as w, unref as B, createVNode as R } from "vue";
import T from "./Button-B4EJCtdb.js";
import q from "./Gap-C353wviN.js";
import E from "./Text-0p81GmwH.js";
import { d as D } from "./IconXOutline-COEdos3u.js";
import { _ as F } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Sheet-B3Zt8bYa.css';const M = (t) => {
  const e = v(null), a = v(""), d = v(!1), c = v(null), u = () => {
    var r;
    (r = t.onClose) == null || r.call(t);
  }, n = (r) => {
    r.key === "Escape" && t.closeOnEscape && t.isOpened && u();
  }, h = (r) => {
    var f;
    if (!t.isOpened || t.showOverlay || !t.closeOnOverlayClick)
      return;
    const l = r.target;
    !(l instanceof Node) || (f = c.value) != null && f.contains(l) || l instanceof Element && l.closest(".v-popper__popper") || u();
  }, _ = (r) => {
    var l, f;
    if (!(typeof document > "u")) {
      if (r) {
        e.value = document.activeElement, t.showOverlay && (a.value = document.body.style.overflow, d.value = !0, document.body.style.overflow = "hidden"), requestAnimationFrame(() => {
          var k;
          (k = c.value) == null || k.focus();
        });
        return;
      }
      d.value && (document.body.style.overflow = a.value, d.value = !1), (f = (l = e.value) == null ? void 0 : l.focus) == null || f.call(l);
    }
  };
  return g(() => t.isOpened, _), b(() => {
    document.addEventListener("keydown", n), document.addEventListener("pointerdown", h), _(t.isOpened);
  }), S(() => {
    document.removeEventListener("keydown", n), document.removeEventListener("pointerdown", h), d.value && (document.body.style.overflow = a.value);
  }), {
    close: u,
    sheetRef: c
  };
}, x = {
  key: 0,
  class: "sheet-wrapper"
}, A = { class: "sheet-layout" }, G = {
  key: 0,
  class: "sheet-header"
}, I = {
  key: 0,
  class: "sheet-heading"
}, K = {
  key: 1,
  class: "sheet-actions"
}, P = { class: "sheet-content" }, U = { class: "sheet-content-inner" }, j = {
  key: 1,
  class: "sheet-footer"
}, H = /* @__PURE__ */ $({
  __name: "Sheet",
  props: {
    isOpened: { type: Boolean },
    onClose: {},
    showCloseButton: { type: Boolean, default: !0 },
    title: {},
    description: {},
    side: { default: "right" },
    size: {},
    rounded: { type: Boolean, default: !0 },
    showOverlay: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = t, { close: a, sheetRef: d } = M(e), c = z(
      () => e.size ?? (e.side === "top" || e.side === "bottom" ? "auto" : "medium")
    ), u = () => {
      e.closeOnOverlayClick && a();
    };
    return (n, h) => (o(), p(N, {
      name: `sheet-${e.side}`
    }, {
      default: y(() => [
        e.isOpened ? (o(), i("div", x, [
          e.showOverlay ? (o(), i("div", {
            key: 0,
            class: "sheet-overlay",
            "aria-hidden": "true",
            onClick: u
          })) : s("", !0),
          m("section", {
            ref_key: "sheetRef",
            ref: d,
            class: L([
              "sheet",
              e.side,
              c.value,
              { rounded: e.rounded, "without-overlay": !e.showOverlay }
            ]),
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1",
            onClick: h[0] || (h[0] = V(() => {
            }, ["stop"]))
          }, [
            m("div", A, [
              e.title || e.description || e.showCloseButton || n.$slots.actions ? (o(), i("div", G, [
                e.title || e.description ? (o(), i("div", I, [
                  e.title ? (o(), p(E, {
                    key: 0,
                    Element: "h2",
                    typography: "title-2",
                    class: "sheet-title"
                  }, {
                    default: y(() => [
                      O(C(e.title), 1)
                    ]),
                    _: 1
                  })) : s("", !0),
                  e.title && e.description ? (o(), p(q, {
                    key: 1,
                    size: 2
                  })) : s("", !0),
                  e.description ? (o(), p(E, {
                    key: 2,
                    typography: "paragraph-1",
                    color: "secondary",
                    class: "sheet-description"
                  }, {
                    default: y(() => [
                      O(C(e.description), 1)
                    ]),
                    _: 1
                  })) : s("", !0)
                ])) : s("", !0),
                n.$slots.actions || e.showCloseButton ? (o(), i("div", K, [
                  w(n.$slots, "actions", {}, void 0, !0),
                  e.showCloseButton ? (o(), p(T, {
                    key: 0,
                    class: "sheet-close",
                    mode: "ghost",
                    size: "small",
                    squared: "",
                    type: "button",
                    "aria-label": "Закрыть",
                    onClick: B(a)
                  }, {
                    default: y(() => [
                      R(B(D))
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : s("", !0)
                ])) : s("", !0)
              ])) : s("", !0),
              m("div", P, [
                m("div", U, [
                  w(n.$slots, "default", {}, void 0, !0)
                ])
              ]),
              n.$slots.footer ? (o(), i("div", j, [
                w(n.$slots, "footer", {}, void 0, !0)
              ])) : s("", !0)
            ])
          ], 2)
        ])) : s("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), ee = /* @__PURE__ */ F(H, [["__scopeId", "data-v-39483d66"]]);
export {
  ee as default
};
