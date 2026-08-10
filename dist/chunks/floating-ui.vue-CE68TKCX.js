import { a as e, c as t, d as n, f as r, i, l as a, o, p as s, r as c, u as l } from "./floating-ui.core-BHEaoHGY.js";
import * as u from "vue";
//#region \0rolldown/runtime.js
var d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyNames, m = Object.prototype.hasOwnProperty, h = (e, t) => {
	let n = {};
	for (var r in e) d(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || d(n, Symbol.toStringTag, { value: "Module" }), n;
}, g = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = p(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !m.call(e, s) && s !== n && d(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = f(t, s)) || r.enumerable
	});
	return e;
}, _ = (e, t, n) => (g(e, t, "default"), n && g(n, t, "default"));
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function v() {
	return typeof window < "u";
}
function y(e) {
	return S(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function b(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function x(e) {
	return ((S(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function S(e) {
	return v() ? e instanceof Node || e instanceof b(e).Node : !1;
}
function C(e) {
	return v() ? e instanceof Element || e instanceof b(e).Element : !1;
}
function w(e) {
	return v() ? e instanceof HTMLElement || e instanceof b(e).HTMLElement : !1;
}
function T(e) {
	return !v() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof b(e).ShadowRoot;
}
function E(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = N(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ee(e) {
	return /^(table|td|th)$/.test(y(e));
}
function D(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var te = /transform|translate|scale|rotate|perspective|filter/, ne = /paint|layout|strict|content/, O = (e) => !!e && e !== "none", k;
function A(e) {
	let t = C(e) ? N(e) : e;
	return O(t.transform) || O(t.translate) || O(t.scale) || O(t.rotate) || O(t.perspective) || !j() && (O(t.backdropFilter) || O(t.filter)) || te.test(t.willChange || "") || ne.test(t.contain || "");
}
function re(e) {
	let t = F(e);
	for (; w(t) && !M(t);) {
		if (A(t)) return t;
		if (D(t)) return null;
		t = F(t);
	}
	return null;
}
function j() {
	return k ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), k;
}
function M(e) {
	return /^(html|body|#document)$/.test(y(e));
}
function N(e) {
	return b(e).getComputedStyle(e);
}
function P(e) {
	return C(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function F(e) {
	if (y(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || T(e) && e.host || x(e);
	return T(t) ? t.host : t;
}
function I(e) {
	let t = F(e);
	return M(t) ? (e.ownerDocument || e).body : w(t) && E(t) ? t : I(t);
}
function L(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = I(e), i = r === e.ownerDocument?.body, a = b(r);
	if (i) {
		let e = R(a);
		return t.concat(a, a.visualViewport || [], E(r) ? r : [], e && n ? L(e) : []);
	}
	return t.concat(r, L(r, [], n));
}
function R(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function ie(e) {
	let t = N(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = w(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, c = s(n) !== a || s(r) !== o;
	return c && (n = a, r = o), {
		width: n,
		height: r,
		$: c
	};
}
function z(e) {
	return C(e) ? e : e.contextElement;
}
function B(e) {
	let n = z(e);
	if (!w(n)) return t(1);
	let r = n.getBoundingClientRect(), { width: i, height: a, $: o } = ie(n), c = (o ? s(r.width) : r.width) / i, l = (o ? s(r.height) : r.height) / a;
	return (!c || !Number.isFinite(c)) && (c = 1), (!l || !Number.isFinite(l)) && (l = 1), {
		x: c,
		y: l
	};
}
var ae = /*#__PURE__*/ t(0);
function V(e) {
	let t = b(e);
	return !j() || !t.visualViewport ? ae : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function oe(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === b(e);
}
function H(e, n, i, a) {
	n === void 0 && (n = !1), i === void 0 && (i = !1);
	let o = e.getBoundingClientRect(), s = z(e), c = t(1);
	n && (a ? C(a) && (c = B(a)) : c = B(e));
	let l = oe(s, i, a) ? V(s) : t(0), u = (o.left + l.x) / c.x, d = (o.top + l.y) / c.y, f = o.width / c.x, p = o.height / c.y;
	if (s && a) {
		let e = b(s), t = C(a) ? b(a) : a, n = e, r = R(n);
		for (; r && t !== n;) {
			let e = B(r), t = r.getBoundingClientRect(), i = N(r), a = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x, o = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
			u *= e.x, d *= e.y, f *= e.x, p *= e.y, u += a, d += o, n = b(r), r = R(n);
		}
	}
	return r({
		width: f,
		height: p,
		x: u,
		y: d
	});
}
function U(e, t) {
	let n = P(e).scrollLeft;
	return t ? t.left + n : H(x(e)).left + n;
}
function W(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - U(e, n),
		y: n.top + t.scrollTop
	};
}
function se(e) {
	let { elements: n, rect: r, offsetParent: i, strategy: a } = e, o = a === "fixed", s = x(i), c = n ? D(n.floating) : !1;
	if (i === s || c && o) return r;
	let l = {
		scrollLeft: 0,
		scrollTop: 0
	}, u = t(1), d = t(0), f = w(i);
	if ((f || !o) && ((y(i) !== "body" || E(s)) && (l = P(i)), f)) {
		let e = H(i);
		u = B(i), d.x = e.x + i.clientLeft, d.y = e.y + i.clientTop;
	}
	let p = s && !f && !o ? W(s, l) : t(0);
	return {
		width: r.width * u.x,
		height: r.height * u.y,
		x: r.x * u.x - l.scrollLeft * u.x + d.x + p.x,
		y: r.y * u.y - l.scrollTop * u.y + d.y + p.y
	};
}
function ce(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function le(e) {
	let t = P(e), n = e.ownerDocument.body, r = l(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = l(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + U(e), o = -t.scrollTop;
	return N(n).direction === "rtl" && (a += l(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var ue = 25;
function de(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = b(e), a = x(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !j() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (U(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= ue && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function fe(e, t) {
	let n = H(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = B(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function G(e, t, n) {
	let i;
	if (t === "viewport" || t === "layoutViewport") i = de(e, n, t);
	else if (t === "document") i = le(x(e));
	else if (C(t)) i = fe(t, n);
	else {
		let n = V(e);
		i = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return r(i);
}
function pe(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = L(e, [], !1).filter((e) => C(e) && y(e) !== "body"), i = null, a = N(e).position === "fixed", o = a ? F(e) : e;
	for (; C(o) && !M(o);) {
		let e = N(o), t = A(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = F(o);
	}
	return t.set(e, r), r;
}
function me(e) {
	let { element: t, boundary: r, rootBoundary: i, strategy: a } = e, o = [...r === "clippingAncestors" ? D(t) ? [] : pe(t, this._c) : [].concat(r), i], s = G(t, o[0], a), c = s.top, u = s.right, d = s.bottom, f = s.left;
	for (let e = 1; e < o.length; e++) {
		let r = G(t, o[e], a);
		c = l(r.top, c), u = n(r.right, u), d = n(r.bottom, d), f = l(r.left, f);
	}
	return {
		width: u - f,
		height: d - c,
		x: f,
		y: c
	};
}
function he(e) {
	let { width: t, height: n } = ie(e);
	return {
		width: t,
		height: n
	};
}
function ge(e, n, r) {
	let i = w(n), a = x(n), o = r === "fixed", s = H(e, !0, o, n), c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = t(0);
	if ((i || !o) && ((y(n) !== "body" || E(a)) && (c = P(n)), i)) {
		let e = H(n, !0, o, n);
		l.x = e.x + n.clientLeft, l.y = e.y + n.clientTop;
	}
	!i && a && (l.x = U(a));
	let u = a && !i && !o ? W(a, c) : t(0);
	return {
		x: s.left + c.scrollLeft - l.x - u.x,
		y: s.top + c.scrollTop - l.y - u.y,
		width: s.width,
		height: s.height
	};
}
function K(e) {
	return N(e).position === "static";
}
function q(e, t) {
	if (!w(e) || N(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return x(e) === n && (n = n.ownerDocument.body), n;
}
function J(e, t) {
	let n = b(e);
	if (D(e)) return n;
	if (!w(e)) {
		let t = F(e);
		for (; t && !M(t);) {
			if (C(t) && !K(t)) return t;
			t = F(t);
		}
		return n;
	}
	let r = q(e, t);
	for (; r && ee(r) && K(r);) r = q(r, t);
	return r && M(r) && K(r) && !A(r) ? n : r || re(e) || n;
}
var _e = async function(e) {
	let t = this.getOffsetParent || J, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: ge(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function ve(e) {
	return N(e).direction === "rtl";
}
var ye = {
	convertOffsetParentRelativeRectToViewportRelativeRect: se,
	getDocumentElement: x,
	getClippingRect: me,
	getOffsetParent: J,
	getElementRects: _e,
	getClientRects: ce,
	getDimensions: he,
	getScale: B,
	isElement: C,
	isRTL: ve
};
function Y(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function be(e, t, r) {
	let i = null, o, s = x(e);
	function c() {
		var e;
		clearTimeout(o), (e = i) == null || e.disconnect(), i = null;
	}
	function u(r, d) {
		r === void 0 && (r = !1), d === void 0 && (d = 1), c();
		let f = e.getBoundingClientRect(), { left: p, top: m, width: h, height: g } = f;
		if (r || t(), !h || !g) return;
		let _ = a(m), v = a(s.clientWidth - (p + h)), y = a(s.clientHeight - (m + g)), b = a(p), x = {
			rootMargin: -_ + "px " + -v + "px " + -y + "px " + -b + "px",
			threshold: l(0, n(1, d)) || 1
		}, S = !0;
		function C(t) {
			let n = t[0].intersectionRatio;
			if (!Y(f, e.getBoundingClientRect())) return u();
			if (n !== d) {
				if (!S) return u();
				n ? u(!1, n) : o = setTimeout(() => {
					u(!1, 1e-7);
				}, 1e3);
			}
			S = !1;
		}
		try {
			i = new IntersectionObserver(C, {
				...x,
				root: s.ownerDocument
			});
		} catch {
			i = new IntersectionObserver(C, x);
		}
		i.observe(e);
	}
	let d = b(e), f = () => u(r);
	return d.addEventListener("resize", f), u(!0), () => {
		d.removeEventListener("resize", f), c();
	};
}
function xe(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = z(e), u = i || a ? [...l ? L(l) : [], ...t ? L(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? be(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? H(e) : null;
	c && g();
	function g() {
		let t = H(e);
		h && !Y(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Se = e, Ce = o, we = i, Te = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...ye,
		...i.platform,
		_c: r
	};
	return c(e, t, {
		...i,
		platform: a
	});
}, X = /* @__PURE__ */ h({
	Vue: () => u,
	Vue2: () => void 0,
	del: () => ke,
	install: () => De,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => Oe
});
import * as Ee from "vue";
_(X, Ee);
function De() {}
function Oe(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function ke(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
//#endregion
//#region node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function Ae(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function Z(e) {
	if (Ae(e)) {
		let t = e.$el;
		return S(t) && y(t) === "#comment" ? null : t;
	}
	return e;
}
function Q(e) {
	return typeof e == "function" ? e() : (0, X.unref)(e);
}
function je(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $(e, t) {
	let n = je(e);
	return Math.round(t * n) / n;
}
function Me(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = (0, X.computed)(() => Q(n.open) ?? !0), a = (0, X.computed)(() => Q(n.middleware)), o = (0, X.computed)(() => Q(n.placement) ?? "bottom"), s = (0, X.computed)(() => Q(n.strategy) ?? "absolute"), c = (0, X.computed)(() => Q(n.transform) ?? !0), l = (0, X.computed)(() => Z(e.value)), u = (0, X.computed)(() => Z(t.value)), d = (0, X.ref)(0), f = (0, X.ref)(0), p = (0, X.ref)(s.value), m = (0, X.ref)(o.value), h = (0, X.shallowRef)({}), g = (0, X.ref)(!1), _ = (0, X.computed)(() => {
		let e = {
			position: p.value,
			left: "0",
			top: "0"
		};
		if (!u.value) return e;
		let t = $(u.value, d.value), n = $(u.value, f.value);
		return c.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...je(u.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: p.value,
			left: t + "px",
			top: n + "px"
		};
	}), v;
	function y() {
		if (l.value == null || u.value == null) return;
		let e = i.value;
		Te(l.value, u.value, {
			middleware: a.value,
			placement: o.value,
			strategy: s.value
		}).then((t) => {
			d.value = t.x, f.value = t.y, p.value = t.strategy, m.value = t.placement, h.value = t.middlewareData, g.value = e !== !1;
		});
	}
	function b() {
		typeof v == "function" && (v(), v = void 0);
	}
	function x() {
		if (b(), r === void 0) {
			y();
			return;
		}
		if (l.value != null && u.value != null) {
			v = r(l.value, u.value, y);
			return;
		}
	}
	function S() {
		i.value || (g.value = !1);
	}
	return (0, X.watch)([
		a,
		o,
		s,
		i
	], y, { flush: "sync" }), (0, X.watch)([l, u], x, { flush: "sync" }), (0, X.watch)(i, S, { flush: "sync" }), (0, X.getCurrentScope)() && (0, X.onScopeDispose)(b), {
		x: (0, X.shallowReadonly)(d),
		y: (0, X.shallowReadonly)(f),
		strategy: (0, X.shallowReadonly)(p),
		placement: (0, X.shallowReadonly)(m),
		middlewareData: (0, X.shallowReadonly)(h),
		isPositioned: (0, X.shallowReadonly)(g),
		floatingStyles: _,
		update: y
	};
}
//#endregion
export { Ce as a, Se as i, xe as n, h as o, we as r, Me as t };
