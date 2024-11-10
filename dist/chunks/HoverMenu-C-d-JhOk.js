import { inject as b, ref as o, provide as g, defineComponent as k, openBlock as p, createElementBlock as M, Fragment as S, createElementVNode as B, unref as e, renderSlot as h, createBlock as H, Teleport as T, createVNode as y, Transition as C, withCtx as w, normalizeStyle as N, createCommentVNode as x } from "vue";
import { B as E } from "./BaseMenu-DZr7VeE0.js";
import { f as F, s as $, b as j } from "./index-C0NMnPVt.js";
import { _ as z } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/HoverMenu-cd52NySQ.css';const D = () => {
  const f = b("hover-submenu-shown", o()), l = b("hover-submenu-hidden", o()), a = o(!1), i = o(!1), m = o(null), d = o(null), n = o(), r = o([F(), $()]), { floatingStyles: v, update: t } = j(m, d, {
    placement: "right-start",
    middleware: r
  }), s = (u) => {
    var c;
    clearTimeout(n.value), u == null || u.preventDefault(), a.value = !0, (c = f.value) == null || c.call(f), t();
  }, R = () => {
    n.value = setTimeout(() => {
      var u;
      a.value = !1, (u = l.value) == null || u.call(l);
    }, 100);
  }, V = () => {
    i.value = !0;
  }, _ = () => {
    i.value = !1;
  };
  return g("hover-submenu-shown", o(V)), g("hover-submenu-hidden", o(_)), { floatingStyles: v, floatingRef: d, targetRef: m, isVisible: a, isSubmenuVisible: i, hideMenu: R, showHoverMenu: s };
}, I = /* @__PURE__ */ k({
  __name: "HoverMenu",
  setup(f) {
    const { targetRef: l, floatingRef: a, floatingStyles: i, isVisible: m, isSubmenuVisible: d, showHoverMenu: n, hideMenu: r } = D();
    return (v, t) => (p(), M(S, null, [
      B("div", {
        ref_key: "targetRef",
        ref: l,
        onMouseenter: t[0] || (t[0] = //@ts-ignore
        (...s) => e(n) && e(n)(...s)),
        onMouseleave: t[1] || (t[1] = //@ts-ignore
        (...s) => e(r) && e(r)(...s)),
        class: "hover-menu-wrapper"
      }, [
        h(v.$slots, "default", { ref: "testRef" }, void 0, !0)
      ], 544),
      (p(), H(T, { to: "body" }, [
        y(C, { name: "fade" }, {
          default: w(() => [
            e(m) || e(d) ? (p(), M("div", {
              key: 0,
              onMouseenter: t[2] || (t[2] = //@ts-ignore
              (...s) => e(n) && e(n)(...s)),
              onMouseleave: t[3] || (t[3] = //@ts-ignore
              (...s) => e(r) && e(r)(...s)),
              ref_key: "floatingRef",
              ref: a
            }, [
              y(E, {
                style: N(e(i))
              }, {
                default: w(() => [
                  h(v.$slots, "menu", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["style"])
            ], 544)) : x("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}), K = /* @__PURE__ */ z(I, [["__scopeId", "data-v-189d461b"]]);
export {
  K as default
};
