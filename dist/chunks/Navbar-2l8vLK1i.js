import { openBlock as o, createElementBlock as y, createElementVNode as u, ref as r, onMounted as F, computed as O, defineComponent as T, watch as j, normalizeClass as q, unref as m, renderSlot as l, Fragment as W, createVNode as B, withCtx as s, createCommentVNode as h, createBlock as p, Teleport as A } from "vue";
import { i as G } from "./IconAccessibleFilled-DFPdopZN.js";
import { u as C, a as D } from "./index-BQgYVE5h.js";
import S from "./Button-DBIwBw8Q.js";
import I from "./Dropdown-BtaoLYy0.js";
import P from "./Sheet-CoI0nAox.js";
import N from "./Stack-CgwImR5w.js";
import { _ as U } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Navbar-mV3OHsYP.css';const H = {}, J = {
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
function K(n, b) {
  return o(), y("svg", J, b[0] || (b[0] = [
    u("path", { d: "M4 6h16M4 12h16M4 18h16" }, null, -1)
  ]));
}
const E = /* @__PURE__ */ G(H, [["render", K]]), z = (n) => n ? Math.max(n.scrollWidth, n.getBoundingClientRect().width) : 0;
function Q({
  actionsRef: n,
  isViewportCompact: b,
  layoutRef: t,
  leftRef: $,
  navbarRef: L,
  navigationRef: k
}) {
  const f = r(null), v = r(0), g = r(!1), d = () => {
    var M;
    const a = t.value;
    if (!a)
      return;
    if (k.value) {
      const i = getComputedStyle(a), c = Number.parseFloat(i.paddingLeft) + Number.parseFloat(i.paddingRight), _ = Number.parseFloat(i.columnGap) || 0, e = Math.max(
        z($.value),
        z(n.value)
      );
      v.value = c + e * 2 + z(k.value) + _ * 2;
    }
    const V = ((M = f.value) == null ? void 0 : M.clientWidth) ?? a.clientWidth;
    g.value = v.value > 0 && V < v.value;
  };
  return F(() => {
    var a;
    f.value = ((a = L.value) == null ? void 0 : a.parentElement) ?? null;
  }), C(f, d), C(t, d), C($, d), C(k, d), C(n, d), { isCompact: O(
    () => b.value || g.value
  ) };
}
const X = ["data-mode"], Y = ["aria-label"], Z = ["aria-label"], x = ["aria-label"], ee = /* @__PURE__ */ T({
  __name: "Navbar",
  props: {
    ariaLabel: { default: "Основная навигация" },
    blur: { type: Boolean, default: !1 },
    defaultMobileOpen: { type: Boolean, default: !1 },
    mobileMenuLabel: { default: "Открыть меню" },
    mobileMenuTitle: { default: "Меню" },
    mobileMenuVariant: { default: "sheet" },
    mobileOpen: { type: Boolean, default: void 0 },
    mode: { default: "default" },
    sticky: { type: Boolean, default: !1 },
    stretched: { type: Boolean }
  },
  emits: ["update:mobileOpen"],
  setup(n, { emit: b }) {
    const t = n, $ = b, L = D(), k = O(() => L.isMobile), f = r(null), v = r(null), g = r(null), d = r(null), R = r(null), { isCompact: a } = Q({
      actionsRef: R,
      isViewportCompact: k,
      layoutRef: v,
      leftRef: g,
      navbarRef: f,
      navigationRef: d
    }), V = O(
      () => t.stretched ?? t.mode !== "floating"
    ), M = r(t.defaultMobileOpen), i = O(
      () => t.mobileOpen ?? M.value
    ), c = (e) => {
      t.mobileOpen === void 0 && (M.value = e), $("update:mobileOpen", e);
    }, _ = (e) => {
      const w = e.target;
      w instanceof Element && w.closest("a[href]") && c(!1);
    };
    return j(a, (e) => {
      !e && i.value && c(!1);
    }), (e, w) => (o(), y("header", {
      ref_key: "navbarRef",
      ref: f,
      class: q([
        "navbar",
        `navbar-${t.mode}`,
        {
          blur: t.blur,
          "navbar-sticky": t.sticky,
          "navbar-stretched": V.value,
          "navbar-compact": m(a)
        }
      ]),
      "data-mode": t.mode
    }, [
      u("div", {
        ref_key: "layoutRef",
        ref: v,
        class: "navbar-layout"
      }, [
        u("div", {
          ref_key: "leftRef",
          ref: g,
          class: "navbar-left"
        }, [
          l(e.$slots, "left", {}, void 0, !0)
        ], 512),
        m(a) ? e.$slots.compactActions ? (o(), p(N, {
          key: 1,
          direction: "row",
          gap: 1,
          "align-items": "center"
        }, {
          default: s(() => [
            l(e.$slots, "compactActions", {}, void 0, !0)
          ]),
          _: 3
        })) : h("", !0) : (o(), y(W, { key: 0 }, [
          u("div", {
            ref_key: "navigationRef",
            ref: d,
            class: "navbar-navigation",
            "aria-label": t.ariaLabel
          }, [
            l(e.$slots, "default", {}, void 0, !0)
          ], 8, Y),
          e.$slots.actions ? (o(), y("div", {
            key: 0,
            ref_key: "actionsRef",
            ref: R,
            class: "navbar-actions"
          }, [
            B(N, {
              direction: "row",
              gap: 2,
              "align-items": "center",
              "justify-content": "end"
            }, {
              default: s(() => [
                l(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            })
          ], 512)) : h("", !0)
        ], 64)),
        m(a) && t.mobileMenuVariant === "dropdown" ? (o(), p(I, {
          key: 2,
          shown: i.value,
          "content-padding": "comfortable",
          placement: "bottom-end",
          "onUpdate:shown": c
        }, {
          popper: s(() => [
            u("div", {
              class: "navbar-mobile-content",
              onClick: _
            }, [
              e.$slots.mobile ? l(e.$slots, "mobile", { key: 0 }, void 0, !0) : (o(), y(W, { key: 1 }, [
                u("div", {
                  class: "navbar-mobile-navigation",
                  "aria-label": t.ariaLabel
                }, [
                  l(e.$slots, "default", {}, void 0, !0)
                ], 8, Z),
                e.$slots.actions ? (o(), p(N, {
                  key: 0,
                  direction: "column",
                  gap: 2,
                  stretched: ""
                }, {
                  default: s(() => [
                    l(e.$slots, "actions", {}, void 0, !0)
                  ]),
                  _: 3
                })) : h("", !0)
              ], 64))
            ])
          ]),
          default: s(() => [
            B(S, {
              class: "navbar-menu-button",
              mode: "ghost",
              size: "medium",
              squared: "",
              type: "button",
              "aria-label": t.mobileMenuLabel,
              "aria-expanded": i.value
            }, {
              default: s(() => [
                B(m(E))
              ]),
              _: 1
            }, 8, ["aria-label", "aria-expanded"])
          ]),
          _: 3
        }, 8, ["shown"])) : m(a) ? (o(), p(S, {
          key: 3,
          class: "navbar-menu-button",
          mode: "ghost",
          size: "medium",
          squared: "",
          rounded: e.mode === "floating",
          type: "button",
          "aria-label": t.mobileMenuLabel,
          "aria-expanded": i.value,
          onClick: w[0] || (w[0] = (te) => c(!0))
        }, {
          default: s(() => [
            B(m(E))
          ]),
          _: 1
        }, 8, ["rounded", "aria-label", "aria-expanded"])) : h("", !0)
      ], 512),
      (o(), p(A, { to: "body" }, [
        m(a) && t.mobileMenuVariant === "sheet" ? (o(), p(P, {
          key: 0,
          "is-opened": i.value,
          title: t.mobileMenuTitle,
          side: "right",
          size: "small",
          mode: "floating",
          "on-close": () => c(!1)
        }, {
          default: s(() => [
            u("div", {
              class: "navbar-mobile-content",
              onClick: _
            }, [
              e.$slots.mobile ? l(e.$slots, "mobile", { key: 0 }, void 0, !0) : (o(), y(W, { key: 1 }, [
                u("div", {
                  class: "navbar-mobile-navigation",
                  "aria-label": t.ariaLabel
                }, [
                  l(e.$slots, "default", {}, void 0, !0)
                ], 8, x),
                e.$slots.actions ? (o(), p(N, {
                  key: 0,
                  direction: "column",
                  gap: 2,
                  stretched: ""
                }, {
                  default: s(() => [
                    l(e.$slots, "actions", {}, void 0, !0)
                  ]),
                  _: 3
                })) : h("", !0)
              ], 64))
            ])
          ]),
          _: 3
        }, 8, ["is-opened", "title", "on-close"])) : h("", !0)
      ]))
    ], 10, X));
  }
}), ue = /* @__PURE__ */ U(ee, [["__scopeId", "data-v-3d6f5e84"]]);
export {
  ue as default
};
