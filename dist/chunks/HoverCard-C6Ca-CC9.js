import { defineComponent as F, ref as a, useAttrs as N, computed as l, watch as _, nextTick as i, onBeforeUnmount as R, openBlock as c, createElementBlock as g, Fragment as S, createElementVNode as x, mergeProps as z, unref as C, renderSlot as h, createBlock as E, Teleport as V, createVNode as b, Transition as A, withCtx as k, normalizeStyle as H, normalizeClass as K, createCommentVNode as $ } from "vue";
import { o as I, f as P, s as U, h as j, z as q } from "./index-D5rI4VW1.js";
import G from "./Card-B6MDZptS.js";
import { _ as J } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/HoverCard-kAn-QP7B.css';const L = /* @__PURE__ */ F({
  inheritAttrs: !1,
  __name: "HoverCard",
  props: {
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    placement: { default: "bottom-start" },
    openDelay: { default: 0 },
    closeDelay: { default: 100 },
    sideOffset: { default: 8 },
    updateKey: { type: [String, Number, Boolean], default: void 0 },
    contentClass: { default: void 0 }
  },
  emits: ["update:open"],
  setup(B, { emit: T }) {
    const e = B, D = T, f = a(null), p = a(null), m = a(!1), o = a(null), M = N(), v = l(() => e.open !== void 0), n = l(() => !e.disabled && (v.value ? e.open === !0 : m.value)), O = l(() => [I(e.sideOffset), P(), U({ padding: 8 })]), { floatingStyles: w, update: s } = j(f, p, {
      placement: l(() => e.placement),
      middleware: O,
      whileElementsMounted: q
    }), y = (t) => {
      v.value || (m.value = t), D("update:open", t);
    }, r = () => {
      o.value !== null && (clearTimeout(o.value), o.value = null);
    }, d = () => {
      e.disabled || (r(), o.value = setTimeout(() => {
        y(!0), i(s);
      }, e.openDelay));
    }, u = () => {
      r(), o.value = setTimeout(() => {
        y(!1);
      }, e.closeDelay);
    };
    return _(n, (t) => {
      t && i(s);
    }), _(() => e.updateKey, () => {
      n.value && i(s);
    }), R(r), (t, Q) => (c(), g(S, null, [
      x("div", z(C(M), {
        ref_key: "targetRef",
        ref: f,
        class: "hover-card__trigger",
        onFocusin: d,
        onFocusout: u,
        onMouseenter: d,
        onMouseleave: u
      }), [
        h(t.$slots, "default", {}, void 0, !0)
      ], 16),
      (c(), E(V, { to: "body" }, [
        b(A, { name: "hover-card-fade" }, {
          default: k(() => [
            n.value ? (c(), g("div", {
              key: 0,
              ref_key: "floatingRef",
              ref: p,
              class: "hover-card",
              style: H(C(w)),
              role: "dialog",
              onMouseenter: d,
              onMouseleave: u
            }, [
              b(G, {
                class: K(["hover-card__content", e.contentClass]),
                padding: 0,
                "border-radius": 8
              }, {
                default: k(() => [
                  h(t.$slots, "content", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["class"])
            ], 36)) : $("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}), ee = /* @__PURE__ */ J(L, [["__scopeId", "data-v-9a285a21"]]);
export {
  ee as default
};
