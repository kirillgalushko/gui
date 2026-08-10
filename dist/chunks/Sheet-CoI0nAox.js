import { ref as v, watch as $, onMounted as g, onBeforeUnmount as b, defineComponent as S, computed as z, openBlock as s, createBlock as p, Transition as N, withCtx as y, createElementBlock as i, createCommentVNode as n, createElementVNode as m, normalizeClass as L, withModifiers as V, renderSlot as k, createTextVNode as _, toDisplayString as C, unref as B, createVNode as R } from "vue";
import T from "./Button-DBIwBw8Q.js";
import q from "./Gap-DQv4R87n.js";
import E from "./Text-Cd35JtZQ.js";
import { d as D } from "./IconXOutline-COEdos3u.js";
import { _ as F } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Sheet-DJjx5a11.css';const M = (o) => {
  const e = v(null), a = v(""), d = v(!1), u = v(null), c = () => {
    var r;
    (r = o.onClose) == null || r.call(o);
  }, t = (r) => {
    r.key === "Escape" && o.closeOnEscape && o.isOpened && c();
  }, h = (r) => {
    var f;
    if (!o.isOpened || o.showOverlay || !o.closeOnOverlayClick)
      return;
    const l = r.target;
    !(l instanceof Node) || (f = u.value) != null && f.contains(l) || l instanceof Element && l.closest(".v-popper__popper") || c();
  }, w = (r) => {
    var l, f;
    if (!(typeof document > "u")) {
      if (r) {
        e.value = document.activeElement, o.showOverlay && (a.value = document.body.style.overflow, d.value = !0, document.body.style.overflow = "hidden"), requestAnimationFrame(() => {
          var O;
          (O = u.value) == null || O.focus();
        });
        return;
      }
      d.value && (document.body.style.overflow = a.value, d.value = !1), (f = (l = e.value) == null ? void 0 : l.focus) == null || f.call(l);
    }
  };
  return $(() => o.isOpened, w), g(() => {
    document.addEventListener("keydown", t), document.addEventListener("pointerdown", h), w(o.isOpened);
  }), b(() => {
    document.removeEventListener("keydown", t), document.removeEventListener("pointerdown", h), d.value && (document.body.style.overflow = a.value);
  }), {
    close: c,
    sheetRef: u
  };
}, A = {
  key: 0,
  class: "sheet-wrapper"
}, G = { class: "sheet-layout" }, I = {
  key: 0,
  class: "sheet-header"
}, K = {
  key: 0,
  class: "sheet-heading"
}, P = {
  key: 1,
  class: "sheet-actions"
}, U = { class: "sheet-content" }, j = { class: "sheet-content-inner" }, H = {
  key: 1,
  class: "sheet-footer"
}, J = /* @__PURE__ */ S({
  __name: "Sheet",
  props: {
    isOpened: { type: Boolean },
    onClose: {},
    showCloseButton: { type: Boolean, default: !0 },
    title: {},
    description: {},
    side: { default: "right" },
    size: {},
    mode: { default: "floating" },
    rounded: { type: Boolean, default: !0 },
    showOverlay: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 }
  },
  setup(o) {
    const e = o, { close: a, sheetRef: d } = M(e), u = z(
      () => e.size ?? (e.side === "top" || e.side === "bottom" ? "auto" : "medium")
    ), c = () => {
      e.closeOnOverlayClick && a();
    };
    return (t, h) => (s(), p(N, {
      name: `sheet-${e.side}`
    }, {
      default: y(() => [
        e.isOpened ? (s(), i("div", A, [
          e.showOverlay ? (s(), i("div", {
            key: 0,
            class: "sheet-overlay",
            "aria-hidden": "true",
            onClick: c
          })) : n("", !0),
          m("section", {
            ref_key: "sheetRef",
            ref: d,
            class: L([
              "sheet",
              e.side,
              u.value,
              e.mode,
              { rounded: e.rounded, "without-overlay": !e.showOverlay }
            ]),
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1",
            onClick: h[0] || (h[0] = V(() => {
            }, ["stop"]))
          }, [
            m("div", G, [
              t.$slots.header || e.title || e.description || e.showCloseButton || t.$slots.actions ? (s(), i("div", I, [
                t.$slots.header || e.title || e.description ? (s(), i("div", K, [
                  t.$slots.header ? k(t.$slots, "header", { key: 0 }, void 0, !0) : e.title ? (s(), p(E, {
                    key: 1,
                    Element: "h2",
                    typography: "title-2",
                    class: "sheet-title"
                  }, {
                    default: y(() => [
                      _(C(e.title), 1)
                    ]),
                    _: 1
                  })) : n("", !0),
                  !t.$slots.header && e.title && e.description ? (s(), p(q, {
                    key: 2,
                    size: 2
                  })) : n("", !0),
                  !t.$slots.header && e.description ? (s(), p(E, {
                    key: 3,
                    typography: "paragraph-1",
                    color: "secondary",
                    class: "sheet-description"
                  }, {
                    default: y(() => [
                      _(C(e.description), 1)
                    ]),
                    _: 1
                  })) : n("", !0)
                ])) : n("", !0),
                t.$slots.actions || e.showCloseButton ? (s(), i("div", P, [
                  k(t.$slots, "actions", {}, void 0, !0),
                  e.showCloseButton ? (s(), p(T, {
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
                  }, 8, ["onClick"])) : n("", !0)
                ])) : n("", !0)
              ])) : n("", !0),
              m("div", U, [
                m("div", j, [
                  k(t.$slots, "default", {}, void 0, !0)
                ])
              ]),
              t.$slots.footer ? (s(), i("div", H, [
                k(t.$slots, "footer", {}, void 0, !0)
              ])) : n("", !0)
            ])
          ], 2)
        ])) : n("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), ee = /* @__PURE__ */ F(J, [["__scopeId", "data-v-c5b24508"]]);
export {
  ee as default
};
