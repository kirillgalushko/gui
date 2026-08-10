import { shallowRef as oe, ref as ae, computed as c, toValue as f, watch as le, nextTick as J, onBeforeUnmount as ye, defineComponent as be, useId as re, openBlock as h, createBlock as P, Teleport as Te, unref as o, createElementBlock as O, normalizeClass as Se, normalizeStyle as W, Fragment as ie, renderList as xe, withModifiers as se, createElementVNode as ue, renderSlot as B, createVNode as y, withCtx as g, createTextVNode as V, toDisplayString as C, createCommentVNode as $ } from "vue";
import { d as ke } from "./IconXOutline-COEdos3u.js";
import Ee from "./Badge-BVl1w1Ya.js";
import Q from "./Button-DBIwBw8Q.js";
import Le from "./Card-CqByhexi.js";
import z from "./Stack-CgwImR5w.js";
import de from "./Text-Cd35JtZQ.js";
import { a0 as _e, a1 as Oe, o as Be, f as Ce, s as Re, b as Me, z as Pe, a2 as Ve, a3 as $e, a4 as ze, a5 as ce, a6 as Fe, a7 as Ie, a as Ae } from "./index-BQgYVE5h.js";
import { _ as De } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/OnboardingTour-uR1sNhnv.css';const Ne = { width: 0, height: 0 };
function pe() {
  return typeof window > "u" ? Ne : { width: window.innerWidth, height: window.innerHeight };
}
function Ke(u) {
  const i = oe(null), w = ae(null), l = oe(null), d = ae(pe()), p = c(() => f(u.step)), v = c(() => f(u.open)), t = c(
    () => {
      var e;
      return ((e = p.value) == null ? void 0 : e.spotlightPadding) ?? f(u.defaultSpotlightPadding);
    }
  ), b = c(() => l.value ? _e(
    l.value,
    t.value,
    d.value.width,
    d.value.height
  ) : null), F = c(
    () => b.value ? Oe(
      b.value,
      d.value.width,
      d.value.height
    ) : []
  ), I = c(() => {
    var e;
    return [
      Be(
        (((e = p.value) == null ? void 0 : e.sideOffset) ?? f(u.defaultSideOffset)) + t.value
      ),
      Ce({
        padding: f(u.viewportPadding),
        fallbackAxisSideDirection: "start"
      }),
      Re({ padding: f(u.viewportPadding) })
    ];
  }), _ = () => {
    d.value = pe();
    const e = i.value;
    if (!(e != null && e.isConnected)) {
      i.value = null, l.value = null, M();
      return;
    }
    l.value = Ve(
      e,
      d.value.width,
      d.value.height
    );
  }, G = (e, a, r) => Pe(e, a, () => {
    _(), r();
  }), { floatingStyles: T, update: R } = Me(
    i,
    w,
    {
      strategy: "fixed",
      placement: c(() => {
        var e;
        return ((e = p.value) == null ? void 0 : e.placement) ?? "bottom";
      }),
      middleware: I,
      whileElementsMounted: G
    }
  );
  let S = null, x = null, E = null, L = null, n = !1, s = 0, m = !1, k = null;
  const H = () => {
    E !== null && (clearTimeout(E), E = null);
  }, j = () => {
    S == null || S.disconnect(), S = null;
  }, ve = (e) => {
    j(), typeof ResizeObserver < "u" && (S = new ResizeObserver(_), S.observe(e));
  }, fe = () => {
    const e = p.value;
    !e || m || !v.value || (m = !0, u.onTargetMissing({
      step: e,
      index: f(u.stepIndex),
      target: e.target
    }));
  }, ge = () => {
    if (E !== null || m || i.value)
      return;
    const e = Math.max(0, f(u.targetTimeout));
    E = setTimeout(fe, e);
  }, q = (e, a) => {
    a.scrollIntoView !== !1 && $e(e, f(u.scrollBehavior));
  }, X = async (e = s) => {
    if (!v.value || e !== s || (await J(), !v.value || e !== s))
      return;
    const a = p.value, r = a ? ze(a.target) : null;
    if (!(r != null && r.isConnected)) {
      i.value = null, l.value = null, ge();
      return;
    }
    H(), m = !1, a && q(r, a), i.value = r, ve(r), _(), await J(), R();
  };
  function M(e = !1) {
    n || (n = e), !(L !== null || typeof window > "u") && (L = window.requestAnimationFrame(() => {
      L = null;
      const a = n;
      if (n = !1, i.value) {
        const r = p.value;
        a && r && q(i.value, r), _(), R();
      } else
        X();
    }));
  }
  const me = () => {
    s += 1, n = !1, i.value = null, l.value = null, m = !1, H(), j(), !(!v.value || !p.value) && X(s);
  }, Y = (e) => {
    var a, r;
    return !!(e && ((a = i.value) != null && a.contains(e) || (r = w.value) != null && r.contains(e)));
  }, U = (e = !1) => {
    var K;
    const a = ce(
      i.value,
      w.value
    );
    (K = (e ? a[a.length - 1] : a[0]) ?? w.value) == null || K.focus({ preventScroll: !0 });
  }, Z = (e) => {
    if (!v.value || !b.value)
      return;
    if (e.key === "Escape" && f(u.closeOnEscape)) {
      e.preventDefault(), u.onEscape();
      return;
    }
    if (e.key !== "Tab")
      return;
    const a = ce(
      i.value,
      w.value
    ), r = a.indexOf(
      document.activeElement
    );
    if (a.length === 0 || r === -1) {
      e.preventDefault(), U(e.shiftKey);
      return;
    }
    const K = e.shiftKey && r === 0, we = !e.shiftKey && r === a.length - 1;
    (K || we) && (e.preventDefault(), U(e.shiftKey));
  }, ee = (e) => {
    v.value && b.value && !Y(e.target) && U();
  }, te = (e) => {
    const a = i.value;
    v.value && a && e.composedPath().includes(a) && u.onTargetClick();
  }, A = (e) => {
    Fe(
      e,
      i.value,
      f(u.lockTargetScroll)
    ) && e.preventDefault();
  }, D = () => {
    const e = i.value, a = p.value;
    e && a && q(e, a), M();
  }, N = () => {
    M();
  }, he = () => {
    var e, a;
    typeof window > "u" || (k = document.activeElement instanceof HTMLElement ? document.activeElement : null, window.addEventListener("resize", D), window.addEventListener("scroll", N, !0), (e = window.visualViewport) == null || e.addEventListener("resize", D), (a = window.visualViewport) == null || a.addEventListener("scroll", N), document.addEventListener("keydown", Z, !0), document.addEventListener("focusin", ee, !0), document.addEventListener("click", te, !0), document.addEventListener("wheel", A, {
      capture: !0,
      passive: !1
    }), document.addEventListener("touchmove", A, {
      capture: !0,
      passive: !1
    }), typeof MutationObserver < "u" && (x = new MutationObserver(
      () => M(!0)
    ), x.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["class", "style", "hidden"]
    })));
  }, ne = () => {
    var e, a;
    typeof window > "u" || (window.removeEventListener("resize", D), window.removeEventListener("scroll", N, !0), (e = window.visualViewport) == null || e.removeEventListener("resize", D), (a = window.visualViewport) == null || a.removeEventListener("scroll", N), document.removeEventListener("keydown", Z, !0), document.removeEventListener("focusin", ee, !0), document.removeEventListener("click", te, !0), document.removeEventListener("wheel", A, !0), document.removeEventListener("touchmove", A, !0), x == null || x.disconnect(), x = null, k != null && k.isConnected && (!document.activeElement || Y(document.activeElement)) && k.focus({ preventScroll: !0 }), k = null);
  };
  return le(
    [v, () => f(u.stepIndex), p],
    ([e], a) => {
      const r = (a == null ? void 0 : a[0]) ?? !1;
      e && !r ? he() : !e && r && ne(), me();
    },
    { immediate: !0 }
  ), le(w, (e) => {
    e && v.value && J(() => {
      R(), e.focus({ preventScroll: !0 });
    });
  }), ye(() => {
    s += 1, n = !1, H(), j(), ne(), L !== null && typeof window < "u" && window.cancelAnimationFrame(L);
  }), {
    targetElement: i,
    floatingElement: w,
    spotlightRect: b,
    overlayRects: F,
    floatingStyles: T,
    isTargetReady: c(
      () => !!(i.value && b.value)
    ),
    setFloatingElement: (e) => {
      w.value = e instanceof HTMLElement ? e : null;
    },
    refresh: () => M(!0)
  };
}
const We = ["aria-label", "aria-labelledby", "aria-describedby"], Ge = { key: 1 }, He = /* @__PURE__ */ be({
  __name: "OnboardingTour",
  props: {
    steps: {},
    open: { type: Boolean, default: !1 },
    step: { default: 0 },
    teleportTo: { default: "body" },
    cardWidth: { default: 380 },
    zIndex: { default: 1e3 },
    overlayOpacity: { default: 0.6 },
    spotlightPadding: { default: 6 },
    spotlightRadius: { default: 12 },
    sideOffset: { default: 10 },
    viewportPadding: { default: 8 },
    targetTimeout: { default: 3e3 },
    missingTargetBehavior: { default: "close" },
    scrollBehavior: { default: "smooth" },
    lockTargetScroll: { type: Boolean, default: !0 },
    animated: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    showCloseButton: { type: Boolean, default: !0 },
    showProgress: { type: Boolean, default: !0 },
    previousLabel: { default: "Назад" },
    nextLabel: { default: "Далее" },
    finishLabel: { default: "Готово" },
    ariaLabel: { default: "Подсказка по интерфейсу" }
  },
  emits: ["update:open", "update:step", "start", "next", "previous", "finish", "close", "target-click", "target-missing"],
  setup(u, { expose: i, emit: w }) {
    const l = u, d = w, p = c({
      get: () => l.open,
      set: (n) => d("update:open", n)
    }), v = c({
      get: () => l.step,
      set: (n) => d("update:step", n)
    }), t = Ie({
      steps: () => l.steps,
      open: p,
      step: v,
      onStart: (n) => d("start", n),
      onNext: (n) => d("next", n),
      onPrevious: (n) => d("previous", n),
      onFinish: (n) => d("finish", n),
      onClose: (n, s) => d("close", n, s)
    }), b = Ae(), F = re(), I = re(), _ = (n) => {
      if (d("target-missing", n), l.missingTargetBehavior !== "wait") {
        if (l.missingTargetBehavior === "skip" && n.index < l.steps.length - 1) {
          t.goTo(n.index + 1);
          return;
        }
        t.close("missing-target");
      }
    }, G = () => {
      const n = t.currentStep.value;
      n && (d("target-click", { step: n, index: t.step.value }), n.advanceOnTargetClick && t.next());
    }, T = Ke({
      open: p,
      step: t.currentStep,
      stepIndex: v,
      closeOnEscape: () => l.closeOnEscape,
      lockTargetScroll: () => l.lockTargetScroll,
      scrollBehavior: () => l.scrollBehavior,
      targetTimeout: () => l.targetTimeout,
      viewportPadding: () => l.viewportPadding,
      defaultSpotlightPadding: () => l.spotlightPadding,
      defaultSideOffset: () => l.sideOffset,
      onEscape: () => t.close("escape"),
      onTargetClick: G,
      onTargetMissing: _
    }), R = c(() => ({
      "--onboarding-tour-z-index": String(l.zIndex),
      "--onboarding-tour-overlay-opacity": String(
        Math.min(Math.max(l.overlayOpacity, 0), 1)
      )
    })), S = c(() => [
      T.floatingStyles.value,
      {
        width: b.isMobile ? "calc(100vw - (var(--gap-2) * 2))" : `${l.cardWidth}px`,
        maxWidth: "calc(100vw - (var(--gap-2) * 2))"
      }
    ]), x = c(() => {
      var s;
      const n = T.spotlightRect.value;
      if (n)
        return {
          top: `${n.top}px`,
          left: `${n.left}px`,
          width: `${n.width}px`,
          height: `${n.height}px`,
          borderRadius: `${((s = t.currentStep.value) == null ? void 0 : s.spotlightRadius) ?? l.spotlightRadius}px`
        };
    }), E = c(
      () => {
        var n;
        return !t.isFirstStep.value && ((n = t.currentStep.value) == null ? void 0 : n.showPrevious) !== !1;
      }
    ), L = c(
      () => {
        var n;
        return ((n = t.currentStep.value) == null ? void 0 : n.actionLabel) ?? (t.isLastStep.value ? l.finishLabel : l.nextLabel);
      }
    );
    return i({
      start: t.start,
      close: t.close,
      next: t.next,
      previous: t.previous,
      goTo: t.goTo,
      refresh: T.refresh
    }), (n, s) => (h(), P(Te, {
      to: l.teleportTo
    }, [
      l.open && o(t).currentStep.value ? (h(), O("div", {
        key: 0,
        class: Se([
          "onboarding-tour",
          { "onboarding-tour--animated": l.animated }
        ]),
        style: W(R.value)
      }, [
        o(T).isTargetReady.value ? (h(), O(ie, { key: 0 }, [
          (h(!0), O(ie, null, xe(o(T).overlayRects.value, (m, k) => (h(), O("div", {
            key: k,
            class: "onboarding-tour__overlay",
            style: W({
              top: `${m.top}px`,
              left: `${m.left}px`,
              width: `${m.width}px`,
              height: `${m.height}px`
            }),
            "aria-hidden": "true",
            onWheel: s[0] || (s[0] = se(() => {
            }, ["prevent"])),
            onTouchmove: s[1] || (s[1] = se(() => {
            }, ["prevent"]))
          }, null, 36))), 128)),
          ue("div", {
            class: "onboarding-tour__spotlight",
            style: W(x.value),
            "aria-hidden": "true"
          }, null, 4),
          ue("div", {
            ref: o(T).setFloatingElement,
            class: "onboarding-tour__floating",
            style: W(S.value),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": l.ariaLabel,
            "aria-labelledby": o(F),
            "aria-describedby": o(t).currentStep.value.description ? o(I) : void 0,
            tabindex: "-1"
          }, [
            (h(), O("div", {
              key: o(t).currentStep.value.id,
              class: "onboarding-tour__card-motion"
            }, [
              B(n.$slots, "card", {
                step: o(t).currentStep.value,
                index: o(t).step.value,
                progress: o(t).progress.value,
                next: o(t).next,
                previous: o(t).previous,
                close: o(t).close
              }, () => [
                y(Le, {
                  class: "onboarding-tour__card",
                  padding: 16,
                  "border-radius": 16,
                  stretched: ""
                }, {
                  default: g(() => [
                    y(z, {
                      direction: "column",
                      gap: 4,
                      stretched: ""
                    }, {
                      default: g(() => [
                        y(z, {
                          direction: "row",
                          gap: 3,
                          "align-items": "start",
                          "justify-content": "space-between",
                          stretched: ""
                        }, {
                          default: g(() => [
                            y(z, {
                              direction: "column",
                              gap: 2
                            }, {
                              default: g(() => [
                                B(n.$slots, "title", {
                                  step: o(t).currentStep.value,
                                  index: o(t).step.value
                                }, () => [
                                  y(de, {
                                    id: o(F),
                                    Element: "h2",
                                    typography: "title-2",
                                    class: "onboarding-tour__title"
                                  }, {
                                    default: g(() => [
                                      V(C(o(t).currentStep.value.title), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["id"])
                                ], !0),
                                B(n.$slots, "description", {
                                  step: o(t).currentStep.value,
                                  index: o(t).step.value
                                }, () => [
                                  o(t).currentStep.value.description ? (h(), P(de, {
                                    key: 0,
                                    id: o(I),
                                    typography: "paragraph-1",
                                    color: "secondary",
                                    class: "onboarding-tour__description"
                                  }, {
                                    default: g(() => [
                                      V(C(o(t).currentStep.value.description), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["id"])) : $("", !0)
                                ], !0)
                              ]),
                              _: 3
                            }),
                            l.showCloseButton ? (h(), P(Q, {
                              key: 0,
                              mode: "ghost",
                              size: "small",
                              squared: "",
                              type: "button",
                              "aria-label": "Закрыть онбординг",
                              onClick: s[2] || (s[2] = (m) => o(t).close())
                            }, {
                              default: g(() => [
                                y(o(ke))
                              ]),
                              _: 1
                            })) : $("", !0)
                          ]),
                          _: 3
                        }),
                        B(n.$slots, "content", {
                          step: o(t).currentStep.value,
                          index: o(t).step.value
                        }, void 0, !0),
                        y(z, {
                          direction: "row",
                          gap: 2,
                          "align-items": "center",
                          "justify-content": "space-between",
                          stretched: ""
                        }, {
                          default: g(() => [
                            B(n.$slots, "progress", {
                              step: o(t).currentStep.value,
                              index: o(t).step.value,
                              progress: o(t).progress.value
                            }, () => [
                              l.showProgress ? (h(), P(Ee, {
                                key: 0,
                                mode: "secondary"
                              }, {
                                default: g(() => [
                                  V(C(o(t).progress.value.current) + " из " + C(o(t).progress.value.total), 1)
                                ]),
                                _: 1
                              })) : (h(), O("span", Ge))
                            ], !0),
                            y(z, {
                              direction: "row",
                              gap: 2,
                              "align-items": "center"
                            }, {
                              default: g(() => [
                                B(n.$slots, "actions", {
                                  step: o(t).currentStep.value,
                                  index: o(t).step.value,
                                  isFirst: o(t).isFirstStep.value,
                                  isLast: o(t).isLastStep.value,
                                  next: o(t).next,
                                  previous: o(t).previous,
                                  close: o(t).close
                                }, () => [
                                  E.value ? (h(), P(Q, {
                                    key: 0,
                                    mode: "ghost",
                                    size: "small",
                                    type: "button",
                                    onClick: o(t).previous
                                  }, {
                                    default: g(() => [
                                      V(C(o(t).currentStep.value.previousLabel ?? l.previousLabel), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])) : $("", !0),
                                  y(Q, {
                                    mode: "contrast",
                                    size: "small",
                                    type: "button",
                                    onClick: o(t).next
                                  }, {
                                    default: g(() => [
                                      V(C(L.value), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ], !0)
                              ]),
                              _: 3
                            })
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ], !0)
            ]))
          ], 12, We)
        ], 64)) : $("", !0)
      ], 6)) : $("", !0)
    ], 8, ["to"]));
  }
}), tt = /* @__PURE__ */ De(He, [["__scopeId", "data-v-9d7242d2"]]);
export {
  tt as default
};
