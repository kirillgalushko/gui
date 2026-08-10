import { openBlock as A, createElementBlock as R, createElementVNode as W, defineComponent as N, ref as i, computed as q, watch as S, provide as b, onBeforeUnmount as D, normalizeClass as k, normalizeStyle as H, createVNode as V, unref as X, renderSlot as j } from "vue";
import { i as O } from "./IconAccessibleFilled-DFPdopZN.js";
import { _ as P } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Sidebar-RfALNVmj.css';const U = {}, G = {
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
function J(_, t) {
  return A(), R("svg", G, t[0] || (t[0] = [
    W("path", { d: "M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const K = /* @__PURE__ */ O(U, [["render", J]]), Q = 45, Y = 70, Z = /* @__PURE__ */ N({
  __name: "Sidebar",
  props: {
    mode: { default: "default" },
    padding: { default: 12 },
    width: { default: 300 },
    maxWidth: { default: "100vw" },
    minWidth: { default: "200px" },
    compactWidth: { default: 0 },
    collapseThreshold: {}
  },
  setup(_) {
    const t = _, a = i(t.width), l = i(!1), g = () => t.collapseThreshold !== void 0 && Number.isFinite(t.collapseThreshold) && t.collapseThreshold > t.compactWidth, x = () => t.compactWidth + ((t.collapseThreshold ?? t.compactWidth) - t.compactWidth) / 2, o = i(((e) => g() && e < x())(a.value));
    o.value && (a.value = t.compactWidth);
    const p = i(a.value), c = i(!1), d = i(null), y = q(() => g() ? o.value : a.value <= t.compactWidth), w = i(y.value), v = i(!0), T = i(!1), u = i(null);
    let h = null, s = null, r = null;
    const L = () => {
      r !== null && (clearTimeout(r), r = null);
    };
    S(
      y,
      (e) => {
        if (L(), typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          w.value = e, v.value = !0;
          return;
        }
        v.value = !1, r = setTimeout(() => {
          w.value = e, r = setTimeout(() => {
            v.value = !0, r = null;
          }, Y);
        }, Q);
      },
      { flush: "sync" }
    );
    const E = (e) => {
      if (e !== void 0 && (e.target !== u.value || e.propertyName !== "width"))
        return;
      s !== null && (clearTimeout(s), s = null);
      const n = d.value;
      c.value = !1, d.value = null, n === "expand" && !o.value && (T.value = !0, a.value = p.value, h = requestAnimationFrame(() => {
        T.value = !1, h = null;
      }));
    }, I = () => {
      s !== null && clearTimeout(s);
      const e = d.value === "expand" ? 220 : 260;
      s = setTimeout(E, e);
    }, M = (e) => {
      d.value = e, c.value = !0, I();
    };
    b("sidebar-width", a), b("sidebar-requested-width", p), b("sidebar-is-resizing", l), b("sidebar-is-compact", w);
    const $ = (e) => g() && e < x(), z = (e) => {
      const n = $(e);
      if (p.value = n ? t.compactWidth : Math.max(e, t.collapseThreshold ?? e), l.value && n !== o.value && M(n ? "collapse" : "expand"), o.value = n, c.value) {
        a.value = d.value === "expand" ? t.collapseThreshold ?? e : t.compactWidth;
        return;
      }
      a.value = p.value;
    }, C = () => {
      u.value && (a.value = o.value ? t.compactWidth : u.value.getBoundingClientRect().width), l.value = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", m), document.addEventListener("touchmove", f, { passive: !0 }), document.addEventListener("touchend", m), document.body.classList.add("prevent-user-select"), document.body.classList.add("sidebar-is-resizing");
    }, f = (e) => {
      if (l.value && u.value) {
        const n = e instanceof TouchEvent ? e.touches[0] : void 0, F = e instanceof MouseEvent ? e.clientX : n == null ? void 0 : n.clientX;
        if (F === void 0)
          return;
        const B = u.value.offsetLeft;
        z(F - B);
      }
      l.value && e instanceof MouseEvent && e.buttons !== 1 && m();
    }, m = () => {
      l.value = !1, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", m), document.removeEventListener("touchmove", f), document.removeEventListener("touchend", m), document.body.classList.remove("prevent-user-select"), document.body.classList.remove("sidebar-is-resizing");
    };
    return S(
      () => t.width,
      (e) => {
        Number.isFinite(e) && z(e);
      }
    ), S(
      () => t.compactWidth,
      () => {
        o.value && (a.value = t.compactWidth);
      }
    ), D(() => {
      L(), s !== null && clearTimeout(s), h !== null && cancelAnimationFrame(h);
    }), (e, n) => (A(), R("div", {
      ref_key: "sidebarRef",
      ref: u,
      class: k([
        "sidebar",
        `sidebar--${t.mode}`,
        {
          "sidebar--resizing": l.value,
          "sidebar--snapped": o.value,
          "sidebar--snap-animating": c.value,
          "sidebar--snap-expanding": c.value && d.value === "expand",
          "sidebar--snap-handoff": T.value
        }
      ]),
      style: H({
        width: `${a.value}px`,
        padding: `${t.padding}px`,
        maxWidth: t.maxWidth,
        minWidth: t.minWidth,
        "--sidebar-padding": `${t.padding}px`
      }),
      onTransitionend: E
    }, [
      W("div", {
        class: "resize-handle",
        onMousedown: C,
        onTouchstartPassive: C
      }, [
        V(X(K))
      ], 32),
      W("div", {
        class: k([
          "sidebar__content",
          { "sidebar__content--visible": v.value }
        ])
      }, [
        j(e.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 38));
  }
}), ie = /* @__PURE__ */ P(Z, [["__scopeId", "data-v-b71e402d"]]);
export {
  ie as default
};
