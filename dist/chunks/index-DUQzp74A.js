import { ref as A, onMounted as Tt, onBeforeUnmount as Ct, computed as j, shallowRef as It, watch as ft, getCurrentScope as Yt, onScopeDispose as Xt, shallowReadonly as J, unref as Gt, defineAsyncComponent as x } from "vue";
import '../assets/index-Bhr2TDHv.css';const we = (t, e) => {
  const n = A([]), o = A();
  return {
    tabs: n,
    selectedTab: o,
    registerTab: (r) => {
      r.getAttribute("data-name") === t && (o.value = r), n.value.length || (o.value = r), n.value.push(r);
    },
    selectTab: (r) => {
      o.value = r;
      const s = r.getAttribute("data-name");
      s && e(s);
    }
  };
}, xe = (t, e) => {
  const n = A(/* @__PURE__ */ new Map()), o = A();
  return {
    options: n,
    selectedOption: o,
    registerOption: (r) => {
      t && r.value === t && !o.value && (o.value = r), n.value.set(r.value, r.label);
    },
    selectOption: (r) => {
      o.value = r, e == null || e(r);
    }
  };
}, ye = () => {
  const t = A(), e = A(), n = A(), o = A(), i = A(!1), l = A(), r = A(), s = (a) => () => {
    i.value = !1, a();
  };
  return {
    title: t,
    description: e,
    confirm: (a) => (t.value = a == null ? void 0 : a.title, e.value = a == null ? void 0 : a.description, n.value = (a == null ? void 0 : a.confirmButtonText) || "Подтвердить", o.value = (a == null ? void 0 : a.cancelButtonText) || "Отменить", i.value = !0, new Promise((c, u) => {
      l.value = s(c), r.value = s(u);
    })),
    isOpened: i,
    resolve: l,
    reject: r,
    confirmButtonText: n,
    cancelButtonText: o
  };
};
function Ut(t, e) {
  const n = A(null);
  Tt(() => {
    n.value = new ResizeObserver(e), t.value && n.value.observe(t.value), e();
  }), Ct(() => {
    n.value && t.value && n.value.unobserve(t.value);
  });
}
const be = () => {
  const t = A(), e = A(), n = A();
  return Ut(t, () => {
    t.value && (e.value = t.value.clientWidth, n.value = t.value.clientHeight);
  }), { elementRef: t, width: e, height: n };
}, qt = ["top", "right", "bottom", "left"], vt = ["start", "end"], wt = /* @__PURE__ */ qt.reduce((t, e) => t.concat(e, e + "-" + vt[0], e + "-" + vt[1]), []), et = Math.min, X = Math.max, Jt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Kt = {
  start: "end",
  end: "start"
};
function dt(t, e, n) {
  return X(t, et(e, n));
}
function U(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function H(t) {
  return t.split("-")[0];
}
function k(t) {
  return t.split("-")[1];
}
function Dt(t) {
  return t === "x" ? "y" : "x";
}
function pt(t) {
  return t === "y" ? "height" : "width";
}
function G(t) {
  return ["top", "bottom"].includes(H(t)) ? "y" : "x";
}
function gt(t) {
  return Dt(G(t));
}
function Lt(t, e, n) {
  n === void 0 && (n = !1);
  const o = k(t), i = gt(t), l = pt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (r = lt(r)), [r, lt(r)];
}
function Qt(t) {
  const e = lt(t);
  return [rt(t), e, rt(e)];
}
function rt(t) {
  return t.replace(/start|end/g, (e) => Kt[e]);
}
function Zt(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], l = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? l : r;
    default:
      return [];
  }
}
function te(t, e, n, o) {
  const i = k(t);
  let l = Zt(H(t), n === "start", o);
  return i && (l = l.map((r) => r + "-" + i), e && (l = l.concat(l.map(rt)))), l;
}
function lt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Jt[e]);
}
function ee(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Mt(t) {
  return typeof t != "number" ? ee(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Z(t) {
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
function xt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const l = G(e), r = gt(e), s = pt(r), f = H(e), a = l === "y", c = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, m = o[s] / 2 - i[s] / 2;
  let d;
  switch (f) {
    case "top":
      d = {
        x: c,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      d = {
        x: o.x - i.width,
        y: u
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
      d[r] -= m * (n && a ? -1 : 1);
      break;
    case "end":
      d[r] += m * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const ne = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: l = [],
    platform: r
  } = n, s = l.filter(Boolean), f = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: c,
    y: u
  } = xt(a, o, f), m = o, d = {}, p = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: v,
      fn: h
    } = s[g], {
      x: w,
      y,
      data: R,
      reset: P
    } = await h({
      x: c,
      y: u,
      initialPlacement: o,
      placement: m,
      strategy: i,
      middlewareData: d,
      rects: a,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    c = w ?? c, u = y ?? u, d = {
      ...d,
      [v]: {
        ...d[v],
        ...R
      }
    }, P && p <= 50 && (p++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (a = P.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : P.rects), {
      x: c,
      y: u
    } = xt(a, m, f)), g = -1);
  }
  return {
    x: c,
    y: u,
    placement: m,
    strategy: i,
    middlewareData: d
  };
};
async function at(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: l,
    rects: r,
    elements: s,
    strategy: f
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = U(e, t), p = Mt(d), v = s[m ? u === "floating" ? "reference" : "floating" : u], h = Z(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(v))) == null || n ? v : v.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: a,
    rootBoundary: c,
    strategy: f
  })), w = u === "floating" ? {
    x: o,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, y = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), R = await (l.isElement == null ? void 0 : l.isElement(y)) ? await (l.getScale == null ? void 0 : l.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Z(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: y,
    strategy: f
  }) : w);
  return {
    top: (h.top - P.top + p.top) / R.y,
    bottom: (P.bottom - h.bottom + p.bottom) / R.y,
    left: (h.left - P.left + p.left) / R.x,
    right: (P.right - h.right + p.right) / R.x
  };
}
const Ae = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: l,
      platform: r,
      elements: s,
      middlewareData: f
    } = e, {
      element: a,
      padding: c = 0
    } = U(t, e) || {};
    if (a == null)
      return {};
    const u = Mt(c), m = {
      x: n,
      y: o
    }, d = gt(i), p = pt(d), g = await r.getDimensions(a), v = d === "y", h = v ? "top" : "left", w = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", R = l.reference[p] + l.reference[d] - m[d] - l.floating[p], P = m[d] - l.reference[d], L = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
    let b = L ? L[y] : 0;
    (!b || !await (r.isElement == null ? void 0 : r.isElement(L))) && (b = s.floating[y] || l.floating[p]);
    const O = R / 2 - P / 2, T = b / 2 - g[p] / 2 - 1, S = et(u[h], T), D = et(u[w], T), M = S, B = b - g[p] - D, C = b / 2 - g[p] / 2 + O, q = dt(M, C, B), _ = !f.arrow && k(i) != null && C !== q && l.reference[p] / 2 - (C < M ? S : D) - g[p] / 2 < 0, V = _ ? C < M ? C - M : C - B : 0;
    return {
      [d]: m[d] + V,
      data: {
        [d]: q,
        centerOffset: C - q - V,
        ..._ && {
          alignmentOffset: V
        }
      },
      reset: _
    };
  }
});
function oe(t, e, n) {
  return (t ? [...n.filter((i) => k(i) === t), ...n.filter((i) => k(i) !== t)] : n.filter((i) => H(i) === i)).filter((i) => t ? k(i) === t || (e ? rt(i) !== i : !1) : !0);
}
const Pe = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: l,
        middlewareData: r,
        placement: s,
        platform: f,
        elements: a
      } = e, {
        crossAxis: c = !1,
        alignment: u,
        allowedPlacements: m = wt,
        autoAlignment: d = !0,
        ...p
      } = U(t, e), g = u !== void 0 || m === wt ? oe(u || null, d, m) : m, v = await at(e, p), h = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, w = g[h];
      if (w == null)
        return {};
      const y = Lt(w, l, await (f.isRTL == null ? void 0 : f.isRTL(a.floating)));
      if (s !== w)
        return {
          reset: {
            placement: g[0]
          }
        };
      const R = [v[H(w)], v[y[0]], v[y[1]]], P = [...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: R
      }], L = g[h + 1];
      if (L)
        return {
          data: {
            index: h + 1,
            overflows: P
          },
          reset: {
            placement: L
          }
        };
      const b = P.map((S) => {
        const D = k(S.placement);
        return [S.placement, D && c ? (
          // Check along the mainAxis and main crossAxis side.
          S.overflows.slice(0, 2).reduce((M, B) => M + B, 0)
        ) : (
          // Check only the mainAxis.
          S.overflows[0]
        ), S.overflows];
      }).sort((S, D) => S[1] - D[1]), T = ((i = b.filter((S) => S[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        k(S[0]) ? 2 : 3
      ).every((D) => D <= 0))[0]) == null ? void 0 : i[0]) || b[0][0];
      return T !== s ? {
        data: {
          index: h + 1,
          overflows: P
        },
        reset: {
          placement: T
        }
      } : {};
    }
  };
}, ie = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: l,
        rects: r,
        initialPlacement: s,
        platform: f,
        elements: a
      } = e, {
        mainAxis: c = !0,
        crossAxis: u = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...v
      } = U(t, e);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const h = H(i), w = G(s), y = H(s) === s, R = await (f.isRTL == null ? void 0 : f.isRTL(a.floating)), P = m || (y || !g ? [lt(s)] : Qt(s)), L = p !== "none";
      !m && L && P.push(...te(s, g, p, R));
      const b = [s, ...P], O = await at(e, v), T = [];
      let S = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (c && T.push(O[h]), u) {
        const C = Lt(i, r, R);
        T.push(O[C[0]], O[C[1]]);
      }
      if (S = [...S, {
        placement: i,
        overflows: T
      }], !T.every((C) => C <= 0)) {
        var D, M;
        const C = (((D = l.flip) == null ? void 0 : D.index) || 0) + 1, q = b[C];
        if (q)
          return {
            data: {
              index: C,
              overflows: S
            },
            reset: {
              placement: q
            }
          };
        let _ = (M = S.filter((V) => V.overflows[0] <= 0).sort((V, N) => V.overflows[1] - N.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!_)
          switch (d) {
            case "bestFit": {
              var B;
              const V = (B = S.filter((N) => {
                if (L) {
                  const $ = G(N.placement);
                  return $ === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter(($) => $ > 0).reduce(($, zt) => $ + zt, 0)]).sort((N, $) => N[1] - $[1])[0]) == null ? void 0 : B[0];
              V && (_ = V);
              break;
            }
            case "initialPlacement":
              _ = s;
              break;
          }
        if (i !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
async function re(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, l = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = H(n), s = k(n), f = G(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, c = l && f ? -1 : 1, u = U(e, t);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: p
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return s && typeof p == "number" && (d = s === "end" ? p * -1 : p), f ? {
    x: d * c,
    y: m * a
  } : {
    x: m * a,
    y: d * c
  };
}
const Se = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: l,
        placement: r,
        middlewareData: s
      } = e, f = await re(e, t);
      return r === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: i + f.x,
        y: l + f.y,
        data: {
          ...f,
          placement: r
        }
      };
    }
  };
}, le = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: l = !0,
        crossAxis: r = !1,
        limiter: s = {
          fn: (v) => {
            let {
              x: h,
              y: w
            } = v;
            return {
              x: h,
              y: w
            };
          }
        },
        ...f
      } = U(t, e), a = {
        x: n,
        y: o
      }, c = await at(e, f), u = G(H(i)), m = Dt(u);
      let d = a[m], p = a[u];
      if (l) {
        const v = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", w = d + c[v], y = d - c[h];
        d = dt(w, d, y);
      }
      if (r) {
        const v = u === "y" ? "top" : "left", h = u === "y" ? "bottom" : "right", w = p + c[v], y = p - c[h];
        p = dt(w, p, y);
      }
      const g = s.fn({
        ...e,
        [m]: d,
        [u]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [m]: l,
            [u]: r
          }
        }
      };
    }
  };
}, Re = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        rects: l,
        platform: r,
        elements: s
      } = e, {
        apply: f = () => {
        },
        ...a
      } = U(t, e), c = await at(e, a), u = H(i), m = k(i), d = G(i) === "y", {
        width: p,
        height: g
      } = l.floating;
      let v, h;
      u === "top" || u === "bottom" ? (v = u, h = m === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h = u, v = m === "end" ? "top" : "bottom");
      const w = g - c.top - c.bottom, y = p - c.left - c.right, R = et(g - c[v], w), P = et(p - c[h], y), L = !e.middlewareData.shift;
      let b = R, O = P;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (O = y), (o = e.middlewareData.shift) != null && o.enabled.y && (b = w), L && !m) {
        const S = X(c.left, 0), D = X(c.right, 0), M = X(c.top, 0), B = X(c.bottom, 0);
        d ? O = p - 2 * (S !== 0 || D !== 0 ? S + D : X(c.left, c.right)) : b = g - 2 * (M !== 0 || B !== 0 ? M + B : X(c.top, c.bottom));
      }
      await f({
        ...e,
        availableWidth: O,
        availableHeight: b
      });
      const T = await r.getDimensions(s.floating);
      return p !== T.width || g !== T.height ? {
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
function W(t) {
  return E(t).getComputedStyle(t);
}
const yt = Math.min, tt = Math.max, st = Math.round;
function Et(t) {
  const e = W(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, l = t.offsetHeight, r = st(n) !== i || st(o) !== l;
  return r && (n = i, o = l), { width: n, height: o, fallback: r };
}
function Y(t) {
  return Bt(t) ? (t.nodeName || "").toLowerCase() : "";
}
let it;
function kt() {
  if (it) return it;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (it = t.brands.map((e) => e.brand + "/" + e.version).join(" "), it) : navigator.userAgent;
}
function F(t) {
  return t instanceof E(t).HTMLElement;
}
function z(t) {
  return t instanceof E(t).Element;
}
function Bt(t) {
  return t instanceof E(t).Node;
}
function bt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof E(t).ShadowRoot || t instanceof ShadowRoot;
}
function ct(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = W(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function se(t) {
  return ["table", "td", "th"].includes(Y(t));
}
function mt(t) {
  const e = /firefox/i.test(kt()), n = W(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const l = n.contain;
    return l != null && l.includes(i);
  });
}
function Vt() {
  return !/^((?!chrome|android).)*safari/i.test(kt());
}
function ht(t) {
  return ["html", "body", "#document"].includes(Y(t));
}
function Wt(t) {
  return z(t) ? t : t.contextElement;
}
const Ft = { x: 1, y: 1 };
function K(t) {
  const e = Wt(t);
  if (!F(e)) return Ft;
  const n = e.getBoundingClientRect(), { width: o, height: i, fallback: l } = Et(e);
  let r = (l ? st(n.width) : n.width) / o, s = (l ? st(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), s && Number.isFinite(s) || (s = 1), { x: r, y: s };
}
function nt(t, e, n, o) {
  var i, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(), s = Wt(t);
  let f = Ft;
  e && (o ? z(o) && (f = K(o)) : f = K(t));
  const a = s ? E(s) : window, c = !Vt() && n;
  let u = (r.left + (c && ((i = a.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / f.x, m = (r.top + (c && ((l = a.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / f.y, d = r.width / f.x, p = r.height / f.y;
  if (s) {
    const g = E(s), v = o && z(o) ? E(o) : o;
    let h = g.frameElement;
    for (; h && o && v !== g; ) {
      const w = K(h), y = h.getBoundingClientRect(), R = getComputedStyle(h);
      y.x += (h.clientLeft + parseFloat(R.paddingLeft)) * w.x, y.y += (h.clientTop + parseFloat(R.paddingTop)) * w.y, u *= w.x, m *= w.y, d *= w.x, p *= w.y, u += y.x, m += y.y, h = E(h).frameElement;
    }
  }
  return { width: d, height: p, top: m, right: u + d, bottom: m + p, left: u, x: u, y: m };
}
function I(t) {
  return ((Bt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ut(t) {
  return z(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Ht(t) {
  return nt(I(t)).left + ut(t).scrollLeft;
}
function ot(t) {
  if (Y(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || bt(t) && t.host || I(t);
  return bt(e) ? e.host : e;
}
function _t(t) {
  const e = ot(t);
  return ht(e) ? e.ownerDocument.body : F(e) && ct(e) ? e : _t(e);
}
function Nt(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = _t(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), l = E(o);
  return i ? e.concat(l, l.visualViewport || [], ct(o) ? o : []) : e.concat(o, Nt(o));
}
function At(t, e, n) {
  return e === "viewport" ? Z(function(o, i) {
    const l = E(o), r = I(o), s = l.visualViewport;
    let f = r.clientWidth, a = r.clientHeight, c = 0, u = 0;
    if (s) {
      f = s.width, a = s.height;
      const m = Vt();
      (m || !m && i === "fixed") && (c = s.offsetLeft, u = s.offsetTop);
    }
    return { width: f, height: a, x: c, y: u };
  }(t, n)) : z(e) ? Z(function(o, i) {
    const l = nt(o, !0, i === "fixed"), r = l.top + o.clientTop, s = l.left + o.clientLeft, f = F(o) ? K(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * f.x, height: o.clientHeight * f.y, x: s * f.x, y: r * f.y };
  }(e, n)) : Z(function(o) {
    const i = I(o), l = ut(o), r = o.ownerDocument.body, s = tt(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth), f = tt(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -l.scrollLeft + Ht(o);
    const c = -l.scrollTop;
    return W(r).direction === "rtl" && (a += tt(i.clientWidth, r.clientWidth) - s), { width: s, height: f, x: a, y: c };
  }(I(t)));
}
function Pt(t) {
  return F(t) && W(t).position !== "fixed" ? t.offsetParent : null;
}
function St(t) {
  const e = E(t);
  let n = Pt(t);
  for (; n && se(n) && W(n).position === "static"; ) n = Pt(n);
  return n && (Y(n) === "html" || Y(n) === "body" && W(n).position === "static" && !mt(n)) ? e : n || function(o) {
    let i = ot(o);
    for (; F(i) && !ht(i); ) {
      if (mt(i)) return i;
      i = ot(i);
    }
    return null;
  }(t) || e;
}
function ae(t, e, n) {
  const o = F(e), i = I(e), l = nt(t, !0, n === "fixed", e);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (o || !o && n !== "fixed") if ((Y(e) !== "body" || ct(i)) && (r = ut(e)), F(e)) {
    const f = nt(e, !0);
    s.x = f.x + e.clientLeft, s.y = f.y + e.clientTop;
  } else i && (s.x = Ht(i));
  return { x: l.left + r.scrollLeft - s.x, y: l.top + r.scrollTop - s.y, width: l.width, height: l.height };
}
const ce = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const l = n === "clippingAncestors" ? function(a, c) {
    const u = c.get(a);
    if (u) return u;
    let m = Nt(a).filter((v) => z(v) && Y(v) !== "body"), d = null;
    const p = W(a).position === "fixed";
    let g = p ? ot(a) : a;
    for (; z(g) && !ht(g); ) {
      const v = W(g), h = mt(g);
      (p ? h || d : h || v.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = v : m = m.filter((w) => w !== g), g = ot(g);
    }
    return c.set(a, m), m;
  }(e, this._c) : [].concat(n), r = [...l, o], s = r[0], f = r.reduce((a, c) => {
    const u = At(e, c, i);
    return a.top = tt(u.top, a.top), a.right = yt(u.right, a.right), a.bottom = yt(u.bottom, a.bottom), a.left = tt(u.left, a.left), a;
  }, At(e, s, i));
  return { width: f.right - f.left, height: f.bottom - f.top, x: f.left, y: f.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: o } = t;
  const i = F(n), l = I(n);
  if (n === l) return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const f = { x: 0, y: 0 };
  if ((i || !i && o !== "fixed") && ((Y(n) !== "body" || ct(l)) && (r = ut(n)), F(n))) {
    const a = nt(n);
    s = K(n), f.x = a.x + n.clientLeft, f.y = a.y + n.clientTop;
  }
  return { width: e.width * s.x, height: e.height * s.y, x: e.x * s.x - r.scrollLeft * s.x + f.x, y: e.y * s.y - r.scrollTop * s.y + f.y };
}, isElement: z, getDimensions: function(t) {
  return F(t) ? Et(t) : t.getBoundingClientRect();
}, getOffsetParent: St, getDocumentElement: I, getScale: K, async getElementRects(t) {
  let { reference: e, floating: n, strategy: o } = t;
  const i = this.getOffsetParent || St, l = this.getDimensions;
  return { reference: ae(e, await i(n), o), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => W(t).direction === "rtl" }, ue = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: ce, ...n }, l = { ...i.platform, _c: o };
  return ne(t, e, { ...i, platform: l });
};
function fe() {
  return typeof window < "u";
}
function de(t) {
  return $t(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function me(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function $t(t) {
  return fe() ? t instanceof Node || t instanceof me(t).Node : !1;
}
function pe(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function Rt(t) {
  if (pe(t)) {
    const e = t.$el;
    return $t(e) && de(e) === "#comment" ? null : e;
  }
  return t;
}
function Q(t) {
  return typeof t == "function" ? t() : Gt(t);
}
function jt(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ot(t, e) {
  const n = jt(t);
  return Math.round(e * n) / n;
}
function ge(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = j(() => {
    var b;
    return (b = Q(n.open)) != null ? b : !0;
  }), l = j(() => Q(n.middleware)), r = j(() => {
    var b;
    return (b = Q(n.placement)) != null ? b : "bottom";
  }), s = j(() => {
    var b;
    return (b = Q(n.strategy)) != null ? b : "absolute";
  }), f = j(() => {
    var b;
    return (b = Q(n.transform)) != null ? b : !0;
  }), a = j(() => Rt(t.value)), c = j(() => Rt(e.value)), u = A(0), m = A(0), d = A(s.value), p = A(r.value), g = It({}), v = A(!1), h = j(() => {
    const b = {
      position: d.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return b;
    const O = Ot(c.value, u.value), T = Ot(c.value, m.value);
    return f.value ? {
      ...b,
      transform: "translate(" + O + "px, " + T + "px)",
      ...jt(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: d.value,
      left: O + "px",
      top: T + "px"
    };
  });
  let w;
  function y() {
    if (a.value == null || c.value == null)
      return;
    const b = i.value;
    ue(a.value, c.value, {
      middleware: l.value,
      placement: r.value,
      strategy: s.value
    }).then((O) => {
      u.value = O.x, m.value = O.y, d.value = O.strategy, p.value = O.placement, g.value = O.middlewareData, v.value = b !== !1;
    });
  }
  function R() {
    typeof w == "function" && (w(), w = void 0);
  }
  function P() {
    if (R(), o === void 0) {
      y();
      return;
    }
    if (a.value != null && c.value != null) {
      w = o(a.value, c.value, y);
      return;
    }
  }
  function L() {
    i.value || (v.value = !1);
  }
  return ft([l, r, s, i], y, {
    flush: "sync"
  }), ft([a, c], P, {
    flush: "sync"
  }), ft(i, L, {
    flush: "sync"
  }), Yt() && Xt(R), {
    x: J(u),
    y: J(m),
    strategy: J(d),
    placement: J(p),
    middlewareData: J(g),
    isPositioned: J(v),
    floatingStyles: h,
    update: y
  };
}
const he = (t, e) => {
  for (; t; ) {
    if (t === e) return !0;
    t = t.parentNode;
  }
  return !1;
}, Oe = () => {
  const t = A(!1), e = A({ x: 0, y: 0 }), n = A(null), o = A(null), i = A(null), l = A([ie(), le()]), { floatingStyles: r, update: s } = ge(o, i, {
    placement: "right-start",
    strategy: "fixed",
    middleware: l
  }), f = (u) => {
    u.preventDefault(), e.value = { x: u.clientX, y: u.clientY }, t.value = !0, s();
  }, a = () => {
    t.value = !1;
  }, c = (u) => {
    n.value && !he(u.target, n.value) && (t.value = !1);
  };
  return Tt(() => {
    n.value && (n.value.addEventListener("contextmenu", f), document.addEventListener("click", a), document.addEventListener("contextmenu", c));
  }), Ct(() => {
    n.value && (n.value.removeEventListener("contextmenu", f), document.removeEventListener("click", a), document.addEventListener("contextmenu", c));
  }), { contextMenuData: { floatingStyles: r, floatingRef: i, position: e, positionRef: o, isContextMenuVisible: t }, targetRef: n };
}, Te = x(() => import("./Action-fDi_LsEN.js")), Ce = x(() => import("./Avatar-S0u9nYWV.js")), De = x(() => import("./Button-BGrVkKp4.js")), Le = x(() => import("./Card-CAkQbLYr.js")), Me = x(() => import("./Gap-BIRg6ZW5.js")), Ee = x(() => import("./Input-BDSBoj6C.js")), ke = x(() => import("./Row-BZ4BJTXr.js")), Be = x(() => import("./Sidebar-CN47ZNxD.js")), Ve = x(() => import("./Stack-BpiNSXIP.js")), We = x(() => import("./Tab-b1ZSGMd9.js")), Fe = x(() => import("./Tabs-BMpR41qc.js")), He = x(() => import("./Text-CUYuNdJR.js")), _e = x(() => import("./Separator-CzTav143.js")), Ne = x(() => import("./Tooltip-D3OhvKug.js")), $e = x(() => import("./Badge-0KJZvxra.js")), je = x(() => import("./SidebarItem-B9ekhxtT.js")), ze = x(() => import("./SidebarList-BjBRjSEz.js")), Ie = x(() => import("./Modal-D-eIQxFa.js")), Ye = x(() => import("./Dropdown-LEVN9vo1.js")), Xe = x(() => import("./DropdownList-MXiyxJPe.js")), Ge = x(() => import("./DropdownItem-Co5WEYXg.js")), Ue = x(() => import("./DropdownSeparator-VDlHsSUm.js")), qe = x(() => import("./Loader-DEKZZM6p.js")), Je = x(() => import("./HoverMenu-BEzQWw7n.js")), Ke = x(() => import("./HoverMenuList-MXiyxJPe.js")), Qe = x(() => import("./HoverMenuItem-Co5WEYXg.js")), Ze = x(() => import("./HoverMenuSeparator-VDlHsSUm.js")), tn = x(() => import("./ContextMenu-BIuMmtFi.js")), en = x(() => import("./ContextSubmenu-BB83DZRY.js")), nn = x(() => import("./ContextMenuList-MXiyxJPe.js")), on = x(() => import("./ContextMenuItem-Co5WEYXg.js")), rn = x(() => import("./ContextMenuSeparator-VDlHsSUm.js")), ln = x(() => import("./Confirm-B-4y8OMf.js")), sn = x(() => import("./Select-BD65Rlmx.js")), an = x(() => import("./SelectOption-B_XklJ94.js")), cn = x(() => import("./Textarea-CuwtxaZs.js"));
export {
  Te as A,
  ue as B,
  Le as C,
  Nt as D,
  Qe as E,
  Ze as F,
  Me as G,
  Je as H,
  Ee as I,
  tn as J,
  en as K,
  qe as L,
  Ie as M,
  nn as N,
  on as O,
  rn as P,
  ln as Q,
  ke as R,
  Be as S,
  We as T,
  sn as U,
  an as V,
  cn as W,
  ye as X,
  Oe as Y,
  Ut as a,
  ge as b,
  Pe as c,
  Ae as d,
  Re as e,
  ie as f,
  xe as g,
  be as h,
  Ce as i,
  De as j,
  Ve as k,
  Fe as l,
  He as m,
  _e as n,
  Se as o,
  Ne as p,
  $e as q,
  je as r,
  le as s,
  ze as t,
  we as u,
  Ye as v,
  Xe as w,
  Ge as x,
  Ue as y,
  Ke as z
};
