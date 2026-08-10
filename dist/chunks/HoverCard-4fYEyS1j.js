import { defineComponent as O, ref as a, useAttrs as w, computed as l, watch as _, nextTick as f, onBeforeUnmount as F, openBlock as i, createElementBlock as g, Fragment as N, createElementVNode as R, mergeProps as S, unref as h, renderSlot as C, createBlock as x, Teleport as E, createVNode as V, Transition as z, withCtx as A, normalizeStyle as H, createCommentVNode as K } from "vue";
import { o as $, f as I, s as P, b as U, z as j } from "./index-BQgYVE5h.js";
import { _ as q } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/HoverCard-i6JpE1I4.css';const G = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "HoverCard",
  props: {
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    placement: { default: "bottom-start" },
    openDelay: { default: 0 },
    closeDelay: { default: 100 },
    sideOffset: { default: 8 },
    updateKey: { type: [String, Number, Boolean], default: void 0 }
  },
  emits: ["update:open"],
  setup(b, { emit: k }) {
    const e = b, B = k, c = a(null), p = a(null), m = a(!1), o = a(null), T = w(), v = l(() => e.open !== void 0), n = l(
      () => !e.disabled && (v.value ? e.open === !0 : m.value)
    ), D = l(() => [
      $(e.sideOffset),
      I(),
      P({ padding: 8 })
    ]), { floatingStyles: M, update: s } = U(c, p, {
      placement: l(() => e.placement),
      middleware: D,
      whileElementsMounted: j
    }), y = (t) => {
      v.value || (m.value = t), B("update:open", t);
    }, r = () => {
      o.value !== null && (clearTimeout(o.value), o.value = null);
    }, u = () => {
      e.disabled || (r(), o.value = setTimeout(() => {
        y(!0), f(s);
      }, e.openDelay));
    }, d = () => {
      r(), o.value = setTimeout(() => {
        y(!1);
      }, e.closeDelay);
    };
    return _(n, (t) => {
      t && f(s);
    }), _(
      () => e.updateKey,
      () => {
        n.value && f(s);
      }
    ), F(r), (t, J) => (i(), g(N, null, [
      R("div", S(h(T), {
        ref_key: "targetRef",
        ref: c,
        class: "hover-card__trigger",
        onFocusin: u,
        onFocusout: d,
        onMouseenter: u,
        onMouseleave: d
      }), [
        C(t.$slots, "default", {}, void 0, !0)
      ], 16),
      (i(), x(E, { to: "body" }, [
        V(z, { name: "hover-card-fade" }, {
          default: A(() => [
            n.value ? (i(), g("div", {
              key: 0,
              ref_key: "floatingRef",
              ref: p,
              class: "hover-card",
              style: H(h(M)),
              role: "dialog",
              onMouseenter: u,
              onMouseleave: d
            }, [
              C(t.$slots, "content", {}, void 0, !0)
            ], 36)) : K("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}), X = /* @__PURE__ */ q(G, [["__scopeId", "data-v-36d1af5f"]]);
export {
  X as default
};
