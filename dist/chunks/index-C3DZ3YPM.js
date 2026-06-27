import { ref as A, onMounted as Tt, watch as rt, onBeforeUnmount as Ct, computed as j, shallowRef as It, getCurrentScope as Yt, onScopeDispose as Xt, shallowReadonly as J, unref as Gt, defineAsyncComponent as x } from "vue";
import '../assets/index-D2A7nnu6.css';const we = (t, e) => {
  const n = A([]), o = A();
  return {
    tabs: n,
    selectedTab: o,
    registerTab: (r) => {
      r.getAttribute("data-name") === t && (o.value = r), n.value.length || (o.value = r), n.value.push(r);
    },
    selectTab: (r) => {
      o.value = r;
      const l = r.getAttribute("data-name");
      l && e(l);
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
  const t = A(), e = A(), n = A(), o = A(), i = A(!1), s = A(), r = A(), l = (c) => () => {
    i.value = !1, c();
  };
  return {
    title: t,
    description: e,
    confirm: (c) => (t.value = c == null ? void 0 : c.title, e.value = c == null ? void 0 : c.description, n.value = (c == null ? void 0 : c.confirmButtonText) || "Подтвердить", o.value = (c == null ? void 0 : c.cancelButtonText) || "Отменить", i.value = !0, new Promise((a, u) => {
      s.value = l(a), r.value = l(u);
    })),
    isOpened: i,
    resolve: s,
    reject: r,
    confirmButtonText: n,
    cancelButtonText: o
  };
};
function Ut(t, e) {
  const n = A(null), o = A(null), i = () => {
    n.value && o.value && (n.value.unobserve(o.value), o.value = null);
  }, s = (r) => {
    !n.value || !r || (n.value.observe(r), o.value = r, e());
  };
  Tt(() => {
    n.value = new ResizeObserver(e), s(t.value);
  }), rt(t, (r) => {
    i(), s(r);
  }), Ct(() => {
    var r;
    i(), (r = n.value) == null || r.disconnect();
  });
}
const be = () => {
  const t = A(), e = A(), n = A();
  return Ut(t, () => {
    t.value && (e.value = t.value.clientWidth, n.value = t.value.clientHeight);
  }), { elementRef: t, width: e, height: n };
}, Ae = (t = !1) => {
  const e = A(t);
  return { show: () => {
    e.value = !0;
  }, close: () => {
    e.value = !1;
  }, visible: e };
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
  const o = k(t), i = gt(t), s = pt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = lt(r)), [r, lt(r)];
}
function Qt(t) {
  const e = lt(t);
  return [st(t), e, st(e)];
}
function st(t) {
  return t.replace(/start|end/g, (e) => Kt[e]);
}
function Zt(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function te(t, e, n, o) {
  const i = k(t);
  let s = Zt(H(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(st)))), s;
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
  const s = G(e), r = gt(e), l = pt(r), f = H(e), c = s === "y", a = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, m = o[l] / 2 - i[l] / 2;
  let d;
  switch (f) {
    case "top":
      d = {
        x: a,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: a,
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
      d[r] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      d[r] += m * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const ne = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = n, l = s.filter(Boolean), f = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: a,
    y: u
  } = xt(c, o, f), m = o, d = {}, p = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: v,
      fn: h
    } = l[g], {
      x: w,
      y,
      data: S,
      reset: P
    } = await h({
      x: a,
      y: u,
      initialPlacement: o,
      placement: m,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    a = w ?? a, u = y ?? u, d = {
      ...d,
      [v]: {
        ...d[v],
        ...S
      }
    }, P && p <= 50 && (p++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (c = P.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : P.rects), {
      x: a,
      y: u
    } = xt(c, m, f)), g = -1);
  }
  return {
    x: a,
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
    platform: s,
    rects: r,
    elements: l,
    strategy: f
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: a = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = U(e, t), p = Mt(d), v = l[m ? u === "floating" ? "reference" : "floating" : u], h = Z(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: a,
    strategy: f
  })), w = u === "floating" ? {
    x: o,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), S = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Z(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: y,
    strategy: f
  }) : w);
  return {
    top: (h.top - P.top + p.top) / S.y,
    bottom: (P.bottom - h.bottom + p.bottom) / S.y,
    left: (h.left - P.left + p.left) / S.x,
    right: (P.right - h.right + p.right) / S.x
  };
}
const Pe = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: s,
      platform: r,
      elements: l,
      middlewareData: f
    } = e, {
      element: c,
      padding: a = 0
    } = U(t, e) || {};
    if (c == null)
      return {};
    const u = Mt(a), m = {
      x: n,
      y: o
    }, d = gt(i), p = pt(d), g = await r.getDimensions(c), v = d === "y", h = v ? "top" : "left", w = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", S = s.reference[p] + s.reference[d] - m[d] - s.floating[p], P = m[d] - s.reference[d], L = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let b = L ? L[y] : 0;
    (!b || !await (r.isElement == null ? void 0 : r.isElement(L))) && (b = l.floating[y] || s.floating[p]);
    const O = S / 2 - P / 2, T = b / 2 - g[p] / 2 - 1, R = et(u[h], T), D = et(u[w], T), M = R, B = b - g[p] - D, C = b / 2 - g[p] / 2 + O, q = dt(M, C, B), _ = !f.arrow && k(i) != null && C !== q && s.reference[p] / 2 - (C < M ? R : D) - g[p] / 2 < 0, V = _ ? C < M ? C - M : C - B : 0;
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
  return (t ? [...n.filter((i) => k(i) === t), ...n.filter((i) => k(i) !== t)] : n.filter((i) => H(i) === i)).filter((i) => t ? k(i) === t || (e ? st(i) !== i : !1) : !0);
}
const Re = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: s,
        middlewareData: r,
        placement: l,
        platform: f,
        elements: c
      } = e, {
        crossAxis: a = !1,
        alignment: u,
        allowedPlacements: m = wt,
        autoAlignment: d = !0,
        ...p
      } = U(t, e), g = u !== void 0 || m === wt ? oe(u || null, d, m) : m, v = await at(e, p), h = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, w = g[h];
      if (w == null)
        return {};
      const y = Lt(w, s, await (f.isRTL == null ? void 0 : f.isRTL(c.floating)));
      if (l !== w)
        return {
          reset: {
            placement: g[0]
          }
        };
      const S = [v[H(w)], v[y[0]], v[y[1]]], P = [...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: w,
        overflows: S
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
      const b = P.map((R) => {
        const D = k(R.placement);
        return [R.placement, D && a ? (
          // Check along the mainAxis and main crossAxis side.
          R.overflows.slice(0, 2).reduce((M, B) => M + B, 0)
        ) : (
          // Check only the mainAxis.
          R.overflows[0]
        ), R.overflows];
      }).sort((R, D) => R[1] - D[1]), T = ((i = b.filter((R) => R[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        k(R[0]) ? 2 : 3
      ).every((D) => D <= 0))[0]) == null ? void 0 : i[0]) || b[0][0];
      return T !== l ? {
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
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: f,
        elements: c
      } = e, {
        mainAxis: a = !0,
        crossAxis: u = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...v
      } = U(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const h = H(i), w = G(l), y = H(l) === l, S = await (f.isRTL == null ? void 0 : f.isRTL(c.floating)), P = m || (y || !g ? [lt(l)] : Qt(l)), L = p !== "none";
      !m && L && P.push(...te(l, g, p, S));
      const b = [l, ...P], O = await at(e, v), T = [];
      let R = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (a && T.push(O[h]), u) {
        const C = Lt(i, r, S);
        T.push(O[C[0]], O[C[1]]);
      }
      if (R = [...R, {
        placement: i,
        overflows: T
      }], !T.every((C) => C <= 0)) {
        var D, M;
        const C = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, q = b[C];
        if (q)
          return {
            data: {
              index: C,
              overflows: R
            },
            reset: {
              placement: q
            }
          };
        let _ = (M = R.filter((V) => V.overflows[0] <= 0).sort((V, N) => V.overflows[1] - N.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!_)
          switch (d) {
            case "bestFit": {
              var B;
              const V = (B = R.filter((N) => {
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
              _ = l;
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
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = H(n), l = k(n), f = G(n) === "y", c = ["left", "top"].includes(r) ? -1 : 1, a = s && f ? -1 : 1, u = U(e, t);
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
  return l && typeof p == "number" && (d = l === "end" ? p * -1 : p), f ? {
    x: d * a,
    y: m * c
  } : {
    x: m * c,
    y: d * a
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
        y: s,
        placement: r,
        middlewareData: l
      } = e, f = await re(e, t);
      return r === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: i + f.x,
        y: s + f.y,
        data: {
          ...f,
          placement: r
        }
      };
    }
  };
}, se = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: l = {
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
      } = U(t, e), c = {
        x: n,
        y: o
      }, a = await at(e, f), u = G(H(i)), m = Dt(u);
      let d = c[m], p = c[u];
      if (s) {
        const v = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", w = d + a[v], y = d - a[h];
        d = dt(w, d, y);
      }
      if (r) {
        const v = u === "y" ? "top" : "left", h = u === "y" ? "bottom" : "right", w = p + a[v], y = p - a[h];
        p = dt(w, p, y);
      }
      const g = l.fn({
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
            [m]: s,
            [u]: r
          }
        }
      };
    }
  };
}, Oe = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        rects: s,
        platform: r,
        elements: l
      } = e, {
        apply: f = () => {
        },
        ...c
      } = U(t, e), a = await at(e, c), u = H(i), m = k(i), d = G(i) === "y", {
        width: p,
        height: g
      } = s.floating;
      let v, h;
      u === "top" || u === "bottom" ? (v = u, h = m === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = u, v = m === "end" ? "top" : "bottom");
      const w = g - a.top - a.bottom, y = p - a.left - a.right, S = et(g - a[v], w), P = et(p - a[h], y), L = !e.middlewareData.shift;
      let b = S, O = P;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (O = y), (o = e.middlewareData.shift) != null && o.enabled.y && (b = w), L && !m) {
        const R = X(a.left, 0), D = X(a.right, 0), M = X(a.top, 0), B = X(a.bottom, 0);
        d ? O = p - 2 * (R !== 0 || D !== 0 ? R + D : X(a.left, a.right)) : b = g - 2 * (M !== 0 || B !== 0 ? M + B : X(a.top, a.bottom));
      }
      await f({
        ...e,
        availableWidth: O,
        availableHeight: b
      });
      const T = await r.getDimensions(l.floating);
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
const yt = Math.min, tt = Math.max, ct = Math.round;
function Et(t) {
  const e = W(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, s = t.offsetHeight, r = ct(n) !== i || ct(o) !== s;
  return r && (n = i, o = s), { width: n, height: o, fallback: r };
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
function ut(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = W(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function le(t) {
  return ["table", "td", "th"].includes(Y(t));
}
function mt(t) {
  const e = /firefox/i.test(kt()), n = W(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const s = n.contain;
    return s != null && s.includes(i);
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
  const n = e.getBoundingClientRect(), { width: o, height: i, fallback: s } = Et(e);
  let r = (s ? ct(n.width) : n.width) / o, l = (s ? ct(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function nt(t, e, n, o) {
  var i, s;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(), l = Wt(t);
  let f = Ft;
  e && (o ? z(o) && (f = K(o)) : f = K(t));
  const c = l ? E(l) : window, a = !Vt() && n;
  let u = (r.left + (a && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / f.x, m = (r.top + (a && ((s = c.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / f.y, d = r.width / f.x, p = r.height / f.y;
  if (l) {
    const g = E(l), v = o && z(o) ? E(o) : o;
    let h = g.frameElement;
    for (; h && o && v !== g; ) {
      const w = K(h), y = h.getBoundingClientRect(), S = getComputedStyle(h);
      y.x += (h.clientLeft + parseFloat(S.paddingLeft)) * w.x, y.y += (h.clientTop + parseFloat(S.paddingTop)) * w.y, u *= w.x, m *= w.y, d *= w.x, p *= w.y, u += y.x, m += y.y, h = E(h).frameElement;
    }
  }
  return { width: d, height: p, top: m, right: u + d, bottom: m + p, left: u, x: u, y: m };
}
function I(t) {
  return ((Bt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ft(t) {
  return z(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Ht(t) {
  return nt(I(t)).left + ft(t).scrollLeft;
}
function ot(t) {
  if (Y(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || bt(t) && t.host || I(t);
  return bt(e) ? e.host : e;
}
function _t(t) {
  const e = ot(t);
  return ht(e) ? e.ownerDocument.body : F(e) && ut(e) ? e : _t(e);
}
function Nt(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = _t(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), s = E(o);
  return i ? e.concat(s, s.visualViewport || [], ut(o) ? o : []) : e.concat(o, Nt(o));
}
function At(t, e, n) {
  return e === "viewport" ? Z(function(o, i) {
    const s = E(o), r = I(o), l = s.visualViewport;
    let f = r.clientWidth, c = r.clientHeight, a = 0, u = 0;
    if (l) {
      f = l.width, c = l.height;
      const m = Vt();
      (m || !m && i === "fixed") && (a = l.offsetLeft, u = l.offsetTop);
    }
    return { width: f, height: c, x: a, y: u };
  }(t, n)) : z(e) ? Z(function(o, i) {
    const s = nt(o, !0, i === "fixed"), r = s.top + o.clientTop, l = s.left + o.clientLeft, f = F(o) ? K(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * f.x, height: o.clientHeight * f.y, x: l * f.x, y: r * f.y };
  }(e, n)) : Z(function(o) {
    const i = I(o), s = ft(o), r = o.ownerDocument.body, l = tt(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth), f = tt(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
    let c = -s.scrollLeft + Ht(o);
    const a = -s.scrollTop;
    return W(r).direction === "rtl" && (c += tt(i.clientWidth, r.clientWidth) - l), { width: l, height: f, x: c, y: a };
  }(I(t)));
}
function Pt(t) {
  return F(t) && W(t).position !== "fixed" ? t.offsetParent : null;
}
function Rt(t) {
  const e = E(t);
  let n = Pt(t);
  for (; n && le(n) && W(n).position === "static"; ) n = Pt(n);
  return n && (Y(n) === "html" || Y(n) === "body" && W(n).position === "static" && !mt(n)) ? e : n || function(o) {
    let i = ot(o);
    for (; F(i) && !ht(i); ) {
      if (mt(i)) return i;
      i = ot(i);
    }
    return null;
  }(t) || e;
}
function ce(t, e, n) {
  const o = F(e), i = I(e), s = nt(t, !0, n === "fixed", e);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (o || !o && n !== "fixed") if ((Y(e) !== "body" || ut(i)) && (r = ft(e)), F(e)) {
    const f = nt(e, !0);
    l.x = f.x + e.clientLeft, l.y = f.y + e.clientTop;
  } else i && (l.x = Ht(i));
  return { x: s.left + r.scrollLeft - l.x, y: s.top + r.scrollTop - l.y, width: s.width, height: s.height };
}
const ae = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const s = n === "clippingAncestors" ? function(c, a) {
    const u = a.get(c);
    if (u) return u;
    let m = Nt(c).filter((v) => z(v) && Y(v) !== "body"), d = null;
    const p = W(c).position === "fixed";
    let g = p ? ot(c) : c;
    for (; z(g) && !ht(g); ) {
      const v = W(g), h = mt(g);
      (p ? h || d : h || v.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = v : m = m.filter((w) => w !== g), g = ot(g);
    }
    return a.set(c, m), m;
  }(e, this._c) : [].concat(n), r = [...s, o], l = r[0], f = r.reduce((c, a) => {
    const u = At(e, a, i);
    return c.top = tt(u.top, c.top), c.right = yt(u.right, c.right), c.bottom = yt(u.bottom, c.bottom), c.left = tt(u.left, c.left), c;
  }, At(e, l, i));
  return { width: f.right - f.left, height: f.bottom - f.top, x: f.left, y: f.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: o } = t;
  const i = F(n), s = I(n);
  if (n === s) return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const f = { x: 0, y: 0 };
  if ((i || !i && o !== "fixed") && ((Y(n) !== "body" || ut(s)) && (r = ft(n)), F(n))) {
    const c = nt(n);
    l = K(n), f.x = c.x + n.clientLeft, f.y = c.y + n.clientTop;
  }
  return { width: e.width * l.x, height: e.height * l.y, x: e.x * l.x - r.scrollLeft * l.x + f.x, y: e.y * l.y - r.scrollTop * l.y + f.y };
}, isElement: z, getDimensions: function(t) {
  return F(t) ? Et(t) : t.getBoundingClientRect();
}, getOffsetParent: Rt, getDocumentElement: I, getScale: K, async getElementRects(t) {
  let { reference: e, floating: n, strategy: o } = t;
  const i = this.getOffsetParent || Rt, s = this.getDimensions;
  return { reference: ce(e, await i(n), o), floating: { x: 0, y: 0, ...await s(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => W(t).direction === "rtl" }, ue = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: ae, ...n }, s = { ...i.platform, _c: o };
  return ne(t, e, { ...i, platform: s });
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
function St(t) {
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
  }), s = j(() => Q(n.middleware)), r = j(() => {
    var b;
    return (b = Q(n.placement)) != null ? b : "bottom";
  }), l = j(() => {
    var b;
    return (b = Q(n.strategy)) != null ? b : "absolute";
  }), f = j(() => {
    var b;
    return (b = Q(n.transform)) != null ? b : !0;
  }), c = j(() => St(t.value)), a = j(() => St(e.value)), u = A(0), m = A(0), d = A(l.value), p = A(r.value), g = It({}), v = A(!1), h = j(() => {
    const b = {
      position: d.value,
      left: "0",
      top: "0"
    };
    if (!a.value)
      return b;
    const O = Ot(a.value, u.value), T = Ot(a.value, m.value);
    return f.value ? {
      ...b,
      transform: "translate(" + O + "px, " + T + "px)",
      ...jt(a.value) >= 1.5 && {
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
    if (c.value == null || a.value == null)
      return;
    const b = i.value;
    ue(c.value, a.value, {
      middleware: s.value,
      placement: r.value,
      strategy: l.value
    }).then((O) => {
      u.value = O.x, m.value = O.y, d.value = O.strategy, p.value = O.placement, g.value = O.middlewareData, v.value = b !== !1;
    });
  }
  function S() {
    typeof w == "function" && (w(), w = void 0);
  }
  function P() {
    if (S(), o === void 0) {
      y();
      return;
    }
    if (c.value != null && a.value != null) {
      w = o(c.value, a.value, y);
      return;
    }
  }
  function L() {
    i.value || (v.value = !1);
  }
  return rt([s, r, l, i], y, {
    flush: "sync"
  }), rt([c, a], P, {
    flush: "sync"
  }), rt(i, L, {
    flush: "sync"
  }), Yt() && Xt(S), {
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
}, Te = () => {
  const t = A(!1), e = A({ x: 0, y: 0 }), n = A(null), o = A(null), i = A(null), s = A([ie(), se()]), { floatingStyles: r, update: l } = ge(o, i, {
    placement: "right-start",
    strategy: "fixed",
    middleware: s
  }), f = (u) => {
    u.preventDefault(), e.value = { x: u.clientX, y: u.clientY }, t.value = !0, l();
  }, c = () => {
    t.value = !1;
  }, a = (u) => {
    n.value && !he(u.target, n.value) && (t.value = !1);
  };
  return Tt(() => {
    n.value && (n.value.addEventListener("contextmenu", f), document.addEventListener("click", c), document.addEventListener("contextmenu", a));
  }), Ct(() => {
    n.value && (n.value.removeEventListener("contextmenu", f), document.removeEventListener("click", c), document.addEventListener("contextmenu", a));
  }), { contextMenuData: { floatingStyles: r, floatingRef: i, position: e, positionRef: o, isContextMenuVisible: t }, targetRef: n };
}, Ce = x(() => import("./Action-fDi_LsEN.js")), De = x(() => import("./Avatar-DFhiR5_w.js")), Le = x(() => import("./Button-HdXPJ-2Y.js")), Me = x(() => import("./Card-CAkQbLYr.js")), Ee = x(() => import("./Gap-BIRg6ZW5.js")), ke = x(() => import("./Input-DHnSOoAD.js")), Be = x(() => import("./Row-BZ4BJTXr.js")), Ve = x(() => import("./Sidebar-CN47ZNxD.js")), We = x(() => import("./Stack-BpiNSXIP.js")), Fe = x(() => import("./Tab-b1ZSGMd9.js")), He = x(() => import("./Tabs-DsXug4Up.js")), _e = x(() => import("./Text-CUYuNdJR.js")), Ne = x(() => import("./Separator-CzTav143.js")), $e = x(() => import("./Tooltip-BOqxvkGr.js")), je = x(() => import("./Badge-0KJZvxra.js")), ze = x(() => import("./SidebarItem-1Oce3lT-.js")), Ie = x(() => import("./SidebarList-BjBRjSEz.js")), Ye = x(() => import("./Modal-D-eIQxFa.js")), Xe = x(() => import("./Dropdown-CfTtSLIv.js")), Ge = x(() => import("./DropdownList-MXiyxJPe.js")), Ue = x(() => import("./DropdownItem-Co5WEYXg.js")), qe = x(() => import("./DropdownSeparator-VDlHsSUm.js")), Je = x(() => import("./Loader-DEKZZM6p.js")), Ke = x(() => import("./HoverMenu-BS9-8mOZ.js")), Qe = x(() => import("./HoverMenuList-MXiyxJPe.js")), Ze = x(() => import("./HoverMenuItem-Co5WEYXg.js")), tn = x(() => import("./HoverMenuSeparator-VDlHsSUm.js")), en = x(() => import("./ContextMenu-BIuMmtFi.js")), nn = x(() => import("./ContextSubmenu-BUg961Y3.js")), on = x(() => import("./ContextMenuList-MXiyxJPe.js")), rn = x(() => import("./ContextMenuItem-Co5WEYXg.js")), sn = x(() => import("./ContextMenuSeparator-VDlHsSUm.js")), ln = x(() => import("./Confirm-DekXWQ_1.js")), cn = x(() => import("./Select-BMyxh9QP.js")), an = x(() => import("./SelectOption-B_XklJ94.js")), un = x(() => import("./Textarea-HL8PxvCr.js"));
export {
  Ce as A,
  ue as B,
  Me as C,
  Nt as D,
  Ze as E,
  tn as F,
  Ee as G,
  Ke as H,
  ke as I,
  en as J,
  nn as K,
  Je as L,
  Ye as M,
  on as N,
  rn as O,
  sn as P,
  ln as Q,
  Be as R,
  Ve as S,
  Fe as T,
  cn as U,
  an as V,
  un as W,
  ye as X,
  Ae as Y,
  Te as Z,
  Ut as a,
  ge as b,
  Re as c,
  Pe as d,
  Oe as e,
  ie as f,
  xe as g,
  be as h,
  De as i,
  Le as j,
  We as k,
  He as l,
  _e as m,
  Ne as n,
  Se as o,
  $e as p,
  je as q,
  ze as r,
  se as s,
  Ie as t,
  we as u,
  Xe as v,
  Ge as w,
  Ue as x,
  qe as y,
  Qe as z
};
