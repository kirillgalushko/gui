import { defineComponent as f, inject as l, ref as v, computed as s, openBlock as r, createBlock as g, Transition as p, withCtx as _, unref as t, createElementBlock as C, normalizeStyle as b, createElementVNode as y, renderSlot as h, createCommentVNode as M } from "vue";
import { b as x, o as I, f as N, s as S, z as k } from "./index-BQgYVE5h.js";
import { n as w, a as E } from "./context-Clk3ZHel.js";
import { _ as B } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/NavigationMenuContent-CYbrl-fF.css';const R = ["id", "aria-labelledby"], z = { class: "navigation-menu-content-inner" }, K = /* @__PURE__ */ f({
  __name: "NavigationMenuContent",
  setup(P) {
    const e = l(w), n = l(E);
    if (!e || !n)
      throw new Error(
        "NavigationMenuContent must be used inside NavigationMenuItem"
      );
    const i = v(null), d = s(
      () => e.isMobile.value || e.orientation.value === "vertical"
    ), { floatingStyles: u } = x(n.triggerRef, i, {
      placement: "bottom-start",
      middleware: [I(8), N(), S({ padding: 8 })],
      whileElementsMounted: k
    }), c = s(
      () => d.value ? void 0 : u.value
    );
    return (m, o) => (r(), g(p, { name: "navigation-menu-content" }, {
      default: _(() => [
        t(n).isOpen.value ? (r(), C("div", {
          key: 0,
          id: t(n).contentId,
          ref_key: "floatingRef",
          ref: i,
          class: "navigation-menu-content",
          role: "region",
          tabindex: "-1",
          "aria-labelledby": t(n).triggerId,
          "data-state": "open",
          style: b(c.value),
          onPointerenter: o[0] || (o[0] = //@ts-ignore
          (...a) => t(e).cancelScheduledChange && t(e).cancelScheduledChange(...a)),
          onPointerleave: o[1] || (o[1] = //@ts-ignore
          (...a) => t(e).scheduleClose && t(e).scheduleClose(...a))
        }, [
          y("div", z, [
            h(m.$slots, "default", {}, void 0, !0)
          ])
        ], 44, R)) : M("", !0)
      ]),
      _: 3
    }));
  }
}), T = /* @__PURE__ */ B(K, [["__scopeId", "data-v-1b613c6a"]]);
export {
  T as default
};
