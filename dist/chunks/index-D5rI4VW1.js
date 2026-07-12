import '../assets/index-Dx-uo3WC.css';var gn = Object.defineProperty;
var yn = (t, e, n) => e in t ? gn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var j = (t, e, n) => yn(t, typeof e != "symbol" ? e + "" : e, n);
import { ref as b, onMounted as kt, watch as Bt, onBeforeUnmount as jt, computed as O, shallowRef as wn, getCurrentScope as bn, onScopeDispose as xn, shallowReadonly as Pt, unref as N, toValue as qe, provide as Tn, inject as Qe, readonly as Je, watchEffect as et, nextTick as pe, defineComponent as ve, useAttrs as Dn, openBlock as M, createElementBlock as F, Fragment as gt, createCommentVNode as bt, createElementVNode as st, renderList as ce, mergeProps as _t, createBlock as Ct, normalizeClass as rt, normalizeStyle as te, withCtx as Et, renderSlot as J, createVNode as At, isVNode as Ht, resolveDynamicComponent as It, normalizeProps as Ie, createTextVNode as Fe, toDisplayString as Qt, defineAsyncComponent as f } from "vue";
const Go = (t, e) => {
  const n = b([]), o = b();
  return {
    tabs: n,
    selectedTab: o,
    registerTab: (i) => {
      i.getAttribute("data-name") === t && (o.value = i), n.value.length || (o.value = i), n.value.push(i);
    },
    selectTab: (i) => {
      o.value = i;
      const c = i.getAttribute("data-name");
      c && e(c);
    }
  };
}, Uo = (t, e) => {
  const n = b(/* @__PURE__ */ new Map()), o = b();
  return {
    options: n,
    selectedOption: o,
    registerOption: (i) => {
      var c;
      if (n.value.set(i.value, i.label), ((c = o.value) == null ? void 0 : c.value) === i.value) {
        o.value = i;
        return;
      }
      t !== void 0 && i.value === t && !o.value && (o.value = i);
    },
    selectOption: (i) => {
      o.value = i, e == null || e(i);
    }
  };
}, Xo = () => {
  const t = b(), e = b(), n = b(), o = b(), s = b(!1), a = b(), i = b(), c = (l) => () => {
    s.value = !1, l();
  };
  return {
    title: t,
    description: e,
    confirm: (l) => (t.value = l == null ? void 0 : l.title, e.value = l == null ? void 0 : l.description, n.value = (l == null ? void 0 : l.confirmButtonText) || "Подтвердить", o.value = (l == null ? void 0 : l.cancelButtonText) || "Отменить", s.value = !0, new Promise((m, p) => {
      a.value = c(m), i.value = c(p);
    })),
    isOpened: s,
    resolve: a,
    reject: i,
    confirmButtonText: n,
    cancelButtonText: o
  };
};
function Sn(t, e) {
  const n = b(null), o = b(null), s = () => {
    n.value && o.value && (n.value.unobserve(o.value), o.value = null);
  }, a = (i) => {
    !n.value || !i || (n.value.observe(i), o.value = i, e());
  };
  kt(() => {
    n.value = new ResizeObserver(e), a(t.value);
  }), Bt(() => t.value, (i) => {
    s(), a(i);
  }), jt(() => {
    var i;
    s(), (i = n.value) == null || i.disconnect();
  });
}
const Ko = () => {
  const t = b(), e = b(), n = b();
  return Sn(t, () => {
    t.value && (e.value = t.value.clientWidth, n.value = t.value.clientHeight);
  }), { elementRef: t, width: e, height: n };
}, qo = (t = !1) => {
  const e = b(t);
  return { show: () => {
    e.value = !0;
  }, close: () => {
    e.value = !1;
  }, visible: e };
}, Pn = ["top", "right", "bottom", "left"], $e = ["start", "end"], Ve = /* @__PURE__ */ Pn.reduce((t, e) => t.concat(e, e + "-" + $e[0], e + "-" + $e[1]), []), Nt = Math.min, xt = Math.max, En = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, An = {
  start: "end",
  end: "start"
};
function ue(t, e, n) {
  return xt(t, Nt(e, n));
}
function St(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function it(t) {
  return t.split("-")[0];
}
function _(t) {
  return t.split("-")[1];
}
function Ze(t) {
  return t === "x" ? "y" : "x";
}
function he(t) {
  return t === "y" ? "height" : "width";
}
function Tt(t) {
  return ["top", "bottom"].includes(it(t)) ? "y" : "x";
}
function ge(t) {
  return Ze(Tt(t));
}
function _e(t, e, n) {
  n === void 0 && (n = !1);
  const o = _(t), s = ge(t), a = he(s);
  let i = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (i = ne(i)), [i, ne(i)];
}
function Cn(t) {
  const e = ne(t);
  return [ee(t), e, ee(e)];
}
function ee(t) {
  return t.replace(/start|end/g, (e) => An[e]);
}
function Bn(t, e, n) {
  const o = ["left", "right"], s = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? s : o : e ? o : s;
    case "left":
    case "right":
      return e ? a : i;
    default:
      return [];
  }
}
function On(t, e, n, o) {
  const s = _(t);
  let a = Bn(it(t), n === "start", o);
  return s && (a = a.map((i) => i + "-" + s), e && (a = a.concat(a.map(ee)))), a;
}
function ne(t) {
  return t.replace(/left|right|bottom|top/g, (e) => En[e]);
}
function kn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function tn(t) {
  return typeof t != "number" ? kn(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function $t(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: s
  } = t;
  return {
    width: o,
    height: s,
    top: n,
    left: e,
    right: e + o,
    bottom: n + s,
    x: e,
    y: n
  };
}
function ze(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const a = Tt(e), i = ge(e), c = he(i), r = it(e), l = a === "y", m = o.x + o.width / 2 - s.width / 2, p = o.y + o.height / 2 - s.height / 2, h = o[c] / 2 - s[c] / 2;
  let v;
  switch (r) {
    case "top":
      v = {
        x: m,
        y: o.y - s.height
      };
      break;
    case "bottom":
      v = {
        x: m,
        y: o.y + o.height
      };
      break;
    case "right":
      v = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: o.x - s.width,
        y: p
      };
      break;
    default:
      v = {
        x: o.x,
        y: o.y
      };
  }
  switch (_(e)) {
    case "start":
      v[i] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      v[i] += h * (n && l ? -1 : 1);
      break;
  }
  return v;
}
const Mn = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: a = [],
    platform: i
  } = n, c = a.filter(Boolean), r = await (i.isRTL == null ? void 0 : i.isRTL(e));
  let l = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: m,
    y: p
  } = ze(l, o, r), h = o, v = {}, g = 0;
  for (let x = 0; x < c.length; x++) {
    const {
      name: S,
      fn: D
    } = c[x], {
      x: T,
      y: P,
      data: L,
      reset: k
    } = await D({
      x: m,
      y: p,
      initialPlacement: o,
      placement: h,
      strategy: s,
      middlewareData: v,
      rects: l,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    m = T ?? m, p = P ?? p, v = {
      ...v,
      [S]: {
        ...v[S],
        ...L
      }
    }, k && g <= 50 && (g++, typeof k == "object" && (k.placement && (h = k.placement), k.rects && (l = k.rects === !0 ? await i.getElementRects({
      reference: t,
      floating: e,
      strategy: s
    }) : k.rects), {
      x: m,
      y: p
    } = ze(l, h, r)), x = -1);
  }
  return {
    x: m,
    y: p,
    placement: h,
    strategy: s,
    middlewareData: v
  };
};
async function se(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: s,
    platform: a,
    rects: i,
    elements: c,
    strategy: r
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: v = 0
  } = St(e, t), g = tn(v), S = c[h ? p === "floating" ? "reference" : "floating" : p], D = $t(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(S))) == null || n ? S : S.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: m,
    strategy: r
  })), T = p === "floating" ? {
    x: o,
    y: s,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), L = await (a.isElement == null ? void 0 : a.isElement(P)) ? await (a.getScale == null ? void 0 : a.getScale(P)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = $t(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: T,
    offsetParent: P,
    strategy: r
  }) : T);
  return {
    top: (D.top - k.top + g.top) / L.y,
    bottom: (k.bottom - D.bottom + g.bottom) / L.y,
    left: (D.left - k.left + g.left) / L.x,
    right: (k.right - D.right + g.right) / L.x
  };
}
const Qo = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: s,
      rects: a,
      platform: i,
      elements: c,
      middlewareData: r
    } = e, {
      element: l,
      padding: m = 0
    } = St(t, e) || {};
    if (l == null)
      return {};
    const p = tn(m), h = {
      x: n,
      y: o
    }, v = ge(s), g = he(v), x = await i.getDimensions(l), S = v === "y", D = S ? "top" : "left", T = S ? "bottom" : "right", P = S ? "clientHeight" : "clientWidth", L = a.reference[g] + a.reference[v] - h[v] - a.floating[g], k = h[v] - a.reference[v], W = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let A = W ? W[P] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(W))) && (A = c.floating[P] || a.floating[g]);
    const R = L / 2 - k / 2, $ = A / 2 - x[g] / 2 - 1, d = Nt(p[D], $), w = Nt(p[T], $), y = d, E = A - x[g] - w, C = A / 2 - x[g] / 2 + R, X = ue(y, C, E), V = !r.arrow && _(s) != null && C !== X && a.reference[g] / 2 - (C < y ? d : w) - x[g] / 2 < 0, G = V ? C < y ? C - y : C - E : 0;
    return {
      [v]: h[v] + G,
      data: {
        [v]: X,
        centerOffset: C - X - G,
        ...V && {
          alignmentOffset: G
        }
      },
      reset: V
    };
  }
});
function Ln(t, e, n) {
  return (t ? [...n.filter((s) => _(s) === t), ...n.filter((s) => _(s) !== t)] : n.filter((s) => it(s) === s)).filter((s) => t ? _(s) === t || (e ? ee(s) !== s : !1) : !0);
}
const Jo = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, s;
      const {
        rects: a,
        middlewareData: i,
        placement: c,
        platform: r,
        elements: l
      } = e, {
        crossAxis: m = !1,
        alignment: p,
        allowedPlacements: h = Ve,
        autoAlignment: v = !0,
        ...g
      } = St(t, e), x = p !== void 0 || h === Ve ? Ln(p || null, v, h) : h, S = await se(e, g), D = ((n = i.autoPlacement) == null ? void 0 : n.index) || 0, T = x[D];
      if (T == null)
        return {};
      const P = _e(T, a, await (r.isRTL == null ? void 0 : r.isRTL(l.floating)));
      if (c !== T)
        return {
          reset: {
            placement: x[0]
          }
        };
      const L = [S[it(T)], S[P[0]], S[P[1]]], k = [...((o = i.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: T,
        overflows: L
      }], W = x[D + 1];
      if (W)
        return {
          data: {
            index: D + 1,
            overflows: k
          },
          reset: {
            placement: W
          }
        };
      const A = k.map((d) => {
        const w = _(d.placement);
        return [d.placement, w && m ? (
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce((y, E) => y + E, 0)
        ) : (
          // Check only the mainAxis.
          d.overflows[0]
        ), d.overflows];
      }).sort((d, w) => d[1] - w[1]), $ = ((s = A.filter((d) => d[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        _(d[0]) ? 2 : 3
      ).every((w) => w <= 0))[0]) == null ? void 0 : s[0]) || A[0][0];
      return $ !== c ? {
        data: {
          index: D + 1,
          overflows: k
        },
        reset: {
          placement: $
        }
      } : {};
    }
  };
}, Rn = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: s,
        middlewareData: a,
        rects: i,
        initialPlacement: c,
        platform: r,
        elements: l
      } = e, {
        mainAxis: m = !0,
        crossAxis: p = !0,
        fallbackPlacements: h,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: x = !0,
        ...S
      } = St(t, e);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const D = it(s), T = Tt(c), P = it(c) === c, L = await (r.isRTL == null ? void 0 : r.isRTL(l.floating)), k = h || (P || !x ? [ne(c)] : Cn(c)), W = g !== "none";
      !h && W && k.push(...On(c, x, g, L));
      const A = [c, ...k], R = await se(e, S), $ = [];
      let d = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (m && $.push(R[D]), p) {
        const C = _e(s, i, L);
        $.push(R[C[0]], R[C[1]]);
      }
      if (d = [...d, {
        placement: s,
        overflows: $
      }], !$.every((C) => C <= 0)) {
        var w, y;
        const C = (((w = a.flip) == null ? void 0 : w.index) || 0) + 1, X = A[C];
        if (X)
          return {
            data: {
              index: C,
              overflows: d
            },
            reset: {
              placement: X
            }
          };
        let V = (y = d.filter((G) => G.overflows[0] <= 0).sort((G, q) => G.overflows[1] - q.overflows[1])[0]) == null ? void 0 : y.placement;
        if (!V)
          switch (v) {
            case "bestFit": {
              var E;
              const G = (E = d.filter((q) => {
                if (W) {
                  const K = Tt(q.placement);
                  return K === T || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((K) => K > 0).reduce((K, ut) => K + ut, 0)]).sort((q, K) => q[1] - K[1])[0]) == null ? void 0 : E[0];
              G && (V = G);
              break;
            }
            case "initialPlacement":
              V = c;
              break;
          }
        if (s !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
async function Hn(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, a = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), i = it(n), c = _(n), r = Tt(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, m = a && r ? -1 : 1, p = St(e, t);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: g
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return c && typeof g == "number" && (v = c === "end" ? g * -1 : g), r ? {
    x: v * m,
    y: h * l
  } : {
    x: h * l,
    y: v * m
  };
}
const Zo = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: s,
        y: a,
        placement: i,
        middlewareData: c
      } = e, r = await Hn(e, t);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: s + r.x,
        y: a + r.y,
        data: {
          ...r,
          placement: i
        }
      };
    }
  };
}, In = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: s
      } = e, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (S) => {
            let {
              x: D,
              y: T
            } = S;
            return {
              x: D,
              y: T
            };
          }
        },
        ...r
      } = St(t, e), l = {
        x: n,
        y: o
      }, m = await se(e, r), p = Tt(it(s)), h = Ze(p);
      let v = l[h], g = l[p];
      if (a) {
        const S = h === "y" ? "top" : "left", D = h === "y" ? "bottom" : "right", T = v + m[S], P = v - m[D];
        v = ue(T, v, P);
      }
      if (i) {
        const S = p === "y" ? "top" : "left", D = p === "y" ? "bottom" : "right", T = g + m[S], P = g - m[D];
        g = ue(T, g, P);
      }
      const x = c.fn({
        ...e,
        [h]: v,
        [p]: g
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - o,
          enabled: {
            [h]: a,
            [p]: i
          }
        }
      };
    }
  };
}, _o = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: s,
        rects: a,
        platform: i,
        elements: c
      } = e, {
        apply: r = () => {
        },
        ...l
      } = St(t, e), m = await se(e, l), p = it(s), h = _(s), v = Tt(s) === "y", {
        width: g,
        height: x
      } = a.floating;
      let S, D;
      p === "top" || p === "bottom" ? (S = p, D = h === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (D = p, S = h === "end" ? "top" : "bottom");
      const T = x - m.top - m.bottom, P = g - m.left - m.right, L = Nt(x - m[S], T), k = Nt(g - m[D], P), W = !e.middlewareData.shift;
      let A = L, R = k;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (R = P), (o = e.middlewareData.shift) != null && o.enabled.y && (A = T), W && !h) {
        const d = xt(m.left, 0), w = xt(m.right, 0), y = xt(m.top, 0), E = xt(m.bottom, 0);
        v ? R = g - 2 * (d !== 0 || w !== 0 ? d + w : xt(m.left, m.right)) : A = x - 2 * (y !== 0 || E !== 0 ? y + E : xt(m.top, m.bottom));
      }
      await r({
        ...e,
        availableWidth: R,
        availableHeight: A
      });
      const $ = await i.getDimensions(c.floating);
      return g !== $.width || x !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Z(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function nt(t) {
  return Z(t).getComputedStyle(t);
}
const Ne = Math.min, Vt = Math.max, oe = Math.round;
function en(t) {
  const e = nt(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, a = t.offsetHeight, i = oe(n) !== s || oe(o) !== a;
  return i && (n = s, o = a), { width: n, height: o, fallback: i };
}
function wt(t) {
  return on(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Jt;
function nn() {
  if (Jt) return Jt;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Jt = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Jt) : navigator.userAgent;
}
function ot(t) {
  return t instanceof Z(t).HTMLElement;
}
function tt(t) {
  return t instanceof Z(t).Element;
}
function on(t) {
  return t instanceof Z(t).Node;
}
function We(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof Z(t).ShadowRoot || t instanceof ShadowRoot;
}
function ie(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: s } = nt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function Fn(t) {
  return ["table", "td", "th"].includes(wt(t));
}
function de(t) {
  const e = /firefox/i.test(nn()), n = nt(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const a = n.contain;
    return a != null && a.includes(s);
  });
}
function sn() {
  return !/^((?!chrome|android).)*safari/i.test(nn());
}
function ye(t) {
  return ["html", "body", "#document"].includes(wt(t));
}
function an(t) {
  return tt(t) ? t : t.contextElement;
}
const rn = { x: 1, y: 1 };
function Ot(t) {
  const e = an(t);
  if (!ot(e)) return rn;
  const n = e.getBoundingClientRect(), { width: o, height: s, fallback: a } = en(e);
  let i = (a ? oe(n.width) : n.width) / o, c = (a ? oe(n.height) : n.height) / s;
  return i && Number.isFinite(i) || (i = 1), c && Number.isFinite(c) || (c = 1), { x: i, y: c };
}
function Dt(t, e, n, o) {
  var s, a;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), c = an(t);
  let r = rn;
  e && (o ? tt(o) && (r = Ot(o)) : r = Ot(t));
  const l = c ? Z(c) : window, m = !sn() && n;
  let p = (i.left + (m && ((s = l.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / r.x, h = (i.top + (m && ((a = l.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / r.y, v = i.width / r.x, g = i.height / r.y;
  if (c) {
    const x = Z(c), S = o && tt(o) ? Z(o) : o;
    let D = x.frameElement;
    for (; D && o && S !== x; ) {
      const T = Ot(D), P = D.getBoundingClientRect(), L = getComputedStyle(D);
      P.x += (D.clientLeft + parseFloat(L.paddingLeft)) * T.x, P.y += (D.clientTop + parseFloat(L.paddingTop)) * T.y, p *= T.x, h *= T.y, v *= T.x, g *= T.y, p += P.x, h += P.y, D = Z(D).frameElement;
    }
  }
  return { width: v, height: g, top: h, right: p + v, bottom: h + g, left: p, x: p, y: h };
}
function yt(t) {
  return ((on(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ae(t) {
  return tt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function ln(t) {
  return Dt(yt(t)).left + ae(t).scrollLeft;
}
function Wt(t) {
  if (wt(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || We(t) && t.host || yt(t);
  return We(e) ? e.host : e;
}
function cn(t) {
  const e = Wt(t);
  return ye(e) ? e.ownerDocument.body : ot(e) && ie(e) ? e : cn(e);
}
function zt(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = cn(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), a = Z(o);
  return s ? e.concat(a, a.visualViewport || [], ie(o) ? o : []) : e.concat(o, zt(o));
}
function je(t, e, n) {
  return e === "viewport" ? $t(function(o, s) {
    const a = Z(o), i = yt(o), c = a.visualViewport;
    let r = i.clientWidth, l = i.clientHeight, m = 0, p = 0;
    if (c) {
      r = c.width, l = c.height;
      const h = sn();
      (h || !h && s === "fixed") && (m = c.offsetLeft, p = c.offsetTop);
    }
    return { width: r, height: l, x: m, y: p };
  }(t, n)) : tt(e) ? $t(function(o, s) {
    const a = Dt(o, !0, s === "fixed"), i = a.top + o.clientTop, c = a.left + o.clientLeft, r = ot(o) ? Ot(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * r.x, height: o.clientHeight * r.y, x: c * r.x, y: i * r.y };
  }(e, n)) : $t(function(o) {
    const s = yt(o), a = ae(o), i = o.ownerDocument.body, c = Vt(s.scrollWidth, s.clientWidth, i.scrollWidth, i.clientWidth), r = Vt(s.scrollHeight, s.clientHeight, i.scrollHeight, i.clientHeight);
    let l = -a.scrollLeft + ln(o);
    const m = -a.scrollTop;
    return nt(i).direction === "rtl" && (l += Vt(s.clientWidth, i.clientWidth) - c), { width: c, height: r, x: l, y: m };
  }(yt(t)));
}
function Ye(t) {
  return ot(t) && nt(t).position !== "fixed" ? t.offsetParent : null;
}
function Ge(t) {
  const e = Z(t);
  let n = Ye(t);
  for (; n && Fn(n) && nt(n).position === "static"; ) n = Ye(n);
  return n && (wt(n) === "html" || wt(n) === "body" && nt(n).position === "static" && !de(n)) ? e : n || function(o) {
    let s = Wt(o);
    for (; ot(s) && !ye(s); ) {
      if (de(s)) return s;
      s = Wt(s);
    }
    return null;
  }(t) || e;
}
function $n(t, e, n) {
  const o = ot(e), s = yt(e), a = Dt(t, !0, n === "fixed", e);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (o || !o && n !== "fixed") if ((wt(e) !== "body" || ie(s)) && (i = ae(e)), ot(e)) {
    const r = Dt(e, !0);
    c.x = r.x + e.clientLeft, c.y = r.y + e.clientTop;
  } else s && (c.x = ln(s));
  return { x: a.left + i.scrollLeft - c.x, y: a.top + i.scrollTop - c.y, width: a.width, height: a.height };
}
const Vn = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: s } = t;
  const a = n === "clippingAncestors" ? function(l, m) {
    const p = m.get(l);
    if (p) return p;
    let h = zt(l).filter((S) => tt(S) && wt(S) !== "body"), v = null;
    const g = nt(l).position === "fixed";
    let x = g ? Wt(l) : l;
    for (; tt(x) && !ye(x); ) {
      const S = nt(x), D = de(x);
      (g ? D || v : D || S.position !== "static" || !v || !["absolute", "fixed"].includes(v.position)) ? v = S : h = h.filter((T) => T !== x), x = Wt(x);
    }
    return m.set(l, h), h;
  }(e, this._c) : [].concat(n), i = [...a, o], c = i[0], r = i.reduce((l, m) => {
    const p = je(e, m, s);
    return l.top = Vt(p.top, l.top), l.right = Ne(p.right, l.right), l.bottom = Ne(p.bottom, l.bottom), l.left = Vt(p.left, l.left), l;
  }, je(e, c, s));
  return { width: r.right - r.left, height: r.bottom - r.top, x: r.left, y: r.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: o } = t;
  const s = ot(n), a = yt(n);
  if (n === a) return e;
  let i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const r = { x: 0, y: 0 };
  if ((s || !s && o !== "fixed") && ((wt(n) !== "body" || ie(a)) && (i = ae(n)), ot(n))) {
    const l = Dt(n);
    c = Ot(n), r.x = l.x + n.clientLeft, r.y = l.y + n.clientTop;
  }
  return { width: e.width * c.x, height: e.height * c.y, x: e.x * c.x - i.scrollLeft * c.x + r.x, y: e.y * c.y - i.scrollTop * c.y + r.y };
}, isElement: tt, getDimensions: function(t) {
  return ot(t) ? en(t) : t.getBoundingClientRect();
}, getOffsetParent: Ge, getDocumentElement: yt, getScale: Ot, async getElementRects(t) {
  let { reference: e, floating: n, strategy: o } = t;
  const s = this.getOffsetParent || Ge, a = this.getDimensions;
  return { reference: $n(e, await s(n), o), floating: { x: 0, y: 0, ...await a(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => nt(t).direction === "rtl" };
function ts(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: s = !0, ancestorResize: a = !0, elementResize: i = !0, animationFrame: c = !1 } = o, r = s && !c, l = r || a ? [...tt(t) ? zt(t) : t.contextElement ? zt(t.contextElement) : [], ...zt(e)] : [];
  l.forEach((v) => {
    r && v.addEventListener("scroll", n, { passive: !0 }), a && v.addEventListener("resize", n);
  });
  let m, p = null;
  if (i) {
    let v = !0;
    p = new ResizeObserver(() => {
      v || n(), v = !1;
    }), tt(t) && !c && p.observe(t), tt(t) || !t.contextElement || c || p.observe(t.contextElement), p.observe(e);
  }
  let h = c ? Dt(t) : null;
  return c && function v() {
    const g = Dt(t);
    !h || g.x === h.x && g.y === h.y && g.width === h.width && g.height === h.height || n(), h = g, m = requestAnimationFrame(v);
  }(), n(), () => {
    var v;
    l.forEach((g) => {
      r && g.removeEventListener("scroll", n), a && g.removeEventListener("resize", n);
    }), (v = p) == null || v.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const zn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = { platform: Vn, ...n }, a = { ...s.platform, _c: o };
  return Mn(t, e, { ...s, platform: a });
};
function Nn() {
  return typeof window < "u";
}
function Wn(t) {
  return un(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function jn(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function un(t) {
  return Nn() ? t instanceof Node || t instanceof jn(t).Node : !1;
}
function Yn(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function Ue(t) {
  if (Yn(t)) {
    const e = t.$el;
    return un(e) && Wn(e) === "#comment" ? null : e;
  }
  return t;
}
function Ft(t) {
  return typeof t == "function" ? t() : N(t);
}
function dn(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xe(t, e) {
  const n = dn(t);
  return Math.round(e * n) / n;
}
function Gn(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, s = O(() => {
    var A;
    return (A = Ft(n.open)) != null ? A : !0;
  }), a = O(() => Ft(n.middleware)), i = O(() => {
    var A;
    return (A = Ft(n.placement)) != null ? A : "bottom";
  }), c = O(() => {
    var A;
    return (A = Ft(n.strategy)) != null ? A : "absolute";
  }), r = O(() => {
    var A;
    return (A = Ft(n.transform)) != null ? A : !0;
  }), l = O(() => Ue(t.value)), m = O(() => Ue(e.value)), p = b(0), h = b(0), v = b(c.value), g = b(i.value), x = wn({}), S = b(!1), D = O(() => {
    const A = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!m.value)
      return A;
    const R = Xe(m.value, p.value), $ = Xe(m.value, h.value);
    return r.value ? {
      ...A,
      transform: "translate(" + R + "px, " + $ + "px)",
      ...dn(m.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: R + "px",
      top: $ + "px"
    };
  });
  let T;
  function P() {
    if (l.value == null || m.value == null)
      return;
    const A = s.value;
    zn(l.value, m.value, {
      middleware: a.value,
      placement: i.value,
      strategy: c.value
    }).then((R) => {
      p.value = R.x, h.value = R.y, v.value = R.strategy, g.value = R.placement, x.value = R.middlewareData, S.value = A !== !1;
    });
  }
  function L() {
    typeof T == "function" && (T(), T = void 0);
  }
  function k() {
    if (L(), o === void 0) {
      P();
      return;
    }
    if (l.value != null && m.value != null) {
      T = o(l.value, m.value, P);
      return;
    }
  }
  function W() {
    s.value || (S.value = !1);
  }
  return Bt([a, i, c, s], P, {
    flush: "sync"
  }), Bt([l, m], k, {
    flush: "sync"
  }), Bt(s, W, {
    flush: "sync"
  }), bn() && xn(L), {
    x: Pt(p),
    y: Pt(h),
    strategy: Pt(v),
    placement: Pt(g),
    middlewareData: Pt(x),
    isPositioned: Pt(S),
    floatingStyles: D,
    update: P
  };
}
const Un = (t, e) => {
  for (; t; ) {
    if (t === e) return !0;
    t = t.parentNode;
  }
  return !1;
}, es = () => {
  const t = b(!1), e = b({ x: 0, y: 0 }), n = b(null), o = b(null), s = b(null), a = b([Rn(), In()]), { floatingStyles: i, update: c } = Gn(o, s, {
    placement: "right-start",
    strategy: "fixed",
    middleware: a
  }), r = (p) => {
    p.preventDefault(), e.value = { x: p.clientX, y: p.clientY }, t.value = !0, c();
  }, l = () => {
    t.value = !1;
  }, m = (p) => {
    n.value && !Un(p.target, n.value) && (t.value = !1);
  };
  return kt(() => {
    n.value && (n.value.addEventListener("contextmenu", r), document.addEventListener("click", l), document.addEventListener("contextmenu", m));
  }), jt(() => {
    n.value && (n.value.removeEventListener("contextmenu", r), document.removeEventListener("click", l), document.addEventListener("contextmenu", m));
  }), { contextMenuData: { floatingStyles: i, floatingRef: s, position: e, positionRef: o, isContextMenuVisible: t }, targetRef: n };
}, fn = Symbol("skeleton-context");
function ns(t) {
  const e = O(() => !!qe(t));
  return Tn(fn, {
    loading: e
  }), e;
}
function os(t, e = !0) {
  const n = Qe(fn, null);
  return O(() => (t === void 0 ? void 0 : qe(t)) ?? (n == null ? void 0 : n.loading.value) ?? e);
}
const lt = ["xs", "s", "m", "l", "xl", "xxl"], Xn = {
  xs: 0,
  s: 576,
  m: 768,
  l: 1024,
  xl: 1280,
  xxl: 1600
}, ss = {
  xs: 4,
  s: 8,
  m: 12,
  l: 12,
  xl: 12,
  xxl: 12
};
function mn(t) {
  let e = "xs";
  for (const n of lt)
    t >= Xn[n] && (e = n);
  return e;
}
function we(t) {
  return {
    get breakpoint() {
      return t();
    },
    get isXS() {
      return t() === "xs";
    },
    get isS() {
      return t() === "s";
    },
    get isM() {
      return t() === "m";
    },
    get isL() {
      return t() === "l";
    },
    get isXL() {
      return t() === "xl";
    },
    get isXXL() {
      return t() === "xxl";
    },
    get isMobile() {
      const e = t();
      return e === "xs" || e === "s";
    },
    get isGtXS() {
      return lt.indexOf(t()) > lt.indexOf("xs");
    },
    get isGtS() {
      return lt.indexOf(t()) > lt.indexOf("s");
    },
    get isGtM() {
      return lt.indexOf(t()) > lt.indexOf("m");
    },
    get isGtL() {
      return lt.indexOf(t()) > lt.indexOf("l");
    }
  };
}
function is() {
  const t = () => typeof window > "u" ? "xs" : mn(window.innerWidth), e = b(t()), n = we(() => e.value), o = () => {
    e.value = t();
  };
  return kt(() => {
    o(), window.addEventListener("resize", o);
  }), jt(() => {
    typeof window < "u" && window.removeEventListener("resize", o);
  }), Je(n);
}
function as(t) {
  const e = b("xs"), n = we(() => e.value), o = b(null), s = b(null), a = (r) => {
    e.value = mn(r.clientWidth);
  }, i = () => {
    o.value && s.value && o.value.unobserve(s.value), s.value = null;
  }, c = (r) => {
    !o.value || !r || (o.value.observe(r), s.value = r, a(r));
  };
  return kt(() => {
    if (typeof ResizeObserver > "u") {
      t.value && a(t.value);
      return;
    }
    o.value = new ResizeObserver((r) => {
      const l = r[0];
      (l == null ? void 0 : l.target) instanceof HTMLElement && a(l.target);
    }), c(t.value);
  }), Bt(() => t.value, (r) => {
    i(), c(r);
  }), jt(() => {
    var r;
    i(), (r = o.value) == null || r.disconnect();
  }), Je(n);
}
const Kn = Symbol("GridContext");
function rs() {
  const t = Qe(Kn, null);
  return we(() => (t == null ? void 0 : t.breakpoint.value) ?? "xs");
}
let fe = 1;
var qn = class {
  constructor() {
    j(this, "subscribers");
    j(this, "toasts");
    j(this, "dismissedToasts");
    j(this, "subscribe", (t) => (this.subscribers.push(t), () => {
      const e = this.subscribers.indexOf(t);
      this.subscribers.splice(e, 1);
    }));
    j(this, "publish", (t) => {
      this.subscribers.forEach((e) => e(t));
    });
    j(this, "addToast", (t) => {
      this.publish(t), this.toasts = [...this.toasts, t];
    });
    j(this, "create", (t) => {
      var i;
      const { message: e, ...n } = t, o = typeof t.id == "number" || t.id && ((i = t.id) == null ? void 0 : i.length) > 0 ? t.id : fe++, s = this.toasts.find((c) => c.id === o), a = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), s ? this.toasts = this.toasts.map((c) => c.id === o ? (this.publish({
        ...c,
        ...t,
        id: o,
        title: e
      }), {
        ...c,
        ...t,
        id: o,
        dismissible: a,
        title: e
      }) : c) : this.addToast({
        title: e,
        ...n,
        dismissible: a,
        id: o
      }), o;
    });
    j(this, "dismiss", (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((e) => e({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((e) => {
      this.subscribers.forEach((n) => n({
        id: e.id,
        dismiss: !0
      }));
    }), t));
    j(this, "message", (t, e) => this.create({
      ...e,
      message: t,
      type: "default"
    }));
    j(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    j(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    j(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    j(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    j(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    j(this, "promise", (t, e) => {
      if (!e) return;
      let n;
      e.loading !== void 0 && (n = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: e.loading,
        description: typeof e.description != "function" ? e.description : void 0
      }));
      const o = Promise.resolve(t instanceof Function ? t() : t);
      let s = n !== void 0, a;
      const i = o.then(async (r) => {
        if (a = ["resolve", r], Ht(r))
          s = !1, this.create({
            id: n,
            type: "default",
            message: r
          });
        else if (Jn(r) && !r.ok) {
          s = !1;
          const m = typeof e.error == "function" ? await e.error(`HTTP error! status: ${r.status}`) : e.error, p = typeof e.description == "function" ? await e.description(`HTTP error! status: ${r.status}`) : e.description, v = typeof m == "object" && !Ht(m) ? m : {
            message: m || "",
            id: n || ""
          };
          this.create({
            id: n,
            type: "error",
            description: p,
            ...v
          });
        } else if (r instanceof Error) {
          s = !1;
          const m = typeof e.error == "function" ? await e.error(r) : e.error, p = typeof e.description == "function" ? await e.description(r) : e.description, v = typeof m == "object" && !Ht(m) ? m : {
            message: m || "",
            id: n || ""
          };
          this.create({
            id: n,
            type: "error",
            description: p,
            ...v
          });
        } else if (e.success !== void 0) {
          s = !1;
          const m = typeof e.success == "function" ? await e.success(r) : e.success, p = typeof e.description == "function" ? await e.description(r) : e.description, v = typeof m == "object" && !Ht(m) ? m : {
            message: m || "",
            id: n || ""
          };
          this.create({
            id: n,
            type: "success",
            description: p,
            ...v
          });
        }
      }).catch(async (r) => {
        if (a = ["reject", r], e.error !== void 0) {
          s = !1;
          const l = typeof e.error == "function" ? await e.error(r) : e.error, m = typeof e.description == "function" ? await e.description(r) : e.description, h = typeof l == "object" && !Ht(l) ? l : {
            message: l || "",
            id: n || ""
          };
          this.create({
            id: n,
            type: "error",
            description: m,
            ...h
          });
        }
      }).finally(() => {
        var r;
        s && (this.dismiss(n), n = void 0), (r = e.finally) == null || r.call(e);
      }), c = () => new Promise((r, l) => i.then(() => a[0] === "reject" ? l(a[1]) : r(a[1])).catch(l));
      return typeof n != "string" && typeof n != "number" ? { unwrap: c } : Object.assign(n, { unwrap: c });
    });
    j(this, "custom", (t, e) => {
      const n = (e == null ? void 0 : e.id) || fe++, o = this.toasts.find((a) => a.id === n), s = (e == null ? void 0 : e.dismissible) === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(n) && this.dismissedToasts.delete(n), o ? this.toasts = this.toasts.map((a) => a.id === n ? (this.publish({
        ...a,
        component: t,
        dismissible: s,
        id: n,
        ...e
      }), {
        ...a,
        component: t,
        dismissible: s,
        id: n,
        ...e
      }) : a) : this.addToast({
        component: t,
        dismissible: s,
        id: n,
        ...e
      }), n;
    });
    j(this, "getActiveToasts", () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
};
const U = new qn();
function Qn(t, e) {
  const n = (e == null ? void 0 : e.id) || fe++;
  return U.create({
    message: t,
    id: n,
    type: "default",
    ...e
  }), n;
}
const Jn = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", Zn = Qn, _n = () => U.toasts, to = () => U.getActiveToasts(), ls = Object.assign(Zn, {
  success: U.success,
  info: U.info,
  warning: U.warning,
  error: U.error,
  custom: U.custom,
  message: U.message,
  promise: U.promise,
  dismiss: U.dismiss,
  loading: U.loading
}, {
  getHistory: _n,
  getToasts: to
});
function Zt(t) {
  return t.label !== void 0;
}
const eo = 3, pn = "24px", vn = "16px", Ke = 4e3, no = 356, oo = 14, so = 45, hn = 200;
function io() {
  const t = b(!1);
  return et(() => {
    const e = () => {
      t.value = document.hidden;
    };
    return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e);
  }), { isDocumentHidden: t };
}
function ht(...t) {
  return t.filter(Boolean).join(" ");
}
function ao(t) {
  const [e, n] = t.split("-"), o = [];
  return e && o.push(e), n && o.push(n), o;
}
function ro(t, e) {
  const n = {};
  return [t, e].forEach((o, s) => {
    const a = s === 1, i = a ? "--mobile-offset" : "--offset", c = a ? vn : pn;
    function r(l) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((m) => {
        n[`${i}-${m}`] = typeof l == "number" ? `${l}px` : l;
      });
    }
    typeof o == "number" || typeof o == "string" ? r(o) : typeof o == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((l) => {
      o[l] === void 0 ? n[`${i}-${l}`] = c : n[`${i}-${l}`] = typeof o[l] == "number" ? `${o[l]}px` : o[l];
    }) : r(c);
  }), n;
}
function cs() {
  const t = b([]);
  return et((e) => {
    const n = U.subscribe((o) => {
      if ("dismiss" in o && o.dismiss) {
        t.value = t.value.filter((s) => s.id !== o.id);
        return;
      }
      pe(() => {
        const s = t.value.findIndex((a) => a.id === o.id);
        if (s !== -1) {
          const a = [...t.value];
          a[s] = {
            ...a[s],
            ...o
          }, t.value = a;
        } else t.value = [o, ...t.value];
      });
    });
    e(() => {
      n();
    });
  }), { activeToasts: t };
}
const lo = [
  "data-rich-colors",
  "data-styled",
  "data-mounted",
  "data-promise",
  "data-swiped",
  "data-removed",
  "data-visible",
  "data-y-position",
  "data-x-position",
  "data-index",
  "data-front",
  "data-swiping",
  "data-dismissible",
  "data-type",
  "data-invert",
  "data-swipe-out",
  "data-swipe-direction",
  "data-expanded",
  "data-testid"
], co = [
  "aria-label",
  "data-disabled",
  "data-close-button-position"
];
var uo = /* @__PURE__ */ ve({
  __name: "Toast",
  props: {
    toast: {},
    toasts: {},
    index: {},
    swipeDirections: {},
    expanded: { type: Boolean },
    invert: { type: Boolean },
    heights: {},
    gap: {},
    position: {},
    closeButtonPosition: {},
    visibleToasts: {},
    expandByDefault: { type: Boolean },
    closeButton: { type: Boolean },
    interacting: { type: Boolean },
    style: {},
    cancelButtonStyle: {},
    actionButtonStyle: {},
    duration: {},
    class: {},
    unstyled: { type: Boolean },
    descriptionClass: {},
    loadingIcon: {},
    classes: {},
    icons: {},
    closeButtonAriaLabel: {},
    defaultRichColors: { type: Boolean }
  },
  emits: [
    "update:heights",
    "update:height",
    "removeToast"
  ],
  setup(t, { emit: e }) {
    const n = t, o = e, s = b(null), a = b(null), i = b(!1), c = b(!1), r = b(!1), l = b(!1), m = b(!1), p = b(0), h = b(0), v = b(n.toast.duration || n.duration || Ke), g = b(null), x = b(null), S = O(() => n.index === 0), D = O(() => n.index + 1 <= n.visibleToasts), T = O(() => n.toast.type), P = O(() => n.toast.dismissible !== !1), L = O(() => n.toast.class || ""), k = O(() => n.descriptionClass || ""), W = O(() => {
      const u = n.toast.position || n.position, B = n.heights.filter((I) => I.position === u).findIndex((I) => I.toastId === n.toast.id);
      return B >= 0 ? B : 0;
    }), A = O(() => {
      const u = n.toast.position || n.position;
      return n.heights.filter((B) => B.position === u).reduce((B, I, z) => z >= W.value ? B : B + I.height, 0);
    }), R = O(() => W.value * n.gap + A.value || 0), $ = O(() => n.toast.closeButton ?? n.closeButton), d = O(() => n.toast.duration || n.duration || Ke), w = b(0), y = b(0), E = b(null), C = O(() => n.position.split("-")), X = O(() => C.value[0]), V = O(() => C.value[1]), G = O(() => typeof n.toast.title != "string"), q = O(() => typeof n.toast.description != "string"), { isDocumentHidden: K } = io(), ut = O(() => T.value && T.value === "loading");
    kt(() => {
      i.value = !0, v.value = d.value;
    }), et(async () => {
      if (!i.value || !x.value) return;
      await pe();
      const u = x.value, H = u.style.height;
      u.style.height = "auto";
      const B = u.getBoundingClientRect().height;
      u.style.height = H, h.value = B, o("update:height", {
        toastId: n.toast.id,
        height: B,
        position: n.toast.position || n.position
      });
    });
    function at() {
      c.value = !0, p.value = R.value, setTimeout(() => {
        o("removeToast", n.toast);
      }, hn);
    }
    function Mt() {
      var u, H;
      if (ut.value || !P.value) return {};
      at(), (H = (u = n.toast).onDismiss) == null || H.call(u, n.toast);
    }
    function Gt(u) {
      u.button !== 2 && (ut.value || !P.value || (g.value = /* @__PURE__ */ new Date(), p.value = R.value, u.target.setPointerCapture(u.pointerId), u.target.tagName !== "BUTTON" && (r.value = !0, E.value = {
        x: u.clientX,
        y: u.clientY
      })));
    }
    function Ut() {
      var Y, dt, ft, mt, pt, vt, Q;
      if (l.value || !P.value) return;
      E.value = null;
      const u = Number(((Y = x.value) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), H = Number(((dt = x.value) == null ? void 0 : dt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), B = (/* @__PURE__ */ new Date()).getTime() - (((ft = g.value) == null ? void 0 : ft.getTime()) || 0), I = s.value === "x" ? u : H, z = Math.abs(I) / B;
      if (Math.abs(I) >= so || z > 0.11) {
        p.value = R.value, (pt = (mt = n.toast).onDismiss) == null || pt.call(mt, n.toast), s.value === "x" ? a.value = u > 0 ? "right" : "left" : a.value = H > 0 ? "down" : "up", at(), l.value = !0;
        return;
      } else
        (vt = x.value) == null || vt.style.setProperty("--swipe-amount-x", "0px"), (Q = x.value) == null || Q.style.setProperty("--swipe-amount-y", "0px");
      m.value = !1, r.value = !1, s.value = null;
    }
    function Xt(u) {
      var ft, mt, pt, vt;
      if (!E.value || !P.value || (((mt = (ft = window == null ? void 0 : window.getSelection()) == null ? void 0 : ft.toString()) == null ? void 0 : mt.length) ?? !1)) return;
      const B = u.clientY - E.value.y, I = u.clientX - E.value.x, z = n.swipeDirections ?? ao(n.position);
      !s.value && (Math.abs(I) > 1 || Math.abs(B) > 1) && (s.value = Math.abs(I) > Math.abs(B) ? "x" : "y");
      let Y = {
        x: 0,
        y: 0
      };
      const dt = (Q) => 1 / (1.5 + Math.abs(Q) / 20);
      if (s.value === "y") {
        if (z.includes("top") || z.includes("bottom")) if (z.includes("top") && B < 0 || z.includes("bottom") && B > 0) Y.y = B;
        else {
          const Q = B * dt(B);
          Y.y = Math.abs(Q) < Math.abs(B) ? Q : B;
        }
      } else if (s.value === "x" && (z.includes("left") || z.includes("right")))
        if (z.includes("left") && I < 0 || z.includes("right") && I > 0) Y.x = I;
        else {
          const Q = I * dt(I);
          Y.x = Math.abs(Q) < Math.abs(I) ? Q : I;
        }
      (Math.abs(Y.x) > 0 || Math.abs(Y.y) > 0) && (m.value = !0), (pt = x.value) == null || pt.style.setProperty("--swipe-amount-x", `${Y.x}px`), (vt = x.value) == null || vt.style.setProperty("--swipe-amount-y", `${Y.y}px`);
    }
    kt(() => {
      if (i.value = !0, !x.value) return;
      const u = x.value.getBoundingClientRect().height;
      h.value = u;
      const H = [{
        toastId: n.toast.id,
        height: u,
        position: n.toast.position
      }, ...n.heights];
      o("update:heights", H);
    }), jt(() => {
      x.value && o("removeToast", n.toast);
    }), et((u) => {
      if (n.toast.promise && T.value === "loading" || n.toast.duration === 1 / 0 || n.toast.type === "loading") return;
      let H;
      const B = () => {
        if (y.value < w.value) {
          const z = (/* @__PURE__ */ new Date()).getTime() - w.value;
          v.value = v.value - z;
        }
        y.value = (/* @__PURE__ */ new Date()).getTime();
      }, I = () => {
        v.value !== 1 / 0 && (w.value = (/* @__PURE__ */ new Date()).getTime(), H = setTimeout(() => {
          var z, Y;
          (Y = (z = n.toast).onAutoClose) == null || Y.call(z, n.toast), at();
        }, v.value));
      };
      n.expanded || n.interacting || K.value ? B() : I(), u(() => {
        clearTimeout(H);
      });
    }), Bt(() => n.toast.delete, (u) => {
      var H, B;
      u !== void 0 && u && (at(), (B = (H = n.toast).onDismiss) == null || B.call(H, n.toast));
    }, { deep: !0 });
    function Kt() {
      r.value = !1, s.value = null, E.value = null;
    }
    return (u, H) => {
      var B, I, z, Y, dt, ft, mt, pt, vt, Q, re, be, xe, Te, De, Se, Pe, Ee, Ae, Ce, Be, Oe, ke, Me, Le, Re, He;
      return M(), F("li", {
        tabindex: "0",
        ref_key: "toastRef",
        ref: x,
        class: rt(N(ht)(n.class, L.value, (B = u.classes) == null ? void 0 : B.toast, (I = u.toast.classes) == null ? void 0 : I.toast, (z = u.classes) == null ? void 0 : z[T.value], (dt = (Y = u.toast) == null ? void 0 : Y.classes) == null ? void 0 : dt[T.value])),
        "data-sonner-toast": "",
        "data-rich-colors": u.toast.richColors ?? u.defaultRichColors,
        "data-styled": !(u.toast.component || (ft = u.toast) != null && ft.unstyled || u.unstyled),
        "data-mounted": i.value,
        "data-promise": !!u.toast.promise,
        "data-swiped": m.value,
        "data-removed": c.value,
        "data-visible": D.value,
        "data-y-position": X.value,
        "data-x-position": V.value,
        "data-index": u.index,
        "data-front": S.value,
        "data-swiping": r.value,
        "data-dismissible": P.value,
        "data-type": T.value,
        "data-invert": u.toast.invert || u.invert,
        "data-swipe-out": l.value,
        "data-swipe-direction": a.value,
        "data-expanded": !!(u.expanded || u.expandByDefault && i.value),
        "data-testid": u.toast.testId,
        style: te({
          "--index": u.index,
          "--toasts-before": u.index,
          "--z-index": u.toasts.length - u.index,
          "--offset": `${c.value ? p.value : R.value}px`,
          "--initial-height": u.expandByDefault ? "auto" : `${h.value}px`,
          ...u.style,
          ...n.toast.style
        }),
        onDragend: Kt,
        onPointerdown: Gt,
        onPointerup: Ut,
        onPointermove: Xt
      }, [$.value && !u.toast.component && T.value !== "loading" ? (M(), F("button", {
        key: 0,
        "aria-label": u.closeButtonAriaLabel || "Close toast",
        "data-disabled": ut.value,
        "data-close-button": "true",
        "data-close-button-position": u.closeButtonPosition,
        class: rt(N(ht)((mt = u.classes) == null ? void 0 : mt.closeButton, (vt = (pt = u.toast) == null ? void 0 : pt.classes) == null ? void 0 : vt.closeButton)),
        onClick: Mt
      }, [(Q = u.icons) != null && Q.close ? (M(), Ct(It((re = u.icons) == null ? void 0 : re.close), { key: 0 })) : J(u.$slots, "close-icon", { key: 1 })], 10, co)) : bt("v-if", !0), u.toast.component ? (M(), Ct(It(u.toast.component), _t({ key: 1 }, u.toast.componentProps, {
        onCloseToast: Mt,
        isPaused: u.$props.expanded || u.$props.interacting || N(K)
      }), null, 16, ["isPaused"])) : (M(), F(gt, { key: 2 }, [
        T.value !== "default" || u.toast.icon || u.toast.promise ? (M(), F("div", {
          key: 0,
          "data-icon": "",
          class: rt(N(ht)((be = u.classes) == null ? void 0 : be.icon, (Te = (xe = u.toast) == null ? void 0 : xe.classes) == null ? void 0 : Te.icon))
        }, [u.toast.icon ? (M(), Ct(It(u.toast.icon), { key: 0 })) : (M(), F(gt, { key: 1 }, [T.value === "loading" ? J(u.$slots, "loading-icon", { key: 0 }) : T.value === "success" ? J(u.$slots, "success-icon", { key: 1 }) : T.value === "error" ? J(u.$slots, "error-icon", { key: 2 }) : T.value === "warning" ? J(u.$slots, "warning-icon", { key: 3 }) : T.value === "info" ? J(u.$slots, "info-icon", { key: 4 }) : bt("v-if", !0)], 64))], 2)) : bt("v-if", !0),
        st("div", {
          "data-content": "",
          class: rt(N(ht)((De = u.classes) == null ? void 0 : De.content, (Pe = (Se = u.toast) == null ? void 0 : Se.classes) == null ? void 0 : Pe.content))
        }, [st("div", {
          "data-title": "",
          class: rt(N(ht)((Ee = u.classes) == null ? void 0 : Ee.title, (Ae = u.toast.classes) == null ? void 0 : Ae.title))
        }, [G.value ? (M(), Ct(It(u.toast.title), Ie(_t({ key: 0 }, u.toast.componentProps)), null, 16)) : (M(), F(gt, { key: 1 }, [Fe(Qt(u.toast.title), 1)], 64))], 2), u.toast.description ? (M(), F("div", {
          key: 0,
          "data-description": "",
          class: rt(N(ht)(u.descriptionClass, k.value, (Ce = u.classes) == null ? void 0 : Ce.description, (Be = u.toast.classes) == null ? void 0 : Be.description))
        }, [q.value ? (M(), Ct(It(u.toast.description), Ie(_t({ key: 0 }, u.toast.componentProps)), null, 16)) : (M(), F(gt, { key: 1 }, [Fe(Qt(u.toast.description), 1)], 64))], 2)) : bt("v-if", !0)], 2),
        u.toast.cancel ? (M(), F("button", {
          key: 1,
          style: te(u.toast.cancelButtonStyle || u.cancelButtonStyle),
          class: rt(N(ht)((Oe = u.classes) == null ? void 0 : Oe.cancelButton, (ke = u.toast.classes) == null ? void 0 : ke.cancelButton)),
          "data-button": "",
          "data-cancel": "",
          onClick: H[0] || (H[0] = (qt) => {
            var Lt, Rt;
            N(Zt)(u.toast.cancel) && P.value && ((Rt = (Lt = u.toast.cancel).onClick) == null || Rt.call(Lt, qt), at());
          })
        }, Qt(N(Zt)(u.toast.cancel) ? (Me = u.toast.cancel) == null ? void 0 : Me.label : u.toast.cancel), 7)) : bt("v-if", !0),
        u.toast.action ? (M(), F("button", {
          key: 2,
          style: te(u.toast.actionButtonStyle || u.actionButtonStyle),
          class: rt(N(ht)((Le = u.classes) == null ? void 0 : Le.actionButton, (Re = u.toast.classes) == null ? void 0 : Re.actionButton)),
          "data-button": "",
          "data-action": "",
          onClick: H[1] || (H[1] = (qt) => {
            var Lt, Rt;
            N(Zt)(u.toast.action) && ((Rt = (Lt = u.toast.action).onClick) == null || Rt.call(Lt, qt), !qt.defaultPrevented && at());
          })
        }, Qt(N(Zt)(u.toast.action) ? (He = u.toast.action) == null ? void 0 : He.label : u.toast.action), 7)) : bt("v-if", !0)
      ], 64))], 46, lo);
    };
  }
}), fo = uo, Yt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e) n[o] = s;
  return n;
};
const mo = {}, po = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stoke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function vo(t, e) {
  return M(), F("svg", po, e[0] || (e[0] = [st("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }, null, -1), st("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }, null, -1)]));
}
var ho = /* @__PURE__ */ Yt(mo, [["render", vo]]);
const go = ["data-visible"], yo = { class: "sonner-spinner" };
var wo = /* @__PURE__ */ ve({
  __name: "Loader",
  props: { visible: { type: Boolean } },
  setup(t) {
    const e = Array(12).fill(0);
    return (n, o) => (M(), F("div", {
      class: "sonner-loading-wrapper",
      "data-visible": n.visible
    }, [st("div", yo, [(M(!0), F(gt, null, ce(N(e), (s) => (M(), F("div", {
      key: `spinner-bar-${s}`,
      class: "sonner-loading-bar"
    }))), 128))])], 8, go));
  }
}), bo = wo;
const xo = {}, To = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function Do(t, e) {
  return M(), F("svg", To, e[0] || (e[0] = [st("path", {
    "fill-rule": "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var So = /* @__PURE__ */ Yt(xo, [["render", Do]]);
const Po = {}, Eo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function Ao(t, e) {
  return M(), F("svg", Eo, e[0] || (e[0] = [st("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var Co = /* @__PURE__ */ Yt(Po, [["render", Ao]]);
const Bo = {}, Oo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function ko(t, e) {
  return M(), F("svg", Oo, e[0] || (e[0] = [st("path", {
    "fill-rule": "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var Mo = /* @__PURE__ */ Yt(Bo, [["render", ko]]);
const Lo = {}, Ro = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function Ho(t, e) {
  return M(), F("svg", Ro, e[0] || (e[0] = [st("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var Io = /* @__PURE__ */ Yt(Lo, [["render", Ho]]);
const Fo = ["aria-label"], $o = [
  "data-sonner-theme",
  "dir",
  "data-theme",
  "data-rich-colors",
  "data-y-position",
  "data-x-position"
], Vo = typeof window < "u" && typeof document < "u";
function zo() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
var No = /* @__PURE__ */ ve({
  name: "Toaster",
  inheritAttrs: !1,
  __name: "Toaster",
  props: {
    id: {},
    invert: {
      type: Boolean,
      default: !1
    },
    theme: { default: "light" },
    position: { default: "bottom-right" },
    closeButtonPosition: { default: "top-left" },
    hotkey: { default: () => ["altKey", "KeyT"] },
    richColors: {
      type: Boolean,
      default: !1
    },
    expand: {
      type: Boolean,
      default: !1
    },
    duration: {},
    gap: { default: oo },
    visibleToasts: { default: eo },
    closeButton: {
      type: Boolean,
      default: !1
    },
    toastOptions: { default: () => ({}) },
    class: { default: "" },
    style: {},
    offset: { default: pn },
    mobileOffset: { default: vn },
    dir: { default: "auto" },
    swipeDirections: {},
    icons: {},
    containerAriaLabel: { default: "Notifications" }
  },
  setup(t) {
    const e = t, n = Dn(), o = b([]), s = O(() => e.id ? o.value.filter((d) => d.toasterId === e.id) : o.value.filter((d) => !d.toasterId));
    function a(d, w) {
      return s.value.filter((y) => !y.position && w === 0 || y.position === d);
    }
    const i = O(() => {
      const d = s.value.filter((w) => w.position).map((w) => w.position);
      return d.length > 0 ? Array.from(new Set([e.position].concat(d))) : [e.position];
    }), c = O(() => {
      const d = {};
      return i.value.forEach((w) => {
        d[w] = o.value.filter((y) => y.position === w);
      }), d;
    }), r = b([]), l = b({}), m = b(!1);
    et(() => {
      i.value.forEach((d) => {
        d in l.value || (l.value[d] = !1);
      });
    });
    const p = b(e.theme !== "system" ? e.theme : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), h = b(null), v = b(null), g = b(!1), x = e.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    function S(d) {
      var w;
      (w = o.value.find((y) => y.id === d.id)) != null && w.delete || U.dismiss(d.id), o.value = o.value.filter(({ id: y }) => y !== d.id), setTimeout(() => {
        o.value.find((y) => y.id === d.id) || (r.value = r.value.filter((y) => y.toastId !== d.id));
      }, hn + 50);
    }
    function D(d) {
      var w, y;
      g.value && !((y = (w = d.currentTarget) == null ? void 0 : w.contains) != null && y.call(w, d.relatedTarget)) && (g.value = !1, v.value && (v.value.focus({ preventScroll: !0 }), v.value = null));
    }
    function T(d) {
      d.target instanceof HTMLElement && d.target.dataset.dismissible === "false" || g.value || (g.value = !0, v.value = d.relatedTarget);
    }
    function P(d) {
      d.target && d.target instanceof HTMLElement && d.target.dataset.dismissible === "false" || (m.value = !0);
    }
    et((d) => {
      const w = U.subscribe((y) => {
        if (y.dismiss) {
          requestAnimationFrame(() => {
            o.value = o.value.map((E) => E.id === y.id ? {
              ...E,
              delete: !0
            } : E);
          });
          return;
        }
        pe(() => {
          const E = o.value.findIndex((C) => C.id === y.id);
          E !== -1 ? o.value = [
            ...o.value.slice(0, E),
            {
              ...o.value[E],
              ...y
            },
            ...o.value.slice(E + 1)
          ] : o.value = [y, ...o.value];
        });
      });
      d(w);
    }), et((d) => {
      if (typeof window > "u") return;
      if (e.theme !== "system") {
        p.value = e.theme;
        return;
      }
      const w = window.matchMedia("(prefers-color-scheme: dark)"), y = (C) => {
        p.value = C ? "dark" : "light";
      };
      y(w.matches);
      const E = (C) => {
        y(C.matches);
      };
      try {
        w.addEventListener("change", E);
      } catch {
        w.addListener(E);
      }
      d(() => {
        try {
          w.removeEventListener("change", E);
        } catch {
          w.removeListener(E);
        }
      });
    }), et(() => {
      h.value && v.value && (v.value.focus({ preventScroll: !0 }), v.value = null, g.value = !1);
    }), et(() => {
      o.value.length <= 1 && Object.keys(l.value).forEach((d) => {
        l.value[d] = !1;
      });
    }), et((d) => {
      function w(y) {
        const E = e.hotkey.every((V) => y[V] || y.code === V), C = Array.isArray(h.value) ? h.value[0] : h.value;
        E && (i.value.forEach((V) => {
          l.value[V] = !0;
        }), C == null || C.focus());
        const X = document.activeElement === h.value || (C == null ? void 0 : C.contains(document.activeElement));
        y.code === "Escape" && X && i.value.forEach((V) => {
          l.value[V] = !1;
        });
      }
      Vo && (document.addEventListener("keydown", w), d(() => {
        document.removeEventListener("keydown", w);
      }));
    });
    function L(d) {
      const w = d.currentTarget, y = w.getAttribute("data-y-position") + "-" + w.getAttribute("data-x-position");
      l.value[y] = !0;
    }
    function k(d) {
      if (!m.value) {
        const w = d.currentTarget, y = w.getAttribute("data-y-position") + "-" + w.getAttribute("data-x-position");
        l.value[y] = !1;
      }
    }
    function W() {
      Object.keys(l.value).forEach((d) => {
        l.value[d] = !1;
      });
    }
    function A() {
      m.value = !1;
    }
    function R(d) {
      r.value = d;
    }
    function $(d) {
      const w = r.value.findIndex((y) => y.toastId === d.toastId);
      if (w !== -1) r.value[w] = d;
      else {
        const y = r.value.findIndex((E) => E.position === d.position);
        y !== -1 ? r.value.splice(y, 0, d) : r.value.unshift(d);
      }
    }
    return (d, w) => (M(), F(gt, null, [bt(" Remove item from normal navigation flow, only available via hotkey "), st("section", {
      "aria-label": `${d.containerAriaLabel} ${N(x)}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false"
    }, [(M(!0), F(gt, null, ce(i.value, (y, E) => {
      var C;
      return M(), F("ol", _t({
        key: y,
        ref_for: !0,
        ref_key: "listRef",
        ref: h,
        "data-sonner-toaster": "",
        "data-sonner-theme": p.value,
        class: e.class,
        dir: d.dir === "auto" ? zo() : d.dir,
        tabIndex: -1,
        "data-theme": d.theme,
        "data-rich-colors": d.richColors,
        "data-y-position": y.split("-")[0],
        "data-x-position": y.split("-")[1],
        style: {
          "--front-toast-height": `${((C = r.value[0]) == null ? void 0 : C.height) || 0}px`,
          "--width": `${N(no)}px`,
          "--gap": `${d.gap}px`,
          ...d.style,
          ...N(n).style,
          ...N(ro)(d.offset, d.mobileOffset)
        }
      }, { ref_for: !0 }, d.$attrs, {
        onBlur: D,
        onFocus: T,
        onMouseenter: L,
        onMousemove: L,
        onMouseleave: k,
        onDragend: W,
        onPointerdown: P,
        onPointerup: A
      }), [(M(!0), F(gt, null, ce(a(y, E), (X, V) => {
        var G, q, K, ut, at, Mt, Gt, Ut, Xt, Kt, u;
        return M(), Ct(fo, {
          key: X.id,
          heights: r.value,
          icons: d.icons,
          index: V,
          toast: X,
          defaultRichColors: d.richColors,
          duration: ((G = d.toastOptions) == null ? void 0 : G.duration) ?? d.duration,
          class: rt(((q = d.toastOptions) == null ? void 0 : q.class) ?? ""),
          descriptionClass: (K = d.toastOptions) == null ? void 0 : K.descriptionClass,
          invert: d.invert,
          visibleToasts: d.visibleToasts,
          closeButton: ((ut = d.toastOptions) == null ? void 0 : ut.closeButton) ?? d.closeButton,
          interacting: m.value,
          position: y,
          closeButtonPosition: ((at = d.toastOptions) == null ? void 0 : at.closeButtonPosition) ?? d.closeButtonPosition,
          style: te((Mt = d.toastOptions) == null ? void 0 : Mt.style),
          unstyled: (Gt = d.toastOptions) == null ? void 0 : Gt.unstyled,
          classes: (Ut = d.toastOptions) == null ? void 0 : Ut.classes,
          cancelButtonStyle: (Xt = d.toastOptions) == null ? void 0 : Xt.cancelButtonStyle,
          actionButtonStyle: (Kt = d.toastOptions) == null ? void 0 : Kt.actionButtonStyle,
          "close-button-aria-label": (u = d.toastOptions) == null ? void 0 : u.closeButtonAriaLabel,
          toasts: c.value[y],
          expandByDefault: d.expand,
          gap: d.gap,
          expanded: l.value[y] || !1,
          swipeDirections: e.swipeDirections,
          "onUpdate:heights": R,
          "onUpdate:height": $,
          onRemoveToast: S
        }, {
          "close-icon": Et(() => [J(d.$slots, "close-icon", {}, () => [At(ho)])]),
          "loading-icon": Et(() => [J(d.$slots, "loading-icon", {}, () => [At(bo, { visible: X.type === "loading" }, null, 8, ["visible"])])]),
          "success-icon": Et(() => [J(d.$slots, "success-icon", {}, () => [At(So)])]),
          "error-icon": Et(() => [J(d.$slots, "error-icon", {}, () => [At(Io)])]),
          "warning-icon": Et(() => [J(d.$slots, "warning-icon", {}, () => [At(Mo)])]),
          "info-icon": Et(() => [J(d.$slots, "info-icon", {}, () => [At(Co)])]),
          _: 2
        }, 1032, [
          "heights",
          "icons",
          "index",
          "toast",
          "defaultRichColors",
          "duration",
          "class",
          "descriptionClass",
          "invert",
          "visibleToasts",
          "closeButton",
          "interacting",
          "position",
          "closeButtonPosition",
          "style",
          "unstyled",
          "classes",
          "cancelButtonStyle",
          "actionButtonStyle",
          "close-button-aria-label",
          "toasts",
          "expandByDefault",
          "gap",
          "expanded",
          "swipeDirections"
        ]);
      }), 128))], 16, $o);
    }), 128))], 8, Fo)], 2112));
  }
}), us = No;
const Wo = (t) => t instanceof Date ? t : new Date(t), ct = (t) => {
  const e = new Date(t);
  return e.setHours(0, 0, 0, 0), e;
}, ds = (t) => {
  const e = new Date(t);
  return e.setHours(23, 59, 59, 999), e;
}, me = (t, e) => {
  const n = new Date(t);
  return n.setDate(n.getDate() + e), n;
}, fs = (t, e) => {
  const n = new Date(t);
  return n.setHours(n.getHours() + e), n;
}, ms = (t, e) => {
  const n = new Date(t);
  return n.setMonth(n.getMonth() + e, 1), n;
}, ps = (t, e) => {
  const n = new Date(t);
  return n.setFullYear(n.getFullYear() + e, 0, 1), n;
}, vs = (t) => {
  const e = ct(t), n = e.getDay(), o = n === 0 ? -6 : 1 - n;
  return me(e, o);
}, hs = (t) => ct(new Date(t.getFullYear(), t.getMonth(), 1)), gs = (t) => ct(new Date(t.getFullYear(), 0, 1)), ys = (t, e) => t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate(), ws = (t, e) => ct(t).getTime() < ct(e).getTime(), bs = (t, e) => ct(t).getTime() > ct(e).getTime(), xs = (t, e) => Math.round((ct(t).getTime() - ct(e).getTime()) / 864e5), le = (t, e) => {
  const n = new Date(t);
  return n.setHours(e, 0, 0, 0), n;
}, Ts = (t) => {
  const e = new Date(t);
  return e.getMinutes() * 6e4 + e.getSeconds() * 1e3 + e.getMilliseconds() >= 30 * 6e4 && e.setHours(e.getHours() + 1), e.setMinutes(0, 0, 0), e;
}, Ds = (t, e) => {
  const n = le(t, e), o = le(me(t, -1), e), s = le(me(t, 1), e);
  return [o, n, s].reduce((a, i) => {
    const c = Math.abs(a.getTime() - t.getTime());
    return Math.abs(i.getTime() - t.getTime()) < c ? i : a;
  }, n);
}, Ss = (t) => new Intl.DateTimeFormat("ru-RU", {
  weekday: "short",
  month: "short",
  day: "numeric"
}).format(t).replace(".", ""), Ps = (t) => new Intl.DateTimeFormat("ru-RU", {
  month: "long",
  year: "numeric"
}).format(t).replace(" г.", ""), Es = (t) => new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "short"
}).format(t).replace(".", ""), As = (t) => new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
}).format(Wo(t)), Cs = (t, e, n, o) => {
  const s = Math.abs(t), a = s % 10, i = s % 100;
  return a === 1 && i !== 11 ? e : a >= 2 && a <= 4 && (i < 12 || i > 14) ? n : o;
}, Bs = f(() => import("./Action-BU2zTSfG.js")), Os = f(() => import("./AdaptiveModal-XrOWKT_u.js")), ks = f(() => import("./Avatar-R_qHHlNx.js")), Ms = f(() => import("./Button-B4EJCtdb.js")), Ls = f(() => import("./ButtonGroup-DlA53B60.js")), Rs = f(() => import("./ButtonGroupSeparator-C8p7_v9q.js")), Hs = f(() => import("./ButtonGroupText-DNa8K1-a.js")), Is = f(() => import("./Breadcrumb-D0oYrk86.js")), Fs = f(() => import("./BreadcrumbItem-CBhFanks.js")), $s = f(() => import("./BreadcrumbLink-MSlogiCm.js")), Vs = f(() => import("./BreadcrumbList-BVUrmMHs.js")), zs = f(() => import("./BreadcrumbPage-Cskl-9gj.js")), Ns = f(() => import("./BreadcrumbSeparator-GZq5debe.js")), Ws = f(() => import("./Card-B6MDZptS.js")), js = f(() => import("./Checkbox-DfH5CsWo.js")), Ys = f(() => import("./Chip-Dz2_gtrl.js")), Gs = f(() => import("./ChipGroup-CWR_MOHT.js")), Us = f(() => import("./Dot-DV6CGwwn.js")), Xs = f(() => import("./Gap-C353wviN.js")), Ks = f(() => import("./Field-DZJy5SBW.js")), qs = f(() => import("./FieldContent-C7ursgAE.js")), Qs = f(() => import("./FieldDescription-BJ68GfYb.js")), Js = f(() => import("./FieldHelper-D0cSvQKv.js")), Zs = f(() => import("./FieldLabel-DIv5tzGI.js")), _s = f(() => import("./FieldLegend-Ca1Llm42.js")), ti = f(() => import("./FieldSeparator-BWPHFqiI.js")), ei = f(() => import("./FieldSet-vD6XODcJ.js")), ni = f(() => import("./FieldTitle-DC-l4PQb.js")), oi = f(() => import("./FormError-DUngWZr_.js")), si = f(() => import("./Input-DGngOTDn.js")), ii = f(() => import("./Item-BD-mQrR6.js")), ai = f(() => import("./ItemActions-DPeSlmsz.js")), ri = f(() => import("./ItemContent-KTKt2LoV.js")), li = f(() => import("./ItemDescription-BGZAd2I_.js")), ci = f(() => import("./ItemMedia-BPc5FMLQ.js")), ui = f(() => import("./ItemTitle-DB4wBn_L.js")), di = f(() => import("./PincodeInput-BuHJ3RxZ.js")), fi = f(() => import("./Link-ePHvmqtM.js")), mi = f(() => import("./Row-C-deRR-M.js")), pi = f(() => import("./Sidebar-DClwoglp.js")), vi = f(() => import("./Stack-CgwImR5w.js")), hi = f(() => import("./Tab-tW95WVXK.js")), gi = f(() => import("./Tabs-zWFngnSS.js")), yi = f(() => import("./Table-B7fZMv2G.js")), wi = f(() => import("./TableBody-CJfzukZt.js")), bi = f(() => import("./TableCaption-BMX6s-Bu.js")), xi = f(() => import("./TableCell-C4N6S9zw.js")), Ti = f(() => import("./TableFooter-D2vlr7W9.js")), Di = f(() => import("./TableHead-BDhLTrc4.js")), Si = f(() => import("./TableHeader-DYMNFvVc.js")), Pi = f(() => import("./TableRow-BAWw0qRh.js")), Ei = f(() => import("./Text-0p81GmwH.js")), Ai = f(() => import("./Separator-CJJ6QiVY.js")), Ci = f(() => import("./Tooltip-Suoqo3Mb.js")), Bi = f(() => import("./Badge-D4lvvyDq.js")), Oi = f(() => import("./SidebarItem-BlZUbsbP.js")), ki = f(() => import("./SidebarList-BjBRjSEz.js")), Mi = f(() => import("./Modal-C1Ac9sgl.js")), Li = f(() => import("./PasswordInput-C27Zjz6G.js")), Ri = f(() => import("./PasswordStrengthInput-DAcUZR4w.js")), Hi = f(() => import("./Picker-dM7Z2qxR.js")), Ii = f(() => import("./ProgressBar-BhtMRJGR.js")), Fi = f(() => import("./Dropdown-BzAtxMa0.js")), $i = f(() => import("./DropdownList-MXiyxJPe.js")), Vi = f(() => import("./DropdownItem-BsqcZGDC.js")), zi = f(() => import("./DropdownSeparator-VDlHsSUm.js")), Ni = f(() => import("./Sheet-CUlMGjQo.js")), Wi = f(() => import("./Skeleton-C0X3Bx_u.js")), ji = f(() => import("./SkeletonProvider-BOwIQyrj.js")), Yi = f(() => import("./AvatarSkeleton-XwBtca7e.js")), Gi = f(() => import("./ButtonSkeleton-BDvw-Hkk.js")), Ui = f(() => import("./CardSkeleton-C2ABiqxs.js")), Xi = f(() => import("./FormSkeleton-C7pcNRFI.js")), Ki = f(() => import("./TextSkeleton-BaoEhg8L.js")), qi = f(() => import("./Empty-C0bEf_tt.js")), Qi = f(() => import("./EmptyContent-DvAkJ4MZ.js")), Ji = f(() => import("./EmptyDescription-J9Q1VOXW.js")), Zi = f(() => import("./EmptyHeader-B917OyyY.js")), _i = f(() => import("./EmptyMedia-CGXsAfR9.js")), ta = f(() => import("./EmptyTitle-BtPIu_HG.js")), ea = f(() => import("./Loader-DEKZZM6p.js")), na = f(() => import("./HoverMenu-B3aF7BnV.js")), oa = f(() => import("./HoverMenuList-MXiyxJPe.js")), sa = f(() => import("./HoverMenuItem-BsqcZGDC.js")), ia = f(() => import("./HoverMenuSeparator-VDlHsSUm.js")), aa = f(() => import("./HoverCard-C6Ca-CC9.js")), ra = f(() => import("./HourPicker-zvB30peq.js")), la = f(() => import("./ContextMenu-BIuMmtFi.js")), ca = f(() => import("./ContextSubmenu-Clt_DaP-.js")), ua = f(() => import("./ContextMenuList-MXiyxJPe.js")), da = f(() => import("./ContextMenuItem-BsqcZGDC.js")), fa = f(() => import("./ContextMenuSeparator-VDlHsSUm.js")), ma = f(() => import("./Confirm-BFdfXVmm.js")), pa = f(() => import("./Calendar-CTqUF14l.js").then((t) => t.a)), va = f(() => import("./DateInput-Bcmv0xji.js")), ha = f(() => import("./DatePicker-CJFdL_MN.js")), ga = f(() => import("./DateNavigator-jAyN_CwF.js")), ya = f(() => import("./Select-B7ULuqM1.js")), wa = f(() => import("./SelectOption-BoAJGKIY.js")), ba = f(() => import("./SuggestInput-CjbddK7c.js")), xa = f(() => import("./Textarea-CcA25N-Z.js")), Ta = f(() => import("./Toaster-mXC8xMUY.js")), Da = f(() => import("./GridLayout-C8dMK4vo.js")), Sa = f(() => import("./GridRow-TOhenNar.js")), Pa = f(() => import("./GridColumn-DpedhiyS.js"));
export {
  Gs as $,
  hs as A,
  zn as B,
  gs as C,
  zt as D,
  ms as E,
  ps as F,
  as as G,
  ss as H,
  Kn as I,
  lt as J,
  Bs as K,
  Os as L,
  ks as M,
  Ms as N,
  Ls as O,
  Rs as P,
  Hs as Q,
  Is as R,
  Fs as S,
  us as T,
  $s as U,
  Vs as V,
  zs as W,
  Ns as X,
  Ws as Y,
  js as Z,
  Ys as _,
  Go as a,
  ea as a$,
  Us as a0,
  Xs as a1,
  Ks as a2,
  qs as a3,
  Qs as a4,
  Js as a5,
  Zs as a6,
  _s as a7,
  ti as a8,
  ei as a9,
  Ci as aA,
  Bi as aB,
  Oi as aC,
  ki as aD,
  Mi as aE,
  Li as aF,
  Ri as aG,
  Hi as aH,
  Ii as aI,
  Fi as aJ,
  $i as aK,
  Vi as aL,
  zi as aM,
  Ni as aN,
  Wi as aO,
  ji as aP,
  Yi as aQ,
  Gi as aR,
  Ui as aS,
  Xi as aT,
  Ki as aU,
  qi as aV,
  Qi as aW,
  Ji as aX,
  Zi as aY,
  _i as aZ,
  ta as a_,
  ni as aa,
  oi as ab,
  si as ac,
  ii as ad,
  ai as ae,
  ri as af,
  li as ag,
  ci as ah,
  ui as ai,
  di as aj,
  fi as ak,
  mi as al,
  pi as am,
  vi as an,
  hi as ao,
  gi as ap,
  yi as aq,
  wi as ar,
  bi as as,
  xi as at,
  Ti as au,
  Di as av,
  Si as aw,
  Pi as ax,
  Ei as ay,
  Ai as az,
  Sn as b,
  na as b0,
  oa as b1,
  sa as b2,
  ia as b3,
  aa as b4,
  ra as b5,
  la as b6,
  ca as b7,
  ua as b8,
  da as b9,
  Cs as bA,
  fa as ba,
  ma as bb,
  pa as bc,
  va as bd,
  ha as be,
  ga as bf,
  ya as bg,
  wa as bh,
  ba as bi,
  xa as bj,
  Ta as bk,
  Da as bl,
  Sa as bm,
  Pa as bn,
  Xo as bo,
  qo as bp,
  es as bq,
  rs as br,
  ls as bs,
  cs as bt,
  fs as bu,
  xs as bv,
  As as bw,
  Ts as bx,
  le as by,
  Ds as bz,
  Jo as c,
  Qo as d,
  _o as e,
  Rn as f,
  os as g,
  Gn as h,
  Uo as i,
  Ko as j,
  me as k,
  ds as l,
  ct as m,
  ys as n,
  Zo as o,
  ns as p,
  ws as q,
  bs as r,
  In as s,
  Wo as t,
  is as u,
  Es as v,
  Ps as w,
  Ss as x,
  vs as y,
  ts as z
};
