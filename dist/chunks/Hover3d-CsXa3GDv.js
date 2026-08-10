import { ref as u, reactive as _, computed as h, watch as p, toValue as d, onBeforeUnmount as x, defineComponent as T, toRef as m, openBlock as E, createElementBlock as g, normalizeClass as M, unref as l, normalizeStyle as H, createElementVNode as y, renderSlot as R } from "vue";
import { _ as F } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Hover3d-BcLnR2k0.css';const w = 320, A = 0.35, X = 1.5, f = (r, a, e) => Math.min(Math.max(r, a), e), Y = (r, a, e, o = {}) => {
  const n = Math.hypot(e.width, e.height), i = f(
    w / Math.max(n, 1),
    A,
    X
  ), c = (o.maxTilt ?? 7) * i, s = 1 + ((o.scale ?? 1.025) - 1) * i, t = f(
    (r - e.left) / Math.max(e.width, 1),
    0,
    1
  );
  return {
    rotateX: (f(
      (a - e.top) / Math.max(e.height, 1),
      0,
      1
    ) - 0.5) * c * 2,
    rotateY: (0.5 - t) * c * 2,
    scale: s
  };
}, B = (r = {}) => {
  const a = u(!1), e = _({
    rotateX: 0,
    rotateY: 0,
    scale: 1
  });
  let o;
  const n = () => {
    o !== void 0 && (window.cancelAnimationFrame(o), o = void 0);
  }, i = () => {
    n(), a.value = !1, e.rotateX = 0, e.rotateY = 0, e.scale = 1;
  }, c = (t) => {
    if (d(r.disabled) === !0 || t.pointerType !== "mouse" || !(t.currentTarget instanceof HTMLElement))
      return;
    const v = Y(
      t.clientX,
      t.clientY,
      t.currentTarget.getBoundingClientRect(),
      {
        maxTilt: d(r.maxTilt) ?? 7,
        scale: d(r.scale) ?? 1.025
      }
    );
    a.value = !0, n(), o = window.requestAnimationFrame(() => {
      Object.assign(e, v), o = void 0;
    });
  }, s = h(() => ({
    "--hover-3d-rotate-x": `${e.rotateX}deg`,
    "--hover-3d-rotate-y": `${e.rotateY}deg`,
    "--hover-3d-scale": String(e.scale)
  }));
  return p(
    () => d(r.disabled),
    (t) => t && i()
  ), x(n), {
    isActive: a,
    onPointerMove: c,
    reset: i,
    style: s
  };
}, C = { class: "Hover3d__surface" }, O = /* @__PURE__ */ T({
  __name: "Hover3d",
  props: {
    disabled: { type: Boolean, default: !1 },
    maxTilt: { default: 9 },
    scale: { default: 1.035 },
    stretched: { type: Boolean, default: !1 }
  },
  setup(r) {
    const a = r, { isActive: e, onPointerMove: o, reset: n, style: i } = B({
      disabled: m(a, "disabled"),
      maxTilt: m(a, "maxTilt"),
      scale: m(a, "scale")
    });
    return (c, s) => (E(), g("div", {
      class: M([
        "Hover3d",
        { active: l(e) && !a.disabled, stretched: a.stretched }
      ]),
      style: H(l(i)),
      onPointermove: s[0] || (s[0] = //@ts-ignore
      (...t) => l(o) && l(o)(...t)),
      onPointerleave: s[1] || (s[1] = //@ts-ignore
      (...t) => l(n) && l(n)(...t)),
      onPointercancel: s[2] || (s[2] = //@ts-ignore
      (...t) => l(n) && l(n)(...t))
    }, [
      y("div", C, [
        R(c.$slots, "default", {}, void 0, !0)
      ])
    ], 38));
  }
}), P = /* @__PURE__ */ F(O, [["__scopeId", "data-v-d611d5a1"]]);
export {
  P as default
};
