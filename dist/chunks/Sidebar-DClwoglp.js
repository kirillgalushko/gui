import { openBlock as L, createElementBlock as E, createElementVNode as W, defineComponent as _, ref as u, provide as m, watch as w, onBeforeUnmount as k, normalizeClass as x, normalizeStyle as y, createVNode as C, unref as B, renderSlot as S } from "vue";
import { i as F } from "./IconAccessibleFilled-DFPdopZN.js";
import { _ as M } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Sidebar-ptBTz8-k.css';const $ = {}, T = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function A(v, t) {
  return L(), E("svg", T, t[0] || (t[0] = [
    W("path", { d: "M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const N = /* @__PURE__ */ F($, [["render", A]]), X = /* @__PURE__ */ _({
  __name: "Sidebar",
  props: {
    mode: { default: "default" },
    padding: { default: 16 },
    width: { default: 300 },
    maxWidth: { default: "100vw" },
    minWidth: { default: "200px" },
    compactWidth: { default: 0 }
  },
  setup(v) {
    const t = v, n = u(t.width), i = u(!1), f = u(n.value < t.compactWidth), o = u(null);
    let s = null;
    m("sidebar-width", n), m("sidebar-is-resizing", i), m("sidebar-is-compact", f);
    const h = () => {
      var e;
      return ((e = o.value) == null ? void 0 : e.getBoundingClientRect().width) ?? n.value;
    }, c = (e = h()) => {
      f.value = e < t.compactWidth;
    }, l = () => {
      s !== null && (cancelAnimationFrame(s), s = null);
    }, p = () => {
      if (c(), !o.value || i.value) {
        s = null;
        return;
      }
      if (Math.abs(h() - n.value) <= 0.5) {
        c(n.value), s = null;
        return;
      }
      s = requestAnimationFrame(p);
    }, z = () => {
      l(), s = requestAnimationFrame(p);
    }, g = () => {
      l(), o.value && (n.value = o.value.getBoundingClientRect().width), i.value = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", a), document.addEventListener("touchmove", d), document.addEventListener("touchend", a), document.body.classList.add("prevent-user-select"), document.body.classList.add("sidebar-is-resizing");
    }, d = (e) => {
      if (i.value && o.value) {
        const r = e instanceof TouchEvent ? e.touches[0] : void 0, b = e instanceof MouseEvent ? e.clientX : r == null ? void 0 : r.clientX;
        if (b === void 0)
          return;
        const R = o.value.offsetLeft;
        n.value = b - R;
      }
      i.value && e instanceof MouseEvent && e.buttons !== 1 && a();
    }, a = () => {
      i.value = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", a), document.removeEventListener("touchmove", d), document.removeEventListener("touchend", a), document.body.classList.remove("prevent-user-select"), document.body.classList.remove("sidebar-is-resizing");
    };
    return w([n, () => t.compactWidth], () => {
      if (i.value) {
        c(n.value);
        return;
      }
      z();
    }, { immediate: !0 }), w(() => t.width, (e) => {
      Number.isFinite(e) && (n.value = e);
    }), k(l), (e, r) => (L(), E("div", {
      ref_key: "sidebarRef",
      ref: o,
      class: x(["sidebar", `sidebar--${t.mode}`, { "sidebar--resizing": i.value }]),
      style: y({
        width: `${n.value}px`,
        padding: `${t.padding}px`,
        maxWidth: t.maxWidth,
        minWidth: t.minWidth
      })
    }, [
      W("div", {
        class: "resize-handle",
        onMousedown: g,
        onTouchstart: g
      }, [
        C(B(N))
      ], 32),
      S(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), j = /* @__PURE__ */ M(X, [["__scopeId", "data-v-4676cc90"]]);
export {
  j as default
};
