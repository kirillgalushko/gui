import { ref as y, onMounted as ut, watch as tt, onBeforeUnmount as ft, computed as I, shallowRef as Ut, getCurrentScope as qt, onScopeDispose as Jt, shallowReadonly as K, unref as Kt, readonly as Dt, defineAsyncComponent as v } from "vue";
import '../assets/index-CNzPCFZF.css';const Oe = (t, e) => {
  const n = y([]), o = y();
  return {
    tabs: n,
    selectedTab: o,
    registerTab: (s) => {
      s.getAttribute("data-name") === t && (o.value = s), n.value.length || (o.value = s), n.value.push(s);
    },
    selectTab: (s) => {
      o.value = s;
      const l = s.getAttribute("data-name");
      l && e(l);
    }
  };
}, Pe = (t, e) => {
  const n = y(/* @__PURE__ */ new Map()), o = y();
  return {
    options: n,
    selectedOption: o,
    registerOption: (s) => {
      t && s.value === t && !o.value && (o.value = s), n.value.set(s.value, s.label);
    },
    selectOption: (s) => {
      o.value = s, e == null || e(s);
    }
  };
}, Se = () => {
  const t = y(), e = y(), n = y(), o = y(), i = y(!1), r = y(), s = y(), l = (a) => () => {
    i.value = !1, a();
  };
  return {
    title: t,
    description: e,
    confirm: (a) => (t.value = a == null ? void 0 : a.title, e.value = a == null ? void 0 : a.description, n.value = (a == null ? void 0 : a.confirmButtonText) || "Подтвердить", o.value = (a == null ? void 0 : a.cancelButtonText) || "Отменить", i.value = !0, new Promise((u, f) => {
      r.value = l(u), s.value = l(f);
    })),
    isOpened: i,
    resolve: r,
    reject: s,
    confirmButtonText: n,
    cancelButtonText: o
  };
};
function Qt(t, e) {
  const n = y(null), o = y(null), i = () => {
    n.value && o.value && (n.value.unobserve(o.value), o.value = null);
  }, r = (s) => {
    !n.value || !s || (n.value.observe(s), o.value = s, e());
  };
  ut(() => {
    n.value = new ResizeObserver(e), r(t.value);
  }), tt(t, (s) => {
    i(), r(s);
  }), ft(() => {
    var s;
    i(), (s = n.value) == null || s.disconnect();
  });
}
const Re = () => {
  const t = y(), e = y(), n = y();
  return Qt(t, () => {
    t.value && (e.value = t.value.clientWidth, n.value = t.value.clientHeight);
  }), { elementRef: t, width: e, height: n };
}, Le = (t = !1) => {
  const e = y(t);
  return { show: () => {
    e.value = !0;
  }, close: () => {
    e.value = !1;
  }, visible: e };
}, Zt = ["top", "right", "bottom", "left"], yt = ["start", "end"], bt = /* @__PURE__ */ Zt.reduce((t, e) => t.concat(e, e + "-" + yt[0], e + "-" + yt[1]), []), ot = Math.min, Y = Math.max, te = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ee = {
  start: "end",
  end: "start"
};
function vt(t, e, n) {
  return Y(t, ot(e, n));
}
function q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function B(t) {
  return t.split("-")[0];
}
function k(t) {
  return t.split("-")[1];
}
function Mt(t) {
  return t === "x" ? "y" : "x";
}
function ht(t) {
  return t === "y" ? "height" : "width";
}
function U(t) {
  return ["top", "bottom"].includes(B(t)) ? "y" : "x";
}
function xt(t) {
  return Mt(U(t));
}
function Et(t, e, n) {
  n === void 0 && (n = !1);
  const o = k(t), i = xt(t), r = ht(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = at(s)), [s, at(s)];
}
function ne(t) {
  const e = at(t);
  return [lt(t), e, lt(e)];
}
function lt(t) {
  return t.replace(/start|end/g, (e) => ee[e]);
}
function oe(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function ie(t, e, n, o) {
  const i = k(t);
  let r = oe(B(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(lt)))), r;
}
function at(t) {
  return t.replace(/left|right|bottom|top/g, (e) => te[e]);
}
function se(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function kt(t) {
  return typeof t != "number" ? se(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function et(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function At(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = U(e), s = xt(e), l = ht(s), c = B(e), a = r === "y", u = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, m = o[l] / 2 - i[l] / 2;
  let d;
  switch (c) {
    case "top":
      d = {
        x: u,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: o.x - i.width,
        y: f
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (k(e)) {
    case "start":
      d[s] -= m * (n && a ? -1 : 1);
      break;
    case "end":
      d[s] += m * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const re = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, l = r.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: u,
    y: f
  } = At(a, o, c), m = o, d = {}, p = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: x,
      fn: h
    } = l[g], {
      x: w,
      y: b,
      data: S,
      reset: O
    } = await h({
      x: u,
      y: f,
      initialPlacement: o,
      placement: m,
      strategy: i,
      middlewareData: d,
      rects: a,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    u = w ?? u, f = b ?? f, d = {
      ...d,
      [x]: {
        ...d[x],
        ...S
      }
    }, O && p <= 50 && (p++, typeof O == "object" && (O.placement && (m = O.placement), O.rects && (a = O.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : O.rects), {
      x: u,
      y: f
    } = At(a, m, c)), g = -1);
  }
  return {
    x: u,
    y: f,
    placement: m,
    strategy: i,
    middlewareData: d
  };
};
async function dt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: s,
    elements: l,
    strategy: c
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = q(e, t), p = kt(d), x = l[m ? f === "floating" ? "reference" : "floating" : f], h = et(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(x))) == null || n ? x : x.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: c
  })), w = f === "floating" ? {
    x: o,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), S = await (r.isElement == null ? void 0 : r.isElement(b)) ? await (r.getScale == null ? void 0 : r.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = et(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: b,
    strategy: c
  }) : w);
  return {
    top: (h.top - O.top + p.top) / S.y,
    bottom: (O.bottom - h.bottom + p.bottom) / S.y,
    left: (h.left - O.left + p.left) / S.x,
    right: (O.right - h.right + p.right) / S.x
  };
}
const Te = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: r,
      platform: s,
      elements: l,
      middlewareData: c
    } = e, {
      element: a,
      padding: u = 0
    } = q(t, e) || {};
    if (a == null)
      return {};
    const f = kt(u), m = {
      x: n,
      y: o
    }, d = xt(i), p = ht(d), g = await s.getDimensions(a), x = d === "y", h = x ? "top" : "left", w = x ? "bottom" : "right", b = x ? "clientHeight" : "clientWidth", S = r.reference[p] + r.reference[d] - m[d] - r.floating[p], O = m[d] - r.reference[d], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let A = D ? D[b] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(D))) && (A = l.floating[b] || r.floating[p]);
    const R = S / 2 - O / 2, L = A / 2 - g[p] / 2 - 1, P = ot(f[h], L), C = ot(f[w], L), M = P, V = A - g[p] - C, T = A / 2 - g[p] / 2 + R, J = vt(M, T, V), N = !c.arrow && k(i) != null && T !== J && r.reference[p] / 2 - (T < M ? P : C) - g[p] / 2 < 0, W = N ? T < M ? T - M : T - V : 0;
    return {
      [d]: m[d] + W,
      data: {
        [d]: J,
        centerOffset: T - J - W,
        ...N && {
          alignmentOffset: W
        }
      },
      reset: N
    };
  }
});
function le(t, e, n) {
  return (t ? [...n.filter((i) => k(i) === t), ...n.filter((i) => k(i) !== t)] : n.filter((i) => B(i) === i)).filter((i) => t ? k(i) === t || (e ? lt(i) !== i : !1) : !0);
}
const Ce = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: r,
        middlewareData: s,
        placement: l,
        platform: c,
        elements: a
      } = e, {
        crossAxis: u = !1,
        alignment: f,
        allowedPlacements: m = bt,
        autoAlignment: d = !0,
        ...p
      } = q(t, e), g = f !== void 0 || m === bt ? le(f || null, d, m) : m, x = await dt(e, p), h = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, w = g[h];
      if (w == null)
        return {};
      const b = Et(w, r, await (c.isRTL == null ? void 0 : c.isRTL(a.floating)));
      if (l !== w)
        return {
          reset: {
            placement: g[0]
          }
        };
      const S = [x[B(w)], x[b[0]], x[b[1]]], O = [...((o = s.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: S
      }], D = g[h + 1];
      if (D)
        return {
          data: {
            index: h + 1,
            overflows: O
          },
          reset: {
            placement: D
          }
        };
      const A = O.map((P) => {
        const C = k(P.placement);
        return [P.placement, C && u ? (
          // Check along the mainAxis and main crossAxis side.
          P.overflows.slice(0, 2).reduce((M, V) => M + V, 0)
        ) : (
          // Check only the mainAxis.
          P.overflows[0]
        ), P.overflows];
      }).sort((P, C) => P[1] - C[1]), L = ((i = A.filter((P) => P[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        k(P[0]) ? 2 : 3
      ).every((C) => C <= 0))[0]) == null ? void 0 : i[0]) || A[0][0];
      return L !== l ? {
        data: {
          index: h + 1,
          overflows: O
        },
        reset: {
          placement: L
        }
      } : {};
    }
  };
}, ae = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: r,
        rects: s,
        initialPlacement: l,
        platform: c,
        elements: a
      } = e, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...x
      } = q(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const h = B(i), w = U(l), b = B(l) === l, S = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), O = m || (b || !g ? [at(l)] : ne(l)), D = p !== "none";
      !m && D && O.push(...ie(l, g, p, S));
      const A = [l, ...O], R = await dt(e, x), L = [];
      let P = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (u && L.push(R[h]), f) {
        const T = Et(i, s, S);
        L.push(R[T[0]], R[T[1]]);
      }
      if (P = [...P, {
        placement: i,
        overflows: L
      }], !L.every((T) => T <= 0)) {
        var C, M;
        const T = (((C = r.flip) == null ? void 0 : C.index) || 0) + 1, J = A[T];
        if (J)
          return {
            data: {
              index: T,
              overflows: P
            },
            reset: {
              placement: J
            }
          };
        let N = (M = P.filter((W) => W.overflows[0] <= 0).sort((W, z) => W.overflows[1] - z.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!N)
          switch (d) {
            case "bestFit": {
              var V;
              const W = (V = P.filter((z) => {
                if (D) {
                  const $ = U(z.placement);
                  return $ === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter(($) => $ > 0).reduce(($, Yt) => $ + Yt, 0)]).sort((z, $) => z[1] - $[1])[0]) == null ? void 0 : V[0];
              W && (N = W);
              break;
            }
            case "initialPlacement":
              N = l;
              break;
          }
        if (i !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
async function ce(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = B(n), l = k(n), c = U(n) === "y", a = ["left", "top"].includes(s) ? -1 : 1, u = r && c ? -1 : 1, f = q(e, t);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return l && typeof p == "number" && (d = l === "end" ? p * -1 : p), c ? {
    x: d * u,
    y: m * a
  } : {
    x: m * a,
    y: d * u
  };
}
const De = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: s,
        middlewareData: l
      } = e, c = await ce(e, t);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: i + c.x,
        y: r + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, ue = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (x) => {
            let {
              x: h,
              y: w
            } = x;
            return {
              x: h,
              y: w
            };
          }
        },
        ...c
      } = q(t, e), a = {
        x: n,
        y: o
      }, u = await dt(e, c), f = U(B(i)), m = Mt(f);
      let d = a[m], p = a[f];
      if (r) {
        const x = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", w = d + u[x], b = d - u[h];
        d = vt(w, d, b);
      }
      if (s) {
        const x = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", w = p + u[x], b = p - u[h];
        p = vt(w, p, b);
      }
      const g = l.fn({
        ...e,
        [m]: d,
        [f]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [m]: r,
            [f]: s
          }
        }
      };
    }
  };
}, Me = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        rects: r,
        platform: s,
        elements: l
      } = e, {
        apply: c = () => {
        },
        ...a
      } = q(t, e), u = await dt(e, a), f = B(i), m = k(i), d = U(i) === "y", {
        width: p,
        height: g
      } = r.floating;
      let x, h;
      f === "top" || f === "bottom" ? (x = f, h = m === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = f, x = m === "end" ? "top" : "bottom");
      const w = g - u.top - u.bottom, b = p - u.left - u.right, S = ot(g - u[x], w), O = ot(p - u[h], b), D = !e.middlewareData.shift;
      let A = S, R = O;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (R = b), (o = e.middlewareData.shift) != null && o.enabled.y && (A = w), D && !m) {
        const P = Y(u.left, 0), C = Y(u.right, 0), M = Y(u.top, 0), V = Y(u.bottom, 0);
        d ? R = p - 2 * (P !== 0 || C !== 0 ? P + C : Y(u.left, u.right)) : A = g - 2 * (M !== 0 || V !== 0 ? M + V : Y(u.top, u.bottom));
      }
      await c({
        ...e,
        availableWidth: R,
        availableHeight: A
      });
      const L = await s.getDimensions(l.floating);
      return p !== L.width || g !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function E(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function F(t) {
  return E(t).getComputedStyle(t);
}
const Ot = Math.min, nt = Math.max, ct = Math.round;
function Vt(t) {
  const e = F(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, s = ct(n) !== i || ct(o) !== r;
  return s && (n = i, o = r), { width: n, height: o, fallback: s };
}
function G(t) {
  return Ft(t) ? (t.nodeName || "").toLowerCase() : "";
}
let rt;
function Wt() {
  if (rt) return rt;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (rt = t.brands.map((e) => e.brand + "/" + e.version).join(" "), rt) : navigator.userAgent;
}
function H(t) {
  return t instanceof E(t).HTMLElement;
}
function X(t) {
  return t instanceof E(t).Element;
}
function Ft(t) {
  return t instanceof E(t).Node;
}
function Pt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof E(t).ShadowRoot || t instanceof ShadowRoot;
}
function mt(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = F(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function fe(t) {
  return ["table", "td", "th"].includes(G(t));
}
function gt(t) {
  const e = /firefox/i.test(Wt()), n = F(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Ht() {
  return !/^((?!chrome|android).)*safari/i.test(Wt());
}
function wt(t) {
  return ["html", "body", "#document"].includes(G(t));
}
function Bt(t) {
  return X(t) ? t : t.contextElement;
}
const Nt = { x: 1, y: 1 };
function Q(t) {
  const e = Bt(t);
  if (!H(e)) return Nt;
  const n = e.getBoundingClientRect(), { width: o, height: i, fallback: r } = Vt(e);
  let s = (r ? ct(n.width) : n.width) / o, l = (r ? ct(n.height) : n.height) / i;
  return s && Number.isFinite(s) || (s = 1), l && Number.isFinite(l) || (l = 1), { x: s, y: l };
}
function it(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect(), l = Bt(t);
  let c = Nt;
  e && (o ? X(o) && (c = Q(o)) : c = Q(t));
  const a = l ? E(l) : window, u = !Ht() && n;
  let f = (s.left + (u && ((i = a.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, m = (s.top + (u && ((r = a.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, d = s.width / c.x, p = s.height / c.y;
  if (l) {
    const g = E(l), x = o && X(o) ? E(o) : o;
    let h = g.frameElement;
    for (; h && o && x !== g; ) {
      const w = Q(h), b = h.getBoundingClientRect(), S = getComputedStyle(h);
      b.x += (h.clientLeft + parseFloat(S.paddingLeft)) * w.x, b.y += (h.clientTop + parseFloat(S.paddingTop)) * w.y, f *= w.x, m *= w.y, d *= w.x, p *= w.y, f += b.x, m += b.y, h = E(h).frameElement;
    }
  }
  return { width: d, height: p, top: m, right: f + d, bottom: m + p, left: f, x: f, y: m };
}
function j(t) {
  return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function pt(t) {
  return X(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function _t(t) {
  return it(j(t)).left + pt(t).scrollLeft;
}
function st(t) {
  if (G(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Pt(t) && t.host || j(t);
  return Pt(e) ? e.host : e;
}
function zt(t) {
  const e = st(t);
  return wt(e) ? e.ownerDocument.body : H(e) && mt(e) ? e : zt(e);
}
function $t(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = zt(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = E(o);
  return i ? e.concat(r, r.visualViewport || [], mt(o) ? o : []) : e.concat(o, $t(o));
}
function St(t, e, n) {
  return e === "viewport" ? et(function(o, i) {
    const r = E(o), s = j(o), l = r.visualViewport;
    let c = s.clientWidth, a = s.clientHeight, u = 0, f = 0;
    if (l) {
      c = l.width, a = l.height;
      const m = Ht();
      (m || !m && i === "fixed") && (u = l.offsetLeft, f = l.offsetTop);
    }
    return { width: c, height: a, x: u, y: f };
  }(t, n)) : X(e) ? et(function(o, i) {
    const r = it(o, !0, i === "fixed"), s = r.top + o.clientTop, l = r.left + o.clientLeft, c = H(o) ? Q(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * c.x, height: o.clientHeight * c.y, x: l * c.x, y: s * c.y };
  }(e, n)) : et(function(o) {
    const i = j(o), r = pt(o), s = o.ownerDocument.body, l = nt(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth), c = nt(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
    let a = -r.scrollLeft + _t(o);
    const u = -r.scrollTop;
    return F(s).direction === "rtl" && (a += nt(i.clientWidth, s.clientWidth) - l), { width: l, height: c, x: a, y: u };
  }(j(t)));
}
function Rt(t) {
  return H(t) && F(t).position !== "fixed" ? t.offsetParent : null;
}
function Lt(t) {
  const e = E(t);
  let n = Rt(t);
  for (; n && fe(n) && F(n).position === "static"; ) n = Rt(n);
  return n && (G(n) === "html" || G(n) === "body" && F(n).position === "static" && !gt(n)) ? e : n || function(o) {
    let i = st(o);
    for (; H(i) && !wt(i); ) {
      if (gt(i)) return i;
      i = st(i);
    }
    return null;
  }(t) || e;
}
function de(t, e, n) {
  const o = H(e), i = j(e), r = it(t, !0, n === "fixed", e);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (o || !o && n !== "fixed") if ((G(e) !== "body" || mt(i)) && (s = pt(e)), H(e)) {
    const c = it(e, !0);
    l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  } else i && (l.x = _t(i));
  return { x: r.left + s.scrollLeft - l.x, y: r.top + s.scrollTop - l.y, width: r.width, height: r.height };
}
const me = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(a, u) {
    const f = u.get(a);
    if (f) return f;
    let m = $t(a).filter((x) => X(x) && G(x) !== "body"), d = null;
    const p = F(a).position === "fixed";
    let g = p ? st(a) : a;
    for (; X(g) && !wt(g); ) {
      const x = F(g), h = gt(g);
      (p ? h || d : h || x.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = x : m = m.filter((w) => w !== g), g = st(g);
    }
    return u.set(a, m), m;
  }(e, this._c) : [].concat(n), s = [...r, o], l = s[0], c = s.reduce((a, u) => {
    const f = St(e, u, i);
    return a.top = nt(f.top, a.top), a.right = Ot(f.right, a.right), a.bottom = Ot(f.bottom, a.bottom), a.left = nt(f.left, a.left), a;
  }, St(e, l, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: o } = t;
  const i = H(n), r = j(n);
  if (n === r) return e;
  let s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && o !== "fixed") && ((G(n) !== "body" || mt(r)) && (s = pt(n)), H(n))) {
    const a = it(n);
    l = Q(n), c.x = a.x + n.clientLeft, c.y = a.y + n.clientTop;
  }
  return { width: e.width * l.x, height: e.height * l.y, x: e.x * l.x - s.scrollLeft * l.x + c.x, y: e.y * l.y - s.scrollTop * l.y + c.y };
}, isElement: X, getDimensions: function(t) {
  return H(t) ? Vt(t) : t.getBoundingClientRect();
}, getOffsetParent: Lt, getDocumentElement: j, getScale: Q, async getElementRects(t) {
  let { reference: e, floating: n, strategy: o } = t;
  const i = this.getOffsetParent || Lt, r = this.getDimensions;
  return { reference: de(e, await i(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => F(t).direction === "rtl" }, pe = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: me, ...n }, r = { ...i.platform, _c: o };
  return re(t, e, { ...i, platform: r });
};
function ve() {
  return typeof window < "u";
}
function ge(t) {
  return It(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function he(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function It(t) {
  return ve() ? t instanceof Node || t instanceof he(t).Node : !1;
}
function xe(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function Tt(t) {
  if (xe(t)) {
    const e = t.$el;
    return It(e) && ge(e) === "#comment" ? null : e;
  }
  return t;
}
function Z(t) {
  return typeof t == "function" ? t() : Kt(t);
}
function Xt(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ct(t, e) {
  const n = Xt(t);
  return Math.round(e * n) / n;
}
function we(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = I(() => {
    var A;
    return (A = Z(n.open)) != null ? A : !0;
  }), r = I(() => Z(n.middleware)), s = I(() => {
    var A;
    return (A = Z(n.placement)) != null ? A : "bottom";
  }), l = I(() => {
    var A;
    return (A = Z(n.strategy)) != null ? A : "absolute";
  }), c = I(() => {
    var A;
    return (A = Z(n.transform)) != null ? A : !0;
  }), a = I(() => Tt(t.value)), u = I(() => Tt(e.value)), f = y(0), m = y(0), d = y(l.value), p = y(s.value), g = Ut({}), x = y(!1), h = I(() => {
    const A = {
      position: d.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return A;
    const R = Ct(u.value, f.value), L = Ct(u.value, m.value);
    return c.value ? {
      ...A,
      transform: "translate(" + R + "px, " + L + "px)",
      ...Xt(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: d.value,
      left: R + "px",
      top: L + "px"
    };
  });
  let w;
  function b() {
    if (a.value == null || u.value == null)
      return;
    const A = i.value;
    pe(a.value, u.value, {
      middleware: r.value,
      placement: s.value,
      strategy: l.value
    }).then((R) => {
      f.value = R.x, m.value = R.y, d.value = R.strategy, p.value = R.placement, g.value = R.middlewareData, x.value = A !== !1;
    });
  }
  function S() {
    typeof w == "function" && (w(), w = void 0);
  }
  function O() {
    if (S(), o === void 0) {
      b();
      return;
    }
    if (a.value != null && u.value != null) {
      w = o(a.value, u.value, b);
      return;
    }
  }
  function D() {
    i.value || (x.value = !1);
  }
  return tt([r, s, l, i], b, {
    flush: "sync"
  }), tt([a, u], O, {
    flush: "sync"
  }), tt(i, D, {
    flush: "sync"
  }), qt() && Jt(S), {
    x: K(f),
    y: K(m),
    strategy: K(d),
    placement: K(p),
    middlewareData: K(g),
    isPositioned: K(x),
    floatingStyles: h,
    update: b
  };
}
const ye = (t, e) => {
  for (; t; ) {
    if (t === e) return !0;
    t = t.parentNode;
  }
  return !1;
}, Ee = () => {
  const t = y(!1), e = y({ x: 0, y: 0 }), n = y(null), o = y(null), i = y(null), r = y([ae(), ue()]), { floatingStyles: s, update: l } = we(o, i, {
    placement: "right-start",
    strategy: "fixed",
    middleware: r
  }), c = (f) => {
    f.preventDefault(), e.value = { x: f.clientX, y: f.clientY }, t.value = !0, l();
  }, a = () => {
    t.value = !1;
  }, u = (f) => {
    n.value && !ye(f.target, n.value) && (t.value = !1);
  };
  return ut(() => {
    n.value && (n.value.addEventListener("contextmenu", c), document.addEventListener("click", a), document.addEventListener("contextmenu", u));
  }), ft(() => {
    n.value && (n.value.removeEventListener("contextmenu", c), document.removeEventListener("click", a), document.addEventListener("contextmenu", u));
  }), { contextMenuData: { floatingStyles: s, floatingRef: i, position: e, positionRef: o, isContextMenuVisible: t }, targetRef: n };
}, _ = ["xs", "s", "m", "l", "xl", "xxl"], be = {
  xs: 0,
  s: 576,
  m: 1024,
  l: 1280,
  xl: 1440,
  xxl: 1920
}, ke = {
  xs: 4,
  s: 8,
  m: 12,
  l: 12,
  xl: 12,
  xxl: 12
};
function jt(t) {
  let e = "xs";
  for (const n of _)
    t >= be[n] && (e = n);
  return e;
}
function Gt(t) {
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
      return _.indexOf(t()) > _.indexOf("xs");
    },
    get isGtS() {
      return _.indexOf(t()) > _.indexOf("s");
    },
    get isGtM() {
      return _.indexOf(t()) > _.indexOf("m");
    },
    get isGtL() {
      return _.indexOf(t()) > _.indexOf("l");
    }
  };
}
function Ve() {
  const t = y("xs"), e = Gt(() => t.value), n = () => {
    typeof window > "u" || (t.value = jt(window.innerWidth));
  };
  return ut(() => {
    n(), window.addEventListener("resize", n);
  }), ft(() => {
    typeof window < "u" && window.removeEventListener("resize", n);
  }), Dt(e);
}
function We(t) {
  const e = y("xs"), n = Gt(() => e.value), o = y(null), i = y(null), r = (c) => {
    e.value = jt(c.clientWidth);
  }, s = () => {
    o.value && i.value && o.value.unobserve(i.value), i.value = null;
  }, l = (c) => {
    !o.value || !c || (o.value.observe(c), i.value = c, r(c));
  };
  return ut(() => {
    if (typeof ResizeObserver > "u") {
      t.value && r(t.value);
      return;
    }
    o.value = new ResizeObserver((c) => {
      const a = c[0];
      (a == null ? void 0 : a.target) instanceof HTMLElement && r(a.target);
    }), l(t.value);
  }), tt(t, (c) => {
    s(), l(c);
  }), ft(() => {
    var c;
    s(), (c = o.value) == null || c.disconnect();
  }), Dt(n);
}
const Fe = v(() => import("./Action-fDi_LsEN.js")), He = v(() => import("./Avatar-DFhiR5_w.js")), Be = v(() => import("./Button-BpMWZZ9H.js")), Ne = v(() => import("./Card-CAkQbLYr.js")), _e = v(() => import("./Gap-BIRg6ZW5.js")), ze = v(() => import("./FormHelper-DVhnI1v7.js")), $e = v(() => import("./FormLabel-RMSwvC_z.js")), Ie = v(() => import("./Input-F-KMt0Co.js")), Xe = v(() => import("./Link-DqnMQdBx.js")), je = v(() => import("./Row-BZ4BJTXr.js")), Ge = v(() => import("./Sidebar-CN47ZNxD.js")), Ye = v(() => import("./Stack-BpiNSXIP.js")), Ue = v(() => import("./Tab-b1ZSGMd9.js")), qe = v(() => import("./Tabs-D2oyzCjS.js")), Je = v(() => import("./Text-D1KvsXGq.js")), Ke = v(() => import("./Separator-CzTav143.js")), Qe = v(() => import("./Tooltip-BeKcV1f3.js")), Ze = v(() => import("./Badge-0KJZvxra.js")), tn = v(() => import("./SidebarItem-BAg-DWqT.js")), en = v(() => import("./SidebarList-BjBRjSEz.js")), nn = v(() => import("./Modal-CODxjuvn.js")), on = v(() => import("./PasswordInput-BqMVvnxc.js")), sn = v(() => import("./PasswordStrengthInput-DT0bV4yZ.js")), rn = v(() => import("./ProgressBar-Db8ln7iU.js")), ln = v(() => import("./Dropdown-BpYyvwbH.js")), an = v(() => import("./DropdownList-MXiyxJPe.js")), cn = v(() => import("./DropdownItem-BnztyWqA.js")), un = v(() => import("./DropdownSeparator-VDlHsSUm.js")), fn = v(() => import("./Loader-DEKZZM6p.js")), dn = v(() => import("./HoverMenu-C6qOG3ls.js")), mn = v(() => import("./HoverMenuList-MXiyxJPe.js")), pn = v(() => import("./HoverMenuItem-BnztyWqA.js")), vn = v(() => import("./HoverMenuSeparator-VDlHsSUm.js")), gn = v(() => import("./ContextMenu-BIuMmtFi.js")), hn = v(() => import("./ContextSubmenu-DqWusBgi.js")), xn = v(() => import("./ContextMenuList-MXiyxJPe.js")), wn = v(() => import("./ContextMenuItem-BnztyWqA.js")), yn = v(() => import("./ContextMenuSeparator-VDlHsSUm.js")), bn = v(() => import("./Confirm-UcjkCD4q.js")), An = v(() => import("./Select-CvRGW04B.js")), On = v(() => import("./SelectOption-SHRpCgUh.js")), Pn = v(() => import("./Textarea-HL8PxvCr.js")), Sn = v(() => import("./GridLayout-DyxgBUq2.js")), Rn = v(() => import("./GridRow-Ce-ddxll.js")), Ln = v(() => import("./GridColumn-DOSM5fMS.js"));
export {
  wn as $,
  Fe as A,
  pe as B,
  Ne as C,
  $t as D,
  sn as E,
  ze as F,
  _e as G,
  rn as H,
  Ie as I,
  ln as J,
  an as K,
  Xe as L,
  nn as M,
  cn as N,
  un as O,
  on as P,
  fn as Q,
  je as R,
  Ge as S,
  Ue as T,
  dn as U,
  mn as V,
  pn as W,
  vn as X,
  gn as Y,
  hn as Z,
  xn as _,
  Qt as a,
  yn as a0,
  bn as a1,
  An as a2,
  On as a3,
  Pn as a4,
  Sn as a5,
  Rn as a6,
  Ln as a7,
  Se as a8,
  Le as a9,
  Ee as aa,
  Ce as b,
  Te as c,
  Me as d,
  we as e,
  ae as f,
  Pe as g,
  Re as h,
  We as i,
  Ve as j,
  ke as k,
  _ as l,
  He as m,
  Be as n,
  De as o,
  $e as p,
  Ye as q,
  qe as r,
  ue as s,
  Je as t,
  Oe as u,
  Ke as v,
  Qe as w,
  Ze as x,
  tn as y,
  en as z
};
